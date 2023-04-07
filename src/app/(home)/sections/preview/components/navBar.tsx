import { paths } from "@/app/paths"
import { Dispatch, SetStateAction } from "react"

interface NavBarProps {
   setCurrentFeature: Dispatch<SetStateAction<string>>
   feature?: any
}

const NavBar = ({ setCurrentFeature }: NavBarProps) => {
   return (
      <nav className="w-1/3 z-20">
         <ul className="flex flex-col overflow-y-scroll max-h-full py-3 px-6">
            {paths.map((path) => (
               <Item
                  key={"keyItem@" + path.name}
                  setCurrentFeature={setCurrentFeature}
                  feature={path.name}
               />
            ))}
         </ul>
      </nav>
   )
}

const Item = ({ setCurrentFeature, feature }: NavBarProps) => {
   return (
      <button
         className="pl-2 py-1 text-slate-400 border-l border-slate-400 hover:text-slate-200 hover:border-slate-200 duration-150"
         onClick={() => setCurrentFeature(feature)}
      >
         <li className="text-2xl p-1 font-semibold text-start">
            <>{feature}</>
         </li>
      </button>
   )
}

export default NavBar
