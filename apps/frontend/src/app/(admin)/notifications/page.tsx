'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  CheckCircle,
  Clock,
  AlertTriangle,
  Info,
  X
} from "lucide-react"
import { cn } from "@/lib/utils";

// Temporary mock data - replace with real notifications
const notifications = [
  {
    id: "1",
    title: "New User Registration",
    message: "John Doe has registered as a new user",
    type: "info",
    time: "2 minutes ago",
    read: false
  },
  {
    id: "2",
    title: "System Update",
    message: "System maintenance scheduled for tonight at 2 AM UTC",
    type: "warning",
    time: "1 hour ago",
    read: false
  },
  {
    id: "3",
    title: "Backup Completed",
    message: "Daily database backup completed successfully",
    type: "success",
    time: "3 hours ago",
    read: true
  }
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "success":
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    case "error":
      return <X className="h-5 w-5 text-red-500" />
    default:
      return <Info className="h-5 w-5 text-blue-500" />
  }
}

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <div className="flex gap-4">
          <Button variant="outline">Mark all as read</Button>
          <Button variant="outline">Clear all</Button>
        </div>
      </div>

      <div className="grid gap-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className={cn(
            "transition-colors hover:bg-muted/50",
            !notification.read && "border-l-4 border-l-primary"
          )}>
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
              <div className="mt-1">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">
                    {notification.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-normal">
                      {notification.time}
                    </Badge>
                    {!notification.read && (
                      <Badge className="font-normal">
                        New
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-0 mt-1">
                  <p className="text-sm text-muted-foreground">
                    {notification.message}
                  </p>
                </CardContent>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {notifications.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Bell className="h-12 w-12 text-muted-foreground/50" />
            <p className="mt-4 text-lg font-medium text-muted-foreground">
              No notifications
            </p>
            <p className="text-sm text-muted-foreground">
              You&apos;re all caught up!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
