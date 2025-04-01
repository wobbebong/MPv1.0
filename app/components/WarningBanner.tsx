"use client"

import { useState } from "react"
import { AlertTriangle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface WarningBannerProps {
  message: string
  type?: "warning" | "info" | "success"
}

export default function WarningBanner({ message, type = "warning" }: WarningBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  const colors = {
    warning: {
      bg: "bg-cyber-yellow/10",
      border: "border-cyber-yellow",
      text: "text-cyber-yellow",
      icon: <AlertTriangle className="w-5 h-5 text-cyber-yellow" />,
    },
    info: {
      bg: "bg-cyber-blue/10",
      border: "border-cyber-blue",
      text: "text-cyber-blue",
      icon: <AlertTriangle className="w-5 h-5 text-cyber-blue" />,
    },
    success: {
      bg: "bg-cyber-green/10",
      border: "border-cyber-green",
      text: "text-cyber-green",
      icon: <AlertTriangle className="w-5 h-5 text-cyber-green" />,
    },
  }

  const { bg, border, text, icon } = colors[type]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`${bg} ${border} ${text} border-b py-2 px-4 flex items-center justify-between`}
        >
          <div className="flex items-center">
            {icon}
            <span className="ml-2">{message}</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="hover:text-cyber-pink transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

