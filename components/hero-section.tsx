"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono">
            Full Stack Developer • Security Enthusiast
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            I&apos;m Pranjal Tile <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            This isn&apos;t just a portfolio. It&apos;s a living, learning, self-defending digital presence that
            represents me 24/7.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/projects">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-slate-950 font-semibold px-8 py-6 text-lg gap-2 glow-cyan">
              View Projects <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/hack-me">
            <Button className="border border-cyan-500/50 hover:border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-6 text-lg gap-2">
              Test My Defenses <Shield className="w-5 h-5" />
            </Button>
          </Link>
          <button
            onClick={() => document.getElementById("chatbot-trigger")?.click()}
            className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:bg-slate-900 font-semibold px-8 py-6 text-lg rounded-md transition-colors"
          >
            Talk to My AI
          </button>
        </div>

        {/* Featured visual */}
        <div className="pt-12 relative">
          <div className="mx-auto max-w-3xl aspect-video rounded-lg border border-cyan-500/30 bg-gradient-to-br from-slate-800 to-slate-900 glass-dark flex items-center justify-center">
            <div className="text-center space-y-4">
              <Shield className="w-24 h-24 text-cyan-400/20 mx-auto" />
              <p className="text-slate-500 font-mono text-sm">Digital Twin III - Live & Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
