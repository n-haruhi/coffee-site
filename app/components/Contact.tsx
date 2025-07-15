'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, /* Facebook */ } from 'lucide-react'

interface ContactProps {
  scrollY: number
}

export default function Contact({ scrollY }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Calculate parallax manually
  const parallaxY = -scrollY * 0.03

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["東京都渋谷区", "恵比寿1-2-3", "BREW Building 1F"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+81 3-1234-5678"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@brew.coffee", "info@brew.coffee"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 7:00-20:00", "Sat-Sun: 8:00-21:00"],
    },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    // { icon: Facebook, href: "#", label: "Facebook" },
  ]

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-32 bg-coffee-cream relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ab7a44' fillOpacity='0.1'%3E%3Cpath d='M60 30c16.569 0 30 13.431 30 30s-13.431 30-30 30-30-13.431-30-30 13.431-30 30-30zm0 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-6" 
        style={{ 
          transform: `translateY(${parallaxY}px)`,
        }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-coffee-light/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin size={20} className="text-coffee-medium" />
              <span className="text-coffee-medium font-medium">Visit Us</span>
            </motion.div>

            <h2 className="font-display font-bold text-5xl lg:text-6xl text-coffee-dark mb-6">
              Come &
              <span className="block bg-gradient-to-r from-coffee-medium to-coffee-dark bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="text-coffee-dark/80 text-lg leading-relaxed mb-12">
              私たちのカフェで、特別なコーヒー体験をお楽しみください。熟練のバリスタが一杯一杯丁寧にお作りします。
            </p>

            {/* Contact Information */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-coffee-light/30 hover:bg-white/70 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-coffee-medium to-coffee-dark rounded-xl flex items-center justify-center">
                      <info.icon size={20} className="text-coffee-cream" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-coffee-dark mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-coffee-dark/70 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-gradient-to-br from-coffee-medium to-coffee-dark rounded-xl flex items-center justify-center text-coffee-cream hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Map/Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden h-[600px]">
              <div 
                className="w-full h-full bg-gradient-to-br from-coffee-light to-coffee-medium rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 via-transparent to-transparent" />

              {/* Overlay Info */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/30"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="font-display font-bold text-2xl text-coffee-dark mb-2">Visit Our Flagship Store</h3>
                <p className="text-coffee-dark/70 mb-4">
                  恵比寿駅から徒歩3分。モダンで居心地の良い空間で、最高のコーヒーをお楽しみください。
                </p>
                <motion.button
                  className="bg-gradient-to-r from-coffee-medium to-coffee-dark text-coffee-cream px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}