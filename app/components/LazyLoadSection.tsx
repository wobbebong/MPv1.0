"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface LazyLoadSectionProps {
  children: React.ReactNode
  threshold?: number
  className?: string
}

export default function LazyLoadSection({ children, threshold = 0.1, className = "" }: LazyLoadSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div className="min-h-[200px] bg-gray-900/50 animate-pulse rounded-lg"></div>}
    </div>
  )
}

