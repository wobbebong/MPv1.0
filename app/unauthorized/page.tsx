import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyber-black text-white p-4">
      <Shield className="w-24 h-24 text-cyber-pink mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-cyber-blue cyber-glitch" data-text="Access Denied">
        Access Denied
      </h1>
      <p className="text-xl text-cyber-yellow mb-6 text-center max-w-md">
        Your neural implant doesn't have the required permissions to access this quantum sector.
      </p>

      <div className="p-4 bg-gray-900 border border-cyber-pink rounded-lg mb-8 max-w-md">
        <h2 className="text-cyber-pink font-bold mb-2">Security Protocol Activated</h2>
        <p className="text-gray-300">
          This area is restricted to users with higher neural clearance. Please upgrade your neural link or contact the
          system administrator.
        </p>
      </div>

      <Link
        href="/"
        className="flex items-center bg-cyber-blue text-cyber-black px-6 py-3 rounded-lg hover:bg-cyber-pink transition-colors duration-300"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Return to Authorized Zone
      </Link>
    </div>
  )
}

