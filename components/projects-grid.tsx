import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"

export function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "Digital Twin 2",
      description: "AI-powered digital portfolio with intelligent chatbot, real-time analytics, and dynamic content management system.",
      category: "Full Stack",
      tags: ["Next.js", "AI", "PostgreSQL", "TypeScript"],
      stars: 0,
      score: 95,
      links: {
        github: "https://github.com/pranjaltile/digital-twin-2",
        demo: "#",
        blog: "#",
      },
    },
    {
      id: 2,
      title: "AuthJS Authentication System",
      description: "Modern authentication system with NextAuth.js supporting multiple OAuth providers and secure session management.",
      category: "Authentication",
      tags: ["Next.js", "AuthJS", "Security", "OAuth"],
      stars: 0,
      score: 90,
      links: {
        github: "#",
        demo: "#",
        blog: "#",
      },
    },
    {
      id: 3,
      title: "Healthcare Referral App",
      description: "HIPAA-compliant patient referral management system with secure document handling and role-based access control.",
      category: "Healthcare",
      tags: ["React", "Node.js", "HIPAA", "Security"],
      stars: 0,
      score: 92,
      links: {
        github: "#",
        demo: "#",
        blog: "#",
      },
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group border-slate-700/50 bg-slate-900/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden glass-dark flex flex-col"
          >
            {/* Project placeholder */}
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700/50">
              <div className="text-slate-600">
                <Github className="w-12 h-12" />
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1 space-y-4">
              {/* Category badge */}
              <Badge className="w-fit bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">{project.category}</Badge>

              {/* Title and description */}
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400">{project.description}</p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="bg-slate-800 text-slate-300 border border-slate-700 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Metrics */}
              <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-slate-400">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${project.score}%` }}></div>
                    </div>
                    <span className="text-xs text-green-400">{project.score}%</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 flex gap-2">
                <a href={project.links.github} className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent gap-1"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </Button>
                </a>
                <a href={project.links.demo} className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
