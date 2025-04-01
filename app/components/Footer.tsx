import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-cyber-black border-t border-cyber-blue py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-cyber-blue cyber-glitch" data-text="irhamna.ai">
              irhamna<span className="text-cyber-pink">.ai</span>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300">
                  Privacy Protocol
                </Link>
              </li>
              <li>
                <Link href="#" className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300">
                  Neural Link
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} irhamna.ai. All rights reserved in the matrix.
        </div>
      </div>
    </footer>
  )
}

