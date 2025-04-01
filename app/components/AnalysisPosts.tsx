"use client"

import { useState } from "react"
import AnalysisPost from "./AnalysisPost"

// Sample data - in a real app, this would come from a database
const samplePosts = [
  {
    id: 1,
    title: "Quantum Algorithm Predicts Market Shift",
    excerpt:
      "Our advanced quantum algorithms have detected a significant pattern in market behavior indicating a potential shift in the next 72 hours.",
    content:
      "Our advanced quantum algorithms have detected a significant pattern in market behavior indicating a potential shift in the next 72 hours. The neural network has identified correlations between multiple data points that suggest a 78% probability of upward momentum in tech sectors, particularly in AI and quantum computing stocks. This analysis is based on processing over 2.3 million data points from various sources including market transactions, social sentiment, and macroeconomic indicators.",
    author: "Neural Core",
    date: "2024-01-15",
    tags: ["Market Prediction", "Quantum Analysis", "Tech Sector"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    chartImages: [
      "/placeholder.svg?height=400&width=600&text=Tech+Sector+Momentum+Chart",
      "/placeholder.svg?height=400&width=600&text=AI+Stock+Correlation+Matrix",
    ],
  },
  {
    id: 2,
    title: "Cybersecurity Token Analysis",
    excerpt: "Deep dive into the emerging cybersecurity token market with predictive modeling for Q1 2024.",
    content:
      "Our deep dive into the emerging cybersecurity token market reveals significant growth potential in Q1 2024. The analysis shows a correlation between recent high-profile security breaches and increased investment in decentralized security solutions. The neural network predicts a 63% chance of at least three major cybersecurity tokens experiencing >40% growth by March. Key indicators include increased institutional adoption, regulatory developments in major markets, and technological advancements in zero-knowledge proof implementations.",
    author: "Quantum Analyst",
    date: "2024-01-10",
    tags: ["Cybersecurity", "Token Analysis", "Q1 Forecast"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    chartImages: [
      "/placeholder.svg?height=400&width=600&text=Cybersecurity+Token+Growth+Projection",
      "/placeholder.svg?height=400&width=600&text=Security+Breach+Correlation+Chart",
      "/placeholder.svg?height=400&width=600&text=Institutional+Adoption+Metrics",
    ],
  },
  {
    id: 3,
    title: "Neural Network Detects Anomalous Trading Patterns",
    excerpt: "Unusual trading patterns detected across multiple exchanges suggest coordinated activity.",
    content:
      "Our neural network has detected anomalous trading patterns across multiple exchanges that suggest coordinated activity. The analysis shows unusual order book behaviors occurring simultaneously on five major exchanges, with a statistical significance that exceeds random chance by a factor of 12.7. The pattern began approximately 36 hours ago and appears to be targeting specific market sectors. Historical analysis of similar patterns suggests this could precede a significant market movement within 3-5 days. We recommend increased vigilance and risk management strategies during this period.",
    author: "Pattern Recognition Module",
    date: "2024-01-05",
    tags: ["Anomaly Detection", "Trading Patterns", "Risk Alert"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    chartImages: [
      "/placeholder.svg?height=400&width=600&text=Anomalous+Trading+Pattern+Detection",
      "/placeholder.svg?height=400&width=600&text=Exchange+Correlation+Heatmap",
      "/placeholder.svg?height=400&width=600&text=Historical+Pattern+Comparison",
    ],
  },
]

export default function AnalysisPosts() {
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null)

  const togglePost = (id: number) => {
    setExpandedPostId(expandedPostId === id ? null : id)
  }

  return (
    <div className="space-y-8">
      {samplePosts.map((post) => (
        <AnalysisPost
          key={post.id}
          post={post}
          isExpanded={expandedPostId === post.id}
          toggleExpand={() => togglePost(post.id)}
        />
      ))}
    </div>
  )
}

