"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

const sampleImages = [
  { id: 1, category: "Nature", author: "Alex Kim", views: 1234, likes: 567, image: "/scene1.png" },
  { id: 2, category: "Climate", author: "Emma Lee", views: 2345, likes: 890, image: "/scene2.png" },
  { id: 3, category: "Nature", author: "David Park", views: 3456, likes: 1234, image: "/scene3.png" },
  { id: 4, category: "Climate", author: "Sophia Choi", views: 4567, likes: 2345, image: "/scene4.png" },
  { id: 5, category: "Nature", author: "Michael Junf", views: 5678, likes: 3456, image: "/scene5.png" },
  { id: 6, category: "Climate", author: "Lucas Han", views: 6789, likes: 4567, image: "/scene6.png" }
]

export function FeaturedImages() {

  const { language } = useLanguage()

  const base = translations.en
  const current = translations[language as keyof typeof translations] || {}
  const t = { ...base, ...current }

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto pb-28">

      <h2 className="text-4xl font-bold text-center mb-10">
        {t.featuredImages}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {sampleImages.map((img) => (

          <Link
            key={img.id}
            href={`/image/${img.id}`}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            <div className="relative w-full h-48">
              <Image
                src={img.image}
                alt={`image ${img.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4">

              <div className="text-sm text-gray-500 mb-2">
                {img.category}
              </div>
              <div className="text-xs text-gray-500 mb-2">
                by {img.author}
              </div>

              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>👁 {img.views.toLocaleString()}</span>
                <span>❤️ {img.likes.toLocaleString()}</span>
              </div>

              <button className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500
                                hover:from-purple-600 hover:to-indigo-600 transition duration-300">
                {t.buyNow}
              </button>

            </div>

          </Link>

        ))}

      </div>

    </section>
  )
}