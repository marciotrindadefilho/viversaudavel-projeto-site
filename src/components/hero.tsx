import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/dna.jpg" alt="DNA Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Social Media - Left Side */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-4">
          <a href="#" className="hover:scale-110 transition-transform">
            <Image src="/social1.jpg" alt="Redes Sociais" width={40} height={200} className="rounded-lg" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl"
          style={{
            textShadow: "0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
          }}
        >
          Viver Saudável
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Promovendo saúde, autonomia e qualidade de vida para pessoas com mais de 50 anos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)",
              boxShadow: "0 4px 15px rgba(5, 150, 105, 0.4)",
            }}
          >
            Explorar E-books
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)",
              boxShadow: "0 4px 15px rgba(5, 150, 105, 0.4)",
            }}
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  )
}
