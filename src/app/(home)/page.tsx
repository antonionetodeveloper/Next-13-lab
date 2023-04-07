import { Header } from "../components/header"
import Banner from "./sections/banner"
import Preview from "./sections/preview"

export default function Home() {
   return (
      <>
         <Header currentPath="none" />

         <main className="flex flex-col m-auto justify-center max-w-8xl min-h-screen">
            <Banner />
            <Preview />
         </main>
      </>
   )
}
