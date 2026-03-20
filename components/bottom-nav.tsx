"use client"

import Link from "next/link"

export default function BottomNav() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white shadow-xl rounded-2xl flex justify-around items-center py-3 z-50">

      <Link href="/" className="flex flex-col items-center text-xs font-medium text-gray-700">
        <span className="text-lg">🏠</span>
        Home
      </Link>

      <Link href="/explore" className="flex flex-col items-center text-xs font-medium text-gray-700">
        <span className="text-lg">🔍</span>
        Explore
      </Link>

      <Link href="/upload" className="flex flex-col items-center text-xs font-medium text-gray-700">
        <span className="text-lg">⬆</span>
        Upload
      </Link>

      <Link href="/pricing" className="flex flex-col items-center text-xs font-medium text-gray-700">
        <span className="text-lg">💰</span>
        Pricing
      </Link>

      <Link href="/profile" className="flex flex-col items-center text-xs font-medium text-gray-700">
        <span className="text-lg">👤</span>
        Profile
      </Link>

    </div>
  )
}