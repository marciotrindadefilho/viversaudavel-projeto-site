import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Award, Users, Heart } from "lucide-react"

export default function AboutPage() {
  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "10.000+",
      description: "Profissionais Atendidos",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "14 Anos",
      description: "de Experiência",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "200+",
      description: "Conteúdos Publicados",
    },
  ]

  const timeline = [
    {
      year: "2011",
      title: "Início em João Pessoa",
      description:
        "Georgia inicia sua atuação em João Pessoa, focando em fisioterapia domiciliar e reabilitação integrativa.",
    },
    {
      year: "2021",
      title: "Fundação da Viver Saudável",
      description:
        "Criação da plataforma digital para democratizar o conhecimento em saúde baseado em evidências científicas.",
    },
    {
      year: "2023",
      title: "Expansão Digital",
      description: "Lançamento da biblioteca completa de e-books e audiobooks especializados.",
    },
    {
      year: "2025",
      title: "Nova Plataforma",
      description: "Renovação completa da plataforma com foco na experiência do usuário e acessibilidade.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/dna1.jpg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre Nós</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Conheça nossa história, missão e o compromisso com a democratização do conhecimento em saúde
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/geo.png"
                  alt="Georgia Espinola Moura - Fundadora"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-2xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">14+</div>
                  <div className="text-sm">Anos de Experiência</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-green-600">Fundadora</Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Georgia Espinola Moura</h2>
                <p className="text-lg text-green-600 mb-6">Fisioterapeuta Especialista • Educadora em Saúde</p>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Com mais de 14 anos de experiência na área da saúde, Georgia é especialista em Fisioterapia
                  Cardiorrespiratória pelo Instituto do Coração-INCOR/HCFMUSP, com vasta experiência em reabilitação
                  funcional e promoção do bem-estar.
                </p>
                <p>
                  Sua carreira profissional teve início em São Paulo, atuando em instituições de referência nacional
                  como o Hospital Beneficência Portuguesa e o Instituto do Câncer do Estado de São Paulo (ICESP/USP),
                  onde desenvolveu uma sólida base clínica em cuidados de alta complexidade e humanização da
                  assistência.
                </p>
                <p>
                  Desde 2011, atua em João Pessoa – PB, em âmbito hospitalar e também com foco em fisioterapia
                  domiciliar e reabilitação integrativa, especialmente voltada à população adulta e idosa.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>João Pessoa, PB</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>(83) 9 9910-5011</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Números</h2>
            <p className="text-lg text-gray-600">O impacto da nossa missão em números</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{achievement.icon}</div>
                  <div className="text-4xl font-bold text-gray-800">{achievement.title}</div>
                  <div className="text-gray-600">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl text-green-600 mb-4">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Promover a saúde, autonomia e qualidade de vida de pessoas com mais de 50 anos, por meio da produção e
                  divulgação de conteúdos científicos, acessíveis e atualizados em fisioterapia em geral e geriátrica.
                  Capacitar cuidadores, profissionais da saúde e o próprio idoso com conhecimento prático baseado em
                  evidências.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl text-blue-600 mb-4">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Ser referência nacional na democratização do conhecimento em saúde para a população 50+, contribuindo
                  para um envelhecimento ativo, saudável e digno. Ampliar o alcance da educação em saúde, incentivando a
                  prevenção e o autocuidado em todas as fases da vida.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossa Jornada</h2>
            <p className="text-lg text-gray-600">A evolução da Viver Saudável ao longo dos anos</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Vamos Conversar?</h2>
            <p className="text-xl mb-8 opacity-90">Tem alguma dúvida ou sugestão? Entre em contato conosco!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contato@viversaudavel.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </a>
              <a
                href="tel:+5583999105011"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
