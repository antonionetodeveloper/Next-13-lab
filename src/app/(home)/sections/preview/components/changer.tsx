"use client"

import { useEffect, useState } from "react"
import FetchDeDados from "./features/fetchDeDados"
import NovoDiretorioApp from "./features/novoDiretorioApp"
import RotasDinamicas from "./features/rotasDinamicas"

interface ChangerProps {
   currentFeature: string
}

const Changer = ({ currentFeature }: ChangerProps) => {
   const [feature, setFeature] = useState<JSX.Element>(<></>)

   useEffect(() => {
      const handleChanger = () => {
         switch (currentFeature) {
            case "Novo Diretório App":
               return <NovoDiretorioApp />
            case "Fetch de Dados":
               return <FetchDeDados />
            case "Rotas Dinâmicas":
               return <RotasDinamicas />
            default:
               return <NovoDiretorioApp />
         }
      }

      setFeature(handleChanger())
   }, [currentFeature])

   return (
      <div className="overflow-y-scroll w-full p-3">
         <>{feature}</>
      </div>
   )
}

export default Changer
