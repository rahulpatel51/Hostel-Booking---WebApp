"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "B.Tech Student",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    content:
      "Living in the Goel Group hostel has been a fantastic experience. The facilities are top-notch, and the staff is always helpful. I've made great friends here, and the environment is perfect for both studying and socializing.",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "MBA Student",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    content:
      "The hostel rooms are spacious and well-maintained. The high-speed internet has been a lifesaver for my research work. The dining facility serves delicious food, and I appreciate the security measures in place.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "BCA Student",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    content:
      "I was initially hesitant about hostel life, but the Goel Group hostel exceeded my expectations. The study rooms are quiet and perfect for focused learning, and the recreation facilities help me unwind after a long day.",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "B.Com Student",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    content:
      "The booking process was smooth and hassle-free. I got a comfortable room that fits my budget perfectly. The laundry service and dining facilities make life so much easier, allowing me to focus on my studies.",
  },
]

export function Testimonials() {
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
            What Our Students Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-[700px]"
          >
            Hear from students who have experienced our hostel accommodations at Goel Group of Institution
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-secondary/60 mb-4" />
                  <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

