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
  type: "donut" | "sparkle" | "bubble" | "crumb" | "star"
  rotation: number
}

export function ModernBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = []
      for (let i = 0; i < 30; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 50 + 20,
          duration: Math.random() * 30 + 20,
          delay: Math.random() * 10,
          type: ["donut", "sparkle", "bubble", "crumb", "star"][Math.floor(Math.random() * 5)] as any,
          rotation: Math.random() * 360,
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
    }

    switch (element.type) {
      case "donut":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} text-[var(--chocolate)] opacity-15`}
            style={style}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              rotate: [element.rotation, element.rotation + 360],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="text-5xl">🍩</div>
          </motion.div>
        )
      case "sparkle":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} opacity-25`}
            style={style}
            animate={{
              y: [-25, 25, -25],
              x: [-15, 15, -15],
              rotate: [0, 360],
              scale: [0.3, 1.8, 0.3],
              opacity: [0.25, 0.8, 0.25],
            }}
            transition={{
              duration: element.duration * 0.7,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-[var(--goldenrod)] via-[var(--peru)] to-[var(--chocolate)] rounded-full blur-sm"></div>
          </motion.div>
        )
      case "bubble":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} opacity-10`}
            style={style}
            animate={{
              y: [-50, 50, -50],
              x: [-25, 25, -25],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: element.duration * 1.3,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-radial from-[var(--vintage-pink)] via-[var(--cornsilk)] to-transparent rounded-full border border-[var(--chocolate)] opacity-30"></div>
          </motion.div>
        )
      case "crumb":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} opacity-20`}
            style={style}
            animate={{
              y: [-35, 35, -35],
              x: [-18, 18, -18],
              rotate: [0, 720],
            }}
            transition={{
              duration: element.duration * 0.5,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-[var(--chocolate)] to-[var(--peru)] rounded-full"></div>
          </motion.div>
        )
      case "star":
        return (
          <motion.div
            key={element.id}
            className={`${baseClasses} opacity-30`}
            style={style}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: element.duration * 0.9,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="text-3xl">✨</div>
          </motion.div>
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
              "linear-gradient(135deg, #faf0e6 0%, #fff8dc 25%, #f5deb3 50%, #fffdd0 75%, #faf0e6 100%)",
              "linear-gradient(225deg, #fff8dc 0%, #f5deb3 25%, #fffdd0 50%, #faf0e6 75%, #fff8dc 100%)",
              "linear-gradient(315deg, #f5deb3 0%, #fffdd0 25%, #faf0e6 50%, #fff8dc 75%, #f5deb3 100%)",
              "linear-gradient(45deg, #fffdd0 0%, #faf0e6 25%, #fff8dc 50%, #f5deb3 75%, #fffdd0 100%)",
              "linear-gradient(135deg, #faf0e6 0%, #fff8dc 25%, #f5deb3 50%, #fffdd0 75%, #faf0e6 100%)",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Floating elements */}
        {elements.map(getElementComponent)}

        {/* Overlay patterns */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, var(--chocolate) 3px, transparent 3px),
                             radial-gradient(circle at 80% 80%, var(--peru) 2px, transparent 2px),
                             radial-gradient(circle at 40% 60%, var(--goldenrod) 1px, transparent 1px)`,
            backgroundSize: "80px 80px, 60px 60px, 40px 40px",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Gradient overlay for depth */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, var(--vintage-pink) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 70%, var(--cornsilk) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, var(--wheat) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, var(--vintage-pink) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 30%, var(--vintage-pink) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  )
}
