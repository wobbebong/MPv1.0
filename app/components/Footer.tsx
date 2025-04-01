import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-cyber-black border-t border-cyber-blue py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-cyber-blue cyber-glitch" data-text="TEKNIKANALIZ">
            <span className="text-cyber-blue">Muratla</span><span className="text-cyber-pink">Piyasa </span>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300">
                  Servisler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="#" className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300">
                  Diğer Linkler
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} <span className="text-cyber-blue">Muratla</span><span className="text-cyber-pink">Piyasa </span> Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}

