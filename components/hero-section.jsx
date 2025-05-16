"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { slideUp, slideInLeft, slideInRight } from "@/components/framer-animations"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-800">{/* Fallback background color if image fails to load */}</div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={slideInLeft} initial="hidden" animate="visible" className="text-white space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block bg-blue-600 px-4 py-1 rounded-full text-sm font-normal"
            >
              Excellence in Education
            </motion.div>

            <motion.h1
              variants={slideUp}
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight"
            >
              Building <span className="text-blue-400">Brighter</span> Futures Together
            </motion.h1>

            <motion.p variants={slideUp} className="text-xl md:text-xs text-gray-200 max-w-xl font-light">
              RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM is committed to nurturing young minds through quality education
              and character development.
            </motion.p>

            <motion.div variants={slideUp} className="flex flex-wrap gap-4 pt-4">
              <Link href="/about">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md font-normal">
                    Discover More
                  </Button>
                </motion.div>
              </Link>
              <Link href="/about#contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md font-normal"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" animate="visible" className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
              style={{ height: "500px" }}
            >
              <div className="absolute inset-0 bg-blue-100">
                <Image src={"/3.jpg?"} alt="admissions image" width={800} height={700} className=" object-cover w-full h-full" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-20 bg-white p-6 rounded-lg shadow-xl max-w-xs z-10"
            >
              <h3 className="text-xl font-medium text-blue-600 mb-2">Enrollment Open</h3>
              <p className="text-gray-600 font-light">Join our community of learners for the upcoming academic year.</p>
              <Link href="/about#contact" className="text-blue-600 inline-flex items-center mt-2 font-normal">
                Apply Now
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-white text-sm mb-2 font-light">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1.5 h-3 bg-white rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
