import { Navbar } from "@/components/navbar"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { AboutHero } from "@/components/about-hero"
import { ThreePillars } from "@/components/three-pillars"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About - Pranjal Tile | Full Stack Developer",
  description: "Learn about Pranjal Tile - Full Stack Developer passionate about secure, scalable applications and AI integration",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <ChatbotWidget />

      <main className="pt-8 pb-20">
        <AboutHero />
        <ThreePillars />
      </main>

      <Footer />
    </div>
  )
}
