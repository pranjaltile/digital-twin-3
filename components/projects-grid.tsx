import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"

export function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "API Security Framework",
      description: "Comprehensive framework for securing REST and GraphQL APIs with automated threat detection.",
      category: "Web Security",
      tags: ["Node.js", "Security", "Architecture"],
      stars: 342,
      score: 92,
      links: {
        github: "#",
        demo: "#",
        blog: "#",
      },
    },
    {
      id: 2,
      title: "Threat Intelligence Platform",
      description: "Real-time threat detection using ML models and SIEM integration for enterprise security.",
      category: "AI Security",
      tags: ["Python", "ML", "Analytics"],
      stars: 218,
      score: 88,
      links: {
        github: "#",
        demo: "#",
        blog: "#",
      },
    },
    {
      id: 3,
      title: "Cloud Security Auditor",
      description: "Automated security auditing tool for AWS, GCP, and Azure with compliance reporting.",
      category: "Tools",
      tags: ["Go", "Cloud", "DevOps"],
      stars: 289,
      score: 91,
      links: {
        github: "#",
        demo: "#",
        blog: "#",
      },
    },
    {
      id: 4,
      title: "Prompt Injection Detection",
      description: "Advanced detection system for prompt injection attacks in LLM applications.",
      category: "AI Security",
      tags: ["Python", "LLM", "Security"],
      stars: 156,
      score: 85,
      links: {
        github: "#",
        demo: "#",
        blog: "#",
      },
    },
    {
      id: 5,
      title: "Zero Trust Architecture",
      description: "Implementation guide and tools for deploying zero trust security models.",
      category: "Research",
      tags: ["Architecture", "DevOps", "Security"],
      stars: 203,
      score: 89,
      links: {
        github: "#",
        demo: "#",
        blog: "#",
      },
    },
    {
      id: 6,
      title: "Secure Code Analyzer",
      description: "Static analysis tool for identifying security vulnerabilities in source code.",
      category: "Tools",
      tags: ["Go", "Security", "CI/CD"],
      stars: 175,
      score: 87,
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
