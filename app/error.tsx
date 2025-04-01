"use client"

import { useEffect } from "react"
import Link from "next/link"
import { RefreshCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyber-black text-white p-4">
      <div className="text-6xl font-bold text-cyber-pink cyber-glitch mb-4" data-text="ERROR">
        ERROR
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-blue">Neural Network Malfunction</h1>
      <p className="text-xl text-cyber-yellow mb-6 text-center max-w-md">
        A quantum fluctuation has disrupted the neural pathways. Our AI engineers are working to restore functionality.
      </p>

      <div className="flex space-x-4 mt-6">
        <button
          onClick={reset}
          className="flex items-center bg-cyber-pink text-white px-6 py-3 rounded-lg hover:bg-cyber-blue hover:text-cyber-black transition-colors duration-300"
        >
          <RefreshCcw className="w-5 h-5 mr-2" />
          Recalibrate Neural Network
        </button>

        <Link
          href="/"
          className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

