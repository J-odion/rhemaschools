"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import HeaderSection from "@/components/header"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Currency symbols for background animation
const currencySymbols = ["$", "€", "£", "¥", "₦", "₹", "₽", "₩", "₴", "₺"]

export default function FeesPage() {
  const [symbols, setSymbols] = useState([])

  useEffect(() => {
    // Generate random currency symbols for animation
    const generatedSymbols = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      symbol: currencySymbols[Math.floor(Math.random() * currencySymbols.length)],
      x: Math.random() * 100, // random x position (%)
      y: Math.random() * 100, // random y position (%)
      size: Math.random() * 2 + 1, // random size (1-3rem)
      duration: Math.random() * 50 + 30, // random animation duration (30-80s)
      delay: Math.random() * 5, // random delay (0-5s)
    }))
    setSymbols(generatedSymbols)
  }, [])

  const feeStructure = [
    {
      class: "12",
      description:
        "Scool Fees, (Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear), Graduation, Maintenance Fee, End Of Year Party, Development Levy, Notebooks, Neco Fee, Wassce Fee, Neco & Wassce Lesson, PTF(termly), ICT",
      amount: "$9,550",
    },
    {
      class: "11",
      description:
        "(Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear), Texbooks, Maintenance Fee, End Of Year Party, Development Levy, PTF(termly), ICT",
      amount: "$9,250",
    },
    {
      class: "10",
      description:
        "(Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear), Texbooks, Maintenance Fee, End Of Year Party, Development Levy, PTF(termly), ICT",
      amount: "$8,850",
    },
    {
      class: "9",
      description:
        "(Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear) Texbooks, Maintenance Fee, End Of The Year Party, Development Levy, PTF(termly), Diction, ICT",
      amount: "$8,850",
    },
    {
      class: "8",
      description:
        "(Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear) Texbooks, Maintenance Fee, End Of The Year Party, Development Levy, PTF(termly), Diction, ICT",
      amount: "$8,250",
    },
    {
      class: "7",
      description:
        "(Uniform(1set) Blazer, Cardigan, Sportwear, Tie, Hat, Traditional Wear, Texbooks, Maintenance Fee, End Of Year Party, Development Levy, PTF(termly), Diction, ICT",
      amount: "$7,850",
    },
    {
      class: "Primary 5-6",
      description:
        "Primary 5 & 6 : (Tuition, Uniform, Socks, Cardigan, Sportwear, Traditional Wear, ICT) And Textbooks",
      amount: "$7,500",
    },
    {
      class: "Primary 1-4",
      description: "(Tuition, Uniform, Socks, Cardigan, Sportwear, Traditional Wear, ICT) And Textbooks",
      amount: "$7,250",
    },
  ]

  const faqItems = [
    {
      question: "When are fees due?",
      answer:
        "Fees are due at the beginning of each term. The first installment is due before the start of the first term, the second installment before the second term, and the third installment before the third term.",
    },
    {
      question: "Are there any discounts available?",
      answer:
        "Yes, we offer a 5% discount for the second child and 10% for the third child enrolled from the same family. We also offer scholarships for academically exceptional students.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "Payments can be made via bank transfer, mobile money, or directly at the school's finance office. We do not accept cash payments above a certain amount for security reasons.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "No refund will be made after the commencement of the term. Please refer to the school's refund policy document for more details and special circumstances.",
    },
  ]

  return (
    <>
      <HeaderSection />
      <div className="flex flex-col min-h-screen">
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
          {/* Animated Currency Symbols Background */}
          {symbols.map((item) => (
            <motion.div
              key={item.id}
              className="absolute text-white/10 opacity-5 font-bold pointer-events-none"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                fontSize: `${item.size}rem`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                rotate: [0, Math.random() * 360, 0],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {item.symbol}
            </motion.div>
          ))}

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fee Structure</h1>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM Annual Tuition Fees 2025
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2"
                  onClick={() => {
                    // Create a link to the download page and click it
                    const link = document.createElement("a")
                    link.href = "/fees/download"
                    link.click()
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download Fee Structure
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="Annual Tuition Fees 2023/2024"
              subtitle="RHEMA Primary & Secondary School is committed to providing quality education at competitive rates."
              center={true}
            />

            <ScrollReveal>
              <div className="overflow-x-auto mt-12">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-blue-500 px-4 py-3 text-left">CLASS</th>
                      <th className="border border-blue-500 px-4 py-3 text-left">DESCRIPTION</th>
                      <th className="border border-blue-500 px-4 py-3 text-center">AMOUNT PAYABLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-blue-50" : "bg-white"} hover:bg-blue-100 transition-colors`}
                      >
                        <td className="border border-gray-200 px-4 py-3 font-medium">{fee.class}</td>
                        <td className="border border-gray-200 px-4 py-3">{fee.description}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center font-bold text-blue-600">
                          {fee.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6 italic">
                "RHEMA Primary & Secondary School is God's divine mandate to 'Train Future Leaders in a Godly Way',
                equipping our children for a brighter future."
              </p>
            </div>

            <div className="mt-16 space-y-8">
              <ScrollReveal>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-blue-600 mb-4">Payment Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Payment Schedule</h4>
                        <p className="text-gray-600">
                          Fees can be paid in full or in three installments at the beginning of each term.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Payment Methods</h4>
                        <p className="text-gray-600">
                          Payments can be made via bank transfer, mobile money, or directly at the school's finance
                          office.
                        </p>
                      </div>
                      {/* <div>
                        <h4 className="font-medium">Bank Details</h4>
                        <p className="text-gray-600">
                          Bank Name: [Bank Name]
                          <br />
                          Account Name: RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM
                          <br />
                          Account Number: XXXX-XXXX-XXXX
                        </p>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-blue-600 mb-4">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
                          <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                For more information about our fee structure or to discuss payment options, please contact our finance
                office. You can view, print, or download our complete fee structure document for your reference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about#contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
                </Link>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => {
                    // Create a link to the download page and click it
                    const link = document.createElement("a")
                    link.href = "/fees/download"
                    link.click()
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download Fee Structure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
