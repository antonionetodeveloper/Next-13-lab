import { Header } from "@/app/components/header"

export const metadata = {
   title: "Fetch De Dados",
}

export default function Page() {
   return (
      <>
         <Header currentPath="Fetch De Dados" />
         <main className="pt-24">
            <section>
               <p>Fetch De Dados</p>
            </section>
         </main>
      </>
   )
}
