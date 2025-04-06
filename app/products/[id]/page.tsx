import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { products, categories } from "@/lib/data"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const category = categories.find((c) => c.id === product.category)

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/products" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Назад к товарам
        </Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="mb-4">
            <span className="inline-block bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm">
              {category?.name}
            </span>
          </div>
          <p className="text-2xl font-bold mb-6">{product.price} ₽</p>
          <div className="prose max-w-none mb-8">
            <p>{product.description}</p>
          </div>
          <Button size="lg">Добавить в корзину</Button>
        </div>
      </div>
    </div>
  )
}

