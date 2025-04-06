import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import BlogCard from "@/components/blog-card"
import { featuredProducts, featuredPosts } from "@/lib/data"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Минималистичный магазин</h1>
        <div className="max-w-2xl">
          <p className="text-muted-foreground mb-6">
            Мы создаем качественные товары с минималистичным дизайном, которые прослужат вам долгие годы. Наша философия
            — меньше значит больше.
          </p>
          <Button asChild>
            <Link href="/products">Смотреть товары</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Популярные товары</h2>
          <Button variant="ghost" asChild>
            <Link href="/products" className="flex items-center">
              Смотреть все <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Блог</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center">
              Смотреть все <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}

