"use client"

import { useState } from "react"
import { ArrowLeft, Expand } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Gallery images
const galleryImages = {
  rooms: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Single Room",
      caption: "Standard Single Room",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Double Room",
      caption: "Deluxe Double Sharing Room",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Triple Room",
      caption: "Triple Sharing Economy Room",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80",
      alt: "Premium Room",
      caption: "Premium Single Room",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Deluxe Room",
      caption: "Deluxe Single Room",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Standard Double Room",
      caption: "Standard Double Sharing Room",
    },
  ],
  facilities: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Wi-Fi Facility",
      caption: "High-Speed Wi-Fi",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Dining Hall",
      caption: "Spacious Dining Facility",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Fitness Center",
      caption: "Modern Fitness Center",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      alt: "Study Room",
      caption: "Quiet Study Rooms",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Recreation Room",
      caption: "Recreation Room",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Laundry Service",
      caption: "Laundry Facilities",
    },
  ],
  campus: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80",
      alt: "Campus Building",
      caption: "Main Campus Building",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Campus Library",
      caption: "Modern Library",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Campus Grounds",
      caption: "Beautiful Campus Grounds",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      alt: "Auditorium",
      caption: "Modern Auditorium",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Computer Lab",
      caption: "Advanced Computer Lab",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      alt: "Sports Field",
      caption: "Sports Field",
    },
  ],
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCaption, setSelectedCaption] = useState<string>("")

  const openFullscreen = (src: string, caption: string) => {
    setSelectedImage(src)
    setSelectedCaption(caption)
  }

  const closeFullscreen = () => {
    setSelectedImage(null)
  }

  return (
    <main className="min-h-screen py-8">
      <div className="container">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold">Photo Gallery</h1>
          <p className="text-muted-foreground mt-2">
            Explore our hostel and campus facilities through our photo gallery
          </p>
        </div>

        <Tabs defaultValue="rooms" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="rooms">Hostel Rooms</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="campus">Campus</TabsTrigger>
          </TabsList>

          {Object.entries(galleryImages).map(([category, images]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative group overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => openFullscreen(image.src, image.caption)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <p className="text-white font-medium">{image.caption}</p>
                        <div className="flex items-center mt-2">
                          <Button variant="secondary" size="sm" className="text-xs">
                            <Expand className="h-3 w-3 mr-1" />
                            View Larger
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Fullscreen image dialog */}
        <Dialog open={!!selectedImage} onOpenChange={closeFullscreen}>
          <DialogContent className="max-w-5xl p-0 bg-black/95">
            <div className="relative h-[80vh]">
              {selectedImage && (
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt={selectedCaption}
                  className="w-full h-full object-contain"
                />
              )}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-lg font-medium">{selectedCaption}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}

