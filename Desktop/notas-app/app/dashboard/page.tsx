"use client"

import { useState } from "react"
import { AuthGuard } from "@/components/auth-guard"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PlusCircle, ListChecks, FileText, Trash } from "lucide-react"

export default function DashboardPage() {
  const { user, profile, signOut } = useAuth()
  const [notes, setNotes] = useState([
    { id: 1, title: "Nota de ejemplo 1", preview: "Contenido de ejemplo para la primera nota..." },
    { id: 2, title: "Nota de ejemplo 2", preview: "Contenido de ejemplo para la segunda nota..." }
  ])

  return (
    <AuthGuard>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">RushNote</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                {profile?.full_name || user?.email}
              </div>
              <Button variant="outline" size="sm" onClick={() => signOut()}>
                Cerrar sesión
              </Button>
            </div>
          </div>
        </header>
        
        <main className="container flex-1 py-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Mis Notas</h2>
            <Button className="gap-1">
              <PlusCircle className="h-4 w-4" />
              <span>Nueva nota</span>
            </Button>
          </div>
          
          <Separator className="my-6" />
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map(note => (
              <Card key={note.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle>{note.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{note.preview}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-3">
                  <Button variant="outline" size="sm" className="w-full gap-1">
                    <FileText className="h-4 w-4" />
                    <span>Editar</span>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full gap-1 ml-2">
                    <Trash className="h-4 w-4" />
                    <span>Eliminar</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {notes.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <ListChecks className="h-10 w-10 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">No tienes notas</h3>
                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                  Empieza creando una nueva nota
                </p>
                <Button className="gap-1">
                  <PlusCircle className="h-4 w-4" />
                  <span>Nueva nota</span>
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </AuthGuard>
  )
} 