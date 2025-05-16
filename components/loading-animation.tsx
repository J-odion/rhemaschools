"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingAnimation() {
  const [showWelcome, setShowWelcome] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [dots, setDots] = useState(".")

  useEffect(() => {
    // Animate the dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."))
    }, 500)

    // Show welcome message after 2.5 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true)
    }, 2500)

    // Hide the entire component after 5.5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 5500)

    return () => {
      clearInterval(dotsInterval)
      clearTimeout(welcomeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500">
      <div className="relative w-40 h-40 mb-8">
        <Image src="/logo.png" alt="RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM" fill className="object-contain" />
      </div>

      <div className="text-white text-2xl md:text-3xl font-bold text-center">
        {!showWelcome ? (
          <div className="flex items-center">
            <span>...loading{dots}</span>
          </div>
        ) : (
          <div className="animate-fade-in">...welcome to RHEMA Primary School System...</div>
        )}
      </div>

      <div className="w-60 h-1 bg-white/30 rounded-full mt-8 overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-[5000ms] ease-linear"
          style={{ width: isVisible ? "100%" : "0%" }}
        />
      </div>
    </div>
  )
}
