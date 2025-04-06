
"use client"

import { useState } from "react"

interface PostFormProps {
  initialData?: {
    title: string
    date: string
    excerpt: string
    image: string
  }
  onSubmit?: (data: { title: string; date: string; excerpt: string; image: string }) => void
}

export function AdminPostForm({ initialData, onSubmit }: PostFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    date: initialData?.date || "",
    excerpt: initialData?.excerpt || "",
    image: initialData?.image || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        placeholder="Заголовок"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="date"
        placeholder="Дата"
        value={formData.date}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="image"
        placeholder="Ссылка на изображение"
        value={formData.image}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <textarea
        name="excerpt"
        placeholder="Краткое описание"
        value={formData.excerpt}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Сохранить
      </button>
    </form>
  )
}
