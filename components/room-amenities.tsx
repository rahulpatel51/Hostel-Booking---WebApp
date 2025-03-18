"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

interface Amenity {
  name: string
  description: string
}

interface RoomAmenitiesProps {
  amenities: Amenity[]
}

export function RoomAmenities({ amenities }: RoomAmenitiesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref}>
      <h2 className="text-2xl font-semibold mb-6">Room Amenities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-3 p-4 rounded-lg border"
          >
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <Check className="h-4 w-4 text-secondary" />
            </div>
            <div>
              <h3 className="font-medium">{amenity.name}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

