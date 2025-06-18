import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Download, Star, Clock, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EbooksLibraryPage() {
  const categories = [
    {
      name: "Ortopedia",
      description: "Lesões musculares, ligamentares, articulares, fraturas, pós-operatório",
      color: "bg-red-500",
      count: 24,
    },
    {
      name: "Neurologia",
      description: "AVC, Parkinson, esclerose múltipla, lesões medulares, paralisia cerebral",
      color: "bg-blue-500",
      count: 18,
    },
    {
      name: "Respiratória",
      description: "DPOC, asma, fibrose cística, pós-operatório de cirurgias torácicas",
      color: "bg-green-500",
      count: 15,
    },
    {
      name: "Reabilitação Esportiva",
      description: "Lesões esportivas, prevenção de lesões, retorno ao esporte",
      color: "bg-orange-500",
      count: 12,
    },
    {
      name: "Cardiovascular",
      description: "Reabilitação cardíaca, pós-infarto, insuficiência cardíaca",
      color: "bg-purple-500",
      count: 16,
    },
    {
      name: "Reumatologia",
      description: "Artrite, artrose, fibromialgia",
      color: "bg-pink-500",
      count: 10,
    },
    {
      name: "Geriatria",
      description: "Reabilitação em idosos, sarcopenia, equilíbrio, quedas",
      color: "bg-indigo-500",
      count: 20,
    },
  ]

  const therapeuticResources = [
    "Eletroterapia",
    "Termoterapia",
    "Cinesioterapia",
    "Hidroterapia",
    "Terapia Manual",
    "Reabilitação Postural",
  ]

  const featuredEbooks = [
    {
      title: "Manual Completo de Ortopedia",
      author: "Dr. João Silva",
      category: "Ortopedia",
      rating: 4.8,
      downloads: 1250,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cor1-OegWOEIsmHdF6dASgvE3gjbYyQNs3D.png",
      premium: true,
    },
    {
      title: "Neuroreabilitação Avançada",
      author: "Dra. Maria Santos",
      category: "Neurologia",
      rating: 4.9,
      downloads: 980,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nutri3-UH9YKFWIEtaIEWjdi8cBdeLiLKlevw.png",
      premium: true,
    },
    {
      title: "Fisioterapia Respiratória Prática",
      author: "Prof. Carlos Lima",
      category: "Respiratória",
      rating: 4.7,
      downloads: 750,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fisio4-pYlg0M963NhPZs88CgKtOmhSvQbDmy.png",
      premium: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/dna1.jpg" alt="DNA Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Uma Biblioteca Digital Para Você</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Planos feitos sob medida para o seu bolso, pensados para transformar seu dia a dia! Acreditamos que cuidar
              de você não precisa custar caro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Conheça nossos planos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Explorar Biblioteca
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input placeholder="Pesquisar por título, autor ou palavra-chave..." className="pl-10 h-12" />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name.toLowerCase()}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Ano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Áreas de Atuação</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore nossa biblioteca organizada por especialidades médicas e fisioterapêuticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">{category.count} e-books</Badge>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{category.name}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Therapeutic Resources */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recursos Terapêuticos</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {therapeuticResources.map((resource, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                  {resource}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured E-books */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">E-books em Destaque</h2>
            <p className="text-lg text-gray-600">Os mais baixados e bem avaliados da nossa biblioteca</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEbooks.map((ebook, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src={ebook.image || "/placeholder.svg"} alt={ebook.title} fill className="object-cover" />
                  {ebook.premium && <Badge className="absolute top-4 right-4 bg-yellow-500">Premium</Badge>}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">
                    {ebook.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{ebook.title}</h3>
                  <p className="text-gray-600 mb-4">por {ebook.author}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{ebook.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">{ebook.downloads}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {ebook.premium ? "Acessar (Premium)" : "Download Gratuito"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Recursos Adicionais</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Glossário</h3>
              <p className="text-gray-600 text-sm">Definições de termos técnicos</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fórum</h3>
              <p className="text-gray-600 text-sm">Discussões entre profissionais</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Search className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Artigos Científicos</h3>
              <p className="text-gray-600 text-sm">Links para publicações relevantes</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">FAQ</h3>
              <p className="text-gray-600 text-sm">Perguntas frequentes</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
