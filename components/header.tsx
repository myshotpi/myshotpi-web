"use client"

import Link from "next/link"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function Header() {
  const { language } = useLanguage()

  const base = translations.en || {}
  const current = translations[language as keyof typeof translations] || {}
  const t = { ...base, ...current }

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #eee",
        background: "#fff",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#000",
        }}
      >
        {t.appName || "MyShot.pi"}
      </Link>

      <nav
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
          fontSize: "16px",
        }}
      >
        <Link href="/">{t.home || "Home"}</Link>
        <Link href="/explore">{t.explore || "Explore"}</Link>
        <Link href="/pricing">{t.pricingTitle || "Pricing"}</Link>
        <Link href="/about">{t.about || "About"}</Link>
        <Link href="/connect">{t.connect || "Connect"}</Link>
        <Link href="/upload">{t.upload || "Upload"}</Link>

        <LanguageSelector />
      </nav>
    </header>
  )
}