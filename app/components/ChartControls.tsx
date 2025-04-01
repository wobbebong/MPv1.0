"use client"

import { useState } from "react"
import { Calendar, BarChart2, TrendingUp, Zap, Save, Share2, Download } from "lucide-react"

const timeframes = ["1m", "5m", "15m", "1h", "4h", "1d", "1w"]
const indicators = ["RSI", "MACD", "Bollinger Bands", "Moving Average", "Volume", "Fibonacci"]

export default function ChartControls() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1h")
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>([])

  const toggleIndicator = (indicator: string) => {
    setSelectedIndicators((prev) =>
      prev.includes(indicator) ? prev.filter((i) => i !== indicator) : [...prev, indicator],
    )
  }

  return (
    <div className="space-y-6">
      {/* Timeframe Selection */}
      <div className="bg-gray-900 border border-cyber-blue rounded-lg p-4">
        <h3 className="text-cyber-yellow flex items-center mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          Timeframe
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-3 py-2 rounded text-sm font-semibold transition-colors ${
                selectedTimeframe === tf
                  ? "bg-cyber-blue text-cyber-black"
                  : "bg-gray-800 text-gray-300 hover:bg-cyber-blue/20"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="bg-gray-900 border border-cyber-blue rounded-lg p-4">
        <h3 className="text-cyber-yellow flex items-center mb-3">
          <BarChart2 className="w-4 h-4 mr-2" />
          Indicators
        </h3>
        <div className="space-y-2">
          {indicators.map((indicator) => (
            <button
              key={indicator}
              onClick={() => toggleIndicator(indicator)}
              className={`w-full px-3 py-2 rounded text-sm font-semibold transition-colors text-left flex items-center ${
                selectedIndicators.includes(indicator)
                  ? "bg-cyber-blue text-cyber-black"
                  : "bg-gray-800 text-gray-300 hover:bg-cyber-blue/20"
              }`}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              {indicator}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-900 border border-cyber-blue rounded-lg p-4">
        <h3 className="text-cyber-yellow flex items-center mb-3">
          <Zap className="w-4 h-4 mr-2" />
          Quick Actions
        </h3>
        <div className="space-y-2">
          <button className="w-full px-3 py-2 rounded bg-cyber-pink text-white hover:bg-cyber-blue hover:text-cyber-black transition-colors text-sm font-semibold flex items-center">
            <Save className="w-4 h-4 mr-2" />
            Save Analysis
          </button>
          <button className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300 hover:bg-cyber-blue/20 transition-colors text-sm font-semibold flex items-center">
            <Share2 className="w-4 h-4 mr-2" />
            Share Chart
          </button>
          <button className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300 hover:bg-cyber-blue/20 transition-colors text-sm font-semibold flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </button>
        </div>
      </div>
    </div>
  )
}

