
import { AdminProductForm } from "@/components/AdminProductForm"

export default function NewProductPage() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Новый товар</h1>
      <AdminProductForm />
    </div>
  )
}
