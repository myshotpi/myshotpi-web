"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import PiLogin from "./pi-login"

export default function Hero() {
  const { language } = useLanguage()

  const base = translations.en || {}
  const current = translations[language as keyof typeof translations] || {}
  const t = { ...base, ...current }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "120px 20px",
        background: "linear-gradient(135deg,#ff4fd8,#7a5cff)",
      }}
    >
      <h1 style={{ fontSize: "64px", fontWeight: "700", color: "white" }}>
        {t.appName || "MyShot.pi"}
      </h1>

      <p style={{ color: "white", marginTop: "10px", fontSize: "18px" }}>
        {t.tagline || "Global Image Marketplace powered by Pi Network"}
      </p>

      <PiLogin />

      <div style={{ marginTop: "30px" }}>
        <Link href="/explore">
          <button
            style={{
              background: "#6C2BD9",
              color: "white",
              padding: "16px 36px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              marginRight: "12px",
            }}
          >
            {t.start || "Start"}
          </button>
        </Link>

        <Link href="/demo">
          <button
            style={{
              background: "white",
              color: "#333",
              padding: "12px 26px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {t.demo || "Demo"}
          </button>
        </Link>
      </div>
    </div>
  )
}