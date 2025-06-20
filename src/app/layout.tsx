import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Viver Saudável - Saúde e Bem-estar para +50",
  description:
    "Promovendo saúde, autonomia e qualidade de vida para pessoas com mais de 50 anos através de conteúdos científicos e acessíveis.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
<head>
  ...
  {(process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") && (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script
      data-recording-token="FPSxKXIN0C48XMRsDBudGZ9eWl9jeSNdKlZeyRk9"
      data-is-production-environment="false"
      src="https://snippet.meticulous.ai/v1/meticulous.js"
    />
  )}
  ...
</head>
