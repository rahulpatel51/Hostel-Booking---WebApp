"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

interface BookingFormProps {
  roomId: string
  price: string
}

export function BookingForm({ roomId, price }: BookingFormProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [duration, setDuration] = useState("1")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      window.location.href = "/book-room"
    }, 1500)
  }

  // Calculate total price
  const numericPrice = Number.parseInt(price.replace(/[^0-9]/g, ""))
  const numericDuration = Number.parseInt(duration)
  const totalPrice = numericPrice * numericDuration

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="check-in">Check-in Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <Calendar className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration (months)</Label>
          <select
            id="duration"
            className="w-full p-2 rounded-md border"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months (Full Year)</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your full name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="Enter your email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Enter your phone number" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="student-id">Student ID</Label>
          <Input id="student-id" placeholder="Enter your student ID" required />
        </div>
      </div>

      <Separator className="my-6" />

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Room Price</span>
          <span>
            {price} × {duration} {Number.parseInt(duration) === 1 ? "month" : "months"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Security Deposit</span>
          <span>₹5,000</span>
        </div>
        <div className="flex justify-between">
          <span>Service Fee</span>
          <span>₹1,000</span>
        </div>

        <Separator />

        <div className="flex justify-between font-bold">
          <span>Total Amount</span>
          <span>₹{totalPrice + 5000 + 1000}</span>
        </div>
      </div>

      <Button
        className="w-full mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"
        size="lg"
        disabled={loading}
      >
        {loading ? "Processing..." : "Book Now"}
      </Button>
    </form>
  )
}

