"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Attack {
  id: string
  timestamp: string
  attackType: "PROMPT_INJECTION" | "SQL_INJECTION" | "XSS" | "BOT_TRAFFIC" | "RATE_LIMIT_EXCEEDED" | "SUSPICIOUS_PATTERN" | "DDoS_ATTEMPT" | "INVALID_INPUT"
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW"
  endpoint: string
  blocked: boolean
  detectionMethod: string
}

export function AttackLog() {
  const [attacks, setAttacks] = useState<Attack[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchAttacks()
    // Refresh every 10 seconds for live updates
    const interval = setInterval(fetchAttacks, 10000)
    return () => clearInterval(interval)
  }, [])

  const fetchAttacks = async () => {
    try {
      const response = await fetch("/api/attacks?limit=10")
      const data = await response.json()
      setAttacks(data.attacks || [])
      setIsLoading(false)
    } catch (error) {
      console.error("Failed to fetch attacks:", error)
      setIsLoading(false)
    }
  }

  const [filter, setFilter] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const filterOptions = ["All", "Critical", "High", "Today", "This Week"]

  const filteredAttacks = attacks.filter((attack) => {
    const matchesFilter =
      filter === "All" || attack.severity === filter || (filter === "Today" && true) || (filter === "This Week" && true)
    const matchesSearch =
      attack.endpoint.includes(searchTerm) || attack.attackType.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diff < 60) return `${diff}s ago`
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
    return date.toLocaleDateString()
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "CRITICAL":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "HIGH":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "MEDIUM":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PROMPT_INJECTION":
        return "bg-purple-500/20 text-purple-400"
      case "SQL_INJECTION":
        return "bg-red-500/20 text-red-400"
      case "XSS":
        return "bg-orange-500/20 text-orange-400"
      case "BOT_TRAFFIC":
        return "bg-blue-500/20 text-blue-400"
      default:
        return "bg-slate-500/20 text-slate-400"
    }
  }

  const formatAttackType = (type: string) => {
    return type.split("_").map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(" ")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      <Card className="border-slate-700/50 bg-slate-900/50 glass-dark overflow-hidden">
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              Live Attack Log
            </h3>
            <div className="text-xs text-slate-400 font-mono">Connected via SSE</div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              {filterOptions.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  onClick={() => setFilter(option)}
                  className={`text-xs ${
                    filter === option
                      ? "bg-cyan-600 border-cyan-600 text-slate-950"
                      : "border-slate-600 text-slate-400 hover:border-slate-500 hover:bg-slate-800"
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Search by endpoint or attack type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 text-white placeholder-slate-500 border border-slate-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div className="divide-y divide-slate-700/50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-12 text-center text-slate-400">Loading attacks...</div>
          ) : filteredAttacks.length === 0 ? (
            <div className="p-12 text-center text-slate-400">No attacks detected yet. System is secure! 🛡️</div>
          ) : (
            filteredAttacks.map((attack, index) => (
              <div
                key={attack.id}
                className="p-6 hover:bg-slate-800/30 transition-colors fade-in-down"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-mono text-slate-400">{formatTimestamp(attack.timestamp)}</span>
                  </div>

                  <div>
                    <Badge className={getTypeColor(attack.attackType)}>{formatAttackType(attack.attackType)}</Badge>
                  </div>

                  <div>
                    <Badge className={`border ${getSeverityColor(attack.severity)}`}>{attack.severity}</Badge>
                  </div>

                  <div className="font-mono text-sm text-slate-300">{attack.endpoint}</div>

                  <div className="flex items-center gap-2">
                    {attack.blocked ? (
                      <>
                        <Shield className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-400 font-semibold">Blocked</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-yellow-400 font-semibold">Flagged</span>
                      </>
                    )}
                  </div>

                  <div className="text-xs text-slate-500 font-mono">{attack.detectionMethod}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  )
}
