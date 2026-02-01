import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, BookOpen } from "lucide-react"

export function InstructionsSection() {
  const steps = [
    "Read the attack vector descriptions below",
    "Choose an attack type and try to exploit the system",
    "Monitor the live defense demonstration to see how it blocks your attempt",
    "Review educational resources to understand the vulnerability",
    "Check the leaderboard to see if you made the top testers",
  ]

  return (
    <section className="py-16 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
          <Card className="flex-1 border-orange-500/30 bg-orange-500/5">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Important Disclaimer</h3>
              <p className="text-slate-300">
                This zone is strictly for educational purposes and authorized security testing only. Only use the
                provided tools and interfaces. Any attempts to compromise the system outside these designated areas will
                be logged, reported, and may result in legal action. You agree to responsible disclosure practices.
              </p>
            </div>
          </Card>
        </div>

        <Card className="border-slate-700/50 bg-slate-800/50 glass-dark">
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">How to Test</h3>
            </div>

            <ol className="space-y-3">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Badge className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      {index + 1}
                    </Badge>
                  </div>
                  <div className="pt-1">
                    <p className="text-slate-300">{step}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="pt-4 border-t border-slate-700/50">
              <p className="text-sm text-slate-400">
                Use the attack vectors below to test the system. Each vector has example payloads to try.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
