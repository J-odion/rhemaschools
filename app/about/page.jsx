import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail } from "lucide-react"
import ScrollSection from "@/components/scroll-section"
import ScrollReveal from "@/components/scroll-reveal"
import HeaderSection from "@/components/header"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutPage() {
  // About section content for the scroll animation
  const aboutSections = [
    {
      title: "Our History",
      content:
        "RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM was established with a vision to provide quality education to children in Congo Town, Monrovia, Liberia. Since its inception, the school has been dedicated to nurturing young minds and preparing them for future success.",
    },
    {
      title: "Our Mission",
      content:
        "To provide a comprehensive, high-quality education that empowers students to reach their full potential academically, socially, and morally. We strive to create a nurturing environment where students develop critical thinking skills, creativity, and a strong ethical foundation.",
    },
    {
      title: "Our Vision",
      content:
        "To be the leading educational institution in Liberia, recognized for academic excellence, innovative teaching methods, and graduates who are well-prepared to succeed in higher education and contribute positively to their communities and the world.",
    },
    {
      title: "Our Values",
      content:
        "Excellence, Integrity, Respect, Innovation, and Community. These core values guide our approach to education and shape our school culture, ensuring that we provide a supportive and challenging environment for all students.",
    },
  ]

  const faqItems = [
    {
      question: "What are the school hours?",
      answer:
        "School hours are from 8:00 AM to 3:00 PM, Monday through Friday. Students are expected to arrive by 7:45 AM for morning assembly.",
    },
    {
      question: "How can I apply for admission?",
      answer:
        "You can apply for admission by visiting our school office during working hours or downloading the application form from our website and submitting it with the required documents.",
    },
    {
      question: "What is the student-teacher ratio?",
      answer:
        "We maintain a low student-teacher ratio of approximately 20:1 to ensure personalized attention for each student.",
    },
    {
      question: "Do you offer transportation services?",
      answer:
        "Yes, we offer transportation services for students living within a certain radius of the school. Additional fees apply for this service.",
    },
  ]

  return (

    <>
      <HeaderSection />
      <div className="flex flex-col min-h-screen">
        {/* Scroll Section with Fixed Background */}
        <ScrollSection
          backgroundImage="/12.jpg?height=1080&width=1920"
          title="About RHEMA School"
          subtitle="Building a Brighter Future Together in Congo Town, Monrovia, Liberia"
          sections={aboutSections}
        />

        {/* Contact Info Section */}
        <section id="contact" className="w-full py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Contact Us"
              subtitle="Get in touch with us for more information about our school and programs."
              center={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              <ScrollReveal>
                <div className="flex flex-col items-center text-center bg-blue-50 p-8 rounded-xl shadow-md">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
                  <p className="text-gray-600">Congo Town, Monrovia, Liberia</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-col items-center text-center bg-blue-50 p-8 rounded-xl shadow-md">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email Address</h3>
                  <p className="text-gray-600">info@rhemaschool.edu.lr</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="mt-16">
              <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31708.337812405384!2d-10.822390251365972!3d6.300948736689611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0ce751e6b6b5a9%3A0x10fe13799adcea0!2sCongo%20Town%2C%20Monrovia%2C%20Liberia!5e0!3m2!1sen!2sus!4v1715832055562!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find answers to commonly asked questions about RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM."
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
