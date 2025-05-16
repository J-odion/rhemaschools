"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Book, BookOpen, Users, Monitor, Flag, Trophy, GraduationCap, PenTool, Scroll } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import HeaderSection from "@/components/header"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Academic icons for background animation
const academicIcons = [
  <GraduationCap key="cap" size={24} />,
  <Book key="book" size={24} />,
  <PenTool key="pen" size={24} />,
  <Scroll key="scroll" size={24} />,
  <BookOpen key="bookopen" size={24} />,
]

export default function AcademicsPage() {
  const [icons, setIcons] = useState([])

  useEffect(() => {
    // Generate random academic icons for animation
    const generatedIcons = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      icon: academicIcons[Math.floor(Math.random() * academicIcons.length)],
      x: Math.random() * 100, // random x position (%)
      y: Math.random() * 100, // random y position (%)
      size: Math.random() * 1.5 + 1, // random size (1-2.5)
      duration: Math.random() * 50 + 30, // random animation duration (30-80s)
      delay: Math.random() * 5, // random delay (0-5s)
    }))
    setIcons(generatedIcons)
  }, [])

  const faqItems = [
    {
      question: "What curriculum does RHEMA School follow?",
      answer:
        "RHEMA School follows a comprehensive curriculum that integrates national educational standards with international best practices. Our curriculum is designed to provide a well-rounded education that prepares students for success in higher education and beyond.",
    },
    {
      question: "What is the student-teacher ratio?",
      answer:
        "We maintain a low student-teacher ratio of approximately 20:1 to ensure personalized attention for each student. This allows our teachers to address individual learning needs and provide appropriate support and challenges.",
    },
    {
      question: "Are there extracurricular activities available?",
      answer:
        "Yes, we offer a wide range of extracurricular activities including sports, arts, music, debate, robotics, and various clubs. These activities help students develop their talents, interests, and social skills outside the classroom.",
    },
    {
      question: "How do you assess student progress?",
      answer:
        "Student progress is assessed through a combination of continuous assessment, projects, presentations, and examinations. We provide regular feedback to students and parents through report cards, parent-teacher conferences, and our online portal.",
    },
  ]

  return (
    <>
      <HeaderSection />
      <div className="flex flex-col min-h-screen ">
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
          {/* Animated Academic Icons Background */}
          {icons.map((item) => (
            <motion.div
              key={item.id}
              className="absolute text-white/90 opacity-5 pointer-events-none"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: `scale(${item.size})`,
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
              {item.icon}
            </motion.div>
          ))}

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Academic Programs</h1>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                Discover our comprehensive curriculum designed to prepare students for future success.
              </p>
            </div>
          </div>
        </section>

        <section id="primary" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <ScrollReveal direction="left">
                <div>
                  <SectionHeading title="Primary Education" />
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Our primary education program focuses on building a strong foundation in literacy, numeracy, and
                      critical thinking skills. We provide a nurturing environment where young learners can develop their
                      academic abilities while fostering creativity and social skills.
                    </p>
                    <p>
                      The curriculum is designed to be engaging and interactive, with a focus on hands-on learning
                      experiences. Our experienced teachers use a variety of teaching methods to accommodate different
                      learning styles and ensure that each student receives the support they need to succeed.
                    </p>
                    <h3 className="text-xl font-bold text-blue-600 mt-6 mb-2">Primary Program Highlights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Book className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span>
                          Comprehensive coverage of core subjects: Mathematics, English, Science, and Social Studies
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span>Small class sizes to ensure personalized attention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Monitor className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span>Introduction to computer literacy and technology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Flag className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span>Regular field trips and experiential learning opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/3.jpg"
                    alt="Primary school students"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="secondary" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <ScrollReveal direction="left" className="order-2 lg:order-1">
                <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/41241.jpg"
                    alt="Secondary school students"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2} className="order-1 lg:order-2">
                <div>
                  <SectionHeading title="Secondary Education" />
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Our secondary education program builds upon the foundation established in primary school and
                      prepares students for higher education and future careers. The curriculum is rigorous and
                      comprehensive, covering a wide range of subjects and encouraging critical thinking, problem-solving,
                      and independent learning.
                    </p>
                    <p>
                      Students receive guidance and support as they navigate the challenges of adolescence and make
                      important decisions about their future. Our dedicated teachers are committed to helping each student
                      reach their full potential and achieve their academic and personal goals.
                    </p>
                    <h3 className="text-xl font-bold text-blue-600 mt-6 mb-2">Secondary Program Highlights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span>Advanced subjects including Biology, Chemistry, Physics, Literature, and Mathematics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Monitor className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span>Computer science and technology education</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span>College preparation and career guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span>Leadership development and community service opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="Special Programs"
              subtitle="We offer a variety of special programs to enrich our students' educational experience."
              center={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <ScrollReveal delay={0.1}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-blue-600"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="M6 8h4" />
                          <path d="M14 8h4" />
                          <path d="M6 12h4" />
                          <path d="M14 12h4" />
                          <path d="M6 16h4" />
                          <path d="M14 16h4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">STEM Program</h3>
                      <p className="text-gray-600">
                        Our STEM program integrates science, technology, engineering, and mathematics to develop
                        problem-solving skills and critical thinking.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-blue-600"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          <path d="M2 12h20" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">International Exchange</h3>
                      <p className="text-gray-600">
                        Students have the opportunity to participate in international exchange programs, gaining global
                        perspectives and cultural awareness.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-blue-600"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                          <circle cx="17" cy="7" r="5" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Arts & Culture</h3>
                      <p className="text-gray-600">
                        Our arts program includes music, visual arts, drama, and dance, encouraging creative expression
                        and cultural appreciation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find answers to commonly asked questions about our academic programs."
              center={true}
            />

            <div className="max-w-3xl mx-auto mt-12">
              <Card>
                <CardContent className="p-6">
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
