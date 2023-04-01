import "@/style/globals.css"
import { Inter } from "@next/font/google"

export const metadata = {
   title: {
      default: "Next 13 lab",
      template: "%s",
   },
   description: "Testando as funcionalidades do next13!",
}

const inter = Inter({
   subsets: ["latin"],
})

interface LayoutProps {
   children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
   return (
      <html lang="pt-BR">
         <body className={inter.className}>{children}</body>
      </html>
   )
}
