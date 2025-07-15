"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    setIsLoaded(true)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-coffee-cream text-6xl font-display font-bold tracking-wider"
        >
          <motion.div
            animate={{
              textShadow: [
                "0 0 20px rgba(244,237,223,0.3)",
                "0 0 40px rgba(244,237,223,0.6)",
                "0 0 20px rgba(244,237,223,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            BREW
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="bg-coffee-cream text-coffee-dark overflow-x-hidden relative">
      {/* Global Glass Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-cream/5 via-transparent to-coffee-light/10 backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <Hero scrollY={scrollY} />
        <About scrollY={scrollY} />
        <Menu scrollY={scrollY} />
        <Contact scrollY={scrollY} />
        <Footer />
      </div>
    </main>
  )
}
