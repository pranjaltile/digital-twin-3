import { Navbar } from "@/components/navbar"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { HackHeroBanner } from "@/components/hack-hero-banner"
import { InstructionsSection } from "@/components/instructions-section"
import { LiveDemonstration } from "@/components/live-demonstration"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Ethical Hacking Zone - Test My Defenses",
  description: "Challenge the security of this digital twin. Educational hacking playground with real defenses.",
}

export default function HackMePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <ChatbotWidget />

      <main className="pt-8 pb-20">
        <HackHeroBanner />
        <InstructionsSection />
        <LiveDemonstration />
      </main>

      <Footer />
    </div>
  )
}
