"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function RoomFilters() {
  const [priceRange, setPriceRange] = useState([5000, 12000])

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      <Accordion type="multiple" defaultValue={["hostel-type", "room-type", "price", "amenities"]}>
        <AccordionItem value="hostel-type">
          <AccordionTrigger>Hostel Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="boys-hostel" />
                <label
                  htmlFor="boys-hostel"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Boys Hostel
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="girls-hostel" />
                <label
                  htmlFor="girls-hostel"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Girls Hostel
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="room-type">
          <AccordionTrigger>Room Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="single" />
                <label
                  htmlFor="single"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Single Occupancy
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="double" />
                <label
                  htmlFor="double"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Double Sharing
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="triple" />
                <label
                  htmlFor="triple"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Triple Sharing
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[5000, 12000]}
                min={3000}
                max={15000}
                step={500}
                onValueChange={(value) => setPriceRange(value)}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">₹{priceRange[0]}</span>
                <span className="text-sm">₹{priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="amenities">
          <AccordionTrigger>Amenities</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="wifi" />
                <label
                  htmlFor="wifi"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Wi-Fi
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="attached-bathroom" />
                <label
                  htmlFor="attached-bathroom"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Attached Bathroom
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ac" />
                <label
                  htmlFor="ac"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Air Conditioning
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="tv" />
                <label
                  htmlFor="tv"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  TV
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="fridge" />
                <label
                  htmlFor="fridge"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mini Fridge
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator className="my-4" />

      <div className="flex gap-2">
        <Button className="flex-1">Apply Filters</Button>
        <Button variant="outline" className="flex-1">
          Reset
        </Button>
      </div>
    </div>
  )
}

