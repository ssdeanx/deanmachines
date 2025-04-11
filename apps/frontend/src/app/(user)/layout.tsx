import { redirect } from "next/navigation"
import { type PropsWithChildren } from "react"
import { auth } from "../../../auth"
import { UserHeader } from "@/components/user/UserHeader"
import { UserSidebar } from "@/components/user/UserSidebar"

export default async function UserLayout({ children }: PropsWithChildren) {
  const session = await auth()

  // Redirect to login if not authenticated
  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard")
  }

  return (
    <div className="flex min-h-screen">
      <UserSidebar />
      <div className="flex-1">
        <UserHeader user={session.user} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
