"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Montar solo después de la primera renderización en el cliente
  // para evitar discrepancias de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  // Renderizar una versión "esqueleto" durante el SSR
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 border-muted-foreground/30"
      >
        <span className="h-4 w-4" />
        <span className="sr-only">Cambiar tema</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-8 w-8 border-muted-foreground/30"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 text-foreground" />
      ) : (
        <Moon className="h-4 w-4 text-foreground" />
      )}
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
} 