"use client"

import type React from "react"
import { useState } from "react"
import { Save, Plus, X, Image } from "lucide-react"

export default function AdminPostForm() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "Neural Core",
    tags: [""] as string[],
    imageUrl: "/placeholder.svg?height=400&width=600",
    chartImages: [""] as string[],
  })

  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...formData.tags]
    newTags[index] = value
    setFormData((prev) => ({
      ...prev,
      tags: newTags,
    }))
  }

  const handleChartImageChange = (index: number, value: string) => {
    const newChartImages = [...formData.chartImages]
    newChartImages[index] = value
    setFormData((prev) => ({
      ...prev,
      chartImages: newChartImages,
    }))
  }

  const addTag = () => {
    setFormData((prev) => ({
      ...prev,
      tags: [...prev.tags, ""],
    }))
  }

  const removeTag = (index: number) => {
    const newTags = [...formData.tags]
    newTags.splice(index, 1)
    setFormData((prev) => ({
      ...prev,
      tags: newTags,
    }))
  }

  const addChartImage = () => {
    setFormData((prev) => ({
      ...prev,
      chartImages: [...prev.chartImages, ""],
    }))
  }

  const removeChartImage = (index: number) => {
    const newChartImages = [...formData.chartImages]
    newChartImages.splice(index, 1)
    setFormData((prev) => ({
      ...prev,
      chartImages: newChartImages,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log("Submitted post:", formData)

    // Show success message
    setSuccessMessage("Analysis post successfully uploaded to the neural network")

    // Reset form after submission
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      author: "Neural Core",
      tags: [""],
      imageUrl: "/placeholder.svg?height=400&width=600",
      chartImages: [""],
    })

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("")
    }, 3000)
  }

  return (
    <div className="bg-gray-900 border border-cyber-blue rounded-lg p-6">
      {successMessage && (
        <div className="mb-6 p-4 bg-cyber-green/20 border border-cyber-green text-cyber-green rounded-md">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-cyber-yellow mb-2">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
            placeholder="Enter analysis title"
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-cyber-yellow mb-2">
            Excerpt
          </label>
          <input
            type="text"
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
            placeholder="Brief summary of the analysis"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-cyber-yellow mb-2">
            Full Analysis
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
            placeholder="Enter detailed technical analysis"
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-cyber-yellow mb-2">
            Author
          </label>
          <select
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
          >
            <option value="Neural Core">Neural Core</option>
            <option value="Quantum Analyst">Quantum Analyst</option>
            <option value="Pattern Recognition Module">Pattern Recognition Module</option>
            <option value="Predictive Algorithm">Predictive Algorithm</option>
          </select>
        </div>

        <div>
          <label className="block text-cyber-yellow mb-2">Tags</label>
          <div className="space-y-2">
            {formData.tags.map((tag, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => handleTagChange(index, e.target.value)}
                  className="flex-grow px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
                  placeholder="Enter tag"
                />
                {formData.tags.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="p-2 text-cyber-pink hover:text-cyber-yellow"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addTag} className="flex items-center text-cyber-blue hover:text-cyber-pink">
              <Plus className="w-4 h-4 mr-1" />
              Add Tag
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-cyber-yellow mb-2">
            Cover Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block text-cyber-yellow mb-2">Chart Images</label>
          <div className="space-y-2">
            {formData.chartImages.map((chart, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="flex-grow flex items-center px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue">
                  <Image className="w-5 h-5 mr-2 text-cyber-pink" />
                  <input
                    type="text"
                    value={chart}
                    onChange={(e) => handleChartImageChange(index, e.target.value)}
                    className="flex-grow bg-transparent focus:outline-none"
                    placeholder="Enter chart image URL"
                  />
                </div>
                {formData.chartImages.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeChartImage(index)}
                    className="p-2 text-cyber-pink hover:text-cyber-yellow"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addChartImage}
              className="flex items-center text-cyber-blue hover:text-cyber-pink"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Chart Image
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center w-full bg-cyber-pink text-white px-6 py-3 rounded-md font-semibold hover:bg-cyber-blue hover:text-cyber-black transition duration-300"
        >
          <Save className="w-5 h-5 mr-2" />
          Upload to Neural Network
        </button>
      </form>
    </div>
  )
}

