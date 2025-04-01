"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function CustomPricingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    requirements: "",
    budget: "",
    timeline: "",
    additionalInfo: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log("Form submitted:", formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        requirements: "",
        budget: "",
        timeline: "",
        additionalInfo: "",
      })
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-gray-900 border border-cyber-blue rounded-lg p-6">
        {submitted ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
            <div className="text-cyber-green mb-4 text-2xl">Request Received!</div>
            <p className="text-gray-400">Our quantum analysts will process your request and contact you shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-cyber-yellow mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-cyber-yellow mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-cyber-yellow mb-2">
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <label htmlFor="requirements" className="block text-cyber-yellow mb-2">
                Service Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
                placeholder="Describe your trading requirements"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-cyber-yellow mb-2">
                  Monthly Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
                >
                  <option value="">Select budget range</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-cyber-yellow mb-2">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate</option>
                  <option value="1-2-weeks">1-2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-cyber-yellow mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
                placeholder="Any additional details you'd like to share"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyber-pink text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyber-blue hover:text-cyber-black transition-colors duration-300 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Submit Request
            </button>
          </form>
        )}
      </div>
    </motion.div>
  )
}

