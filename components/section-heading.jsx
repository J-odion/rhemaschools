"use client"

import { motion } from "framer-motion"

export default function SectionHeading({ title, subtitle, center = false, light = false }) {
  return (
    <div className={`space-y-4 mb-12 ${center ? "text-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-medium tracking-tight ${light ? "text-white" : "text-gray-800"}`}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: center ? "80px" : "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1 bg-blue-600 ${center ? "mx-auto" : ""}`}
      ></motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-lg max-w-2xl font-light ${light ? "text-gray-200" : "text-gray-600"} ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
