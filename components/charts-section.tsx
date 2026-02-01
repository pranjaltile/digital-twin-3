"use client"

import { Card } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export function ChartsSection() {
  const timelineData = [
    { time: "00:00", "SQL Injection": 12, "Prompt Injection": 8, XSS: 5, "Bot Traffic": 3 },
    { time: "04:00", "SQL Injection": 18, "Prompt Injection": 14, XSS: 8, "Bot Traffic": 6 },
    { time: "08:00", "SQL Injection": 25, "Prompt Injection": 22, XSS: 12, "Bot Traffic": 9 },
    { time: "12:00", "SQL Injection": 35, "Prompt Injection": 28, XSS: 18, "Bot Traffic": 14 },
    { time: "16:00", "SQL Injection": 42, "Prompt Injection": 35, XSS: 24, "Bot Traffic": 18 },
    { time: "20:00", "SQL Injection": 38, "Prompt Injection": 32, XSS: 21, "Bot Traffic": 16 },
    { time: "23:59", "SQL Injection": 28, "Prompt Injection": 24, XSS: 15, "Bot Traffic": 12 },
  ]

  const distributionData = [
    { name: "SQL Injection", value: 98, color: "#ef4444" },
    { name: "Prompt Injection", value: 163, color: "#f59e0b" },
    { name: "XSS", value: 103, color: "#06b6d4" },
    { name: "Bot Traffic", value: 78, color: "#0ea5e9" },
  ]

  const severityData = [
    { severity: "Critical", count: 12, color: "#ef4444" },
    { severity: "High", count: 34, color: "#f59e0b" },
    { severity: "Medium", count: 98, color: "#eab308" },
    { severity: "Low", count: 198, color: "#3b82f6" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 mb-12 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Attack Timeline */}
        <Card className="border-slate-700/50 bg-slate-900/50 glass-dark p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Attack Timeline (24h)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={timelineData}>
              <defs>
                <linearGradient id="colorSql" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPrompt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #06b6d4",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#f0f9ff" }}
              />
              <Legend />
              <Area type="monotone" dataKey="SQL Injection" stroke="#ef4444" fillOpacity={1} fill="url(#colorSql)" />
              <Area
                type="monotone"
                dataKey="Prompt Injection"
                stroke="#f59e0b"
                fillOpacity={1}
                fill="url(#colorPrompt)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Distribution */}
        <Card className="border-slate-700/50 bg-slate-900/50 glass-dark p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Attack Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={distributionData} cx="50%" cy="50%" labelLine={false} outerRadius={100} dataKey="value">
                {distributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #06b6d4",
                  borderRadius: "8px",
                  color: "#f0f9ff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-6 space-y-2">
            {distributionData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-slate-300">{item.name}</span>
                </div>
                <span className="text-slate-400">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Severity Breakdown */}
      <Card className="border-slate-700/50 bg-slate-900/50 glass-dark p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Severity Breakdown</h3>
        <div className="space-y-4">
          {severityData.map((item) => (
            <div key={item.severity} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-300">{item.severity}</span>
                <span className="text-sm text-slate-400">{item.count}</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: item.color,
                    width: `${(item.count / 198) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
