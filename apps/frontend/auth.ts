import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert, initializeApp, getApps } from "firebase-admin/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { initFirestore } from "@auth/firebase-adapter";
import { auth as firebaseAuth } from "@/lib/firebase/client";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin only if it hasn't been initialized yet
// This prevents errors during hot-reloading in development
let firebaseAdminApp;
if (!getApps().length) {
  firebaseAdminApp = initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
} else {
  firebaseAdminApp = getApps()[0];
}

const firestore = initFirestore(firebaseAdminApp);
const db = getFirestore(firebaseAdminApp);

// Read admin emails from environment variable, split by comma, trim whitespace, and convert to lowercase
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "")
  .split(",")
  .map(email => email.trim().toLowerCase())
  .filter(email => email);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: FirestoreAdapter(firestore),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          typeof credentials?.email !== "string" ||
          typeof credentials?.password !== "string"
        ) {
          console.error("Invalid credentials format");
          return null;
        }

        try {
          const userCredential = await signInWithEmailAndPassword(
            firebaseAuth,
            credentials.email,
            credentials.password
          );

          if (userCredential.user) {
            const userDoc = await db
              .collection("users")
              .doc(userCredential.user.uid)
              .get();

            if (!userDoc.exists) {
              console.warn(`User ${userCredential.user.uid} signed in but not found in Firestore.`);
              return null;
            }

            const userData = userDoc.data();

            return {
              id: userCredential.user.uid,
              email: userCredential.user.email,
              name: userCredential.user.displayName,
              image: userCredential.user.photoURL,
              role: userData?.role || "user",
            };
          }
          return null;
        } catch (error: any) {
          console.error("Firebase Auth Error in authorize callback:", error.code, error.message);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  events: {
    async createUser({ user }) {
      if (!user.id || !user.email) {
        console.error("Cannot create user in Firestore: user ID or email is missing.", user);
        return;
      }
      const role = ADMIN_EMAILS.includes(user.email.toLowerCase())
        ? "admin"
        : "user";

      try {
        await db.collection("users").doc(user.id).set(
          {
            email: user.email,
            name: user.name,
            image: user.image,
            role: role,
            createdAt: new Date(),
            emailVerified: null,
          },
          { merge: true }
        );
        console.log(`User ${user.id} created/updated in Firestore with role: ${role}`);
      } catch (error) {
        console.error("Error setting user role/data in Firestore during createUser event:", error);
      }
    },
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user?.id) {
        token.uid = user.id;

        if (isNewUser) {
          const role = ADMIN_EMAILS.includes(user.email?.toLowerCase() ?? "")
            ? "admin"
            : "user";
          token.role = role;
        } else if (!token.role) {
          try {
            const userDoc = await db.collection("users").doc(user.id).get();
            const userData = userDoc.data();
            token.role = userData?.role || "user";
          } catch (error) {
            console.error("Error fetching user role for JWT callback:", error);
            token.role = "user";
          }
        }
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});
