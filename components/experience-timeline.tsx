import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export function ExperienceTimeline() {
  const timeline = [
    {
      period: "2023 - Present",
      title: "Senior Security Engineer",
      company: "TechCorp Security Division",
      description: "Leading security architecture for cloud infrastructure and building threat intelligence systems.",
      highlights: [
        "Led team of 5 security engineers",
        "Reduced breach response time by 60%",
        "Built automated threat detection",
      ],
    },
    {
      period: "2021 - 2023",
      title: "Security Engineer",
      company: "FinSecure Inc.",
      description: "Implemented security controls for financial technology platform serving millions of users.",
      highlights: [
        "Designed zero-trust architecture",
        "Managed penetration testing programs",
        "Security tooling automation",
      ],
    },
    {
      period: "2019 - 2021",
      title: "Jr. Security Researcher",
      company: "CyberDefense Labs",
      description: "Researched emerging threats and vulnerabilities in web applications and APIs.",
      highlights: ["Published 3 security research papers", "Discovered 12 CVEs", "Mentored junior analysts"],
    },
    {
      period: "2017 - 2019",
      title: "Security Analyst",
      company: "StartupDefense",
      description: "Built security foundations for high-growth SaaS platform.",
      highlights: ["Achieved SOC 2 compliance", "Implemented SIEM solution", "Security awareness training"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>

        <div className="space-y-6">
          {timeline.map((item, idx) => (
            <Card key={idx} className="border-slate-700/50 bg-slate-800/50 glass-dark">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-3 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
                      {item.period}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-cyan-400 font-semibold">{item.company}</p>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">{item.description}</p>

                <ul className="space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
