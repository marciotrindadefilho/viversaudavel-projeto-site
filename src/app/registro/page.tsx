import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Lock, Phone, Calendar, UserPlus } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/dna4.jpg" alt="DNA Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-green-600/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="backdrop-blur-sm bg-white/95 shadow-2xl border-0">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <UserPlus className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Junte-se à nossa comunidade!
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Crie sua conta e tenha acesso a conteúdos exclusivos de saúde
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">
                        Nome
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Seu nome"
                          className="pl-10 h-12 border-2 focus:border-purple-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">
                        Sobrenome
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Seu sobrenome"
                          className="pl-10 h-12 border-2 focus:border-purple-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      E-mail
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="pl-10 h-12 border-2 focus:border-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Telefone
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          className="pl-10 h-12 border-2 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="birthDate" className="text-gray-700 font-medium">
                        Data de Nascimento
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input id="birthDate" type="date" className="pl-10 h-12 border-2 focus:border-purple-500" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profession" className="text-gray-700 font-medium">
                      Área de Interesse
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-2 focus:border-purple-500">
                        <SelectValue placeholder="Selecione sua área de interesse" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="patient">Paciente/Cuidador</SelectItem>
                        <SelectItem value="physiotherapist">Fisioterapeuta</SelectItem>
                        <SelectItem value="doctor">Médico</SelectItem>
                        <SelectItem value="nurse">Enfermeiro</SelectItem>
                        <SelectItem value="student">Estudante da Saúde</SelectItem>
                        <SelectItem value="other">Outro Profissional da Saúde</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-700 font-medium">
                        Senha
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 h-12 border-2 focus:border-purple-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                        Confirmar Senha
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 h-12 border-2 focus:border-purple-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-start space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 mt-1" required />
                      <span className="text-sm text-gray-600">
                        Aceito os{" "}
                        <Link href="/termos" className="text-purple-600 hover:text-purple-700">
                          Termos de Uso
                        </Link>{" "}
                        e{" "}
                        <Link href="/privacidade" className="text-purple-600 hover:text-purple-700">
                          Política de Privacidade
                        </Link>
                      </span>
                    </label>

                    <label className="flex items-start space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 mt-1" />
                      <span className="text-sm text-gray-600">
                        Desejo receber newsletters com dicas de saúde e novidades
                      </span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Criar Conta
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-gray-600">
                    Já tem uma conta?{" "}
                    <Link href="/entrar" className="text-purple-600 hover:text-purple-700 font-semibold">
                      Faça login aqui
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
