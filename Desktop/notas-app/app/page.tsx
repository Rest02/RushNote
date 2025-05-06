import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Cloud, FileText, Lock, Moon, Zap, ChevronDown, Quote } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Hero Section - Ocupa toda la pantalla inicial */}
        <section className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center relative">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-lg">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">RushNote</h1>
                </div>
              </div>
              
              {/* Espacio reservado para futura imagen */}
              <div className="w-full max-w-xl h-48 md:h-64 lg:h-72 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <div className="text-muted-foreground flex flex-col items-center gap-2">
                  <span className="text-sm">Espacio reservado para imagen</span>
                  <span className="text-xs opacity-70">Área de 16:9 recomendada</span>
                </div>
              </div>
              
              <div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Toma notas rápidamente y organiza tus ideas de manera eficiente.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <Link href="/signup">
                  <Button variant="default" className="h-12 px-8 bg-primary hover:bg-secondary">
                    Registrarse
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="h-12 px-8 text-primary hover:text-primary-foreground hover:bg-primary border-primary hover:border-primary">
                    Iniciar sesión
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Indicador de desplazamiento */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-muted-foreground opacity-70" />
          </div>
        </section>

        {/* Features Section - Aparece al desplazarse */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-12 text-center">
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Por qué elegir RushNote?</h2>
                <p className="text-xl text-muted-foreground">
                  Una app de notas rápida, minimalista y enfocada en lo que importa: tus ideas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {/* Feature 1 */}
                <div className="feature-card flex flex-col items-center p-6 space-y-4 h-full">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Notas de manera clara</h3>
                  <p className="text-muted-foreground text-center">
                    Crea y accede a tus notas al instante con una interfaz limpia sin distracciones.
                  </p>
                </div>
                
                {/* Feature 2 */}
                <div className="feature-card flex flex-col items-center p-6 space-y-4 h-full">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Sincronización en la nube</h3>
                  <p className="text-muted-foreground text-center">
                    Accede a tus notas desde cualquier dispositivo, sin complicaciones.
                  </p>
                </div>
                
                {/* Feature 3 */}
                <div className="feature-card flex flex-col items-center p-6 space-y-4 h-full">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Privacidad y seguridad</h3>
                  <p className="text-muted-foreground text-center">
                    Tus ideas son tuyas: protegidas y privadas. Siempre estaran resguardadas.
                  </p>
                </div>
                
                {/* Feature 4 */}
                <div className="feature-card flex flex-col items-center p-6 space-y-4 h-full">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Moon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Diseño claro y minimalista</h3>
                  <p className="text-muted-foreground text-center">
                    Una experiencia enfocada, sin elementos innecesarios.
                  </p>
                </div>
                
                {/* Feature 5 */}
                <div className="feature-card flex flex-col items-center p-6 space-y-4 h-full">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Rendimiento veloz</h3>
                  <p className="text-muted-foreground text-center">
                    Carga instantánea y navegación fluida con tecnología moderna.
                  </p>
                </div>
                
                {/* CTA Card */}
                <div className="feature-card flex flex-col items-center justify-center p-6 space-y-4 h-full bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-medium text-primary">¿Listo para comenzar?</h3>
                  <p className="text-muted-foreground text-center">
                    Únete a miles de usuarios que ya organizan sus ideas con RushNote.
                  </p>
                  <Link href="/signup" className="mt-2">
                    <Button variant="default" className="bg-primary hover:bg-secondary">
                      Crear cuenta
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-12 text-center">
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Lo que dicen nuestros usuarios</h2>
                <p className="text-xl text-muted-foreground">
                  Descubre cómo RushNote está transformando la manera en que las personas organizan sus ideas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {/* Testimonio 1 */}
                <div className="p-6 bg-card rounded-lg shadow-md border border-border flex flex-col h-full relative">
                  <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
                  <div className="mb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold">ML</span>
                    </div>
                    <h3 className="font-medium text-lg">Martín López</h3>
                    <p className="text-sm text-muted-foreground">Escritor freelance</p>
                  </div>
                  <p className="text-left italic flex-grow">
                    "RushNote ha simplificado totalmente mi proceso creativo. Ahora puedo capturar ideas al instante y organizarlas sin distracciones. Es la herramienta perfecta para escritores."
                  </p>
                  <div className="flex mt-4 text-yellow-500">
                    <span>★★★★★</span>
                  </div>
                </div>
                
                {/* Testimonio 2 */}
                <div className="p-6 bg-card rounded-lg shadow-md border border-border flex flex-col h-full relative">
                  <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
                  <div className="mb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold">CR</span>
                    </div>
                    <h3 className="font-medium text-lg">Carolina Rodríguez</h3>
                    <p className="text-sm text-muted-foreground">Estudiante de medicina</p>
                  </div>
                  <p className="text-left italic flex-grow">
                    "Como estudiante, necesito algo rápido para tomar apuntes. RushNote es perfecta: simple, rápida y me permite acceder a mis notas desde cualquier dispositivo. ¡Ha cambiado mi forma de estudiar!"
                  </p>
                  <div className="flex mt-4 text-yellow-500">
                    <span>★★★★★</span>
                  </div>
                </div>
                
                {/* Testimonio 3 */}
                <div className="p-6 bg-card rounded-lg shadow-md border border-border flex flex-col h-full relative">
                  <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
                  <div className="mb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold">JG</span>
                    </div>
                    <h3 className="font-medium text-lg">Javier García</h3>
                    <p className="text-sm text-muted-foreground">Diseñador UX</p>
                  </div>
                  <p className="text-left italic flex-grow">
                    "Lo que más me gusta de RushNote es su diseño minimalista. No hay botones innecesarios ni funciones que no uso. Solo lo esencial, implementado perfectamente. Es una obra maestra de la simplicidad."
                  </p>
                  <div className="flex mt-4 text-yellow-500">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              
              <Link href="/signup">
                <Button variant="default" className="h-12 px-8 mt-4 bg-primary hover:bg-secondary">
                  Pruébalo tú mismo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
