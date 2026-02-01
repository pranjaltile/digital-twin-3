import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function BlogPreview() {
  const posts = [
    {
      id: 1,
      title: "Zero Trust Architecture: A Practical Guide",
      excerpt:
        "Implementing zero trust security models in modern cloud environments. Learn the principles and practical implementation strategies.",
      date: "2024-01-15",
      readTime: "8 min",
      tags: ["Security", "Architecture"],
    },
    {
      id: 2,
      title: "API Security: Common Vulnerabilities and Prevention",
      excerpt:
        "Deep dive into OWASP API security top 10. Explore real-world vulnerabilities and proven defense mechanisms.",
      date: "2024-01-08",
      readTime: "6 min",
      tags: ["API", "Vulnerabilities"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Latest Insights</h2>
            <p className="text-slate-400">Security research and learning</p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-900 bg-transparent">
              View All Posts <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="group border-slate-700/50 bg-slate-900/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden glass-dark flex flex-col"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700/50">
                <div className="text-slate-600">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <span>{post.readTime} read</span>
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm flex-1">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} className="bg-slate-800 text-slate-300 border border-slate-700 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link href="/blog" className="block">
                  <Button className="w-full bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 gap-2">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
