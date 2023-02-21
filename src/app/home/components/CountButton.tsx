"use client"

import { useState } from "react"

const CountButton = () => {
   const [count, setCount] = useState(0)

   return (
      <div className="flex items-center justify-center">
         <button
            className="bg-slate-400 p-5 hover:cursor-pointer"
            onClick={() => setCount(count + 1)}
         >
            {count}
         </button>
      </div>
   )
}

export default CountButton
