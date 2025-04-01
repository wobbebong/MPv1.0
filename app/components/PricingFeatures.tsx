"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Zap,
  Lock,
  Cpu,
  MessageSquare,
  Users,
  Phone,
  Code,
  Shield,
  Clock,
  Database,
  Bot,
  Rocket,
  Globe,
  Crown,
  Star,
} from "lucide-react"

const tiers = [
  {
    name: "Bitget / MEXC Referans Grubu",
    price: "0",
    color: "cyber-blue",
    icon: Zap,
    description: "Tamamen ücretsiz, Referans kodu ile kayıt olup iletişime geçmeniz yeterli, ardından gruba alımı ben gerçekleştireceğim.",
    features: [
      {
        title: "Topluluğa Şimdi Katılın",
        items: [
          { icon: Users, text: "Bitget / MEXC Referans Grubu", highlight: "Basic access" },
          { icon: MessageSquare, text: "Analiz ve topluluğun buluştuğu sohbet grubu", highlight: "Standard" },
        ],
      },
    ],
  },
  {
    name: "Teknik Analiz Eğitimi",
    price: "1000",
    color: "cyber-pink",
    icon: Star,
    popular: true,
    description: "Kendinizi geliştirmek ve piyasada hayatta kalmak için eğitimli olmak önemli bir gerçek.",
    features: [
      {
        title: "Eğitim Koşulları",
        items: [
          { icon: Brain, text: "Advanced AI Analysis", highlight: "50 signals/day" },
          { icon: Bot, text: "Pattern Recognition", highlight: "Real-time" },
          { icon: Shield, text: "Risk Control Suite", highlight: "Advanced" },
          { icon: Cpu, text: "Quantum Processing", highlight: "Priority" },
        ],
      },
      {
        title: "Gereksinimler ve Detaylar",
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
    name: "VIP Sinyal",
    price: "100",
    color: "cyber-yellow",
    icon: Crown,
    description: "Beraber çalışma fırsatını yakalayın.",
    features: [
      {
        title: "VIP Sinyal koşul ve detaylar",
        items: [
          { icon: Brain, text: "Quantum AI Engine", highlight: "Unlimited signals" },
          { icon: Rocket, text: "Predictive Analytics", highlight: "Real-time" },
          { icon: Bot, text: "Custom AI Training", highlight: "Personalized" },
          { icon: Shield, text: "Enterprise Security", highlight: "Military-grade" },
        ],
      },
    ],
  },
]

export default function PricingFeatures() {
  return (
    <section id="pricing-features" className="relative py-32 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card glow effect */}
              <div
                className={`absolute inset-0 bg-${tier.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              {/* Card content */}
              <div
                className={`relative h-full bg-gray-900/50 backdrop-blur-xl border border-${tier.color}/30 rounded-2xl p-8 ${
                  tier.popular ? "transform scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-cyber-pink text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="relative mb-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 relative mb-4">
                      <div
                        className={`absolute inset-0 bg-${tier.color} rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>
                      <tier.icon className={`w-16 h-16 text-${tier.color} relative z-10`} />
                    </div>
                    <h2 className={`text-3xl font-bold mb-2 text-${tier.color}`}>{tier.name}</h2>
                    <p className="text-gray-400">{tier.description}</p>
                  </div>

                  <div className="mb-8">
                    <span className={`text-5xl font-bold text-${tier.color}`}>${tier.price}</span>
                    <span className="text-gray-400 text-xl">/month</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full relative group"
                  >
                    <div
                      className={`absolute inset-0 bg-${tier.color} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`relative w-full py-4 rounded-xl font-bold text-cyber-black bg-${tier.color} hover:opacity-90 transition-opacity duration-300`}
                    >
                      Initialize Neural Link
                    </div>
                  </motion.button>
                </div>

                {/* Features */}
                <div className="space-y-8">
                  {tier.features.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-white text-lg font-semibold mb-4">{section.title}</h3>
                      <ul className="space-y-4">
                        {section.items.map((feature) => (
                          <motion.li
                            key={feature.text}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="relative mt-1">
                              <div
                                className={`absolute inset-0 bg-${tier.color} rounded-full blur-md opacity-50 group-hover/item:opacity-100 transition-opacity duration-300`}
                              ></div>
                              <feature.icon className={`w-5 h-5 text-${tier.color} relative z-10`} />
                            </div>
                            <div>
                              <div className="text-white font-medium">{feature.text}</div>
                              <div className={`text-sm text-${tier.color} font-medium`}>{feature.highlight}</div>
                            </div>
                          </motion.li>
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

