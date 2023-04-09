import { paths } from "@/app/paths"

interface NavBarProps {
   feature?: string
   setCurrentFeature: any
}

const NavBar = ({ setCurrentFeature }: NavBarProps) => {
   return (
      <nav className="w-1/3 z-20">
         <ul className="flex flex-col overflow-y-scroll max-h-full py-3 px-6">
            {paths.map((path) => (
               <Item
                  key={"keyItem@" + path.name}
                  feature={path.name}
                  setCurrentFeature={setCurrentFeature}
               />
            ))}
         </ul>
      </nav>
   )
}

const Item = ({ feature, setCurrentFeature }: NavBarProps) => {
   return (
      <button
         className="pl-2 py-1 text-slate-400 border-l border-slate-400 hover:text-slate-200 hover:border-slate-200 duration-150"
         onClick={() => {
            setCurrentFeature(feature)
         }}
      >
         <li className="text-2xl p-1 font-semibold text-start">
            <>{feature}</>
         </li>
      </button>
   )
}

export default NavBar
