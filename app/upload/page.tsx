"use client"

import { useState } from "react"
import { useImages } from "../context/image-context"

export default function UploadPage() {

  const { images, updateImages } = useImages()

  const [preview, setPreview] = useState<string | null>(null)
  const [title, setTitle] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0]
    if (!file) return

    const imageUrl = URL.createObjectURL(file)
    setPreview(imageUrl)
  }

  const handleSubmit = () => {

    if (!preview || !title.trim()) return

    const newImage = {
      id: Date.now(),
      title: title,
      category: "User Upload",
      src: preview,
      price: 1,
      sold: 0
    }

    updateImages([...images, newImage])

    setPreview(null)
    setTitle("")
  }

  return (

    <div className="min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-6">
        Upload to MyShot.pi
      </h1>

      <label className="border-2 border-dashed w-full p-10 text-center cursor-pointer block">

        Tap to select image

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

      </label>

      {preview && (

        <div className="mt-6 space-y-4">

          <img
            src={preview}
            className="w-40 rounded-lg"
          />

          <input
            type="text"
            placeholder="Image Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-500 to-orange-400 text-white py-3 rounded-lg"
          >
            Submit to Marketplace
          </button>

        </div>

      )}

    </div>
  )
}