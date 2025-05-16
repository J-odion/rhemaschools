"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Dot } from "lucide-react"
import Image from "next/image"

const SECTIONS = [
  {
    id: "vision",
    title: "Our Vision",
    content: "To be a leading institution that shapes the future by nurturing leaders with strong moral values and academic excellence.",
    image: "/1.jpg",
    stats: [{ label: "Students", value: "1,200+" }, { label: "Years", value: "15+" }]
  },
  {
    id: "mission",
    title: "Our Mission",
    content: "To provide a holistic educational experience that empowers students to excel academically and grow personally.",
    image: "/2.jpg",
    stats: [{ label: "Teachers", value: "80+" }, { label: "Programs", value: "10+" }]
  },
  {
    id: "philosophy",
    title: "Our Philosophy",
    content: "We believe in the potential of every child and commit to fostering an environment where they can thrive.",
    image: "/3.jpg",
    stats: [{ label: "Campuses", value: "3" }, { label: "Languages", value: "4" }]
  },
]

export default function HomeAboutSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {SECTIONS.map((section, index) => (
              <div
                key={section.id}
                className="min-w-full flex flex-col lg:flex-row items-center gap-12 p-6"
              >
                <div className="relative w-full lg:w-1/2 h-96 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={section.image}
                    alt={section.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-3xl font-semibold">
                    {section.title}
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  <p className="text-gray-700 mb-6">{section.content}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {section.stats.map((stat, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg shadow">
                        <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="mt-4 flex items-center gap-4 pl-6">
          <div className="flex gap-2">
            {SECTIONS.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex ? "bg-blue-600" : "bg-gray-400"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {SECTIONS[selectedIndex].id.toUpperCase()}
          </span>
        </div>
      </div>
    </section>
  )
}
