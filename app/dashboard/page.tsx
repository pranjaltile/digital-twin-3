import { Navbar } from "@/components/navbar"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { AttackLog } from "@/components/attack-log"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Threat Dashboard - Live Monitoring",
  description: "Real-time threat monitoring and attack analytics",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <ChatbotWidget />

      <main className="pt-8 pb-20">
        <DashboardHeader />
        <StatsCards />
        <AttackLog />
      </main>

      <Footer />
    </div>
  )
}
