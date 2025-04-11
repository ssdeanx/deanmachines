import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
}

// Initialize Firebase
export const firebase = !getApps().length 
  ? initializeApp(firebaseConfig) 
  : getApp()

export const auth = getAuth(firebase)
