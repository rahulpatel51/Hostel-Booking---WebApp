import Link from "next/link"
import { ArrowLeft, Users, Award, BookOpen, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <main className="min-h-screen py-8">
      <div className="container">
        <Button variant="ghost" size="sm" asChild className="mb-2">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Goel Group of Institution</h1>

            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80"
                alt="Goel Group of Institution Campus"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                Goel Group of Institution was established in 1995 with a vision to provide quality education and
                comfortable living facilities for students from across the country. Over the years, we have grown to
                become one of the premier educational institutions in the region, known for our academic excellence and
                state-of-the-art infrastructure.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Our hostel facilities are designed to provide a home away from home for our students. We understand that
                a comfortable living environment is essential for academic success, and we strive to provide the best
                possible accommodation for our students.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-4">
                To provide a nurturing environment that fosters academic excellence, personal growth, and social
                responsibility among students, preparing them to be future leaders and contributors to society.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed mb-4">
                To be recognized as a center of excellence in education and student accommodation, setting benchmarks in
                academic standards, infrastructure, and student services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Excellence in everything we do</li>
                <li>Integrity and ethical conduct</li>
                <li>Respect for diversity and inclusion</li>
                <li>Innovation and continuous improvement</li>
                <li>Social responsibility and community service</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Hostel Facilities</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our hostel facilities are designed to provide a comfortable and conducive environment for students. We
                offer a range of accommodation options to suit different preferences and budgets, from single occupancy
                rooms to shared accommodations.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                All our hostel rooms are equipped with modern amenities, including high-speed Wi-Fi, comfortable beds,
                study tables, and adequate storage space. We also provide common facilities such as dining halls,
                recreation rooms, fitness centers, and study areas.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Quick Facts</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Established</h3>
                    <p className="text-muted-foreground">1995</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Main Campus, City Center, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Student Population</h3>
                    <p className="text-muted-foreground">5,000+ students</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Programs Offered</h3>
                    <p className="text-muted-foreground">Undergraduate, Postgraduate, Doctoral</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Accreditation</h3>
                    <p className="text-muted-foreground">NAAC 'A' Grade</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <h2 className="text-xl font-semibold mb-4">Hostel Capacity</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Boys Hostel</span>
                  <span className="font-medium">500 rooms</span>
                </div>
                <div className="flex justify-between">
                  <span>Girls Hostel</span>
                  <span className="font-medium">500 rooms</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Capacity</span>
                  <span className="font-medium">1,200 students</span>
                </div>
              </div>

              <Button className="w-full mt-6" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

