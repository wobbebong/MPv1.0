"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Mum rengi farketmez, MuratlaPiyasa affetmez."

  useEffect(() => {
    let i = 0
    let timer = null

    const typeNextChar = () => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
        timer = setTimeout(typeNextChar, 100)
      }
    }

    typeNextChar()

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [fullText])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-cyber-blue cyber-glitch font-cyber"
          data-text="İĞNELEME VAKTİ"
        >
          <span className="text-cyber-blue">Muratla</span><span className="text-cyber-pink">Piyasa</span><span className="text-cyber-yellow"> resmi web sitesi</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white h-8 font-cyber">{text}</p>
        <a
          href="/pricing"
          className="bg-cyber-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-cyber-blue hover:text-cyber-black transition duration-300 animate-pulse font-cyber"
        >
          Detaylı Bilgiler
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-pink opacity-20"></div>
      <div className="absolute inset-0 bg-cyber-black opacity-50"></div>
      <div className="absolute inset-0 cyber-grid"></div>
    </section>
  )
}

