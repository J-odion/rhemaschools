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

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
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
      initial={false}
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black backdrop-blur-md shadow-md py-2"
          : "bg-transparent text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div variants={logoVariants}>
          <Link href="/">
            <div className="relative h-20 w-48">
              <Image
                src="/logo.png"
                alt="RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={link.href} className="text-sm font-normal relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
          <Link href="/about#contact">
            <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button className="bg-blue-600 hover:bg-blue-700 font-normal">Contact Us</Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={buttonVariants}
          initial={false}
          whileHover="hover"
          whileTap="tap"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Mobile Nav with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-white text-black md:hidden flex flex-col"
          >
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>

            <nav className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xl font-medium block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
              <div>
                <Link href="/about#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">Contact Us</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
