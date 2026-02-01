import { Navbar } from "@/components/navbar"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { BlogHeader } from "@/components/blog-header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Blog - Security Insights & Learnings",
  description: "Articles about cybersecurity, AI security, and threat research",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <ChatbotWidget />

      <main className="pt-8 pb-20">
        <BlogHeader />
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="text-center text-slate-400">
            <p className="text-lg">📝 Blog posts will be managed through AI MCP tools soon.</p>
            <p className="mt-4">This feature allows the AI to write and publish cybersecurity articles automatically.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
