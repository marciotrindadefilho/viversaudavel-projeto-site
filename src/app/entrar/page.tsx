'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa o "redirecionador" de páginas
import { createClient } from '@/lib/supabaseClient';
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Eye, Mail, Lock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LoginPage() {
  // ***** PREPARAÇÃO (igual ao cadastro) *****
  const router = useRouter(); // Ativa o redirecionador
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ***** LÓGICA DE LOGIN *****
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert('Erro no login: ' + error.message);
    } else {
      alert('Login realizado com sucesso! Redirecionando...');
      router.push('/'); // Redireciona o usuário para a página inicial
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/dna.jpg" alt="DNA Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-600/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="backdrop-blur-sm bg-white/95 shadow-2xl border-0">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Bem-vindo de volta!
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Acesse sua conta e continue sua jornada de saúde
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* ***** CONEXÃO 1: Ligar o formulário à nossa função handleSignIn ***** */}
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      E-mail
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      {/* ***** CONEXÃO 2: Ligar este campo à "caixa de memória" do e-mail ***** */}
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="pl-10 h-12 border-2 focus:border-green-500"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 font-medium">
                      Senha
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      {/* ***** CONEXÃO 3: Ligar