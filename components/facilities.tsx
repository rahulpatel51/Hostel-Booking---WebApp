"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wifi, Utensils, Dumbbell, BookOpen, ShieldCheck, Tv, Droplets, Fan } from "lucide-react"

const facilities = [
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description: "24/7 high-speed internet connectivity throughout the hostel premises.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    icon: Utensils,
    title: "Dining Facility",
    description: "Nutritious and delicious meals served in our spacious dining hall.",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Well-equipped gym with modern equipment for physical fitness.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    icon: BookOpen,
    title: "Study Rooms",
    description: "Quiet and comfortable study spaces for focused learning.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Round-the-clock security with CCTV surveillance for your safety.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    icon: Tv,
    title: "Recreation Room",
    description: "Entertainment area with TV, indoor games, and relaxation space.",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    icon: Droplets,
    title: "Laundry Service",
    description: "Convenient laundry facilities available for all residents.",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    icon: Fan,
    title: "Air Conditioning",
    description: "Climate-controlled environments in premium hostel rooms.",
    image:
      "https://images.unsplash.com/photo-1627752458987-d299918baab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
]

export function Facilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-gray-50" ref={ref} id="facilities">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Hostel Facilities & Amenities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-[700px]"
          >
            Enjoy a comfortable stay with our comprehensive range of facilities designed to enhance your hostel
            experience at Goel Group of Institution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img
                src={facility.image || "/placeholder.svg"}
                alt={facility.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/90 flex items-center justify-center">
                    <facility.icon className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{facility.title}</h3>
                </div>
                <p className="text-gray-200">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

