"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, CalendarCheck, CreditCard, Home } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Find Your Room",
    description: "Browse through our selection of hostel rooms and find the one that suits your needs and budget.",
  },
  {
    icon: CalendarCheck,
    title: "Select Dates",
    description: "Choose your check-in date and the duration of your stay for the academic session.",
  },
  {
    icon: CreditCard,
    title: "Make Payment",
    description: "Secure your booking by making a payment through our safe and secure payment gateway.",
  },
  {
    icon: Home,
    title: "Move In",
    description: "Complete the verification process and move into your comfortable new hostel room.",
  },
]

export function BookingSteps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            How to Book Your Room
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-[700px]"
          >
            Follow these simple steps to secure your hostel accommodation at Goel Group of Institution
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[calc(25%-30px)] right-[calc(25%-30px)] h-0.5 bg-secondary/30 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                  <step.icon className="h-8 w-8 text-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

