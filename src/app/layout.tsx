import "@/style/globals.css"

export const metadata = {
   title: {
      default: "Next 13 lab",
      template: "%s",
   },
   description: "Testando as funcionalidades do next13!",
}

interface LayoutProps {
   children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
   return (
      <html lang="pt-BR">
         <body className="bg-gradient-to-r from-slate-900 to-slate-700">
            {children}
         </body>
      </html>
   )
}
