"use client"

import { motion } from "framer-motion"

interface LogoProps {
  className?: string
}

export default function Logo({ className = "w-12 h-12" }: LogoProps) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Coffee Bean Shape */}
      <motion.path
        d="M50 10C65 10 80 25 80 45C80 55 75 65 65 70C60 75 55 80 50 85C45 80 40 75 35 70C25 65 20 55 20 45C20 25 35 10 50 10Z"
        fill="url(#coffeeGradient)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Coffee Bean Crack */}
      <motion.path
        d="M50 15C50 25 48 35 45 45C48 55 50 65 50 75"
        stroke="#5a3d21"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
      />

      {/* Steam Lines */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
        <motion.path
          d="M35 20C35 15 37 10 40 8"
          stroke="url(#steamGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: ["M35 20C35 15 37 10 40 8", "M35 20C37 15 35 10 38 8", "M35 20C35 15 37 10 40 8"],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 18C50 13 52 8 55 6"
          stroke="url(#steamGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: ["M50 18C50 13 52 8 55 6", "M50 18C52 13 50 8 53 6", "M50 18C50 13 52 8 55 6"],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
          d="M65 20C65 15 63 10 60 8"
          stroke="url(#steamGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: ["M65 20C65 15 63 10 60 8", "M65 20C63 15 65 10 62 8", "M65 20C65 15 63 10 60 8"],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.6 }}
        />
      </motion.g>

      {/* Gradients */}
      <defs>
        <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ab7a44" />
          <stop offset="50%" stopColor="#8b5a2b" />
          <stop offset="100%" stopColor="#5a3d21" />
        </linearGradient>
        <linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#d2b595" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f4eddf" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
