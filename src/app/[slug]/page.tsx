interface ItemsProps {
   params: {
      slug: string
   }
}

export default function Items({ params }: ItemsProps) {
   return <h1>Título da página - {params.slug}</h1>
}
