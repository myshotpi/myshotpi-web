"use client"

import { useParams, useRouter } from "next/navigation"
import { useImages } from "../../context/image-context"

export default function BuyPage() {
  const { id } = useParams()
  const router = useRouter()
  const { images } = useImages()

  const image = images.find((img) => img.id === Number(id))

  if (!image) {
    return <div className="p-6">Image not found.</div>
  }

  // 이미 판매된 경우
  if (image.sold >= 1) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{image.title}</h1>
        <img src={image.src} className="w-full max-w-lg rounded-lg mb-4" />

        <p className="text-red-600 font-semibold text-lg">
          This image has already been sold.
        </p>

        <button
          onClick={() => router.push("/explore")}
          className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
        >
          Back to Explore
        </button>
      </div>
    )
  }

  const handleBuy = () => {
    router.push(`/buy/${image.id}/confirm`)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{image.title}</h1>

      <img
        src={image.src}
        className="w-full max-w-lg rounded-lg mb-4"
      />

      <p className="mb-4 text-lg">Price: {image.price} Pi</p>

      <button
        onClick={handleBuy}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg"
      >
        Buy Image
      </button>
    </div>
  )
}