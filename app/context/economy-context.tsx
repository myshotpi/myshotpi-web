"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type EconomyContextType = {
  prizePool: number
  addToPrizePool: (amount: number) => void
}

const EconomyContext = createContext<EconomyContextType | undefined>(undefined)

export function EconomyProvider({ children }: { children: ReactNode }) {
  const [prizePool, setPrizePool] = useState(0)

  const addToPrizePool = (amount: number) => {
    setPrizePool((prev) => Number((prev + amount).toFixed(5)))
  }

  return (
    <EconomyContext.Provider value={{ prizePool, addToPrizePool }}>
      {children}
    </EconomyContext.Provider>
  )
}

export function useEconomy() {
  const context = useContext(EconomyContext)
  if (!context) {
    throw new Error("useEconomy must be used within EconomyProvider")
  }
  return context
}