import MainNavbar from "./components/MainNavbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Countdown from "./components/Countdown"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-cyber">
      <MainNavbar activeRoute="/" />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Features />
        <Countdown />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

