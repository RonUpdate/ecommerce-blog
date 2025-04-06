
"use client"

import { useState } from "react"

interface CategoryFormProps {
  initialData?: {
    title: string
    slug: string
    type: "product" | "post"
  }
  onSubmit?: (data: { title: string; slug: string; type: "product" | "post" }) => void
}

export function AdminCategoryForm({ initialData, onSubmit }: CategoryFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    type: initialData?.type || "product",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Название категории"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="slug"
        placeholder="slug (для URL)"
        value={formData.slug}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="product">Для товаров</option>
        <option value="post">Для постов</option>
      </select>
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Сохранить
      </button>
    </form>
  )
}
