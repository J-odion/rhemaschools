"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Graduation Ceremony",
    description: "Annual graduation ceremony for our graduating students.",
    date: "June 30, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "School Auditorium",
    image: "/images/graduation.jpg",
  },
  {
    id: 2,
    title: "New Student Admission",
    description: "Enrollment period for new students for the upcoming academic year.",
    date: "July 15 - August 30, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Administration Office",
    image: "/images/admission.jpg",
  },
  {
    id: 3,
    title: "Dubai International Excursion",
    description: "Educational trip to explore historic monuments in Dubai.",
    date: "October 10-17, 2025",
    time: "Departure: 8:00 AM",
    location: "Dubai, UAE",
    image: "/images/dubai.jpg",
  },
  {
    id: 4,
    title: "Annual Sports & Games",
    description: "Celebrating athletics and team spirit with various sports competitions.",
    date: "November 5-7, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "School Sports Complex",
    image: "/images/sports.jpg",
  },
]

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [borderProgress, setBorderProgress] = useState(0)
  const interval = 5000 // 5 seconds per slide

  useEffect(() => {
    const borderTimer = setInterval(() => {
      setBorderProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 1
      })
    }, interval / 100)

    const slideTimer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % events.length)
      setBorderProgress(0)
    }, interval)

    return () => {
      clearInterval(slideTimer)
      clearInterval(borderTimer)
    }
  }, [])

  const borderStyle = {
    borderImage: `linear-gradient(90deg, #4285F4 ${borderProgress}%, #aaa ${borderProgress}%) 1`,
  }

  return (
    <div className="relative w-full bg-white rounded-lg overflow-hidden">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"
          }`}
          style={index === activeIndex ? { ...borderStyle, borderWidth: "3px", borderStyle: "solid" } : {}}
        >
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={60}
                  height={60}
                  className="object-cover rounded-md mr-4"
                />
                <h3 className="font-bold text-xl text-blue-600">{event.title}</h3>
              </div>
              <p className="text-gray-600">{event.description}</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1 text-blue-500" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1 text-blue-500" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-500 col-span-2">
                  <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                  {event.location}
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      ))}
      <div className="absolute bottom-2 right-2 flex space-x-1">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => {
              setActiveIndex(index)
              setBorderProgress(0)
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
