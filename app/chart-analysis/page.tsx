import MainNavbar from "../components/MainNavbar"
import TradingViewChart from "../components/TradingViewChart"
import ChartControls from "../components/ChartControls"

export default function ChartAnalysis() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-cyber">
      <MainNavbar activeRoute="/chart-analysis" />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-cyber-blue cyber-glitch" data-text="Neural Chart Analysis">
          Neural Chart Analysis
        </h1>
        <p className="text-cyber-yellow mb-8">Advanced technical analysis powered by quantum algorithms</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-gray-900 border border-cyber-blue rounded-lg p-4">
              <TradingViewChart />
            </div>
          </div>
          <div className="lg:col-span-1">
            <ChartControls />
          </div>
        </div>
      </main>
    </div>
  )
}

