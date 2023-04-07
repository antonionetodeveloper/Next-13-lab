"use client"

import { Link as ScrollTo } from "react-scroll"

interface SeeMoreProps {
   componentID: string
}

const SeeMore = ({ componentID }: SeeMoreProps) => {
   return (
      <ScrollTo to={componentID} smooth={true} duration={500}>
         <button className="flex flex-col items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 gap-1 mt-5 p-3 text-slate-400 hover:text-slate-200 duration-150">
            <p className="text-xl">Todas as novidades do Next13</p>
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
                  d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
               />
            </svg>
         </button>
      </ScrollTo>
   )
}

export default SeeMore
