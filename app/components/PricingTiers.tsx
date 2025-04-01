"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Star,
  Crown,
  MessageSquare,
  BarChart2,
  Users,
  Phone,
  Code,
  Brain,
  Shield,
  Clock,
  Database,
  Cpu,
  Bot,
  Rocket,
  Lock,
  Globe,
} from "lucide-react"

const tiers = [
  {
    name: "Basic Neural Link",
    price: "49",
    gradient: "from-[#00FFFF] via-[#0099FF] to-[#00FFFF]",
    icon: Zap,
    description: "Essential trading insights for beginners",
    features: [
      {
        category: "Trading Intelligence",
        items: [
          { icon: Brain, text: "Basic AI Analysis", highlight: "10 signals/day" },
          { icon: BarChart2, text: "Market Trends", highlight: "Daily updates" },
          { icon: Shield, text: "Risk Management", highlight: "Basic tools" },
        ],
      },
      {
        category: "Community Access",
        items: [
          { icon: Users, text: "Public Trading Room", highlight: "Basic access" },
          { icon: Clock, text: "Strategy Updates", highlight: "Weekly" },
          { icon: MessageSquare, text: "Community Support", highlight: "Standard" },
        ],
      },
    ],
  },
  {
    name: "Pro Quantum Access",
    price: "149",
    gradient: "from-[#FF00FF] via-[#FF0099] to-[#FF00FF]",
    icon: Star,
    popular: true,
    description: "Advanced trading tools for serious traders",
    features: [
      {
        category: "Enhanced Intelligence",
        items: [
          { icon: Brain, text: "Advanced AI Analysis", highlight: "50 signals/day" },
          { icon: Bot, text: "Pattern Recognition", highlight: "Real-time" },
          { icon: Shield, text: "Risk Control Suite", highlight: "Advanced" },
          { icon: Cpu, text: "Quantum Processing", highlight: "Priority" },
        ],
      },
      {
        category: "Premium Features",
        items: [
          { icon: Users, text: "Private Trading Room", highlight: "24/7 access" },
          { icon: Phone, text: "Priority Support", highlight: "4h response" },
          { icon: Database, text: "Historical Data", highlight: "1 year" },
          { icon: Code, text: "Custom Indicators", highlight: "Full access" },
        ],
      },
    ],
  },
  {
    name: "VIP Neural Core",
    price: "499",
    gradient: "from-[#FFFF00] via-[#FFD700] to-[#FFFF00]",
    icon: Crown,
    description: "Elite access to our most powerful features",
    features: [
      {
        category: "Quantum Intelligence",
        items: [
          { icon: Brain, text: "Quantum AI Engine", highlight: "Unlimited signals" },
          { icon: Rocket, text: "Predictive Analytics", highlight: "Real-time" },
          { icon: Bot, text: "Custom AI Training", highlight: "Personalized" },
          { icon: Shield, text: "Enterprise Security", highlight: "Military-grade" },
        ],
      },
      {
        category: "Elite Services",
        items: [
          { icon: Users, text: "1-on-1 Mentoring", highlight: "Weekly sessions" },
          { icon: Phone, text: "24/7 Direct Line", highlight: "Instant access" },
          { icon: Globe, text: "Global Markets", highlight: "Full access" },
          { icon: Lock, text: "API Integration", highlight: "Unlimited" },
        ],
      },
    ],
  },
]

export default function PricingTiers() {
  return (
    <section id="pricing-tiers" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-black">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,0,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:400%_400%] animate-gradient"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              {/* Card */}
              <div
                className={`relative h-full bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 ${
                  tier.popular ? "transform scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="relative mb-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 relative mb-4`}>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>
                      <tier.icon className="w-16 h-16 text-white relative z-10" />
                    </div>
                    <h2
                      className={`text-3xl font-bold mb-2 bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}
                    >
                      {tier.name}
                    </h2>
                    <p className="text-gray-400">{tier.description}</p>
                  </div>

                  <div className="mb-8">
                    <span
                      className={`text-5xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}
                    >
                      ${tier.price}
                    </span>
                    <span className="text-gray-400 text-xl">/month</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full relative group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`relative w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${tier.gradient} hover:opacity-90 transition-opacity duration-300`}
                    >
                      Initialize Link
                    </div>
                  </motion.button>
                </div>

                {/* Features */}
                <div className="space-y-8">
                  {tier.features.map((section) => (
                    <div key={section.category}>
                      <h3 className="text-white text-lg font-semibold mb-4">{section.category}</h3>
                      <ul className="space-y-4">
                        {section.items.map((feature) => (
                          <li key={feature.text} className="flex items-start gap-3 group/item">
                            <div className="relative mt-1">
                              <div
                                className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} rounded-full blur-md opacity-50 group-hover/item:opacity-100 transition-opacity duration-300`}
                              ></div>
                              <feature.icon className="w-5 h-5 text-white relative z-10" />
                            </div>
                            <div>
                              <div className="text-white font-medium">{feature.text}</div>
                              <div
                                className={`text-sm bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent font-medium`}
                              >
                                {feature.highlight}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

