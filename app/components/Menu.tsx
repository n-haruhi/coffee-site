'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, Coffee, Thermometer } from 'lucide-react'

interface MenuProps {
  scrollY: number
}

export default function Menu({ scrollY }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState("signature")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Calculate parallax manually
  const parallaxY = -scrollY * 0.05

  const categories = [
    { id: "signature", name: "Signature Blends" },
    { id: "single", name: "Single Origin" },
    { id: "seasonal", name: "Seasonal" },
  ]

  const menuItems = {
    signature: [
      {
        name: "BREW House Blend",
        description: "バランスの取れたミディアムロースト。チョコレートとナッツの風味",
        price: "¥680",
        rating: 4.9,
        temperature: "Hot/Iced",
      },
      {
        name: "Golden Morning",
        description: "明るい酸味とフルーティーな香り。朝のスタートに最適",
        price: "¥720",
        rating: 4.8,
        temperature: "Hot",
      },
      {
        name: "Dark Roast Supreme",
        description: "深煎りの力強い味わい。ビターチョコレートの余韻",
        price: "¥750",
        rating: 4.7,
        temperature: "Hot/Iced",
      },
    ],
    single: [
      {
        name: "Ethiopian Yirgacheffe",
        description: "花のような香りとワインのような酸味。エチオピア産",
        price: "¥850",
        rating: 4.9,
        temperature: "Hot",
      },
      {
        name: "Colombian Supremo",
        description: "まろやかな甘みとナッツの風味。コロンビア産",
        price: "¥800",
        rating: 4.8,
        temperature: "Hot/Iced",
      },
    ],
    seasonal: [
      {
        name: "Winter Spice Blend",
        description: "シナモンとクローブの温かいスパイス。冬季限定",
        price: "¥780",
        rating: 4.6,
        temperature: "Hot",
      },
    ],
  }

  return (
    <section 
      id="menu" 
      ref={ref}
      className="py-32 bg-gradient-to-br from-coffee-dark to-coffee-medium relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f4eddf' fillOpacity='0.1'%3E%3Cpath d='M40 20c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-6" 
        style={{ 
          transform: `translateY(${parallaxY}px)`,
        }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-coffee-cream/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Coffee size={20} className="text-coffee-cream" />
            <span className="text-coffee-cream font-medium">Our Menu</span>
          </motion.div>

          <h2 className="font-display font-bold text-5xl lg:text-6xl text-coffee-cream mb-6">
            Exceptional
            <span className="block bg-gradient-to-r from-coffee-light to-coffee-cream bg-clip-text text-transparent">
              Coffee Selection
            </span>
          </h2>
          <p className="text-coffee-light text-lg max-w-2xl mx-auto">
            厳選されたコーヒー豆から作られる、特別なメニューをご紹介します
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-coffee-cream/10 backdrop-blur-xl rounded-full p-2 border border-coffee-cream/20">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-coffee-cream text-coffee-dark shadow-lg"
                    : "text-coffee-cream hover:bg-coffee-cream/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <motion.div
              key={item.name}
              className="group bg-coffee-cream/10 backdrop-blur-xl rounded-3xl p-6 border border-coffee-cream/20 hover:bg-coffee-cream/20 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
              layout
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div 
                  className="w-full h-48 bg-gradient-to-br from-coffee-medium to-coffee-dark rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/50 to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-coffee-cream/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-current" />
                  <span className="text-coffee-dark text-sm font-medium">{item.rating}</span>
                </div>

                {/* Temperature Badge */}
                <div className="absolute bottom-4 left-4 bg-coffee-dark/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Thermometer size={14} className="text-coffee-cream" />
                  <span className="text-coffee-cream text-sm">{item.temperature}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-display font-bold text-xl text-coffee-cream group-hover:text-coffee-light transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-coffee-light font-bold text-lg">{item.price}</span>
                </div>

                <p className="text-coffee-cream/80 leading-relaxed">{item.description}</p>

                <motion.button
                  className="w-full bg-gradient-to-r from-coffee-cream to-coffee-light text-coffee-dark py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}