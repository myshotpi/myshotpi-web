"use client"

import Link from "next/link"

export default function PurchaseCompletePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">

        <h1 className="text-2xl font-bold mb-4">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Your purchase has been completed successfully.
        </p>

        <div className="space-y-3">

          <Link
            href="/profile"
            className="block w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
          >
            Go to My Profile
          </Link>

          <Link
            href="/explore"
            className="block w-full py-3 rounded-xl bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
          >
            Explore More Images
          </Link>

        </div>

      </div>
    </div>
  )
}