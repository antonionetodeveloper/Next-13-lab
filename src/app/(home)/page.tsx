import { Header } from "../components/header"
import Banner from "./components/sections/banner"

export default function Home() {
   return (
      <>
         <Header currentPath="none" />

         <main className="flex flex-col m-auto justify-center max-w-8xl min-h-screen">
            <Banner />
         </main>
      </>
   )
}
