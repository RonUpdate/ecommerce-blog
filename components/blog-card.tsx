import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { ru } from "date-fns/locale"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { categories } from "@/lib/data"

interface Post {
  id: string
  title: string
  content: string
  date: string
  category: string
  image: string
}

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  const category = categories.find((c) => c.id === post.category)
  const formattedDate = format(new Date(post.date), "d MMMM yyyy", { locale: ru })

  return (
    <Card className="overflow-hidden">
      <Link href={`/blog/${post.id}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-2">{post.title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <time dateTime={post.date} className="text-xs text-muted-foreground">
              {formattedDate}
            </time>
            {category && (
              <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{category.name}</span>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
        </CardFooter>
      </Link>
    </Card>
  )
}

