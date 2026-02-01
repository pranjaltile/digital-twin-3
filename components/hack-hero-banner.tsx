import { Button } from "@/components/ui/button"
import { Shield, Target } from "lucide-react"

export function HackHeroBanner() {
  return (
    <section className="relative py-20 px-4 overflow-hidden border-b border-slate-700/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-transparent opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30">
            <Target className="w-5 h-5 text-red-400" />
            <span className="text-sm font-mono text-red-400">ethical hacking zone</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Try to Break <span className="text-red-400">This System</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I invite you to test my defenses. Every legitimate attempt teaches both of us. This is a real security
            system with actual protections—find the gaps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg gap-2">
              <Shield className="w-5 h-5" />
              Start Testing
            </Button>
            <Button
              variant="outline"
              className="border-red-500/50 text-red-400 hover:bg-red-500/10 font-semibold px-8 py-6 text-lg gap-2 bg-transparent"
            >
              <Target className="w-5 h-5" />
              View Rules
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
