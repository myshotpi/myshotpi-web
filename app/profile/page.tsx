"use client"

import { useImages } from "../context/image-context"
import { useMemo } from "react"

export default function ProfilePage() {
  const { images } = useImages()

  const totalSold = useMemo(() => {
    return images.reduce((sum, img) => sum + img.sold, 0)
  }, [images])

  const totalEarnings = useMemo(() => {
    return parseFloat((totalSold * 0.6).toFixed(5))
  }, [totalSold])

  return (
    <div className="min-h-screen p-6 pb-32 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">
        Creator Dashboard
      </h1>

      {/* Summary Card */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <div className="flex justify-between mb-4">
          <span className="text-gray-500">Total Sales</span>
          <span className="font-semibold">{totalSold}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Estimated Earnings (60%)</span>
          <span className="font-bold text-purple-600">
            {totalEarnings} Pi
          </span>
        </div>
      </div>

      {/* My Images */}
      <h2 className="text-lg font-semibold mb-4">
        My Uploaded Images
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="bg-white rounded-xl overflow-hidden shadow"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="font-semibold mb-2">
                {img.title}
              </p>
              <p className="text-sm text-gray-500">
                Sold {img.sold} times
              </p>
              <p className="text-sm text-purple-600 mt-1">
                Earned {(img.sold * 0.6).toFixed(5)} Pi
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}