import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ProjectsShowcase() {
  const projects = [
    {
      id: 1,
      title: "Digital Twin 2",
      description: "AI-powered digital portfolio with intelligent chatbot, real-time analytics, and dynamic content management system",
      tech: ["Next.js", "AI", "PostgreSQL"],
      link: "/projects",
    },
    {
      id: 2,
      title: "AuthJS Authentication System",
      description: "Modern authentication system with NextAuth.js supporting multiple OAuth providers and secure session management",
      tech: ["Next.js", "AuthJS", "OAuth"],
      link: "/projects",
    },
    {
      id: 3,
      title: "Healthcare Referral App",
      description: "HIPAA-compliant patient referral management system with secure document handling and role-based access control",
      tech: ["React", "Node.js", "HIPAA"],
      link: "/projects",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg">Showcase of security tools and research</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group border-slate-700/50 bg-slate-900/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden glass-dark"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700/50">
                <div className="text-slate-600">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} className="bg-slate-800 text-slate-300 border border-slate-700">
                      {t}
                    </Badge>
                  ))}
                </div>
                <Link href={project.link} className="block">
                  <Button className="w-full bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 gap-2 mt-4">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-slate-950 font-semibold px-8 py-6 gap-2">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
