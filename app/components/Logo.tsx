import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold text-[#00fff9] cyber-glitch font-cyber" data-text="irhamna.ai">
      irhamna<span className="text-[#ff00ff]">.ai</span>
    </Link>
  )
}