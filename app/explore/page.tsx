"use client"

import Link from "next/link"
import { useImages } from "../context/image-context"

export default function ExplorePage() {
  const { images } = useImages()

  const visibleImages = images.filter((img) => img.sold === 0)

  return (
    <div className="min-h-screen p-6 pb-32 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Explore Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleImages.map((img) => (
          <Link
            key={img.id}
            href={`/image/${img.id}`}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <p className="font-semibold mb-1">{img.title}</p>
              <p className="text-sm text-gray-700">Price: {img.price} Pi</p>
              <p className="text-sm text-gray-500">Sold {img.sold || 0} times</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}