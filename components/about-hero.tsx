import { Card } from "@/components/ui/card"

export function AboutHero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <div>
              <p className="text-cyan-400 font-mono text-sm mb-2">ABOUT ME</p>
              <h1 className="text-5xl font-bold text-white mb-4">Pranjal Tile</h1>
              <p className="text-2xl text-slate-300">Full Stack Developer & Cybersecurity Enthusiast</p>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I&apos;m a passionate full-stack developer focused on building secure, scalable applications with modern
                technologies. This digital twin represents my journey in software development, cybersecurity, and AI integration.
              </p>

              <p>
                With experience in Next.js, React, Node.js, and cloud technologies, I create production-ready applications
                that prioritize security, performance, and user experience. My projects range from AI-powered portfolios to
                HIPAA-compliant healthcare systems.
              </p>

              <p>
                This portfolio showcases not just my technical skills, but also my commitment to building intelligent,
                self-defending systems that learn and adapt - a living example of modern full-stack development.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-slate-400">
                Full Stack Developer • Open to opportunities • Passionate about secure application development
              </p>
            </div>
          </div>

          {/* Right - Image/Info */}
          <div className="space-y-6">
            <div className="aspect-square rounded-lg border border-cyan-500/30 bg-gradient-to-br from-slate-800 to-slate-900 glass-dark flex items-center justify-center">
              <div className="text-cyan-400/20">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            <Card className="border-cyan-500/30 bg-cyan-500/5">
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-white">This Digital Twin</h3>
                <p className="text-sm text-slate-300">
                  Represents me 24/7, learning from interactions and continuously improving its defenses. It&apos;s a
                  living example of how AI and security can work together responsibly.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
