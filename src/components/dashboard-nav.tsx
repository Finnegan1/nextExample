"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { LogOut, LayoutDashboard, Settings, CheckSquare } from "lucide-react"

export function DashboardNav() {
  const router = useRouter()

  const handleSignOut = async () => {
    await authClient.signOut()
    router.push("/sign-in")
  }

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/tasks">
            <Button variant="ghost" size="sm">
              <CheckSquare className="mr-2 h-4 w-4" />
              Tasks
            </Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button variant="ghost" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </div>
        <div className="ml-auto">
          <Button variant="ghost" size="sm" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        </div>
      </div>
    </nav>
  )
} 