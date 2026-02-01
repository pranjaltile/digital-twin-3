import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 glass-dark">
          <div className="p-12 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">Let&apos;s Connect</h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Interested in discussing security, collaboration opportunities, or security research? Get in touch.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <a href="mailto:alex@example.com">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-slate-950 font-semibold gap-2 h-12">
                  <Mail className="w-5 h-5" />
                  Email
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold gap-2 h-12">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold gap-2 h-12">
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </a>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold gap-2 h-12">
                  <Calendar className="w-5 h-5" />
                  Schedule
                </Button>
              </a>
            </div>

            <div className="border-t border-slate-700/50 pt-8 text-center text-sm text-slate-400">
              <p>Response time typically within 24 hours • Open to remote opportunities</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
