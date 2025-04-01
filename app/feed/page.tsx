import type { Metadata } from "next"
import MainNavbar from "../components/MainNavbar"
import AnalysisPosts from "../components/AnalysisPosts"

export const metadata: Metadata = {
  title: "Neural Analysis Feed",
  description:
    "Access the latest technical analysis from our quantum AI algorithms. Get real-time market insights and trading signals.",
  openGraph: {
    title: "Neural Analysis Feed | irhamna.ai",
    description:
      "Access the latest technical analysis from our quantum AI algorithms. Get real-time market insights and trading signals.",
  },
}

export default function Feed() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-cyber">
      <MainNavbar activeRoute="/feed" />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-cyber-blue cyber-glitch" data-text="Neural Analysis Feed">
          Neural Analysis Feed
        </h1>
        <p className="text-cyber-yellow mb-8">Access the latest technical analysis from our quantum AI algorithms</p>
        <AnalysisPosts />
      </main>
    </div>
  )
}

