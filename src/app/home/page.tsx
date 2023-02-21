import Container from "./style"
import CountButton from "./components/CountButton"
import { Suspense } from "react"

export default async function Home() {
   const data = await fetch(
      "https://api.github.com/users/antonionetodeveloper",
      {
         next: {
            revalidate: 30, // 30 seconds
         },
         // cache: "force-cache",  SSG -> Default
         // cache: "no-store" SSR
      }
   )
   const user = await data.json()

   return (
      <>
         <Container className="flex direction-column items-center justify-center bg-red-900 p-5">
            <h1 className="text-4xl font-extrabold  text-white">
               Olá mundo no home.
            </h1>
         </Container>

         <Suspense fallback={<p>Carregando bio...</p>}>
            <p className="text-center">{JSON.stringify(user.bio)}</p>
         </Suspense>

         <Suspense fallback={<p>Carregando dados...</p>}>
            <TestSuspense />
         </Suspense>

         <CountButton />
      </>
   )
}

const TestSuspense: any = async () => {
   await new Promise((resolve) => setTimeout(resolve, 5000))

   return <p className="text-center mb-3">Dados carregados</p>
}
