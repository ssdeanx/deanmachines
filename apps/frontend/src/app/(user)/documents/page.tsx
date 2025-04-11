import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documents - DeanMachines",
  description: "View and manage your documents",
}

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">
          Access and manage your documents and files.
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
        <p className="text-muted-foreground text-center">No documents available.</p>
      </div>
    </div>
  )
}
