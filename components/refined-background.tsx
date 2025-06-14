"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: "circle" | "square" | "dot"
  opacity: number
}

export function RefinedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = []
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 30 + 10,
          duration: Math.random() * 25 + 15,
          delay: Math.random() * 8,
          type: ["circle", "square", "dot"][Math.floor(Math.random() * 3)] as any,
          opacity: Math.random() * 0.1 + 0.05,
        })
      }
      setElements(newElements)
    }

    generateElements()
  }, [])

  const getElementComponent = (element: FloatingElement) => {
    const baseClasses = "absolute pointer-events-none"
    const style = {
      left: `${element.x}%`,
      top: `${element.y}%`,
      width: `${element.size}px`,
      height: `${element.size}px`,
      opacity: element.opacity,
    }

    switch (element.type) {
      case "circle":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} rounded-full`}
            style={{
              ...style,
              background: `linear-gradient(135deg, #84845c, #cbcbbf)`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-15, 15, -15],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )
      case "square":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} rounded-lg`}
            style={{
              ...style,
              background: `linear-gradient(45deg, #fbf3ac, #e5dc9c)`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )
      case "dot":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} rounded-full`}
            style={{
              ...style,
              background: `#2a2a2b`,
              width: `${element.size * 0.3}px`,
              height: `${element.size * 0.3}px`,
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-5, 5, -5],
              opacity: [element.opacity, element.opacity * 2, element.opacity],
            }}
            transition={{
              duration: element.duration * 0.7,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      {/* Main animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #f3f3f3 0%, #fbf3ac 25%, #e5dc9c 50%, #cbcbbf 75%, #f3f3f3 100%)",
              "linear-gradient(225deg, #fbf3ac 0%, #e5dc9c 25%, #f3f3f3 50%, #cbcbbf 75%, #fbf3ac 100%)",
              "linear-gradient(315deg, #e5dc9c 0%, #f3f3f3 25%, #cbcbbf 50%, #fbf3ac 75%, #e5dc9c 100%)",
              "linear-gradient(45deg, #cbcbbf 0%, #f3f3f3 25%, #fbf3ac 50%, #e5dc9c 75%, #cbcbbf 100%)",
              "linear-gradient(135deg, #f3f3f3 0%, #fbf3ac 25%, #e5dc9c 50%, #cbcbbf 75%, #f3f3f3 100%)",
            ],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Floating elements */}
        {elements.map(getElementComponent)}

        {/* Subtle overlay patterns */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #84845c 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #2a2a2b 1px, transparent 1px)`,
            backgroundSize: "60px 60px, 40px 40px",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    </>
  )
}
