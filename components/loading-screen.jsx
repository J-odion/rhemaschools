"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [stage, setStage] = useState(0)
  const [swirls, setSwirls] = useState(0)
  const [bgOpacity, setBgOpacity] = useState(1)

  const messages = [
    "Welcome to RHEMA School",
    "Building a Brighter Future",
    "Excellence in Education",
    "Nurturing Young Minds",
  ]

  useEffect(() => {
    // Text sequence timing
    const textTimers = messages.map((_, index) => {
      return setTimeout(() => {
        setStage(index + 1)
      }, index * 1500)
    })

    // Logo appears after texts
    const logoTimer = setTimeout(() => {
      setStage(messages.length + 1)
    }, messages.length * 1500)

    // Start swirling
    const swirlTimer = setTimeout(
      () => {
        const swirlInterval = setInterval(() => {
          setSwirls((prev) => {
            const newValue = prev + 1
            // Lighten background with each swirl
            setBgOpacity(1 - newValue * 0.2)

            // Stop after 5 swirls
            if (newValue >= 5) {
              clearInterval(swirlInterval)
            }
            return newValue
          })
        }, 500)

        return () => clearInterval(swirlInterval)
      },
      messages.length * 1500 + 500,
    )

    return () => {
      textTimers.forEach((timer) => clearTimeout(timer))
      clearTimeout(logoTimer)
      clearTimeout(swirlTimer)
    }
  }, [messages.length])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
        transition: "background-color 0.5s ease-out",
      }}
    >
      <AnimatePresence mode="wait">
        {/* Text messages sequence */}
        {stage > 0 && stage <= messages.length && (
          <motion.div
            key={`text-${stage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl md:text-4xl font-bold text-center px-4"
          >
            {messages[stage - 1]}
          </motion.div>
        )}

        {/* Logo appears and swirls */}
        {stage > messages.length && (
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: swirls * 360,
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              rotate: { duration: 0.8, ease: "easeInOut" },
            }}
            className="relative w-48 h-48"
          >
            <Image src="/logo.png" alt="RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM" fill className="object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
