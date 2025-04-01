"use client"

import type React from "react"
import { useState } from "react"

export default function CTA() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log("Submitted email:", email)
    setEmail("")
    alert("Thank you for joining the neural network!")
  }

  return (
    <section id="cta" className="py-20 bg-gradient-to-t from-cyber-black to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-cyber-blue cyber-glitch" data-text="Join the Neural Network">
          Join the Neural Network
        </h2>
        <p className="text-xl mb-8 text-cyber-yellow">Plug in now for early access and system upgrades!</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-cyber-pink text-white px-6 py-2 rounded-r-full font-semibold hover:bg-cyber-blue hover:text-cyber-black transition duration-300 animate-pulse"
            >
              Initiate
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

