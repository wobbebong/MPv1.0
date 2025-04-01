"use client"

import { motion } from "framer-motion";
import { Brain, Zap, Lock, Cpu, Crown, MessageSquare, Book, MessageCircleQuestion } from "lucide-react";

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
              <div className="flex justify-center mb-15">
              <Crown className="w-50 h-40 relative z-10 text-cyber-yellow" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-cyber-blue">Muratla</span><span className="text-cyber-pink">Piyasa</span>
              <br />
              <span className="text-cyber-yellow">Servisler</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-cyber-blue mb-8 max-w-3xl mx-auto font-light">
              Tüm servislere dair detaylı bilgiler Telegram grubunda veya telefon numaramdan ulaşabilirsiniz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[ 
              { icon: MessageSquare, title: "Bitget / MEXC Referans", description: "Bitget / MEXC Referans kodum ile kayıt olup bana ulaşırsanız ücretsiz sinyal grubuna katılabilirsiniz.", color: "cyber-blue" },
              { icon: Zap, title: "VIP Sinyal", description: "VIP Sinyal grubuna katılmak için Whatsapp veya Telegram üzerinden iletişime geçebilirsiniz.", color: "cyber-yellow" },
              { icon: Book, title: "Teknik Analiz Eğitimi", description: "Piyasada hayatta kalmanın şartı.", color: "cyber-pink" },
              { icon: MessageCircleQuestion, title: "İletişim", description: "Telegram grubuna katılıp sohbete dahil olabilir, sorularınızı sorabilir, benzer zihinler ile tanışabilirsiniz.", color: "cyber-green" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-${feature.color}/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative h-full bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-500">
                  <div className="mb-4">
                    <div className="relative w-12 h-12">
                      <div className={`absolute inset-0 bg-${feature.color} rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
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
  );
}