import { Navbar } from "@/components/navbar"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { ProjectsHeader } from "@/components/projects-header"
import { ProjectsGrid } from "@/components/projects-grid"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Projects - Security Tools & Research",
  description: "Portfolio of security projects, research, and open-source contributions",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <ChatbotWidget />

      <main className="pt-8 pb-20">
        <ProjectsHeader />
        <ProjectsGrid />
      </main>

      <Footer />
    </div>
  )
}
