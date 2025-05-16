"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  navVariants,
  logoVariants,
  buttonVariants,
  staggerContainer,
  staggerItem,
} from "@/components/framer-animations"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/fees", label: "Fees" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-black backdrop-blur-md shadow-md py-2" : "bg-transparent text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div variants={logoVariants}>
          <Link href="/">
            <div className="relative h-20 w-48 ">
              <Image src="/logo.png" alt="RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM" fill className="object-contain" />
            </div>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link key={link.href} href={link.href}>
              <motion.span
                className="text-sm font-normal relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                  layoutId={`underline-${index}`}
                />
              </motion.span>
            </Link>
          ))}
          <Link href="/about#contact">
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button className="bg-blue-600 hover:bg-blue-700 font-normal">Contact Us</Button>
            </motion.div>
          </Link>
        </nav>

        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </motion.button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 z-50 bg-white"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <div className="relative h-12 w-40">
                      <Image
                        src="/logo.png"
                        alt="RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                  <motion.button
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>
                <motion.nav
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col p-6 space-y-6"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={staggerItem}>
                      <Link
                        href={link.href}
                        className="text-xl font-medium block py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={staggerItem}>
                    <Link href="/about#contact" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">Contact Us</Button>
                    </Link>
                  </motion.div>
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
