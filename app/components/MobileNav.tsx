"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"
import { motion, AnimatePresence } from "framer-motion"

interface MobileNavProps {
  activeRoute?: string
}

export default function MobileNav({ activeRoute }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      href: "/",
      label: "Home",
      isActive: activeRoute === "/",
    },
    {
      href: "/feed",
      label: "Analysis Feed",
      isActive: activeRoute === "/feed",
    },
    {
      href: "/chart-analysis",
      label: "Chart Analysis",
      isActive: activeRoute === "/chart-analysis",
    },
    {
      href: "/pricing",
      label: "Pricing",
      isActive: activeRoute === "/pricing",
    },
    {
      href: "/vip-info",
      label: "VIP Info",
      isActive: activeRoute === "/vip-info",
    },
  ]

  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center py-4 px-4">
        <Logo />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-cyber-yellow hover:text-cyber-pink transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-900 border-t border-cyber-blue"
          >
            <nav className="py-4 px-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-2 px-4 rounded-md ${
                        item.isActive ? "bg-cyber-blue/20 text-cyber-pink" : "text-cyber-yellow hover:bg-gray-800"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

