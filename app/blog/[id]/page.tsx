import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { format } from "date-fns"
import { ru } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { posts, categories } from "@/lib/data"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  const category = categories.find((c) => c.id === post.category)
  const formattedDate = format(new Date(post.date), "d MMMM yyyy", { locale: ru })

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/blog" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Назад к блогу
        </Link>
      </Button>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formattedDate}</time>
          {category && <span className="inline-block bg-muted rounded-full px-3 py-1">{category.name}</span>}
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  )
}

