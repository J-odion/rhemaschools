import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import HeaderSection from "@/components/header"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const faqItems = [
    {
      question: "What are the school hours?",
      answer:
        "School hours are from 8:00 AM to 3:00 PM, Monday through Friday. Students are expected to arrive by 7:45 AM for morning assembly.",
    },
    {
      question: "How can I apply for admission?",
      answer:
        "You can apply for admission by visiting our school office during working hours or by calling our admissions office directly.",
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
      <div className="flex flex-col min-h-screen ">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                Get in touch with RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ScrollReveal direction="left">
                <div>
                  <SectionHeading
                    title="Get In Touch"
                    subtitle="We'd love to hear from you. Please use our contact information to get in touch with us regarding admissions, academics, or any other inquiries."
                  />

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Our Location</h3>
                        <p className="text-gray-600">Congo Town, Monrovia, Liberia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Email Address</h3>
                        <p className="text-gray-600">info@rhemaschool.edu.lr</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">Office Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/about">
                      <Button className="bg-blue-600 hover:bg-blue-700">Visit Our School</Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
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
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
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
