import MainNavbar from "../components/MainNavbar"
import WarningBanner from "../components/WarningBanner"
import VIPGuides from "./components/VIPGuides"
import VIPBenefits from "./components/VIPBenefits"

export default function VIPInfo() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-cyber">
      <MainNavbar activeRoute="/vip-info" />
      <WarningBanner
        message="VIP access is restricted to Neural Core subscribers only. All information is confidential."
        type="warning"
      />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1
          className="text-3xl md:text-4xl font-bold mb-6 text-cyber-blue cyber-glitch"
          data-text="VIP Neural Core Access"
        >
          VIP Neural Core Access
        </h1>

        <p className="text-cyber-yellow mb-8 text-lg">
          Welcome to the exclusive VIP information hub. Access premium trading insights and advanced neural network
          features.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VIPGuides />
          </div>
          <div className="lg:col-span-1">
            <VIPBenefits />
          </div>
        </div>
      </main>
    </div>
  )
}

