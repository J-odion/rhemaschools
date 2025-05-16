"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import { fadeIn } from "@/components/framer-animations"

export default function AnimatedLayout({ children }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstVisit, setIsFirstVisit] = useState(true)

  useEffect(() => {
    // Check if this is the first visit to the site
    const hasVisited = sessionStorage.getItem("hasVisited")
    if (hasVisited) {
      setIsFirstVisit(false)
      setIsLoading(false)
    } else {
      // Set loading to false after 8 seconds on first visit (longer for new animation)
      const timer = setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem("hasVisited", "true")
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && isFirstVisit ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key={pathname}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
            className="flex flex-col min-h-screen"
          >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
