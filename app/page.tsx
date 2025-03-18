import Link from "next/link"
import { ArrowRight, Building2, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturedRooms } from "@/components/featured-rooms"
import { Testimonials } from "@/components/testimonials"
import { Facilities } from "@/components/facilities"
import { BookingSteps } from "@/components/booking-steps"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Find Your Perfect Hostel Room</h2>
          <p className="text-muted-foreground max-w-[700px] mb-8">
            Goel Group of Institution offers comfortable and affordable hostel accommodations for students with modern
            amenities and a supportive environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-3xl p-4 rounded-lg border bg-card shadow-sm">
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Check-in Date</span>
              </div>
              <select className="w-full p-2 rounded-md border">
                <option>Select Date</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Hostel Type</span>
              </div>
              <select className="w-full p-2 rounded-md border">
                <option>All Hostels</option>
                <option>Boys Hostel</option>
                <option>Girls Hostel</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Room Type</span>
              </div>
              <select className="w-full p-2 rounded-md border">
                <option>All Rooms</option>
                <option>Single Occupancy</option>
                <option>Double Sharing</option>
                <option>Triple Sharing</option>
              </select>
            </div>
            <Button className="min-w-[120px] mt-auto bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Search
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <FeaturedRooms />
      <BookingSteps />
      <Facilities />
      <Testimonials />

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Room?</h2>
          <p className="max-w-[600px] mx-auto mb-8">
            Secure your spot in our comfortable and well-equipped hostel facilities today. Limited rooms available for
            the upcoming academic session.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/book-room">
              Book Your Room Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

