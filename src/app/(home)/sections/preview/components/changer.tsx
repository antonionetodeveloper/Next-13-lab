import { Suspense, useEffect, useState } from "react"

import Loading from "@/app/loading"

import NovoDiretorioApp from "./features/novoDiretorioApp"
import FetchDeDados from "./features/fetchDeDados"
import RotasDinamicas from "./features/rotasDinamicas"

interface ChangerProps {
   currentFeature: string
}

const Changer = ({ currentFeature }: ChangerProps) => {
   const [feature, setFeature] = useState<JSX.Element | Promise<JSX.Element>>(
      <NovoDiretorioApp />
   )

   useEffect(() => {
      console.log("currentFeature: ", currentFeature)

      switch (currentFeature) {
         case "Novo Diretório App":
            setFeature(<NovoDiretorioApp />)
            break
         case "Fetch de Dados":
            setFeature(<FetchDeDados />)
            break
         case "Rotas Dinâmicas":
            setFeature(<RotasDinamicas />)
            break
      }
   }, [currentFeature])

   return (
      <div className="w-full p-3">
         <Suspense fallback={<Loading />}>
            <>{feature}</>
         </Suspense>
      </div>
   )
}

export default Changer
