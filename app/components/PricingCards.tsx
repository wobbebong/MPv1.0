"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Zap, Star, Crown, Check } from "lucide-react"

const plans = [
  {
    name: "Basic Neural Link",
    price: "49",
    description: "Essential trading insights for beginners",
    icon: Zap,
    features: ["Daily Market Analysis", "Basic Trading Signals", "Community Chat Access", "Weekly Strategy Updates"],
    color: "cyber-blue",
    popular: false,
  },
  {
    name: "Pro Quantum Access",
    price: "149",
    description: "Advanced trading tools for serious traders",
    icon: Star,
    features: [
      "Everything in Basic",
      "Premium Trading Signals",
      "1-on-1 Strategy Sessions",
      "Priority Support",
      "Advanced Indicators",
    ],
    color: "cyber-pink",
    popular: true,
  },
  {
    name: "VIP Neural Core",
    price: "499",
    description: "Elite access to our most powerful features",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Exclusive VIP Signals",
      "Direct Mentor Access",
      "Custom Strategy Development",
      "Early Access to Features",
      "Private Trading Room",
    ],
    color: "cyber-yellow",
    popular: false,
  },
]

export default function PricingCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => {
        const Icon = plan.icon
        return (
          <motion.div
            key={plan.name}
            className={`relative bg-gray-900 border-2 rounded-xl overflow-hidden
              ${plan.popular ? "border-cyber-pink" : `border-${plan.color}`}
              ${hoveredCard === index ? "transform scale-105" : ""}
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            {plan.popular && (
              <div className="absolute top-4 right-4">
                <span className="bg-cyber-pink text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
              </div>
            )}

            <div className="p-6">
              <div className={`text-${plan.color} mb-4`}>
                <Icon className="w-12 h-12" />
              </div>

              <h3 className={`text-2xl font-bold mb-2 text-${plan.color}`}>{plan.name}</h3>

              <p className="text-gray-400 mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className={`w-5 h-5 mr-2 text-${plan.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold
                  ${
                    plan.popular
                      ? "bg-cyber-pink text-white hover:bg-cyber-blue"
                      : `bg-${plan.color} text-cyber-black hover:bg-opacity-80`
                  }
                  transition-colors duration-300
                `}
              >
                Initialize Neural Link
              </button>
            </div>

            {/* Animated border effect */}
            <div
              className={`absolute inset-0 border-2 border-${plan.color} opacity-0
                ${hoveredCard === index ? "animate-pulse opacity-30" : ""}
              `}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

