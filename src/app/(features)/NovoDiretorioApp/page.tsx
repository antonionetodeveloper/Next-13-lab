import { Header } from "@/app/components/header"

export const metadata = {
   title: "Novo diretório App",
}

export default function Page() {
   return (
      <>
         <Header currentPath="Novo diretório App" />
         <main className="pt-24">
            <section>
               <p>Em breve...</p>
            </section>
         </main>
      </>
   )
}
