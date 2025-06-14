"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import { BottomNavbar } from "@/components/bottom-navbar"
import { CartSidebar } from "@/components/cart-sidebar"
import { RefinedBackground } from "@/components/refined-background"
import { useCart } from "@/components/cart-provider"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, MessageSquare } from "lucide-react"
import Image from "next/image"

const desserts = [
  {
    id: "1",
    name: "Classic Bomboloni",
    price: 120,
    category: "Bombolonis",
    image: "/cb.jpeg",
    description: "Fluffy Italian donuts filled with vanilla cream",
  },
  {
    id: "2",
    name: "Chocolate Tubcake",
    price: 150,
    category: "Tubcakes",
    image: "ctc.jpeg",
    description: "Rich chocolate cake in a tube shape",
  },
  {
    id: "3",
    name: "Strawberry Cheesecake",
    price: 180,
    category: "Cheesecakes",
    image: "/sc.jpeg",
    description: "Creamy cheesecake with fresh strawberry topping",
  },
  {
    id: "4",
    name: "Nutella Bomboloni",
    price: 140,
    category: "Bombolonis",
    image: "/nb.jpeg",
    description: "Italian donuts filled with rich Nutella",
  },
  {
    id: "5",
    name: "Red Velvet Tubcake",
    price: 160,
    category: "Tubcakes",
    image: "/rvtc.jpeg",
    description: "Classic red velvet in our signature tube shape",
  },
  {
    id: "6",
    name: "Blueberry Cheesecake",
    price: 190,
    category: "Cheesecakes",
    image: "/bc.jpeg",
    description: "Smooth cheesecake topped with fresh blueberries",
  },
  {
    id: "7",
    name: "Caramel Bomboloni",
    price: 130,
    category: "Bombolonis",
    image: "/cb.jpeg",
    description: "Sweet bomboloni filled with salted caramel",
  },
  {
    id: "8",
    name: "Vanilla Tubcake",
    price: 140,
    category: "Tubcakes",
    image: "/ctc.jpeg",
    description: "Classic vanilla cake with smooth frosting",
  },
]

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
  </svg>
)

export default function HomePage() {
  const { dispatch } = useCart()

  const addToCart = (dessert: (typeof desserts)[0]) => {
    dispatch({ type: "ADD_ITEM", payload: dessert })
  }

  return (
    <div className="min-h-screen relative overflow-hidden pb-20">
      <RefinedBackground />

      {/* Header */}
      <header className="relative z-20 p-6 flex justify-between items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center space-x-3"
        >
          <Image src="/dlogo.jpg" alt="logo" width={100} height={100}></Image>
          <div>
            <h1 className="font-dancing text-3xl text-accent main-heading-glow">Dessert Shop</h1>
            <p className="font-poppins text-sm text-secondary font-medium">Sigra, Varanasi</p>
          </div>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="relative z-20 text-center py-16 px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="p-6 sm:p-8 md:p-12 max-w-4xl mx-auto float-animation"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl heading-primary text-accent main-heading-glow mb-8"
          >
            DOUGHNIVERSE
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6">
              {["Eggless", "Exclusive", "Epic"].map((word, index) => (
                <motion.div
                  key={word}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.9 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-[var(--cream-yellow)] border-2 sm:border-4 border-[var(--dark-charcoal)] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-poppins font-black text-base sm:text-lg md:text-xl text-[var(--dark-charcoal)] transform rotate-1 group-hover:rotate-0 transition-all duration-300 shadow-[4px_4px_0px_var(--olive-green)] sm:shadow-[6px_6px_0px_var(--olive-green)] group-hover:shadow-[6px_6px_0px_var(--olive-green)] sm:group-hover:shadow-[8px_8px_0px_var(--olive-green)]"
                >
                  {word}
                  <div className="absolute inset-0 bg-[var(--olive-green)] border-2 sm:border-4 border-[var(--dark-charcoal)] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 -z-10 transform translate-x-1 translate-y-1"></div>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              className="text-lg sm:text-xl text-primary text-accent-script px-4"
            >
              Crafting Sweet Memories, One Bite at a Time
            </motion.p>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            <motion.div
              className="modern-card p-6 text-center group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-[var(--olive-green)] to-[var(--dark-charcoal)] rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-[var(--medium-gray)]"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="font-poppins font-bold text-accent text-lg mb-2">Location</h3>
              <p className="text-body text-secondary font-medium">Varanasi, UP</p>
            </motion.div>

            <motion.div
              className="modern-card p-6 text-center group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-[var(--olive-green)] to-[var(--dark-charcoal)] rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-[var(--medium-gray)]"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Clock className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="font-poppins font-bold text-accent text-lg mb-2">Hours</h3>
              <p className="text-body text-secondary font-medium">11AM – 9PM</p>
            </motion.div>

            <motion.div
              className="modern-card p-6 text-center group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-[var(--olive-green)] to-[var(--dark-charcoal)] rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-[var(--medium-gray)]"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <MessageSquare className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="font-poppins font-bold text-accent text-lg mb-2">Orders</h3>
              <p className="text-body text-secondary font-medium">WhatsApp Only</p>
            </motion.div>
          </motion.div>

          {/* Special Notice */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-[var(--cream-yellow)] to-[var(--pale-yellow)] p-6 rounded-lg border-2 border-[var(--dark-charcoal)] box-shadow: 3px 3px 0px var(--olive-green) max-w-md mx-auto"
          >
            <h3 className="font-poppins text-xl text-[var(--dark-charcoal)] font-bold mb-2">No Store • Not On Apps</h3>
            <p className="font-poppins text-[var(--dark-charcoal)] font-medium">WhatsApp Orders Only!</p>
            <p className="font-poppins text-[var(--dark-charcoal)]">Delivery/Takeaway Available</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="relative z-20 py-16 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl heading-primary text-center mb-4 text-accent"
          >
            Our Delicious Menu
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center text-secondary mb-12 text-lg text-elegant"
          >
            Bombolonis, Tubcakes, Cheesecakes & More
          </motion.p>

          {/* Desserts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {desserts.map((dessert, index) => (
              <motion.div
                key={dessert.id}
                initial={{ scale: 0, opacity: 0, y: 50 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                className="group"
              >
                <Card className="overflow-hidden modern-card">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={dessert.image}
                      alt={dessert.name}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <div className="absolute top-3 right-3">
                      <span className="modern-tag px-3 py-1 text-xs font-poppins font-bold">{dessert.category}</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-poppins font-bold text-primary text-lg">{dessert.name}</h3>
                      <span className="text-xl font-dancing text-accent price-glow">₹{dessert.price}</span>
                    </div>
                    <p className="text-secondary text-body text-sm mb-4">{dessert.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => addToCart(dessert)}
                      className="w-full modern-button p-3 font-poppins font-bold flex items-center justify-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-[var(--dark-charcoal)] text-white py-8 px-6 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <div className="flex justify-center space-x-6 mb-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/doughniverse"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white smooth-transition border-2 border-white"
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/919559545103"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white smooth-transition border-2 border-white"
            >
              <WhatsAppIcon />
            </motion.a>
          </div>
          <motion.p className="font-poppins text-lg mb-2 footer-text" whileHover={{ scale: 1.02 }}>
            Made with ❤️ for dessert lovers by daichianoop
          </motion.p>
          <p className="font-poppins footer-accent">© 2025 Doughniverse. All rights reserved.</p>
        </motion.div>
      </footer>

      <BottomNavbar />
      <CartSidebar />
    </div>
  )
}
