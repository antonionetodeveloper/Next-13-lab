import GlobalStyle from "@/styles/GlobalStyle"
import { ReactNode } from "react"

import "./tailwind.css"

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="pt-br">
         <head />
         <GlobalStyle />
         <body>{children}</body>
      </html>
   )
}
