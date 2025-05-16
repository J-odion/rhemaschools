"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function ScrollSection({ backgroundImage, sections, title, subtitle, className = "" }) {
  const containerRef = useRef(null)
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const { top, height } = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate scroll progress from 0 to 1
      const progress = Math.max(0, Math.min(1, (windowHeight - top) / (height + windowHeight)))

      // Determine the current section based on scroll position
      const sectionCount = sections.length
      const sectionIndex = Math.floor(progress * sectionCount)

      if (sectionIndex !== activeSection) {
        setActiveSection(Math.min(sectionIndex, sectionCount - 1))
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections.length, activeSection])

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${sections.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage || "/placeholder.svg?height=1080&width=1920"}
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50" />
        </div>

        {/* Header */}
        <div className="relative z-10 pt-32 px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <div className="w-20 h-1 bg-blue-500 mb-6" />
            <p className="text-lg text-gray-200">{subtitle}</p>
          </motion.div>
        </div>

        {/* Active Content Section */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {sections.map((section, index) =>
              index === activeSection ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <p className="text-gray-200">{section.content}</p>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
