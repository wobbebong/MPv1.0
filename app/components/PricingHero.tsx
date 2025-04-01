"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Lock, Cpu } from "lucide-react"

export default function PricingHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,249,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,0,0.05)_50%,transparent_75%)] bg-[length:200%_200%] animate-gradient"></div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(0,255,249,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,0,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-24 h-24 mx-auto mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-blue rounded-full blur-xl opacity-50 animate-pulse"></div>
              <Brain className="w-24 h-24 relative z-10 text-white" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-cyber-blue">Neural Network</span>
              <br />
              <span className="text-cyber-pink">Access Tiers</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-cyber-yellow mb-8 max-w-3xl mx-auto font-light">
              Unlock quantum-powered trading intelligence
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <motion.a
                href="#pricing-features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-cyber-blue rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <button className="relative px-8 py-4 rounded-xl font-bold text-white border-2 border-cyber-blue hover:border-cyber-pink transition-colors duration-500">
                  View Plans
                </button>
              </motion.a>

              <motion.a
                href="#custom-pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-cyber-pink rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <button className="relative px-8 py-4 rounded-xl font-bold text-white border-2 border-cyber-pink hover:border-cyber-blue transition-colors duration-500">
                  Custom Integration
                </button>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}\
            classNameopacity: 1, y: 0}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Brain,
                title: "Neural Processing",
                description: "Advanced AI algorithms analyze market patterns in real-time",
                color: "cyber-blue",
              },
              {
                icon: Cpu,
                title: "Quantum Computing",
                description: "Leverage quantum processing for complex calculations",
                color: "cyber-pink",
              },
              {
                icon: Lock,
                title: "Military-Grade Security",
                description: "Enterprise-level encryption for your trading data",
                color: "cyber-yellow",
              },
              {
                icon: Zap,
                title: "Lightning Speed",
                description: "Ultra-fast execution and real-time market analysis",
                color: "cyber-green",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-${feature.color}/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div className="relative h-full bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-500">
                  <div className="mb-4">
                    <div className="relative w-12 h-12">
                      <div
                        className={`absolute inset-0 bg-${feature.color} rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>
                      <feature.icon className={`w-12 h-12 relative z-10 text-${feature.color}`} />
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold text-${feature.color} mb-2`}>{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

