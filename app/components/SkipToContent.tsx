"use client"

import { useState } from "react"

export default function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <a
      href="#main-content"
      className={`fixed top-4 left-4 bg-cyber-blue text-cyber-black px-4 py-2 rounded-md z-50 transform transition-transform duration-200 ${
        isFocused ? "translate-y-0" : "-translate-y-20"
      }`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to content
    </a>
  )
}

