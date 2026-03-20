"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function Awards() {

  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          {t.platformHighlights || "Platform Highlights"}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2">
              {t.globalMarketplace || "Global Marketplace"}
            </h3>
            <p className="text-gray-600">
              {t.globalMarketplaceDesc || "Sell your images to buyers all over the world."}
            </p>
          </div>

          <div>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">
              {t.fastTransactions || "Fast Transactions"}
            </h3>
            <p className="text-gray-600">
              {t.fastTransactionsDesc || "Powered by the Pi Network ecosystem."}
            </p>
          </div>

          <div>
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">
              {t.securePlatform || "Secure Platform"}
            </h3>
            <p className="text-gray-600">
              {t.securePlatformDesc || "Safe and transparent image marketplace."}
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}