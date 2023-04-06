import Link from "next/link"
import { paths } from "@/app/paths"

interface PathProps {
   name: string
   path: string
}

const PathList = () => {
   return (
      <div>
         <ul className="max-w-7xl grid m-auto grid-cols-3 justify-items-center items-center my-3">
            {paths.map((item: PathProps) => (
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
      <Link href={path}>
         <li className="w-80 p-4 text-2xl text-center font-bold bg-blue-500 rounded shadow-md shadow-slate-900 hover:cursor-pointer hover:bg-blue-400 duration-300">
            {name}
         </li>
      </Link>
   )
}

export default PathList
