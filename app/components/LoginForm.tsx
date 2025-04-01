"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"
import { Lock, Mail, LogIn } from "lucide-react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(email, password)
      router.push("/")
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gray-900 border border-cyber-blue rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-cyber-blue">Neural Network Access</h2>

      {error && <div className="mb-4 p-3 bg-red-900/30 border border-red-500 text-red-400 rounded-md">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-cyber-yellow mb-2">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-cyber-yellow mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 px-4 py-2 rounded-md bg-gray-800 text-white border border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-pink"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center bg-cyber-pink text-white px-4 py-2 rounded-md hover:bg-cyber-blue hover:text-cyber-black transition-colors ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <span className="animate-pulse">Authenticating...</span>
          ) : (
            <>
              <LogIn className="w-5 h-5 mr-2" />
              Access Neural Network
            </>
          )}
        </button>

        <div className="text-center mt-4 text-sm text-gray-400">
          <p>Demo credentials:</p>
          <p>Email: user@irhamna.ai / Password: any</p>
          <p>Email: vip@irhamna.ai / Password: any</p>
          <p>Email: admin@irhamna.ai / Password: any</p>
        </div>
      </form>
    </div>
  )
}

