"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function BlogHeader() {
  const [searchTerm, setSearchTerm] = useState("")

  const popularTags = ["Security", "AI", "Cloud", "Cryptography", "Incident Response", "Threat Analysis"]

  return (
    <div className="max-w-4xl mx-auto px-4 mb-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Security Insights & Learnings</h1>
        <p className="text-slate-400">Documenting my journey in cybersecurity research and practical applications</p>
      </div>

      {/* Search bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
        />
      </div>

      {/* Tag cloud */}
      <div className="space-y-3">
        <p className="text-sm text-slate-400">Popular tags:</p>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-3 py-1 rounded-full bg-slate-800 hover:bg-cyan-600/20 text-slate-300 hover:text-cyan-400 text-sm border border-slate-700 hover:border-cyan-500/50 transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
