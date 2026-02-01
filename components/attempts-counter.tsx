import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AttemptsCounter() {
  const leaderboard = [
    { rank: 1, name: "SecurityGuru", attempts: 23, date: "Jan 15" },
    { rank: 2, name: "PenTestPro", attempts: 19, date: "Jan 14" },
    { rank: 3, name: "EthicalHacker", attempts: 17, date: "Jan 12" },
    { rank: 4, name: "AnonymousTester", attempts: 15, date: "Jan 10" },
    { rank: 5, name: "CyberExplorer", attempts: 12, date: "Jan 09" },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Your Attempts */}
        <Card className="border-slate-700/50 bg-slate-900/50 glass-dark p-8">
          <h3 className="text-lg font-semibold text-white mb-6">Your Attempts</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400 mb-2">Attempts Today</p>
              <p className="text-4xl font-bold text-cyan-400">3</p>
            </div>
            <div className="pt-4 border-t border-slate-700/50">
              <p className="text-sm text-slate-400 mb-2">Global Attempts Today</p>
              <p className="text-3xl font-bold text-yellow-400">127</p>
            </div>
            <div className="pt-4 border-t border-slate-700/50">
              <p className="text-sm text-slate-400 mb-2">Your Rank</p>
              <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30">Not in top 100</Badge>
            </div>
          </div>
        </Card>

        {/* Leaderboard */}
        <Card className="border-slate-700/50 bg-slate-900/50 glass-dark p-8">
          <h3 className="text-lg font-semibold text-white mb-6">Top Testers This Week</h3>
          <div className="space-y-3">
            {leaderboard.map((entry) => (
              <div
                key={entry.rank}
                className="flex items-center justify-between p-3 rounded bg-slate-800/50 border border-slate-700/30"
              >
                <div className="flex items-center gap-4">
                  <Badge className="bg-slate-700 text-slate-300 font-mono">{entry.rank}</Badge>
                  <div>
                    <p className="text-white font-medium">{entry.name}</p>
                    <p className="text-xs text-slate-400">{entry.date}</p>
                  </div>
                </div>
                <p className="text-cyan-400 font-semibold">{entry.attempts}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
