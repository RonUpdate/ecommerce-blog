import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ShoppingBag, FileText, User } from "lucide-react"

import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Минималистичный магазин",
  description: "Магазин с минималистичным дизайном и блогом",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="border-b">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <Link href="/" className="text-xl font-bold">
                Минимализм
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Главная
                </Link>
                <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
                  Товары
                </Link>
                <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
                  Блог
                </Link>
              </nav>
              <div className="flex items-center space-x-4">
                <Link href="/products">
                  <Button variant="ghost" size="icon">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="sr-only">Товары</span>
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="ghost" size="icon">
                    <FileText className="h-5 w-5" />
                    <span className="sr-only">Блог</span>
                  </Button>
                </Link>
                <Link href="/admin">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Админ</span>
                  </Button>
                </Link>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t py-6">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground">© 2024 Минимализм. Все права защищены.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    О нас
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Контакты
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Политика конфиденциальности
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'