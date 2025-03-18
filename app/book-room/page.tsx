"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, Building2, CreditCard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"

export default function BookRoomPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [duration, setDuration] = useState("1")
  const [roomType, setRoomType] = useState("")
  const [hostelType, setHostelType] = useState("")
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentId: "",
    address: "",
    guardianName: "",
    guardianPhone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setStep(3) // Move to success step
    }, 1500)
  }

  // Calculate total price
  const getRoomPrice = () => {
    switch (roomType) {
      case "single-standard":
        return 8000
      case "single-deluxe":
        return 9000
      case "single-premium":
        return 10000
      case "double-standard":
        return 6000
      case "double-deluxe":
        return 6500
      case "triple-standard":
        return 5000
      case "triple-premium":
        return 5500
      default:
        return 0
    }
  }

  const numericPrice = getRoomPrice()
  const numericDuration = Number.parseInt(duration)
  const totalPrice = numericPrice * numericDuration

  return (
    <main className="min-h-screen py-8">
      <div className="container">
        <Button variant="ghost" size="sm" asChild className="mb-2">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Hostel Room</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Complete the form below to book your hostel room at Goel Group of Institution.
        </p>

        <div className="flex justify-between items-center mb-8">
          <div className="hidden md:flex w-full max-w-3xl mx-auto">
            <div
              className={`flex-1 flex flex-col items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? "bg-primary text-white" : "bg-muted"}`}
              >
                1
              </div>
              <span className="text-sm font-medium">Room Selection</span>
            </div>
            <div className={`w-24 h-0.5 mt-5 ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
            <div
              className={`flex-1 flex flex-col items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? "bg-primary text-white" : "bg-muted"}`}
              >
                2
              </div>
              <span className="text-sm font-medium">Personal Details</span>
            </div>
            <div className={`w-24 h-0.5 mt-5 ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
            <div
              className={`flex-1 flex flex-col items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? "bg-primary text-white" : "bg-muted"}`}
              >
                3
              </div>
              <span className="text-sm font-medium">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Select Your Room</CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setStep(2)
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="hostel-type">Hostel Type</Label>
                        <select
                          id="hostel-type"
                          className="w-full p-2 rounded-md border"
                          value={hostelType}
                          onChange={(e) => setHostelType(e.target.value)}
                          required
                        >
                          <option value="">Select Hostel Type</option>
                          <option value="boys">Boys Hostel</option>
                          <option value="girls">Girls Hostel</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="room-type">Room Type</Label>
                        <select
                          id="room-type"
                          className="w-full p-2 rounded-md border"
                          value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                          required
                        >
                          <option value="">Select Room Type</option>
                          <option value="single-standard">Standard Single Room (₹8,000/month)</option>
                          <option value="single-deluxe">Deluxe Single Room (₹9,000/month)</option>
                          <option value="single-premium">Premium Single Room (₹10,000/month)</option>
                          <option value="double-standard">Standard Double Sharing (₹6,000/month)</option>
                          <option value="double-deluxe">Deluxe Double Sharing (₹6,500/month)</option>
                          <option value="triple-standard">Triple Sharing Economy (₹5,000/month)</option>
                          <option value="triple-premium">Premium Triple Sharing (₹5,500/month)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          required
                        >
                          <option value="1">1 Month</option>
                          <option value="3">3 Months</option>
                          <option value="6">6 Months</option>
                          <option value="12">12 Months (Full Year)</option>
                        </select>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={!date || !roomType || !hostelType}>
                      Continue to Personal Details
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Personal Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input
                          id="studentId"
                          name="studentId"
                          placeholder="Enter your student ID"
                          value={formData.studentId}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Permanent Address</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Enter your permanent address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="guardianName">Guardian's Name</Label>
                        <Input
                          id="guardianName"
                          name="guardianName"
                          placeholder="Enter guardian's name"
                          value={formData.guardianName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guardianPhone">Guardian's Phone</Label>
                        <Input
                          id="guardianPhone"
                          name="guardianPhone"
                          placeholder="Enter guardian's phone"
                          value={formData.guardianPhone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="button" variant="outline" onClick={() => setStep(1)}>
                        Back
                      </Button>
                      <Button type="submit" className="flex-1" disabled={loading}>
                        {loading ? "Processing..." : "Complete Booking"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Your hostel room has been booked successfully. We've sent a confirmation email to {formData.email}{" "}
                    with all the details.
                  </p>
                  <div className="bg-muted p-4 rounded-lg text-left max-w-md mx-auto mb-6">
                    <h3 className="font-medium mb-2">Booking Details:</h3>
                    <p className="text-sm">
                      Booking Reference: <span className="font-medium">GGI-{Date.now().toString().slice(-8)}</span>
                    </p>
                    <p className="text-sm">
                      Room Type:{" "}
                      <span className="font-medium">
                        {roomType.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </span>
                    </p>
                    <p className="text-sm">
                      Check-in Date: <span className="font-medium">{date ? format(date, "PPP") : "Not specified"}</span>
                    </p>
                    <p className="text-sm">
                      Duration:{" "}
                      <span className="font-medium">
                        {duration} {Number.parseInt(duration) === 1 ? "Month" : "Months"}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" asChild>
                      <Link href="/">Return to Home</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/contact">Contact Support</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roomType && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Room Type</h3>
                        <p className="text-muted-foreground">
                          {roomType.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </p>
                      </div>
                    </div>
                  )}

                  {hostelType && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Hostel Type</h3>
                        <p className="text-muted-foreground">
                          {hostelType === "boys" ? "Boys Hostel" : "Girls Hostel"}
                        </p>
                      </div>
                    </div>
                  )}

                  {date && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Check-in Date</h3>
                        <p className="text-muted-foreground">{format(date, "PPP")}</p>
                      </div>
                    </div>
                  )}

                  {duration && (
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Duration</h3>
                        <p className="text-muted-foreground">
                          {duration} {Number.parseInt(duration) === 1 ? "Month" : "Months"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Room Price</span>
                    <span>
                      ₹{numericPrice} × {duration} {Number.parseInt(duration) === 1 ? "month" : "months"}
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

                <div className="mt-6 p-4 bg-muted rounded-lg flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Booking requires verification of student ID and payment of security deposit. Room allocation is
                    subject to availability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

