"use client"

import { useState, useEffect } from "react" // ***** MUDANÇA 1: Importamos o useEffect *****
import Link from "next/link"
import { useRouter } from "next/navigation" // ***** MUDANÇA 2: Importamos o redirecionador *****
import { createClient } from "@/lib/supabaseClient" // ***** MUDANÇA 3: Importamos nosso conector *****
import { Menu, Search, ShoppingCart, User, UserPlus, ChevronDown, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"

// ***** MUDANÇA 4: Renomeamos o tipo do usuário para evitar conflitos *****
type UserProfile = {
  id: string;
  email?: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<UserProfile | null>(null) // ***** MUDANÇA 5: "Caixa de memória" para o usuário *****
  
  const supabase = createClient()
  const router = useRouter()

  // ***** MUDANÇA 6: O "Guarda de Trânsito" que verifica o status do login *****
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
  }, [supabase.auth]);

  // ***** MUDANÇA 7: A função de Logout *****
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/'); // Leva para a página inicial após o logout
  }

  const menuItems = [
    // ... (Seus menuItems continuam iguais, não precisa mexer) ...
  ]

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

          {/* Desktop Navigation com Dropdowns */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* ... (Sua navegação de menus continua igual) ... */}
            {/* ... (Sua busca continua igual) ... */}
            
            {/* ***** MUDANÇA 8: Lógica condicional para Login/Logout no Desktop ***** */}
            <nav className="flex items-center space-x-4">
              <Link href="/contato" className="text-gray-700 hover:text-green-600">
                Contato
              </Link>
              <Link href="/carrinho" className="text-gray-700 hover:text-green-600">
                <ShoppingCart className="w-5 h-5" />
              </Link>
              
              {user ? (
                // Se o usuário ESTÁ logado
                <>
                  <span className="text-sm text-gray-600">Olá, {user.email}</span>
                  <Button onClick={handleSignOut} variant="ghost" size="icon" title="Sair">
                    <LogOut className="w-5 h-5 text-red-500" />
                  </Button>
                </>
              ) : (
                // Se o usuário NÃO ESTÁ logado
                <>
                  <Link href="/registro" className="text-gray-700 hover:text-green-600" title="Registro">
                    <UserPlus className="w-5 h-5" />
                  </Link>
                  <Link href="/entrar" className="text-gray-700 hover:text-green-600" title="Entrar">
                    <User className="w-5 h-5" />
                  </Link>
                </>
              )}
            </nav>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {/* ... (Sua busca e menus mobile continuam iguais) ... */}
                
                <Link href="/contato" className="p-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>
                  Contato
                </Link>
                <Link
                  href="/carrinho"
                  className="p-2 hover:bg-gray-100 rounded flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Carrinho
                </Link>

                {/* ***** MUDANÇA 9: Lógica condicional para Login/Logout no Mobile ***** */}
                {user ? (
                  // Se o usuário ESTÁ logado
                  <Button onClick={handleSignOut} className="w-full justify-start p-2 hover:bg-gray-100 flex items-center" variant="ghost">
                    <LogOut className="w-4 h-4 mr-2 text-red-500" />
                    Sair
                  </Button>
                ) : (
                  // Se o usuário NÃO ESTÁ logado
                  <>
                    <Link
                      href="/registro"
                      className="p-2 hover:bg-gray-100 rounded flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Registro
                    </Link>
                    <Link
                      href="/entrar"
                      className="p-2 hover:bg-gray-100 rounded flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Entrar
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>