"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function PricingBanner() {
  const { language } = useLanguage()

  const base = translations.en || {}
  const current = translations[language] || {}
  const t = { ...base, ...current }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-orange-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          {t.pricingTitle || "Simple & Transparent Pricing"}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-2">
              {t.imagePrice || "Image Price"}
            </h3>
            <p className="text-3xl font-bold text-purple-600 mb-4">1 π</p>
            <p className="text-gray-600">
              {t.imagePriceDesc || "Every image on MyShot.pi is priced at 1 Pi."}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-2">
              {t.transactionFee || "Transaction Fee"}
            </h3>
            <p className="text-3xl font-bold text-red-500 mb-4">40%</p>
            <p className="text-gray-600">
              {t.transactionFeeDesc ||
                "Platform fee is 40% (seller receives 60%)."}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-2">
              {t.awardsPool || "Awards Pool"}
            </h3>
            <p className="text-3xl font-bold text-yellow-600 mb-4">50%</p>
            <p className="text-gray-600">
              {t.awardsPoolDesc || "Community reward distribution."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}