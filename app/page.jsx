"use client"
import SectionHeading from "@/components/section-heading"
import AnimatedCard from "@/components/animated-card"
import Contact from "@/components/contact"
import HomeAboutSection from "@/components/home-about-section"
import HeaderSection from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, Building, Award, Globe, Lightbulb, Download, ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import Image from "next/image"
// import HeroSection from "../components/hero-section"

// Dynamically import HeroSection with no SSR
const HeroSection = dynamic(() => import("@/components/hero-section"), { ssr: true })

export default function Home() {
  return (
    <>
    <HeaderSection />
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose RHEMA School"
            subtitle="We provide a comprehensive educational experience that nurtures academic excellence and character development."
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimatedCard
              icon={<BookOpen className="h-6 w-6 text-blue-600" />}
              title="Academic Excellence"
              description="Our comprehensive curriculum is designed to challenge students intellectually and prepare them for future success."
              delay={0.1}
            />
            <AnimatedCard
              icon={<Users className="h-6 w-6 text-blue-600" />}
              title="Experienced Faculty"
              description="Our dedicated teachers are committed to nurturing each student's potential and providing personalized attention."
              delay={0.2}
            />
            <AnimatedCard
              icon={<Building className="h-6 w-6 text-blue-600" />}
              title="Modern Facilities"
              description="Our campus features state-of-the-art classrooms, laboratories, and recreational spaces to enhance learning."
              delay={0.3}
            />
            <AnimatedCard
              icon={<Award className="h-6 w-6 text-blue-600" />}
              title="Character Development"
              description="We focus on developing well-rounded individuals with strong moral values and leadership skills."
              delay={0.4}
            />
            <AnimatedCard
              icon={<Globe className="h-6 w-6 text-blue-600" />}
              title="Global Perspective"
              description="Our international excursions and cultural programs broaden students' horizons and global awareness."
              delay={0.5}
            />
            <AnimatedCard
              icon={<Lightbulb className="h-6 w-6 text-blue-600" />}
              title="Innovative Learning"
              description="We incorporate modern teaching methodologies and technology to create engaging learning experiences."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* About Section with Scroll Effect */}
      <HomeAboutSection />

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Academic Programs"
            subtitle="Discover our comprehensive curriculum designed to prepare students for future success."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimatedCard
              image="/10.avif"
              title="Primary Education"
              description="Our primary education program focuses on building a strong foundation in literacy, numeracy, and critical thinking skills in a nurturing environment."
              delay={0.1}
            />
            <AnimatedCard
              image="/8.avif"
              title="Secondary Education"
              description="Our secondary education program builds upon the foundation established in primary school and prepares students for higher education and future careers."
              delay={0.2}
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/academics">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Explore All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Join Our Community"
                subtitle="Enrollment is now open for the upcoming academic year. Limited spots available."
                light={true}
              />

              <div className="space-y-6">
                <p className="text-blue-100">
                  At RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM, we are committed to providing a supportive and challenging
                  educational environment where students can thrive academically, socially, and emotionally.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/about#contact">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100">Apply Now</Button>
                  </Link>
                  <Link href="/fees">
                    <Button variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                      View Fee Structure
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative h-[800px] rounded-xl overflow-hidden shadow-xl " >
              <div className=" h-[800px] inset-0 bg-cover bg-center z-0" >
                <Image alt="" fill src={'/131.jpg'} className="object-cover h-[800px] w-full " /> 
              </div>
              <div className=" inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <div className="relative  h-full z-20 p-6 flex items-end">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Building Leaders of Tomorrow</h3>
                  <p className="text-gray-200">Join us in our mission to nurture future leaders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Parents Say"
            subtitle="Hear from parents who have entrusted their children's education to RHEMA School."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                quote:
                  "RHEMA School has provided my child with an excellent education and a supportive environment. The teachers are dedicated and caring.",
                author: "Sarah Johnson",
                role: "Parent of Primary Student",
              },
              {
                quote:
                  "The academic standards at RHEMA are exceptional. My children have developed strong study habits and a love for learning.",
                author: "Michael Thompson",
                role: "Parent of Secondary Students",
              },
              {
                quote:
                  "I appreciate the emphasis on character development alongside academic excellence. RHEMA is truly preparing students for life.",
                author: "Rebecca Williams",
                role: "Parent of Graduate",
              },
            ].map((testimonial, index) => (
              <div key={index}>
                <div className="bg-white p-8 rounded-xl shadow-lg relative">
                  <div className="absolute -top-4 left-8 text-blue-600 text-6xl">"</div>
                  <p className="text-gray-600 relative z-10 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <SectionHeading
              title="Fee Structure"
              subtitle="View our comprehensive fee structure for the 2025 academic year."
            />
            <div className="space-y-6">
              <p className="text-gray-600">
                Our fee structure includes tuition, uniforms, textbooks, and other essential educational materials.
                We strive to provide quality education at competitive rates.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Primary 1-4", amount: "$7,250" },
                  { label: "Primary 5-6", amount: "$7,500" },
                  { label: "Secondary 7-9", amount: "$7,850 - $8,850" },
                  { label: "Secondary 10-12", amount: "$8,850 - $9,550" }
                ].map(({ label, amount }) => (
                  <div key={label} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">{label}</span>
                    <span className="text-blue-600 font-bold">{amount}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/fees">
                  <Button className="bg-blue-600 hover:bg-blue-700">View Complete Fee Structure</Button>
                </Link>
                <Link href="/fee-structure.pdf" target="_blank" download="RHEMA-School-Fee-Structure.pdf">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Fee Structure
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image with overlay */}
          <div>
            <div className="relative h-[500px] rounded-xl bg-black overflow-hidden shadow-xl">
              <Image
                src="/1.jpg"
                alt="Financial Aid"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority
              />
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="absolute bottom-0 z-20 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Financial Aid Available</h3>
                <p className="text-gray-200">We offer scholarships and financial aid for qualifying students.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Contact Section */}
      <Contact />

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join RHEMA School?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Contact us today to learn more about our programs or to schedule a campus visit.
            </p>
            <Link href="/about#contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
