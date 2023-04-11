"use client"

import { useState } from "react"
import Changer from "./components/changer"
import NavBar from "./components/navBar"

const Preview = () => {
   const [feature, setFeature] = useState<string>("Novo Diretório App")

   return (
      <section
         id="section_preview"
         className="h-screen flex justify-center items-center"
      >
         <div
            className="w-5/6 h-screen p-6 flex justify-center bg-gray-900 border border-white rounded"
            style={{ height: "calc(100vh - 26vh)" }}
         >
            <NavBar currentFeature={feature} setCurrentFeature={setFeature} />
            <Changer currentFeature={feature} />
         </div>
      </section>
   )
}

export default Preview
