import { Check, X } from "lucide-react"

const features = {
  "Trading Signals & Analysis": [
    {
      name: "Daily Market Analysis",
      basic: true,
      pro: true,
      vip: true,
    },
    {
      name: "Trading Signals",
      basic: "Basic",
      pro: "Premium",
      vip: "VIP Exclusive",
    },
    {
      name: "AI Predictions",
      basic: false,
      pro: "Basic",
      vip: "Advanced",
    },
    {
      name: "Risk Management Tools",
      basic: "Basic",
      pro: "Advanced",
      vip: "Enterprise",
    },
  ],
  "Community & Support": [
    {
      name: "Community Access",
      basic: "Basic Chat",
      pro: "Premium Chat",
      vip: "Private Room",
    },
    {
      name: "Strategy Updates",
      basic: "Weekly",
      pro: "Daily",
      vip: "Real-time",
    },
    {
      name: "Phone Support",
      basic: false,
      pro: true,
      vip: "Priority",
    },
  ],
  "Personal Mentoring": [
    {
      name: "1-on-1 Sessions",
      basic: false,
      pro: "Monthly",
      vip: "Weekly",
    },
    {
      name: "Custom Strategy",
      basic: false,
      pro: false,
      vip: true,
    },
    {
      name: "Trading Workshops",
      basic: false,
      pro: "Monthly",
      vip: "Weekly",
    },
  ],
  "Tools & Resources": [
    {
      name: "Custom Indicators",
      basic: false,
      pro: true,
      vip: true,
    },
    {
      name: "Trading Templates",
      basic: "Basic",
      pro: "Advanced",
      vip: "Custom",
    },
    {
      name: "Historical Data",
      basic: "30 Days",
      pro: "1 Year",
      vip: "Full Access",
    },
    {
      name: "API Access",
      basic: false,
      pro: "Limited",
      vip: "Full",
    },
  ],
}

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left text-cyber-yellow border-b border-cyber-blue">Feature</th>
            <th className="p-4 text-center text-cyber-blue border-b border-cyber-blue">Basic Neural Link</th>
            <th className="p-4 text-center text-cyber-pink border-b border-cyber-blue">Pro Quantum Access</th>
            <th className="p-4 text-center text-cyber-yellow border-b border-cyber-blue">VIP Neural Core</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(features).map(([category, categoryFeatures]) => (
            <>
              <tr key={category}>
                <td colSpan={4} className="p-4 bg-cyber-black/50 text-cyber-blue font-bold border-b border-cyber-blue">
                  {category}
                </td>
              </tr>
              {categoryFeatures.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`
                    transition-colors duration-200 hover:bg-gray-900/50
                    ${index % 2 === 0 ? "bg-gray-900/30" : ""}
                  `}
                >
                  <td className="p-4 border-b border-cyber-blue/20">{feature.name}</td>
                  <td className="p-4 text-center border-b border-cyber-blue/20">
                    {renderFeatureValue(feature.basic, "cyber-blue")}
                  </td>
                  <td className="p-4 text-center border-b border-cyber-blue/20">
                    {renderFeatureValue(feature.pro, "cyber-pink")}
                  </td>
                  <td className="p-4 text-center border-b border-cyber-blue/20">
                    {renderFeatureValue(feature.vip, "cyber-yellow")}
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderFeatureValue(value: boolean | string, color: string) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={`w-5 h-5 mx-auto text-${color}`} />
    ) : (
      <X className="w-5 h-5 mx-auto text-gray-500" />
    )
  }
  return <span className={`text-${color}`}>{value}</span>
}

