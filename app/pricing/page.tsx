import MainNavbar from "../components/MainNavbar"
import PricingHero from "../components/PricingHero"
import PricingFeatures from "../components/PricingFeatures"
import CustomPricingForm from "../components/CustomPricingForm"

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-cyber">
      <MainNavbar activeRoute="/pricing" />
      <main className="flex-grow">
        <PricingHero />
        <PricingFeatures />
        <section id="custom-pricing" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-pink/5 to-transparent"></div>
          <div className="container relative z-10 mx-auto px-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-cyber-blue"
              data-text="Custom Neural Integration"
            >
              Custom Neural Integration
            </h2>
            <p className="text-center text-cyber-yellow text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Request a customized package tailored to your unique trading requirements and goals
            </p>
            <CustomPricingForm />
          </div>
        </section>
      </main>
    </div>
  )
}

