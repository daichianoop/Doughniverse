"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingShape {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  shape: "circle" | "square" | "triangle"
}

export function CustomBackground() {
  const [shapes, setShapes] = useState<FloatingShape[]>([])

  useEffect(() => {
    const generateShapes = () => {
      const newShapes: FloatingShape[] = []
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
          shape: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle",
        })
      }
      setShapes(newShapes)
    }

    generateShapes()
  }, [])

  const getShapeElement = (shape: FloatingShape) => {
    const baseClasses = "absolute opacity-5 dark:opacity-10"
    const style = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
    }

    switch (shape.shape) {
      case "circle":
        return (
          <motion.div
            key={shape.id}
            className={`${baseClasses} rounded-full bg-gradient-to-br from-[var(--chocolate)] to-[var(--peru)]`}
            style={style}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )
      case "square":
        return (
          <motion.div
            key={shape.id}
            className={`${baseClasses} bg-gradient-to-br from-[var(--goldenrod)] to-[var(--peru)]`}
            style={style}
            animate={{
              y: [-15, 15, -15],
              x: [-15, 15, -15],
              rotate: [0, 180, 360],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )
      case "triangle":
        return (
          <motion.div
            key={shape.id}
            className={`${baseClasses} bg-gradient-to-br from-[var(--vintage-pink)] to-[var(--chocolate)]`}
            style={{
              ...style,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-5, 5, -5],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )
      default:
        return null
    }
  }

  return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">{shapes.map(getShapeElement)}</div>
}
