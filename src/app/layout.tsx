import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Eureka",
  description: "Sistema de gestão escolar",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
