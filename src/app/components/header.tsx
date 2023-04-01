"use client"

import { useRouter } from "next/navigation"

export const Header = ({ currentPath }: { currentPath: string }) => {
   if (currentPath != "none") {
      return (
         <header>
            <div className="flex items-center text-gray-300 font-bold bg-gray-700 text-5xl p-7">
               <BackButton />
               <span className="mx-2">Next 13 / </span>
               <h1>{currentPath}</h1>
            </div>
         </header>
      )
   } else {
      return (
         <header>
            <div className="flex items-center text-gray-300 font-bold bg-gray-700 text-5xl p-7">
               <h1>Next 13</h1>
            </div>
         </header>
      )
   }
}

const BackButton = () => {
   const Router = useRouter()
   const handleGoBack = () => {
      Router.push("/")
   }

   return (
      <button
         className="font-bold hover:bg-slate-600 rounded duration-150 shadow-inner p-2"
         onClick={handleGoBack}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
         </svg>
      </button>
   )
}
