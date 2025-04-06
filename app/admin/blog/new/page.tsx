
import { AdminPostForm } from "@/components/AdminPostForm"

export default function NewPostPage() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Новый пост</h1>
      <AdminPostForm />
    </div>
  )
}
