"use client"

import { useState } from "react"
import { Cpu, Zap, Lock } from "lucide-react"

const features = [
  {
    icon: <Cpu className="w-12 h-12 text-cyber-blue" />,
    title: "Quantum AI",
    description: "Powered by cutting-edge quantum algorithms",
  },
  {
    icon: <Zap className="w-12 h-12 text-cyber-pink" />,
    title: "Neural Boost",
    description: "Enhance your cognitive abilities instantly",
  },
  {
    icon: <Lock className="w-12 h-12 text-cyber-yellow" />,
    title: "Cyber Secure",
    description: "Military-grade encryption for your data",
  },
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-cyber-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12 text-cyber-blue cyber-glitch"
          data-text="Augmented Features"
        >
          Augmented Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-cyber-black p-6 rounded-lg border border-cyber-blue shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-cyber-blue/50"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex justify-center mb-4 transition-transform duration-300 ${hoveredIndex === index ? "scale-110" : ""}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyber-yellow">{feature.title}</h3>
              <p
                className={`text-gray-400 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-70"}`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

