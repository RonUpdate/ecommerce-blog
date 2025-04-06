import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { categories } from "@/lib/data"

interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const category = categories.find((c) => c.id === product.category)

  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          {category && <p className="text-xs text-muted-foreground">{category.name}</p>}
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="font-bold">{product.price} ₽</p>
        </CardFooter>
      </Link>
    </Card>
  )
}

