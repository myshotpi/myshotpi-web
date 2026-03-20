"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function HowItWorks() {

  const { language } = useLanguage()

  const base = translations.en
  const current = translations[language as keyof typeof translations] || {}
  const t = { ...base, ...current }

  return (

    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">

          <div className="w-16 h-1 bg-purple-500 mx-auto mb-4 rounded"></div>

          <h2 className="text-4xl font-extrabold tracking-wide text-gray-800">
            {t.howItWorksTitle}
          </h2>

        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">

            <div className="text-3xl mb-3">🏆</div>

            <h3 className="text-lg font-semibold mb-2">
              {t.step1Title}
            </h3>

            <p className="text-gray-600 text-sm">
              {t.step1Desc}
            </p>

          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">

            <div className="text-3xl mb-3">📸</div>

            <h3 className="text-lg font-semibold mb-2">
              {t.step2Title}
            </h3>

            <p className="text-gray-600 text-sm">
              {t.step2Desc}
            </p>

          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">

            <div className="text-3xl mb-3">⬆️</div>

            <h3 className="text-lg font-semibold mb-2">
              {t.step3Title}
            </h3>

            <p className="text-gray-600 text-sm">
              {t.step3Desc}
            </p>

          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">

            <div className="text-3xl mb-3">💰</div>

            <h3 className="text-lg font-semibold mb-2">
              {t.step4Title}
            </h3>

            <p className="text-gray-600 text-sm">
              {t.step4Desc}
            </p>

          </div>

        </div>

      </div>

    </section>

  )
}