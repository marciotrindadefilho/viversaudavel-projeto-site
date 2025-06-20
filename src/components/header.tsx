"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingCart, User, UserPlus, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
      submenu: ["Nossa Missão", "Blog", "Depoimentos"],
    },
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
            {/* Navigation Menus */}
            <nav className="flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="text-gray-700 hover:text-green-600 flex items-center space-x-2">
                    {item.icon && (
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    )}
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={`/${item.title.toLowerCase()}/${subitem.toLowerCase().replace(" ", "-")}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50"
                        >
                          {subitem}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* Search */}
            <div className="relative">
              <Input type="text" placeholder="Buscar..." className="pl-10 w-64" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-4">
              <Link href="/contato" className="text-gray-700 hover:text-green-600">
                Contato
              </Link>
              <Link href="/carrinho" className="text-gray-700 hover:text-green-600">
                <ShoppingCart className="w-5 h-5" />
              </Link>
              <Link href="/registro" className="text-gray-700 hover:text-green-600">
                <UserPlus className="w-5 h-5" />
              </Link>
              <Link href="/entrar" className="text-gray-700 hover:text-green-600">
                <User className="w-5 h-5" />
              </Link>
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
                {/* Mobile Search */}
                <div className="relative">
                  <Input type="text" placeholder="Buscar..." className="pl-10" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>

                {/* Mobile Navigation */}
                {menuItems.map((item, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-100 rounded">
                      <div className="flex items-center space-x-2">
                        {item.icon && (
                          <Image
                            src={item.icon || "/placeholder.svg"}
                            alt={item.title}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                        )}
                        <span>{item.title}</span>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-2">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={`/${item.title.toLowerCase()}/${subitem.toLowerCase().replace(" ", "-")}`}
                          className="block p-2 text-sm text-gray-600 hover:text-green-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}

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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
