"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    TradingView: any
  }
}

export default function TradingViewChart() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/tv.js"
    script.async = true
    script.onload = () => {
      if (containerRef.current && window.TradingView) {
        new window.TradingView.widget({
          container_id: containerRef.current.id,
          width: "100%",
          height: "600",
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#0a0a0a",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          studies: ["RSI@tv-basicstudies", "MASimple@tv-basicstudies", "MACD@tv-basicstudies"],
          drawings: ["FibonacciRetracement", "TrendLine", "Rectangle"],
          overrides: {
            "mainSeriesProperties.candleStyle.upColor": "#39ff14",
            "mainSeriesProperties.candleStyle.downColor": "#ff00ff",
            "mainSeriesProperties.candleStyle.borderUpColor": "#39ff14",
            "mainSeriesProperties.candleStyle.borderDownColor": "#ff00ff",
            "mainSeriesProperties.candleStyle.wickUpColor": "#39ff14",
            "mainSeriesProperties.candleStyle.wickDownColor": "#ff00ff",
            "paneProperties.background": "#0a0a0a",
            "paneProperties.vertGridProperties.color": "#00fff922",
            "paneProperties.horzGridProperties.color": "#00fff922",
          },
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return <div id="tradingview_widget" ref={containerRef} className="w-full h-[600px] bg-cyber-black" />
}

