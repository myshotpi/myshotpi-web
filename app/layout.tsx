import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { LanguageProvider } from "@/lib/language-context"
import { ImageProvider } from "@/app/context/image-context"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import BottomNav from "@/components/bottom-nav"
import { EconomyProvider } from "@/app/context/economy-context"

const geist = Geist({
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Myshot.pi",
  description: "Global Image Marketplace powered by Pi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className} bg-white antialiased`}>
        <Script
          src="https://sdk.minepi.com/pi-sdk.js"
          strategy="beforeInteractive"
        />

        <LanguageProvider>
          <EconomyProvider>
          <ImageProvider>

            <Header />
            
            <div className="pb-20">
              {children}
            </div>

            <Footer />
            <BottomNav />
          </ImageProvider>
         </EconomyProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}