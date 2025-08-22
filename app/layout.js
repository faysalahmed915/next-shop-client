"use client"
import Navbar from "@/components/Navbar"
import "./globals.css"
import Footer from "@/components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* <SessionProvider> */}
        <Navbar />
        {children}
        <Footer />
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}