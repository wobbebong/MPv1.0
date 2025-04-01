"use client"

import { useState, useEffect } from "react"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function getTimeLeft() {
    const difference = +new Date("2024-12-31") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  return (
    <section className="py-20 bg-cyber-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-cyber-pink cyber-glitch" data-text="System Launch Imminent">
          System Launch Imminent
        </h2>
        <div className="flex justify-center space-x-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-4xl font-bold mb-2 text-cyber-blue animate-pulse">{value}</div>
              <div className="text-sm uppercase text-cyber-yellow">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

