"use client"

import { createContext, useContext, useState } from "react"

type ImageItem = {
  id: number
  title: string
  category: string
  src: string
  price: number
  sold: number
}

const initialImages: ImageItem[] = [
  { id: 1, title: "Mountain Lake", category: "Nature", src: "/scene1.png", price: 1, sold: 0 },
  { id: 2, title: "City Lighting", category: "City", src: "/scene2.png", price: 1, sold: 0 },
  { id: 3, title: "Volcano Fire", category: "Nature", src: "/scene3.png", price: 1, sold: 0 },
  { id: 4, title: "Ocean Storm", category: "Nature", src: "/scene4.png", price: 1, sold: 0 },
  { id: 5, title: "Night Skyline", category: "City", src: "/scene5.png", price: 1, sold: 0 },
  { id: 6, title: "Frozen Glacier", category: "Nature", src: "/scene6.png", price: 1, sold: 0 },
]

type ImageContextType = {
  images: ImageItem[]
  updateImages: (data: ImageItem[]) => void
  increaseSold: (id: number) => void
}

const ImageContext = createContext<ImageContextType | null>(null)

export function ImageProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<ImageItem[]>(initialImages)

  const updateImages = (data: ImageItem[]) => {
    setImages(data)
  }

  const increaseSold = (id: number) => {
    setImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, sold: img.sold + 1 } : img
      )
    )
  }

  return (
    <ImageContext.Provider value={{ images, updateImages, increaseSold }}>
      {children}
    </ImageContext.Provider>
  )
}

export function useImages() {
  const context = useContext(ImageContext)

  if (!context) {
    throw new Error("useImages must be used inside ImageProvider")
  }

  return context
}