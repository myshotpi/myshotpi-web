"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useImages } from "../../context/image-context"

export default function ImageDetailPage() {
  const params = useParams()
  const { images } = useImages()

  const id = Number(params.id)
  const image = images.find((img) => img.id === id)

  if (!image) {
    return <div className="p-6">Image not found</div>
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">

      <h1 className="text-2xl font-bold mb-6">{image.title}</h1>

      <img
        src={image.src}
        alt={image.title}
        className="w-full max-w-xl rounded-lg mb-6"
      />

      <p className="text-gray-600 mb-4">
        Category: {image.category}
      </p>

      <p className="text-gray-600 mb-4">
        Price: {image.price} Pi
      </p>

      <p className="text-gray-600 mb-6">
        Sold {image.sold} times
      </p>

      <Link
        href={`/buy/${image.id}`}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg"
      >
        Buy Image
      </Link>

    </div>
  )
}