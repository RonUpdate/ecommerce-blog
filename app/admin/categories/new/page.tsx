
import { AdminCategoryForm } from "@/components/AdminCategoryForm"

export default function NewCategoryPage() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Новая категория</h1>
      <AdminCategoryForm />
    </div>
  )
}
