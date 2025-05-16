"use client"

import { motion } from "framer-motion"

export default function ScrollReveal({ children, direction = null, delay = 0, className = "", distance = 50 }) {
  const initial = { opacity: 0 }

  if (direction === "up") initial.y = distance
  if (direction === "down") initial.y = -distance
  if (direction === "left") initial.x = distance
  if (direction === "right") initial.x = -distance

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
