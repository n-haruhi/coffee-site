"use client"

import { motion } from "framer-motion"
import { Coffee } from "lucide-react"
import Logo from "./Logo"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    products: [
      { name: "Coffee Menu", href: "#menu" },
      { name: "Wholesale", href: "#" },
      { name: "Subscriptions", href: "#" },
      { name: "Gift Cards", href: "#" },
    ],
    support: [
      { name: "Contact", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
    ],
  }

  return (
    <footer className="bg-coffee-dark text-coffee-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f4eddf' fillOpacity='0.1'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Logo className="w-12 h-12" />
                <span className="font-display font-bold text-3xl">BREW</span>
              </div>
              <p className="text-coffee-light leading-relaxed mb-6">
                最高品質のコーヒー豆から生まれる、特別な一杯。持続可能な農法と熟練の技術が織りなす、新しいコーヒー体験を。
              </p>
              <div className="flex items-center gap-2 text-coffee-light">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Coffee size={16} className="text-coffee-medium fill-current" />
                </motion.div>
                <span>in Tokyo</span>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-coffee-cream text-lg mb-6 capitalize">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-coffee-light hover:text-coffee-cream transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-coffee-medium/30 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-coffee-light text-sm">© 2024 BREW Coffee. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <motion.a
                  href="#"
                  className="text-coffee-light hover:text-coffee-cream transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-coffee-light hover:text-coffee-cream transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#"
                  className="text-coffee-light hover:text-coffee-cream transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Cookie Policy
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
