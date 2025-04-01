import Link from "next/link"

export default function AdminHeader() {
  return (
    <header className="bg-cyber-black border-b border-cyber-pink sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyber-blue cyber-glitch" data-text="irhamna.ai">
          irhamna<span className="text-cyber-pink">.ai</span>
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-cyber-green">Admin Access Granted</span>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-pink transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/feed"
                className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300 relative group"
              >
                View Feed
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-pink transition-all group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

