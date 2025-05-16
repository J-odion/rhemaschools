"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"
import { fadeIn, staggerItem } from "@/components/framer-animations"

export default function Contact() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full py-12"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for more information about our school and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
            <p className="text-gray-600">Congo Town, Monrovia, Liberia</p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email Address</h3>
            <p className="text-gray-600">info@rhemaschool.edu.lr</p>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Link href="/about#contact">
            <Button className="bg-blue-600 hover:bg-blue-700">Visit Our School</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
