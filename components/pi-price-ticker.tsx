"use client"

import { useEffect, useState } from "react"

export default function PiPriceTicker() {
  const [price, setPrice] = useState("0.191")

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=pi-network&vs_currencies=usd")
        const data = await res.json()
        setPrice(data["pi-network"].usd)
      } catch (e) {
        console.log("Price fetch error")
      }
    }

    fetchPrice()

    const interval = setInterval(fetchPrice, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-pink=500 to-orange-400 text-white py-4 text-center text-xl font-bold tracking-wide border-b-4
    border-white">
    
      🔵 PI Network Price : <span className="text-yellow-400 text-xl font-bold">${price}</span>
    </div>
  )
}