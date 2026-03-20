"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useEffect } from "react"
import { useImages } from "@/app/context/image-context"

export default function PurchaseCompletePage() {
  const params = useParams()
  const id = Number(params?.id)

  const { increaseSold } = useImages()

  useEffect(() => {
    if (id) {
      increaseSold(id)
    }
  }, [id])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">

        <h1 className="text-2xl font-bold mb-3">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Your purchase of Image #{id} has been completed.
        </p>

        <Link
          href="/profile"
          className="block w-full py-3 mb-3 rounded-xl text-white font-semibold
          bg-gradient-to-r from-purple-500 to-orange-400
          hover:opacity-90 transition"
        >
          Go to My Profile
        </Link>

        <Link
          href="/explore"
          className="block w-full py-3 rounded-xl border border-gray-300
          hover:bg-gray-100 transition"
        >
          Explore More Images
        </Link>

      </div>
    </div>
  )
}