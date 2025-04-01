"use client"

import { motion } from "framer-motion"
import { Zap, Users, Phone, Database, Shield, Clock } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Priority Signals",
    description: "Receive trading signals before standard users",
  },
  {
    icon: Users,
    title: "Private Community",
    description: "Access to exclusive VIP trading community",
  },
  {
    icon: Phone,
    title: "Direct Support",
    description: "24/7 priority support from expert analysts",
  },
  {
    icon: Database,
    title: "Historical Data",
    description: "Full access to historical trading data",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Advanced risk management tools",
  },
  {
    icon: Clock,
    title: "Early Access",
    description: "Preview new features before release",
  },
]

export default function VIPBenefits() {
  return (
    <div className="bg-gray-900 border border-cyber-pink rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyber-pink mb-6">VIP Benefits</h2>

      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3 group"
          >
            <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-cyber-black transition-colors">
              <benefit.icon className="w-5 h-5 text-cyber-yellow" />
            </div>
            <div>
              <h3 className="text-white font-semibold group-hover:text-cyber-pink transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <div className="bg-cyber-black p-4 rounded-lg border border-cyber-green/30">
          <h3 className="text-cyber-green font-semibold mb-2">Current VIP Status</h3>
          <div className="flex justify-between items-center">
            <span className="text-white">Neural Core Access</span>
            <span className="bg-cyber-green text-cyber-black px-2 py-1 rounded text-xs font-bold">ACTIVE</span>
          </div>
          <div className="mt-2 w-full bg-gray-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-cyber-blue to-cyber-green h-2 rounded-full w-3/4"></div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-400">
            <span>Renewal in 23 days</span>
            <span>75%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

