import Link from "next/link"
import { ArrowLeft, Users, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RoomGallery } from "@/components/room-gallery"
import { BookingForm } from "@/components/booking-form"
import { RoomAmenities } from "@/components/room-amenities"

// Sample room data - in a real app, this would come from a database
const rooms = [
  {
    id: "1",
    name: "Standard Single Room",
    description:
      "Comfortable single occupancy room with all basic amenities for students. The room is designed to provide a peaceful environment for studying and relaxing. It includes a comfortable bed, study table, chair, and storage space for your belongings.",
    longDescription:
      "Our Standard Single Room is perfect for students who value privacy and a quiet environment. The room is thoughtfully designed to maximize space efficiency while providing all the essential amenities needed for a comfortable stay. The large windows allow plenty of natural light, creating a bright and welcoming atmosphere. The room is furnished with a comfortable single bed, a spacious study table with a chair, and adequate storage space for your clothes and personal items. The room also has good lighting for late-night studying and a pin-up board for notes and reminders.",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    price: "₹8,000",
    period: "per month",
    capacity: 1,
    size: "120 sq ft",
    features: ["Wi-Fi", "Study Table", "Attached Bathroom", "Wardrobe", "Bed with Mattress", "Chair", "Bookshelf"],
    amenities: [
      { name: "Wi-Fi", description: "High-speed internet connectivity" },
      { name: "Study Table", description: "Spacious desk for studying" },
      { name: "Attached Bathroom", description: "Private bathroom with shower" },
      { name: "Wardrobe", description: "Storage space for clothes and belongings" },
      { name: "Bed with Mattress", description: "Comfortable single bed with quality mattress" },
      { name: "Chair", description: "Ergonomic chair for studying" },
      { name: "Bookshelf", description: "Shelf for books and study materials" },
    ],
    type: "Boys Hostel",
    availability: 5,
    rules: [
      "No smoking or alcohol consumption",
      "Visitors allowed only in common areas",
      "Maintain cleanliness in the room",
      "Quiet hours from 10 PM to 6 AM",
      "No cooking in the rooms",
    ],
  },
  {
    id: "2",
    name: "Deluxe Double Sharing",
    description:
      "Spacious room with two beds, perfect for students who prefer company. The room is designed to provide a comfortable living space for two students with adequate privacy and study areas.",
    longDescription:
      "Our Deluxe Double Sharing Room is designed for students who enjoy a social living environment while still having their personal space. The room features two comfortable single beds, two study tables with chairs, and separate wardrobes for each occupant. The room is spacious enough to allow both students to move around comfortably without feeling cramped. The large windows provide ample natural light, and the room is equipped with good lighting for late-night studying. The attached bathroom is shared between the two occupants, providing convenience and privacy.",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    price: "₹6,500",
    period: "per month",
    capacity: 2,
    size: "180 sq ft",
    features: [
      "Wi-Fi",
      "Study Tables",
      "Attached Bathroom",
      "Wardrobes",
      "Beds with Mattresses",
      "Chairs",
      "Mini Fridge",
    ],
    amenities: [
      { name: "Wi-Fi", description: "High-speed internet connectivity" },
      { name: "Study Tables", description: "Two spacious desks for studying" },
      { name: "Attached Bathroom", description: "Private bathroom with shower shared between two occupants" },
      { name: "Wardrobes", description: "Separate storage space for each occupant" },
      { name: "Beds with Mattresses", description: "Two comfortable single beds with quality mattresses" },
      { name: "Chairs", description: "Ergonomic chairs for studying" },
      { name: "Mini Fridge", description: "Small refrigerator for storing food and beverages" },
    ],
    type: "Girls Hostel",
    availability: 3,
    rules: [
      "No smoking or alcohol consumption",
      "Visitors allowed only in common areas",
      "Maintain cleanliness in the room",
      "Quiet hours from 10 PM to 6 AM",
      "No cooking in the rooms",
    ],
  },
]

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  const room = rooms.find((r) => r.id === params.id) || rooms[0] // Fallback to first room if not found

  return (
    <main className="min-h-screen py-8">
      <div className="container">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/rooms">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Rooms
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Room details - takes up 2/3 of the space on desktop */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
              <div>
                <h1 className="text-3xl font-bold">{room.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className="bg-secondary text-secondary-foreground">{room.type}</Badge>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{room.capacity} Person</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{room.price}</div>
                <div className="text-muted-foreground">{room.period}</div>
              </div>
            </div>

            <RoomGallery images={room.images} />

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">About This Room</h2>
              <p className="text-muted-foreground mb-4">{room.description}</p>
              <p className="text-muted-foreground">{room.longDescription}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">Room Size</div>
                  <div className="font-medium">{room.size}</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">Capacity</div>
                  <div className="font-medium">{room.capacity} Person</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">Hostel Type</div>
                  <div className="font-medium">{room.type}</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">Availability</div>
                  <div className="font-medium">{room.availability} Rooms Left</div>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            <RoomAmenities amenities={room.amenities} />

            <Separator className="my-8" />

            <div>
              <h2 className="text-2xl font-semibold mb-4">Hostel Rules</h2>
              <ul className="space-y-2">
                {room.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking form - takes up 1/3 of the space on desktop */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Book This Room</h2>
              <BookingForm roomId={room.id} price={room.price} />

              <div className="mt-6 p-4 bg-muted rounded-lg flex items-start gap-2">
                <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Booking requires verification of student ID and payment of security deposit. Room allocation is
                  subject to availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

