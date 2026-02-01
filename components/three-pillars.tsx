import { Card } from "@/components/ui/card"
import { User, Shield, TrendingUp } from "lucide-react"

export function ThreePillars() {
  const pillars = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Represent",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/30",
      description:
        "An AI assistant that talks to visitors as my digital presence. Ask it about my skills, experience, and security philosophy. It learns and improves with each conversation.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Defend",
      color: "text-green-400",
      bgColor: "bg-green-500/10 border-green-500/30",
      description:
        "Real-time threat monitoring and active defense mechanisms. Visit the threat dashboard to see attacks being blocked in real-time. This is genuine security in action.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Learn",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/30",
      description:
        "Every attack and interaction teaches the system. Defense mechanisms are updated based on real threats. Security gets stronger through continuous learning and adaptation.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">The Three Pillars</h2>
          <p className="text-slate-400">How this digital twin works</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <Card key={idx} className={`border ${pillar.bgColor} glass-dark`}>
              <div className="p-8 space-y-4">
                <div className={pillar.color}>{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
