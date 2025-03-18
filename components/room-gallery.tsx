"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface RoomGalleryProps {
  images: string[]
}

export function RoomGallery({ images }: RoomGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fullscreenIndex, setFullscreenIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index)
    setIsFullscreen(true)
  }

  return (
    <div className="relative">
      {/* Main image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <img
          src={images[activeIndex] || "/placeholder.svg"}
          alt={`Room view ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
          onClick={() => openFullscreen(activeIndex)}
        >
          <Expand className="h-5 w-5" />
        </Button>

        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative cursor-pointer rounded-md overflow-hidden w-24 h-16 flex-shrink-0 transition-all ${
              activeIndex === index ? "ring-2 ring-secondary" : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Room thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen gallery dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-5xl p-0 bg-black/95">
          <div className="relative h-[80vh]">
            <img
              src={images[fullscreenIndex] || "/placeholder.svg"}
              alt={`Room view ${fullscreenIndex + 1}`}
              className="w-full h-full object-contain"
            />

            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={() => setFullscreenIndex((prev) => (prev - 1 + images.length) % images.length)}
              >
                => (prev - 1 + images.length) % images.length)} >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={() => setFullscreenIndex((prev) => (prev + 1) % images.length)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    fullscreenIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setFullscreenIndex(index)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

