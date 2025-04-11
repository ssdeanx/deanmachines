'use client';

import { User } from "next-auth";
import { UserNav } from "./UserNav";
import { ThemeToggle } from "@/components/common/ThemeToggle";

interface UserHeaderProps {
  user: User
}

export function UserHeader({ user }: UserHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserNav user={user} />
        </div>
      </div>
    </header>
  )
}
