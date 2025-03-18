import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Facilities } from "@/components/facilities"

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen py-8">
      <div className="container">
        <Button variant="ghost" size="sm" asChild className="mb-2">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Hostel Facilities</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the comprehensive range of facilities and amenities available at Goel Group of Institution hostels,
            designed to enhance your stay and provide a comfortable living environment.
          </p>
        </div>

        <div className="mb-16">
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Hostel Facilities Overview"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              At Goel Group of Institution, we understand that a comfortable living environment is essential for
              academic success. Our hostels are equipped with modern facilities and amenities to ensure that students
              have a pleasant and productive stay. From high-speed internet connectivity to recreational spaces, we have
              everything you need to make your hostel experience memorable.
            </p>
          </div>
        </div>

        <Facilities />

        <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Experience Our Facilities?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Book a room in our hostel and enjoy all these amazing facilities. Limited rooms available for the upcoming
            academic session.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/book-room">Book Your Room Now</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us for More Information</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

