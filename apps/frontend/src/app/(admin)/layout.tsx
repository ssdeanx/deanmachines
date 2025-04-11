import { redirect } from "next/navigation"
import { type PropsWithChildren } from "react"
import { auth } from "../../../auth"
import { AdminSidebar } from "@/components/admin/AdminSidebar"
import { AdminHeader } from "@/components/admin/AdminHeader"

export default async function AdminLayout({ children }: PropsWithChildren) {
  const session = await auth()

  // Redirect to login if not authenticated
  if (!session?.user) {
    redirect("/login?callbackUrl=/admin/dashboard")
  }

  // Only allow admin role (can be configured in your auth.ts)
  if (session?.user?.role !== "admin") {
    redirect("/login?callbackUrl=/admin/dashboard")
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader user={session.user} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
