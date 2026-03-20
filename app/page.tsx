
import Hero from "@/components/hero"
import { FeaturedImages } from "@/components/featured-images"
import HowItWorks from "@/components/how-it-works"
import   PiPriceTicker   from "@/components/pi-price-ticker"
import PricingBanner from "@/components/pricing-banner"
import Awards from "@/components/awards"
import { Footer } from "@/components/footer"
import BottomNav from "@/components/bottom-nav"
import PiLogin from "@/components/pi-login"
import TopPhotographers from "@/components/top-photographers"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">

      

      <PiPriceTicker />

      <Hero />

      <FeaturedImages />

      <TopPhotographers />

      <HowItWorks />


      <PricingBanner />

  

      <BottomNav />

    </div>
  )
}