"use client"
import Image from"next/image"
import { motion } from "framer-motion"
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react"
import { BottomNavbar } from "@/components/bottom-navbar"
import { CartSidebar } from "@/components/cart-sidebar"
import { RefinedBackground } from "@/components/refined-background"

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

export default function ContactPage() {
  const handleWhatsApp = () => {
    const message =
      "Hi! I'm interested in Doughniverse desserts. Could you please share more details about your menu and ordering process?"
    window.open(`https://wa.me/919559545103?text=${encodeURIComponent(message)}`, "_blank")
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
                  <Image src="/dlogo.jpg" alt="logo" width={100} height={100} ></Image>

          <div>
            <h1 className="font-dancing text-2xl text-accent main-heading-glow">Dessert Shop</h1>
            <p className="text-body text-sm text-secondary">Contact Us</p>
          </div>
        </motion.div>
      </header>

      {/* Contact Content */}
      <section className="relative z-20 py-12 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl heading-primary text-center mb-8 text-accent"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-center text-body mb-12 text-lg text-secondary"
          >
            Ready to satisfy your sweet cravings? We're here to help!
          </motion.p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: MapPin,
                title: "Location",
                info: "Varanasi, Uttar Pradesh",
                description: "Serving the holy city with sweet delights",
                color: "bg-blue-500",
              },
              {
                icon: Clock,
                title: "Operating Hours",
                info: "11:00 AM - 9:00 PM",
                description: "Daily service for your convenience",
                color: "bg-green-500",
              },
              {
                icon: Phone,
                title: "Phone Number",
                info: "+91 95595 45103",
                description: "Call us for quick inquiries",
                color: "bg-purple-500",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Orders",
                info: "Tap to Order Now",
                description: "Our preferred ordering method",
                color: "bg-green-600",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="modern-card p-6 cursor-pointer"
                onClick={item.title === "WhatsApp Orders" ? handleWhatsApp : undefined}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white border-2 border-white`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.title === "WhatsApp Orders" ? <WhatsAppIcon /> : <item.icon className="w-6 h-6" />}
                  </motion.div>
                  <div>
                    <h3 className="heading-primary text-xl text-accent">{item.title}</h3>
                    <p className="text-body text-sm text-secondary">{item.description}</p>
                  </div>
                </div>
                <p className="font-poppins text-primary font-bold text-lg">{item.info}</p>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-[var(--cream-yellow)] to-[var(--pale-yellow)] p-8 rounded-lg border-2 border-[var(--dark-charcoal)] text-center mb-8"
            style={{ boxShadow: "3px 3px 0px var(--olive-green)" }}
          >
            <h2 className="heading-primary text-3xl text-[var(--dark-charcoal)] mb-4">No Store • Not On Apps</h2>
            <p className="text-body text-[var(--dark-charcoal)] text-lg mb-6">
              We operate exclusively through WhatsApp orders to ensure personalized service and the freshest desserts
              delivered directly to you!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg flex items-center justify-center space-x-3 mx-auto smooth-transition border-2 border-green-600"
              style={{ boxShadow: "2px 2px 0px #22c55e" }}
            >
              <WhatsAppIcon />
              <span>Start Your Order on WhatsApp</span>
            </motion.button>
          </motion.div>

          {/* Order Process */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
            className="modern-card p-8"
          >
            <h2 className="heading-primary text-2xl text-accent mb-6 text-center">How to Order</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Browse & Choose",
                  description: "Explore our menu and select your favorite desserts",
                  emoji: "🍩",
                },
                {
                  step: "2",
                  title: "WhatsApp Us",
                  description: "Send your order via WhatsApp with delivery details",
                  emoji: "📱",
                },
                {
                  step: "3",
                  title: "Enjoy!",
                  description: "Receive your fresh, delicious desserts at your doorstep",
                  emoji: "😋",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.8, ease: "easeOut" }}
                  className="text-center"
                >
                  <motion.div
                    className="w-16 h-16 bg-[var(--olive-green)] text-white rounded-full flex items-center justify-center font-poppins text-2xl font-bold mx-auto mb-4 border-2 border-[var(--dark-charcoal)]"
                    style={{ boxShadow: "2px 2px 0px var(--medium-gray)" }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {item.step}
                  </motion.div>
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <h3 className="font-poppins font-bold text-accent text-lg mb-2">{item.title}</h3>
                  <p className="text-body text-primary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-[var(--dark-charcoal)] text-white py-8 px-6 mt-12">
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
