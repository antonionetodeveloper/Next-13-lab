import { Header } from "@/app/components/header"

export const metadata = {
   title: "Rotas dinâmicas",
}

export default function Page() {
   return (
      <>
         <Header currentPath="Rotas dinâmicas" />
         <main>
            <p>Dinamic routes</p>
         </main>
      </>
   )
}
