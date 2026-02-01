import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  const skills = [
    "Web Application Security",
    "Cloud Infrastructure",
    "Threat Detection & Analysis",
    "Penetration Testing",
    "Secure Development",
    "Incident Response",
    "AI & Machine Learning Security",
    "API Security",
  ]

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Who I Am</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;m a cybersecurity engineer passionate about building secure systems and understanding attack
                vectors. With expertise spanning cloud infrastructure, application security, and threat intelligence, I
                help organizations defend against evolving threats.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">What Makes This Different</h3>
              <Card className="border-cyan-500/30 bg-slate-900/50">
                <div className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Represent</p>
                      <p className="text-sm text-slate-400">AI talks to visitors as my digital presence</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Defend</p>
                      <p className="text-sm text-slate-400">Real-time threat monitoring and active defenses</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Learn</p>
                      <p className="text-sm text-slate-400">Every attack strengthens the system</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-6">
            <div className="aspect-square rounded-lg border border-cyan-500/30 bg-slate-900/50 glass-dark flex items-center justify-center overflow-hidden">
              <img src="/cybersecurity-professional-working-at-desk.jpg" alt="Professional" className="w-full h-full object-cover" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
