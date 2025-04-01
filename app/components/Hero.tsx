"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "The AI of tomorrow, launching today"

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 100)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-cyber-blue cyber-glitch"
          data-text="Welcome to irhamna.ai"
        >
          Welcome to <span className="text-cyber-yellow">irhamna.ai</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white h-8">{text}</p>
        <a
          href="#cta"
          className="bg-cyber-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-cyber-blue hover:text-cyber-black transition duration-300 animate-pulse"
        >
          Initialize Neural Link
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-pink opacity-20"></div>
      <div className="absolute inset-0 bg-cyber-black opacity-50"></div>
      <div className="absolute inset-0 cyber-grid"></div>
    </section>
  )
}

