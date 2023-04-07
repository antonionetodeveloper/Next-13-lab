import PathList from "./components/pathsList"
import SeeMore from "./components/seeMore"

const Banner = () => {
   return (
      <section className="min-h-screen flex flex-col justify-center">
         <div className="flex flex-col mx-auto">
            <h1 className="text-blue-200 font-extrabold text-3xl md:text-6xl lg:text-7xl tracking-tight text-center ">
               Bem vindo ao meu laboratório <br /> do novo Next 13!
            </h1>
            <p className="my-8 text-md max-w-md md:text-2xl md:max-w-4xl lg:text-3xl lg:max-w-5xl text-slate-400 text-center">
               Aqui estão algumas das incríveis novas funcionalidades do Next13
               que vão revolucionar a experiência do seu usuário:
            </p>
         </div>
         <PathList />
         <SeeMore componentID="section_preview" />
      </section>
   )
}

export default Banner
