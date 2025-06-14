"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Home, Info, Phone, Menu, ShoppingCart } from "lucide-react"
import { useCart } from "./cart-provider"
import { motion, AnimatePresence } from "framer-motion"

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
  </svg>
)

export function BottomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { state, dispatch } = useCart()

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Info, label: "About", path: "/about" },
    { icon: Phone, label: "Contact", path: "/contact" },
  ]

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

  const handleWhatsApp = () => {
    const message =
      "Hi! I'm interested in Doughniverse desserts. Could you please share more details about your menu and ordering process? 🍩"
    window.open(`https://wa.me/919559545103?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[var(--dark-charcoal)] border-t border-[var(--medium-gray)]">
          <div className="flex items-center justify-around py-3">
            {/* Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col items-center p-2 text-white smooth-transition"
            >
              <Menu className="w-6 h-6" />
              <span className="text-xs font-poppins mt-1">Menu</span>
            </motion.button>

            {/* Cart Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
              className="flex flex-col items-center p-2 text-white relative smooth-transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-[var(--cream-yellow)] text-[var(--dark-charcoal)] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                >
                  {totalItems}
                </motion.span>
              )}
              <span className="text-xs font-poppins mt-1">Cart</span>
            </motion.button>

            {/* WhatsApp Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleWhatsApp}
              className="flex flex-col items-center p-2 text-white smooth-transition"
            >
              <WhatsAppIcon />
              <span className="text-xs font-poppins mt-1">WhatsApp</span>
            </motion.button>
          </div>
        </div>

        {/* Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-20 left-0 right-0 bg-[var(--light-gray)] border-t border-[var(--medium-gray)] mx-4 mb-2 rounded-lg modern-card"
            >
              <div className="p-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.path}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      router.push(item.path)
                      setIsMenuOpen(false)
                    }}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg mb-2 font-poppins font-medium smooth-transition ${
                      pathname === item.path ? "nav-button active" : "text-primary hover:bg-[var(--pale-yellow)]"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-[var(--dark-charcoal)] border-t border-[var(--medium-gray)]">
          <div className="max-w-6xl mx-auto flex items-center justify-center space-x-8 py-4">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(item.path)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-poppins font-medium smooth-transition ${
                  pathname === item.path ? "nav-button active" : "nav-button"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg font-poppins font-medium nav-button relative smooth-transition"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-[var(--cream-yellow)] text-[var(--dark-charcoal)] text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg font-poppins font-medium nav-button smooth-transition"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  )
}
