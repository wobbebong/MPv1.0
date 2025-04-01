import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold text-[#00fff9] cyber-glitch font-cyber" data-text="TEKNIKANALIZ">
      <span className="text-cyber-blue">Muratla</span><span className="text-cyber-pink">Piyasa </span>
    </Link>
  )
}