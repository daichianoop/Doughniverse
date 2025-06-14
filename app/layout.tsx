import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Poppins, Dancing_Script, Merriweather } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
})
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
})
const dancing = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
})
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Doughniverse - Ultimate Dessert Destination",
  description: "Bombolonis, Tubcakes, Cheesecakes & More. WhatsApp Orders Only | 11AM–9PM | Delivery/Takeaway",
    generator: 'Anoop kumar'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${playfair.variable} ${poppins.variable} ${dancing.variable} ${merriweather.variable}`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
