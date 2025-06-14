"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import { useCart } from "./cart-provider"

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
  </svg>
)

export function CartSidebar() {
  const { state, dispatch } = useCart()
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    mobile: "",
    orderType: "delivery" as "delivery" | "takeaway",
  })

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const sendToWhatsApp = () => {
    if (!customerInfo.name || !customerInfo.mobile) {
      alert("Please fill in your name and mobile number")
      return
    }

    let message = `🍩 *DOUGHNIVERSE ORDER* 🍩\n\n`
    message += `👤 *Customer:* ${customerInfo.name}\n`
    message += `📱 *Mobile:* ${customerInfo.mobile}\n`
    message += `📦 *Order Type:* ${customerInfo.orderType.toUpperCase()}\n\n`
    message += `*ITEMS ORDERED:*\n`

    state.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}\n`
    })

    message += `\n💰 *Total Amount:* ₹${total.toFixed(2)}\n\n`
    message += `⏰ *Order Time:* ${new Date().toLocaleString()}\n\n`
    message += `Thank you for choosing Doughniverse!\n`
    message += `*Eggless • Exclusive • Epic*`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919559545103?text=${encodedMessage}`, "_blank")

    // Clear cart and close sidebar
    dispatch({ type: "CLEAR_CART" })
    dispatch({ type: "CLOSE_CART" })
    setCustomerInfo({ name: "", mobile: "", orderType: "delivery" })
  }

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            className="fixed inset-0 bg-black/30 z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[var(--light-gray)] z-50 overflow-y-auto border-l border-[var(--medium-gray)]"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-dancing text-[var(--dark-charcoal)]">Your Cart</h2>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => dispatch({ type: "CLOSE_CART" })}
                  className="p-2 rounded-full bg-[var(--olive-green)] text-white hover:bg-[var(--dark-charcoal)] transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {state.items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-[var(--dark-charcoal)] font-poppins text-lg">Your cart is empty</p>
                  <p className="text-[var(--olive-green)] font-poppins">Add some delicious treats!</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {state.items.map((item) => (
                      <motion.div key={item.id} layout className="modern-card p-4">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h3 className="font-poppins font-semibold text-[var(--dark-charcoal)] text-sm sm:text-base leading-tight mb-1">
                                {item.name}
                              </h3>
                              <p className="text-[var(--olive-green)] font-poppins text-sm">₹{item.price.toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 rounded-full bg-[var(--olive-green)] text-white hover:bg-[var(--dark-charcoal)] transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </motion.button>
                              <span className="font-poppins font-bold text-[var(--dark-charcoal)] w-8 text-center">
                                {item.quantity}
                              </span>
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 rounded-full bg-[var(--olive-green)] text-white hover:bg-[var(--dark-charcoal)] transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </motion.button>
                            </div>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => removeItem(item.id)}
                              className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Customer Info */}
                  <div className="space-y-4 mb-6">
                    <h3 className="font-dancing text-xl text-[var(--dark-charcoal)]">Order Details</h3>

                    <input
                      type="text"
                      placeholder="Your Name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full p-3 rounded-lg border border-[var(--medium-gray)] bg-white text-[var(--dark-charcoal)] font-poppins placeholder-[var(--olive-green)] focus:outline-none focus:ring-2 focus:ring-[var(--olive-green)] focus:border-transparent"
                    />

                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={customerInfo.mobile}
                      onChange={(e) => setCustomerInfo((prev) => ({ ...prev, mobile: e.target.value }))}
                      className="w-full p-3 rounded-lg border border-[var(--medium-gray)] bg-white text-[var(--dark-charcoal)] font-poppins placeholder-[var(--olive-green)] focus:outline-none focus:ring-2 focus:ring-[var(--olive-green)] focus:border-transparent"
                    />

                    <div className="flex space-x-4">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCustomerInfo((prev) => ({ ...prev, orderType: "delivery" }))}
                        className={`flex-1 p-3 rounded-lg font-poppins font-medium transition-colors ${
                          customerInfo.orderType === "delivery"
                            ? "bg-[var(--olive-green)] text-white"
                            : "bg-white text-[var(--dark-charcoal)] border border-[var(--medium-gray)]"
                        }`}
                      >
                        🚚 Delivery
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCustomerInfo((prev) => ({ ...prev, orderType: "takeaway" }))}
                        className={`flex-1 p-3 rounded-lg font-poppins font-medium transition-colors ${
                          customerInfo.orderType === "takeaway"
                            ? "bg-[var(--olive-green)] text-white"
                            : "bg-white text-[var(--dark-charcoal)] border border-[var(--medium-gray)]"
                        }`}
                      >
                        🏪 Takeaway
                      </motion.button>
                    </div>
                  </div>

                  {/* Total and Checkout */}
                  <div className="border-t border-[var(--medium-gray)] pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-dancing text-xl text-[var(--dark-charcoal)]">Total:</span>
                      <span className="font-dancing text-2xl text-[var(--dark-charcoal)] price-glow">
                        ₹{total.toFixed(2)}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={sendToWhatsApp}
                      className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg font-poppins font-bold text-lg flex items-center justify-center space-x-2 transition-colors"
                    >
                      <WhatsAppIcon />
                      <span>Send Order to WhatsApp</span>
                    </motion.button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
