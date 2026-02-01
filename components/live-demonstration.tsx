"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Terminal } from "lucide-react"

export function LiveDemonstration() {
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Defense demonstration initialized",
    "[MONITOR] Listening for incoming attacks...",
    "[READY] System prepared for testing",
  ])
  const [stats, setStats] = useState({ blocked: 0, active: 3, alerts: 0 })

  // Fetch real attack logs
  useEffect(() => {
    fetchLogs()
    const interval = setInterval(fetchLogs, 5000) // Refresh every 5s
    return () => clearInterval(interval)
  }, [])

  const fetchLogs = async () => {
    try {
      const response = await fetch("/api/attacks?limit=5")
      const data = await response.json()
      
      if (data.attacks && data.attacks.length > 0) {
        const newLogs = data.attacks.map((attack: any) => {
          const time = new Date(attack.timestamp).toLocaleTimeString()
          const type = attack.attackType.replace(/_/g, " ")
          const status = attack.blocked ? "BLOCKED" : "FLAGGED"
          return `[${time}] ${status}: ${type} - ${attack.endpoint}`
        })
        
        setLogs((prev) => [...prev.slice(-3), ...newLogs].slice(-10))
        
        // Update stats
        const blockedCount = data.attacks.filter((a: any) => a.blocked).length
        const criticalCount = data.attacks.filter((a: any) => a.severity === "CRITICAL" || a.severity === "HIGH").length
        setStats({ blocked: blockedCount, active: 3, alerts: criticalCount })
      }
    } catch (error) {
      console.error("Failed to fetch logs:", error)
    }
  }

  return (
    <section className="py-16 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Live Defense Demonstration</h3>
          </div>

          <Card className="border-cyan-500/30 bg-slate-950 glass-dark p-6 font-mono text-sm h-64 overflow-hidden">
            <div className="space-y-1 text-cyan-400">
              {logs.map((log, idx) => (
                <div key={idx} className="text-xs leading-relaxed">
                  {log}
                </div>
              ))}
              <div className="text-cyan-500 animate-pulse">_</div>
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-4">
            <Card className="border-slate-700/50 bg-slate-800/50 p-4 text-center">
              <p className="text-2xl font-bold text-cyan-400">{stats.blocked}</p>
              <p className="text-xs text-slate-400">Attacks Blocked</p>
            </Card>
            <Card className="border-slate-700/50 bg-slate-800/50 p-4 text-center">
              <p className="text-2xl font-bold text-green-400">{stats.active}</p>
              <p className="text-xs text-slate-400">Defenses Active</p>
            </Card>
            <Card className="border-slate-700/50 bg-slate-800/50 p-4 text-center">
              <p className="text-2xl font-bold text-yellow-400">{stats.alerts}</p>
              <p className="text-xs text-slate-400">High-Severity Threats</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
