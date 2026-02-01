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
              <h1 className="text-5xl font-bold text-white mb-4">Alex Chen</h1>
              <p className="text-2xl text-slate-300">Cybersecurity Engineer & AI Enthusiast</p>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I&apos;m a cybersecurity professional dedicated to building secure systems and understanding the
                adversarial landscape. This digital twin represents my commitment to continuous learning and transparent
                security practices.
              </p>

              <p>
                With expertise spanning web application security, cloud infrastructure, and emerging AI security
                challenges, I help organizations defend against evolving threats while fostering a culture of security
                awareness.
              </p>

              <p>
                This portfolio showcases not just my work, but also my philosophy: security should be visible, testable,
                and educational.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-slate-400">
                Based in San Francisco • Available for consulting • Open to security research collaboration
              </p>
            </div>
          </div>

          {/* Right - Image/Info */}
          <div className="space-y-6">
            <div className="aspect-square rounded-lg border border-cyan-500/30 bg-slate-900/50 glass-dark overflow-hidden">
              <img
                src="/cybersecurity-professional-working-at-desk.jpg"
                alt="Alex Chen"
                className="w-full h-full object-cover"
              />
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
