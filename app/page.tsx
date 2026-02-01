import { Navbar } from "@/components/navbar"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <ChatbotWidget />

      <main className="w-full">
        <HeroSection />
        <StatsBar />
      </main>

      <Footer />
    </div>
  )
}
