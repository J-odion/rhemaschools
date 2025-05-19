"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import { fadeIn, staggerContainer, staggerItem } from "@/components/framer-animations"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 text-white pt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <motion.div variants={fadeIn} className="space-y-6">
            <div className="relative h-16 w-48">
              <Image src="/logo.png" alt="RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM" fill className="object-contain" />
            </div>
            <p className="text-gray-300 max-w-xs text-xs font-light">
              RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM is committed to nurturing young minds and preparing them for
              future success through quality education and character development.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "#" },
                { icon: <Instagram className="h-5 w-5" />, href: "#" },
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={staggerItem}
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Menu */}
          <motion.div variants={fadeIn} className="space-y-6">
            <h3 className=" font-medium mb-4 text-xs relative tracking-tight">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></span>
            </h3>
            <nav>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Academics", href: "/academics" },
                  { label: "Fees", href: "/fees" },
                ].map((link) => (
                  <motion.li key={link.href} variants={staggerItem}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white text-xs transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2">›</span> {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeIn} className="space-y-6">
            <h3 className=" font-medium mb-4 text-xs relative tracking-tight">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></span>
            </h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.li variants={staggerItem} className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 text-xs mr-3 mt-1" />
                <span className="text-xs text-white">Congo Town, Monrovia, Liberia</span>
              </motion.li>
              <motion.li variants={staggerItem} className="flex items-start">
                <Mail className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <span className="text-xs text-white">info@rpss.academy</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* School Hours */}
          <motion.div variants={fadeIn} className="space-y-6">
            <h3 className="font-medium mb-4 text-xs text-white relative tracking-tight">
              School Hours
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3 text-gray-300 font-light">
              <li className="flex justify-between">
                <span className="text-xs text-white">Monday - Friday:</span>
                <span className="text-xs text-white">8:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-xs text-white">Saturday:</span>
                <span className="text-xs text-white">9:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-xs text-white">Sunday:</span>
                <span className="text-xs text-white">Closed</span>
              </li>
            </ul>
            
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div
          variants={fadeIn}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-white font-light"
        >
          <p className="text-white text-sm">© {currentYear} RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
