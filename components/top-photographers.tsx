"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function TopPhotographers() {

  const { language } = useLanguage()
  const base = translations.en || {}
  const current = translations[language as keyof typeof translations] || {}
  const t = { ...base, ...current }

  const photographers = [
    { name: "Alex Kim", country: "Korea", sales: 120 },
    { name: "Maria Lopez", country: "Spain", sales: 98 },
    { name: "John Smith", country: "USA", sales: 85 }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          {t.topPhotographers || "Top Photographers"}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {photographers.map((p, i) => (
            <div
              key={i}
              className="bg-indigo-200 p-6 rounded-xl shadow-md border border-indigo-300 hover:shadow-xl hover:- translate-y-1 transition"
            >
              <img
               src="/placeholder-user.jpg"
               className="w-16 h-16 rounded-full mx-auto mb-3"
               alt="photographer"
               />

              <div className="text-xl font-semibold">{p.name}</div>
              <div className="text-gray-500">{p.country}</div>
              <div className="mt-2 text-sm text-gray-600">
                {t.totalSales || "Total Sales"}: {p.sales}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}