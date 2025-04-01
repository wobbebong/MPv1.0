import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyber-black text-white p-4">
      <div className="text-9xl font-bold text-cyber-pink cyber-glitch" data-text="404">
        404
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-blue">Neural Connection Lost</h1>
      <p className="text-xl text-cyber-yellow mb-6">
        The neural pathway you're searching for doesn't exist in our quantum network
      </p>

      <div className="w-24 h-24 border-4 border-t-cyber-pink border-r-cyber-blue border-b-cyber-yellow border-l-cyber-green rounded-full animate-spin mb-8"></div>

      <Link
        href="/"
        className="flex items-center bg-cyber-blue text-cyber-black px-6 py-3 rounded-lg hover:bg-cyber-pink transition-colors duration-300"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Return to Neural Core
      </Link>
    </div>
  )
}

