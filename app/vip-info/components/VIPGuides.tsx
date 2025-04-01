"use client"

import { motion } from "framer-motion"
import { FileText, Lock, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

// Sample data - in a real app, this would come from an API or database
const vipGuides = [
  {
    id: 1,
    title: "Advanced Quantum Algorithm Trading Strategy",
    date: "2024-03-25",
    category: "Trading Strategy",
    locked: false,
  },
  {
    id: 2,
    title: "Neural Network Pattern Recognition for Market Reversals",
    date: "2024-03-20",
    category: "Technical Analysis",
    locked: false,
  },
  {
    id: 3,
    title: "Institutional Flow Analysis: Following Smart Money",
    date: "2024-03-15",
    category: "Market Analysis",
    locked: false,
  },
]

export default function VIPGuides() {
  return (
    <div className="bg-gray-900 border border-cyber-blue rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-cyber-blue">Latest VIP Guides</h2>
        <Link href="#" className="text-cyber-pink hover:text-cyber-blue transition-colors flex items-center">
          View All
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-4">
        {vipGuides.map((guide, index) => (
          <motion.div
            key={guide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-cyber-pink transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-start space-x-3">
                <div className="bg-cyber-black p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-cyber-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{guide.title}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="bg-cyber-pink/20 text-cyber-pink px-2 py-0.5 rounded text-xs mr-2">
                      {guide.category}
                    </span>
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{guide.date}</span>
                  </div>
                </div>
              </div>

              {guide.locked ? (
                <div className="bg-gray-700 p-1 rounded">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>
              ) : (
                <Link
                  href={`#guide-${guide.id}`}
                  className="bg-cyber-blue text-cyber-black px-3 py-1 rounded text-sm font-semibold hover:bg-cyber-pink transition-colors"
                >
                  Access
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-cyber-black/50 border border-cyber-yellow/30 rounded-lg">
        <div className="flex items-start">
          <div className="bg-cyber-yellow/20 p-2 rounded mr-3">
            <Lock className="w-5 h-5 text-cyber-yellow" />
          </div>
          <div>
            <h3 className="text-cyber-yellow font-semibold mb-1">Premium Content Access</h3>
            <p className="text-gray-400 text-sm">
              These guides are exclusive to VIP Neural Core members. The content is updated weekly with advanced trading
              strategies and market insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

