"use client"

import { useEffect, useState, useRef } from "react"
import { Shield, MessageSquare, Activity } from "lucide-react"

export function StatsBar() {
  const [stats, setStats] = useState({
    attacksBlocked: 0,
    conversations: 0,
    systemStatus: "PROTECTED",
  })
  const [displayStats, setDisplayStats] = useState({
    attacksBlocked: 0,
    conversations: 0,
  })
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 30000) // Refresh every 30s
    return () => clearInterval(interval)
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/analytics")
      const data = await response.json()
      
      const newStats = {
        attacksBlocked: data.summary?.attacksLast24h || 0,
        conversations: data.summary?.totalConversations || 0,
        systemStatus: data.summary?.threatLevel === "CRITICAL" ? "ALERT" : "PROTECTED",
      }
      
      setStats(newStats)
      animateNumbers(newStats.attacksBlocked, newStats.conversations)
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    }
  }

  const animateNumbers = (targetAttacks: number, targetConversations: number) => {
    if (animationRef.current) clearInterval(animationRef.current)
    
    let frame = 0
    animationRef.current = setInterval(() => {
      frame++
      setDisplayStats({
        attacksBlocked: Math.min(Math.ceil((targetAttacks / 30) * frame), targetAttacks),
        conversations: Math.min(Math.ceil((targetConversations / 30) * frame), targetConversations),
      })
      if (frame >= 30 && animationRef.current) clearInterval(animationRef.current)
    }, 50)
  }

  return (
    <section className="py-8 px-4 border-y border-slate-700/50 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Attacks Blocked */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
              <Shield className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Attacks Blocked Today</p>
              <p className="text-3xl font-bold text-white">{displayStats.attacksBlocked}</p>
            </div>
          </div>

          {/* Conversations */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400">AI Conversations</p>
              <p className="text-3xl font-bold text-white">{displayStats.conversations}</p>
            </div>
          </div>

          {/* System Status */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
              <Activity className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-slate-400">System Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-2xl font-bold text-green-400">{stats.systemStatus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
