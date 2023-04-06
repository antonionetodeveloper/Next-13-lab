import PathList from "../pathsList"

const Banner = () => {
   return (
      <section className="min-h-screen flex flex-col justify-center">
         <div className="flex flex-col mx-auto">
            <h1 className="text-blue-200 font-extrabold sm:text-4xl md:text-6xl lg:text-7xl tracking-tight text-center ">
               Bem vindo ao meu laboratório <br /> do novo Next 13!
            </h1>
            <p className="my-8 text-3xl max-w-5xl text-slate-400 text-center">
               Aqui estão algumas das incríveis novas funcionalidades do Next13
               que vão revolucionar sua experiência de usuário:
            </p>
         </div>
         <PathList />
      </section>
   )
}

export default Banner
