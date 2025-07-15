'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Coffee, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Calculate parallax values manually
  const parallaxBg = -scrollY * 0.3
  const parallaxContent = -scrollY * 0.15
  const opacityValue = Math.max(0, 1 - scrollY / 400)
  const scaleValue = Math.max(0.8, 1 - scrollY / 2000)

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-dark"
        style={{ 
          transform: `translateY(${parallaxBg}px)`,
        }}
      />

      {/* Coffee Image Background */}
      <motion.div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          transform: `translateY(${parallaxBg}px)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-coffee-dark/80 via-coffee-medium/60 to-coffee-dark/80" />
      </motion.div>

      {/* Glassmorphism Pattern Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements with Mouse Parallax */}
      <motion.div
        className="absolute top-20 left-10 text-coffee-cream/30"
        animate={{
          y: [0, -20, 0],
        }}
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative">
          <Coffee size={48} />
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Star size={16} className="text-coffee-light/60" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-coffee-cream/30"
        animate={{
          y: [0, -15, 0],
        }}
        style={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Coffee size={36} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 text-coffee-cream/30"
        animate={{
          y: [0, -25, 0],
        }}
        style={{
          x: mousePosition.x * 0.7,
          y: mousePosition.y * 0.7,
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <Coffee size={42} />
      </motion.div>

      {/* Main Content with Parallax */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto" 
        style={{ 
          transform: `translateY(${parallaxContent}px)`,
          opacity: opacityValue,
          scale: scaleValue,
        }}
      >
        {/* Glassmorphism Card */}
        <motion.div
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-8"
          >
            <motion.h1
              className="font-display font-bold text-coffee-cream mb-6 leading-none"
              style={{ fontSize: 'clamp(4rem, 12vw, 14rem)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-coffee-cream via-coffee-light to-coffee-cream bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                BREW
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <p className="text-coffee-light text-2xl md:text-3xl lg:text-4xl font-light mb-6 tracking-wide">
              Artisanal Coffee Experience
            </p>
            <motion.p
              className="text-coffee-cream/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              最高品質のシングルオリジンコーヒー豆から生まれる、特別な一杯。
              <br />
              持続可能な農法と熟練のロースターが織りなす、新しいコーヒー体験を。
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={handleScrollToAbout}
              className="group relative overflow-hidden bg-gradient-to-r from-coffee-cream to-coffee-light text-coffee-dark px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-coffee-light to-coffee-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <span className="relative flex items-center gap-3 z-10">
                Discover Our Story
                <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowDown size={20} />
                </motion.div>
              </span>
            </motion.button>

            <motion.div
              className="flex items-center gap-4 text-coffee-cream/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-coffee-cream/60 to-transparent"></div>
              <div className="text-center">
                <span className="block text-sm font-medium tracking-wider">SINCE</span>
                <span className="block text-2xl font-display font-bold">2024</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-8 h-14 border-2 border-coffee-cream/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <motion.div
              className="w-1.5 h-4 bg-gradient-to-b from-coffee-cream to-coffee-light rounded-full mt-3"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}