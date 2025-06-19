"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabaseClient"
import { Menu, Search, ShoppingCart, User, UserPlus, ChevronDown, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"

// Definindo um tipo para o usuário para clareza
type UserProfile = {
  id: string;
  email?: string;
}

export default function Header() {
  // ---- TUDO DENTRO DA FUNÇÃO HEADER ----

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const supabase = createClient();
  const router = useRouter();

  // O "Guarda de Trânsito" que verifica o status do login
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []); // A dependência pode ser um array vazio aqui

  // A função de Logout
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/'); // Leva para a página inicial após o logout
  };

  const menuItems = [
    {
      title: "Audiobooks",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon1.jpg-ItxSUhwPpg6GzQ4l2WWqfJCGPCuA2u.jpeg",
      submenu: ["Biblioteca", "Exercícios", "Nutrição", "Saúde Mental", "Prevenção"],
    },
    {
      title: "E-books",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.jpg-PAJokvIU3PAz85esWhlzvtodO71OPa.jpeg",
      submenu: ["Biblioteca", "Exercícios", "Nutrição", "Saúde Mental", "Prevenção"],
    },
    {
      title: "Mais",
      submenu: ["Sobre Nós", "Blog", "Depoimentos"],
    },
  ];

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-4enRHQ10Jk5irL23feZ2HwgutqEozx.png"
              alt="Viver Saudável"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="text-gray-700 hover:text-green-600 flex items-center space-x-2">
                    {item.icon && <Image src={item.icon} alt={item.title} width={20} height={20} className="w-5 h-5" />}
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subitem, subindex) => (
                        <Link key={subindex} href={`/${item.title.toLowerCase()}/${subitem.toLowerCase().replace(/ /g, "-")}`} className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50">
                          {subitem}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>
            
            <div className="relative">
              <Input type="text" placeholder="Buscar..." className="pl-10 w-64" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            <nav className="flex items-center space-x-4">
              <Link href="/contato" className="text-gray-700 hover:text-green-600">Contato</Link>
              <Link href="/carrinho" className="text-gray-700 hover:text-green-600"><ShoppingCart className="w-5 h-5" /></Link>
              
              {user ? (
                <>
                  <span className="text-sm text-gray-600">Olá, {user.email?.split('@')[0]}</span>
                  <Button onClick={handleSignOut} variant="ghost" size="icon" title="Sair"><LogOut className="w-5 h-5 text-red-500" /></Button>
                </>
              ) : (
                <>
                  <Link href="/registro" className="text-gray-700 hover:text-green-600" title="Registro"><UserPlus className="w-5 h-5" /></Link>
                  <Link href="/entrar" className="text-gray-700 hover:text-green-600" title="Entrar"><User className="w-5 h-5" /></Link>
                </>
              )}
            </nav>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* ... Código do menu mobile aqui, vou simplificar por enquanto ... */}
                  <Link href="/contato" className="p-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>Contato</Link>
                  <Link href="/carrinho" className="p-2 hover:bg-gray-100 rounded flex items-center" onClick={() => setIsOpen(false)}><ShoppingCart className="w-4 h-4 mr-2" />Carrinho</Link>
                  
                  {user ? (
                    <Button onClick={handleSignOut} className="w-full justify-start p-2 hover:bg-gray-100 flex items-center" variant="ghost">
                      <LogOut className="w-4 h-4 mr-2 text-red-500" /> Sair
                    </Button>
                  ) : (
                    <>
                      <Link href="/registro" className="p-2 hover:bg-gray-100 rounded flex items-center" onClick={() => setIsOpen(false)}><UserPlus className="w-4 h-4 mr-2" />Registro</Link>
                      <Link href="/entrar" className="p-2 hover:bg-gray-100 rounded flex items-center" onClick={() => setIsOpen(false)}><User className="w-4 h-4 mr-2" />Entrar</Link>
                    </>
                  )}
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}