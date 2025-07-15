'use client'

import { motion } from 'framer-motion'
import { Award, Leaf, Heart, Coffee } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AboutProps {
  scrollY: number
}

export default function About({ scrollY }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Calculate parallax values manually
  const parallaxY = -scrollY * 0.1
  const opacityValue = Math.min(1, Math.max(0, (scrollY - 200) / 400))

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "厳選されたシングルオリジンコーヒー豆のみを使用",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description: "環境に配慮した持続可能な農法をサポート",
    },
    {
      icon: Heart,
      title: "Crafted with Love",
      description: "熟練のロースターが一杯一杯丁寧に仕上げます",
    },
  ]

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-32 bg-coffee-cream relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ab7a44' fillOpacity='0.1'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-6" 
        style={{ 
          transform: `translateY(${parallaxY}px)`,
          opacity: opacityValue,
        }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-coffee-light/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Coffee size={20} className="text-coffee-medium" />
              <span className="text-coffee-medium font-medium">About Our Coffee</span>
            </motion.div>

            <h2 className="font-display font-bold text-5xl lg:text-6xl text-coffee-dark mb-6 leading-tight">
              Crafting the
              <span className="block bg-gradient-to-r from-coffee-medium to-coffee-dark bg-clip-text text-transparent">
                Perfect Cup
              </span>
            </h2>

            <p className="text-coffee-dark/80 text-lg leading-relaxed mb-8">
              私たちは世界中の最高品質のコーヒー農園と直接パートナーシップを結び、
              持続可能で倫理的な方法で栽培されたコーヒー豆のみを厳選しています。
              熟練のロースターが一つ一つの豆の特性を活かし、最適な焙煎プロファイルで仕上げることで、
              唯一無二のコーヒー体験をお届けします。
            </p>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-coffee-light/30 hover:bg-white/70 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-coffee-medium to-coffee-dark rounded-xl flex items-center justify-center">
                    <feature.icon size={24} className="text-coffee-cream" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-dark text-lg mb-2">{feature.title}</h3>
                    <p className="text-coffee-dark/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div 
                className="w-full h-[600px] bg-gradient-to-br from-coffee-medium to-coffee-dark rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/30 via-transparent to-transparent" />

              {/* Floating Stats */}
              <motion.div
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-coffee-dark mb-1">15+</div>
                  <div className="text-coffee-dark/70 text-sm">Countries</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-coffee-dark mb-1">100%</div>
                  <div className="text-coffee-dark/70 text-sm">Organic</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}