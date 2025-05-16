"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Graduation Ceremony",
    description:
      "Our annual graduation ceremony celebrates the achievements of our students as they complete their educational journey at RHEMA. The event includes speeches, awards, and the traditional cap tossing celebration. Family, friends, and community members are invited to join us for this special occasion.",
    date: "June 30, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "School Auditorium",
    image: "/images/graduation.jpg",
  },
  {
    id: 2,
    title: "New Student Admission",
    description:
      "We are now accepting applications for the upcoming academic year. Our admission process includes entrance assessments, interviews, and a review of academic records. We welcome families to visit our campus, meet our faculty, and learn more about our curriculum and educational philosophy.",
    date: "July 15 - August 30, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Administration Office",
    image: "/images/admission.jpg",
  },
  {
    id: 3,
    title: "Dubai International Excursion",
    description:
      "Join our educational journey to Dubai to explore historic monuments and modern architectural marvels. This excursion will provide students with a unique opportunity to experience different cultures, visit world-renowned sites like the Burj Khalifa and Dubai Museum, and expand their global perspective.",
    date: "October 10-17, 2025",
    time: "Departure: 8:00 AM",
    location: "Dubai, UAE",
    image: "/images/dubai.jpg",
  },
  {
    id: 4,
    title: "Annual Sports & Games",
    description:
      "Our annual sports and games event brings together students, teachers, and parents for friendly competition and physical activity. The three-day event includes track and field competitions, team sports, and individual athletic events. The event culminates in an awards ceremony recognizing outstanding athletes.",
    date: "November 5-7, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "School Sports Complex",
    image: "/images/sports.jpg",
  },
]

export default function EventsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [borderProgress, setBorderProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const interval = 5000 // 5 seconds per slide
  const imageRef = useRef(null)

  useEffect(() => {
    const borderTimer = setInterval(() => {
      setBorderProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 1
      })
    }, interval / 100)

    const slideTimer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => {
      clearInterval(slideTimer)
      clearInterval(borderTimer)
    }
  }, [activeIndex])

  useEffect(() => {
    if (imageRef.current) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
      }, 300)
    }
  }, [activeIndex])

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % events.length)
    setBorderProgress(0)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1))
    setBorderProgress(0)
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
    setBorderProgress(0)
  }

  const borderStyle = {
    borderImage: `linear-gradient(90deg, #4285F4 ${borderProgress}%, #aaa ${borderProgress}%) 1`,
  }

  return (
    <div className="w-full">
      <Card className="overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row" style={{ ...borderStyle, borderWidth: "3px", borderStyle: "solid" }}>
          <div className="p-6 md:w-1/2 md:order-1 order-2">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">{events[activeIndex].title}</h3>
            <p className="text-gray-600 mb-4">{events[activeIndex].description}</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-500">
                <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                {events[activeIndex].date}
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="h-5 w-5 mr-2 text-blue-500" />
                {events[activeIndex].time}
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                {events[activeIndex].location}
              </div>
            </div>
            <Link href={`/events/${events[activeIndex].id}`}>
              <Button className="bg-blue-500 hover:bg-blue-600">Learn More</Button>
            </Link>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden md:order-2 order-1">
            <div
              ref={imageRef}
              className={`w-full h-full transition-transform duration-5000 ${isAnimating ? "scale-100" : "scale-110"}`}
            >
              <Image
                src={events[activeIndex].image || "/placeholder.svg"}
                alt={events[activeIndex].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Card>

      <div className="flex justify-end mt-4 space-x-2">
        <Button variant="outline" size="icon" onClick={prevSlide} className="h-8 w-8 rounded-full p-0">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>

        {events.map((_, index) => (
          <Button
            key={index}
            variant={index === activeIndex ? "default" : "outline"}
            size="icon"
            onClick={() => goToSlide(index)}
            className={`h-8 w-8 rounded-full p-0 ${index === activeIndex ? "bg-blue-500" : ""}`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
            <span className="h-2 w-2 rounded-full bg-current"></span>
          </Button>
        ))}

        <Button variant="outline" size="icon" onClick={nextSlide} className="h-8 w-8 rounded-full p-0">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  )
}
