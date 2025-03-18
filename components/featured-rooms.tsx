"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const rooms = [
  {
    id: 1,
    name: "Standard Single Room",
    description: "Comfortable single occupancy room with all basic amenities for students.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "₹8,000",
    period: "per month",
    capacity: 1,
    features: ["Wi-Fi", "Study Table", "Attached Bathroom"],
    type: "Boys Hostel",
    availability: 5,
  },
  {
    id: 2,
    name: "Deluxe Double Sharing",
    description: "Spacious room with two beds, perfect for students who prefer company.",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "₹6,500",
    period: "per month",
    capacity: 2,
    features: ["Wi-Fi", "Study Tables", "Attached Bathroom", "Mini Fridge"],
    type: "Girls Hostel",
    availability: 3,
    featured: true,
  },
  {
    id: 3,
    name: "Triple Sharing Economy",
    description: "Affordable option with three beds, ideal for budget-conscious students.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "₹5,000",
    period: "per month",
    capacity: 3,
    features: ["Wi-Fi", "Study Area", "Common Bathroom"],
    type: "Boys Hostel",
    availability: 8,
  },
  {
    id: 4,
    name: "Premium Single Room",
    description: "Luxury single room with enhanced amenities for maximum comfort.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80",
    price: "₹10,000",
    period: "per month",
    capacity: 1,
    features: ["High-Speed Wi-Fi", "Study Table", "Private Bathroom", "AC", "TV"],
    type: "Girls Hostel",
    availability: 2,
    featured: true,
  },
]

export function FeaturedRooms() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Hostel Rooms</h2>
          <p className="text-muted-foreground max-w-[700px] mb-8">
            Explore our range of comfortable and affordable hostel accommodations designed to meet the needs of every
            student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {room.featured && (
                    <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">Featured</Badge>
                  )}
                  <Badge className="absolute top-2 left-2" variant="outline">
                    {room.type}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{room.name}</CardTitle>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-muted-foreground mr-1" />
                      <span className="text-sm text-muted-foreground">
                        {room.capacity} {room.capacity === 1 ? "Person" : "People"}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="font-normal">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Only {room.availability} rooms left</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div>
                    <span className="text-2xl font-bold">{room.price}</span>
                    <span className="text-muted-foreground text-sm"> {room.period}</span>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                    <Link href={`/rooms/${room.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/rooms">
              View All Rooms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

