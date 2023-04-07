import Link from "next/link"
import { previewPaths as paths } from "@/app/paths"

interface PathProps {
   name: string
   path: string
}

const PathList = () => {
   return (
      <div>
         <ul className="max-w-7xl grid m-auto grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center my-3">
            {paths.slice(0, 3).map((item: PathProps) => (
               <SinglePathCard
                  name={item.name}
                  path={item.path}
                  key={"keyItem@" + item.path}
               />
            ))}
         </ul>
      </div>
   )
}

const SinglePathCard = ({ name, path }: PathProps) => {
   return (
      <button>
         <Link href={path}>
            <li className="w-80 h-16 lg:h-auto p-4 text-2xl text-center font-bold bg-blue-500 rounded shadow-md shadow-slate-900 hover:cursor-pointer hover:bg-blue-400 duration-300">
               {name}
            </li>
         </Link>
      </button>
   )
}

export default PathList
