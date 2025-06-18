import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Social */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link href="/" className="hover:scale-110 transition-transform">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2-39nAMWcNXe6aKGT0dbysisuSPAG6XZ.png"
                  alt="Viver Saudável"
                  width={120}
                  height={60}
                  className="rounded"
                />
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:scale-110 transition-transform">
                <Image src="/social.jpg" alt="Redes Sociais" width={200} height={40} className="rounded" />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nos" className="hover:text-green-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/ebooks" className="hover:text-green-400 transition-colors">
                  Nossos Ebooks
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/depoimentos" className="hover:text-green-400 transition-colors">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/exercicios" className="hover:text-green-400 transition-colors">
                  Exercícios
                </Link>
              </li>
              <li>
                <Link href="/nutricao" className="hover:text-green-400 transition-colors">
                  Nutrição
                </Link>
              </li>
              <li>
                <Link href="/saude-mental" className="hover:text-green-400 transition-colors">
                  Saúde Mental
                </Link>
              </li>
              <li>
                <Link href="/prevencao" className="hover:text-green-400 transition-colors">
                  Prevenção
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato e Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contato</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <p>João Pessoa, PB</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <p>(83) 9 9910-5011</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-400" />
                <p>contato@viversaudavel.com</p>
              </div>
            </div>

            <h4 className="font-semibold mb-2 text-green-400">Newsletter</h4>
            <p className="text-sm mb-3">Receba dicas de saúde semanalmente</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Seu e-mail" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-green-600 hover:bg-green-700">OK</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Viver Saudável. Todos os direitos reservados. Fundada por Georgia Espinola Moura.
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                Acesso Rápido
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
