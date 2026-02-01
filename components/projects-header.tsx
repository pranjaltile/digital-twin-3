"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function ProjectsHeader() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filters = ["All", "Web Security", "AI Security", "Tools", "Research"]

  return (
    <div className="max-w-7xl mx-auto px-4 mb-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Security Projects & Experiments</h1>
        <p className="text-slate-400">Showcase of tools, research, and contributions to the security community</p>
      </div>

      <div className="space-y-4">
        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`${
                activeFilter === filter
                  ? "bg-cyan-600 hover:bg-cyan-700 text-slate-950"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              } transition-all`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
          />
        </div>
      </div>
    </div>
  )
}
