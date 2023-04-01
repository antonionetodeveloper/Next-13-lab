import Link from "next/link"
import { paths } from "./paths"
import { Header } from "./components/header"

export default function Home() {
   return (
      <>
         <Header currentPath="none" />
         <main>
            <h1 className="text-3xl font-bold underline">Hello World!</h1>
            <ul>
               {paths.map((item: { path: string }) => (
                  <li key={"keyItem_" + item.path}>
                     <Link href={item.path} key={"keyLink_" + item.path}>
                        {item.path}
                     </Link>
                  </li>
               ))}
            </ul>
         </main>
      </>
   )
}
