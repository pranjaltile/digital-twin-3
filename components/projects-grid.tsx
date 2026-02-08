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
      links: {
        github: "https://github.com/pranjaltile/digital-twin-2",
        demo: "https://digital-twin-2-psi.vercel.app/",
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
      links: {
        github: "https://github.com/pranjaltile/Nextjs_App.git",
        demo: "https://nextjs-app-ebon-seven.vercel.app/",
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
      links: {
        github: "https://github.com/pranjaltile/e-referral-frontend-demo.git",
        demo: "https://e-referral-frontend-demo.vercel.app/",
        blog: "#",
      },
    },
    {
      id: 4,
      title: "Multi-camera Face Detection",
      description: "A microservices-based application that enables: Registering multiple RTSP cameras, Viewing live WebRTC camera feeds in the browser, Real-time face detection with overlays, Instant alerts, pushed via WebSockets",
      category: "Full Stack - using bakend functionalities of Typescript",
      tags: ["Typescript", "Prisma", "Vercel", "Go worker - for Camera processing", "WebRTC streams"],
      stars: 0,
      links: {
        github: "https://github.com/pranjaltile/Multi-camera_Face-detection.git",
        demo: "https://multi-camera-face-detection.vercel.app/",
        blog: "#",
      }, 
    },
    {
      id: 5,
      title: "Data pipeline on AWS Lambda Function",
      description: "A robust Python-based system for processing electronic referrals using the FHIR (Fast Healthcare Interoperability Resources) standard. This system processes incoming FHIR referrals, extracts relevant information, and persists it to a PostgreSQL database while providing standardized FHIR Operation Outcome responses.",
      category: "Backend API - using AWS Lambda Function",
      tags: ["Python", "FHIR", "PostgreSQL", "AWS Lambda", "Prisma"],
      stars: 0,
      links: {
        github: "https://github.com/pranjaltile/Data-pipeline-on-AWS_Lambda_Function.git",
        demo: "#",
        blog: "#",
      }, 
    },
    {
      id: 6,
      title: "MCP - Model Context Protocol",
      description: "A secure and efficient protocol for managing AI model context in real-time applications. MCP allows developers to define, update, and retrieve contextual information for AI models, enabling dynamic interactions and improved performance while ensuring data privacy and security.",
      category: "Protocol Design",
      tags: ["MCP", "Python", "Data Privacy"],
      stars: 0,
      links: {
        github: "https://github.com/pranjaltile/MCP--Model-Context-Protocol.git",
        demo: "#",
        blog: "#",
      }, 
    }
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
              <div className="pt-4 border-t border-slate-700/50 flex items-center">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-slate-400">{project.stars}</span>
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
