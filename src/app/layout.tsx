import type { Metadata } from "next"
import { comicNeue } from "./fonts"
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
      <body cz-shortcut-listen="true" className={comicNeue.className}>
        {children}
      </body>
    </html>
  )
}
