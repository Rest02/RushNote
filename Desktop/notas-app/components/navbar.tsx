"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">RushNote</span>
        </Link>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card">
            <div className="flex flex-col gap-4 mt-8">
              {isLoggedIn ? (
                <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                  Cerrar sesión
                </Button>
              ) : (
                <>
                  <Link href="/login" className="w-full">
                    <Button variant="default" className="w-full">Iniciar sesión</Button>
                  </Link>
                  <Link href="/signup" className="w-full">
                    <Button variant="outline" className="w-full">Registrarse</Button>
                  </Link>
                </>
              )}
              <div className="flex justify-end pt-4">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <ThemeToggle />
          {isLoggedIn ? (
            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
              Cerrar sesión
            </Button>
          ) : (
            <>
              <Link href="/login">
                <Button variant="default">Iniciar sesión</Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline">Registrarse</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
