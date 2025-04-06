"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Package, FileText, Tag, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem("isAuthenticated")
    setIsAuthenticated(auth === "true")
    setIsLoading(false)

    // If not authenticated and not on login page, redirect to login
    if (auth !== "true" && pathname !== "/admin/login") {
      router.push("/admin/login")
    }
  }, [pathname, router])

  // Show loading state
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Загрузка...</div>
  }

  // If on login page or not authenticated, just render children
  if (pathname === "/admin/login" || !isAuthenticated) {
    return children
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/admin/login")
  }

  const navItems = [
    { href: "/admin", label: "Дашборд", icon: LayoutDashboard },
    { href: "/admin/products", label: "Товары", icon: Package },
    { href: "/admin/blog", label: "Блог", icon: FileText },
    { href: "/admin/categories", label: "Категории", icon: Tag },
  ]

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/40">
        <div className="flex h-16 items-center border-b px-4">
          <h1 className="text-lg font-bold">Админ-панель</h1>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                  isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="mr-3 h-5 w-5" />
            Выйти
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}

