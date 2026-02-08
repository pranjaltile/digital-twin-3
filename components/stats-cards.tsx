"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { TrendingUp, Shield, AlertTriangle, Zap } from "lucide-react"

interface AnalyticsData {
  summary: {
    totalAttacks: number
    attacksLast24h: number
    attacksLast7Days: number
    threatLevel: string
    hourlyRate: number
  }
  attacksByType: Array<{ type: string; count: number }>
  attacksBySeverity: Array<{ severity: string; count: number }>
}

export function StatsCards() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [animatedStats, setAnimatedStats] = useState({
    totalAttacks: 0,
    blockedRate: 0,
    critical: 0,
  })

  useEffect(() => {
    fetchAnalytics()
    const interval = setInterval(fetchAnalytics, 30000) // Refresh every 30s
    return () => clearInterval(interval)
  }, [])

  const fetchAnalytics = async () => {
    try {
      const response = await fetch("/api/analytics")
      const data = await response.json()
      setAnalytics(data)
      
      // Animate the numbers
      animateStats(data.summary.attacksLast24h, data.attacksBySeverity, data.summary.blockedRate || 100)
    } catch (error) {
      console.error("Failed to fetch analytics:", error)
    }
  }

  const animateStats = (totalAttacks: number, severityData: any[], blockedRate: number) => {
    const criticalCount = severityData.find((s) => s.severity === "CRITICAL")?.count || 0
    let frame = 0

    const interval = setInterval(() => {
      frame++
      setAnimatedStats({
        totalAttacks: Math.min(Math.ceil((totalAttacks / 30) * frame), totalAttacks),
        blockedRate: Math.min(Math.ceil((blockedRate / 30) * frame), blockedRate),
        critical: Math.min(Math.ceil((criticalCount / 30) * frame), criticalCount),
      })
      if (frame >= 30) clearInterval(interval)
    }, 30)
  }

  const mostCommonAttack = analytics?.attacksByType[0]?.type || "N/A"
  const mostCommonCount = analytics?.attacksByType[0]?.count || 0

  const stats = [
    {
      label: "Total Attacks (24h)",
      value: animatedStats.totalAttacks,
      icon: TrendingUp,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      trend: `${analytics?.summary.hourlyRate || 0}/hr`,
    },
    {
      label: "Blocked Success Rate",
      value: `${animatedStats.blockedRate}%`,
      icon: Shield,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      trend: "Secure",
    },
    {
      label: "Critical Threats",
      value: animatedStats.critical,
      icon: AlertTriangle,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      trend: analytics?.summary.threatLevel || "LOW",
    },
    {
      label: "Most Common Attack",
      value: mostCommonAttack.split("_").map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(" "),
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      trend: `${mostCommonCount} attempts`,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className={`border ${stat.borderColor} ${stat.bgColor} glass-dark p-6`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor} border ${stat.borderColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-xs text-slate-400 font-mono">{stat.trend}</span>
              </div>
              <p className="text-sm text-slate-400 mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
