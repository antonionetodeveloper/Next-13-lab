import Image from "next/image"

const NovoDiretorioApp = () => {
   return (
      <div>
         <h1 className="text-3xl p-3">O Novo Diretório App</h1>
         <Image
            src="/home/sections/preview/novoDiretorioApp/diretorio.png"
            alt="foto do diretório"
            width={1000}
            height={800}
         />

         <p>
            Com o lançamento do Next.js 13, foi introduzida uma nova pasta App
            que faz parte da nova convenção de pastas e arquivos para organizar
            melhor sua aplicação. O objetivo do diretório App é fornecer uma
            estrutura de projeto mais intuitiva e fácil de entender para o
            desenvolvedor.
         </p>
      </div>
   )
}

export default NovoDiretorioApp
