"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Tag, ChevronDown, ChevronUp, ZoomIn } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ChartViewer3D from "./ChartViewer3D"

interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  tags: string[]
  imageUrl: string
  chartImages: string[]
}

interface AnalysisPostProps {
  post: Post
  isExpanded: boolean
  toggleExpand: () => void
}

export default function AnalysisPost({ post, isExpanded, toggleExpand }: AnalysisPostProps) {
  const [showChartViewer, setShowChartViewer] = useState(false)
  const [activeChartIndex, setActiveChartIndex] = useState(0)

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const openChartViewer = (index: number) => {
    setActiveChartIndex(index)
    setShowChartViewer(true)
  }

  return (
    <motion.article
      layout
      className="bg-gray-900 border border-cyber-blue rounded-lg overflow-hidden shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 w-full">
        <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="bg-cyber-pink text-white px-2 py-1 rounded-md text-sm font-semibold">{post.author}</span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-cyber-blue">{post.title}</h2>

        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Calendar className="w-4 h-4 mr-1 text-cyber-yellow" />
          <span>{formattedDate}</span>
        </div>

        <p className="text-gray-300 mb-4">{isExpanded ? post.content : post.excerpt}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 overflow-hidden"
            >
              <h3 className="text-cyber-yellow mb-3 font-semibold">Analysis Charts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {post.chartImages.map((chart, index) => (
                  <div
                    key={index}
                    className="relative h-48 border border-cyber-blue rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openChartViewer(index)}
                  >
                    <Image
                      src={chart || "/placeholder.svg"}
                      alt={`Chart ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-cyber-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-cyber-blue text-cyber-black rounded-full p-2">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="bg-gray-800 text-cyber-yellow px-2 py-1 rounded-md text-xs flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={toggleExpand}
          className="flex items-center text-cyber-pink hover:text-cyber-blue transition-colors duration-300"
        >
          {isExpanded ? (
            <>
              <span>Collapse</span>
              <ChevronUp className="w-4 h-4 ml-1" />
            </>
          ) : (
            <>
              <span>Read More</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </div>

      {showChartViewer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-black/90">
          <ChartViewer3D chartUrl={post.chartImages[activeChartIndex]} onClose={() => setShowChartViewer(false)} />
        </div>
      )}
    </motion.article>
  )
}

