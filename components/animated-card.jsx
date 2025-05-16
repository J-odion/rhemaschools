"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export default function AnimatedCard({ icon, title, description, image, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {image && (
          <div className="relative w-full h-[200px] overflow-hidden">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <Image src={image} width={800} alt="image" height={700} className="text-gray-400 w-full h-full text-sm" />
            </div>
          </div>
        )}
        <CardHeader className={`${icon ? "flex flex-row items-center gap-4" : ""}`}>
          {icon && <div>{icon}</div>}
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
