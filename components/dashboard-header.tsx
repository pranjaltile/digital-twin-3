"use client"

import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-white">Live Threat Monitoring</h1>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400 font-mono">ACTIVE</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm">Last updated: just now</p>
        </div>

        <Button
          className="bg-slate-800 hover:bg-slate-700 text-slate-300 gap-2 flex items-center"
          onClick={() => window.location.reload()}
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </Button>
      </div>
    </div>
  )
}
