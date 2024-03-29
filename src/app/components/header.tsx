"use client"

import { useRouter } from "next/navigation"

export const Header = ({ currentPath }: { currentPath: string }) => {
   if (currentPath != "none") {
      return (
         <header className="fixed w-full h-24 backdrop-blur-sm bg-white/0 z-50">
            <div className="flex items-center font-bold text-lg lg:text-5xl p-7">
               <BackButton />
               <span className="mx-2 bg-gradient-to-r from-blue-100 to-blue-300 inline-block text-transparent bg-clip-text">
                  Next 13 /
               </span>
               <h1 className="bg-gradient-to-r from-blue-300 to-blue-400 inline-block text-transparent bg-clip-text">
                  {currentPath}
               </h1>
            </div>
         </header>
      )
   } else {
      return (
         <header className="fixed w-full h-24 backdrop-blur-sm bg-white/0 z-50">
            <div className="flex items-center font-bold text-xl md:text-5xl p-7">
               <h1 className="bg-gradient-to-r from-blue-100 to-blue-400 inline-block text-transparent bg-clip-text">
                  Next 13
               </h1>
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
         className="font-bold hover:bg-slate-800 rounded duration-150 shadow-inner p-2"
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
