import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chat - DeanMachines",
  description: "Chat with AI assistants",
}

export default function ChatPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Chat</h1>
        <p className="text-muted-foreground">
          Interact with AI assistants and get real-time help.
        </p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
        <p className="text-muted-foreground text-center">Chat feature coming soon.</p>
      </div>
    </div>
  )
}
