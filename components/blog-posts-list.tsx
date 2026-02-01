"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function BlogPostsList() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const posts = [
    {
      id: 1,
      title: "Zero Trust Architecture: A Practical Implementation Guide",
      excerpt:
        "Implementing zero trust security models in modern cloud environments. Learn the principles, architecture patterns, and practical implementation strategies for enterprise-scale deployments.",
      content:
        "Zero Trust is a security paradigm that assumes no implicit trust is granted to assets or user accounts based solely on their physical or network location. This comprehensive guide covers...",
      date: "2024-01-15",
      readTime: "8 min",
      author: "Alex Chen",
      authorType: "Written",
      tags: ["Security", "Architecture", "Cloud"],
    },
    {
      id: 2,
      title: "API Security: OWASP Top 10 Vulnerabilities & Prevention",
      excerpt:
        "Deep dive into the most critical API security vulnerabilities. Explore real-world attack scenarios, vulnerable code examples, and proven defense mechanisms.",
      content:
        "APIs have become the backbone of modern web applications, but they also introduce significant security risks. This article covers the OWASP API Security Top 10...",
      date: "2024-01-08",
      readTime: "6 min",
      author: "AI-Generated Analysis",
      authorType: "AI-Generated",
      tags: ["API", "Vulnerabilities", "Best Practices"],
    },
    {
      id: 3,
      title: "Prompt Injection Attacks: How LLMs Can Be Exploited",
      excerpt:
        "As large language models become more prevalent, prompt injection attacks pose a new frontier of security risks. Learn how these attacks work and how to defend against them.",
      content:
        "Prompt injection is an emerging security vulnerability specific to applications built with Large Language Models. Unlike traditional code injection, prompt injection exploits...",
      date: "2024-01-01",
      readTime: "7 min",
      author: "AI-Generated Analysis",
      authorType: "AI-Generated",
      tags: ["AI Security", "LLM", "Attacks"],
    },
    {
      id: 4,
      title: "Cloud Infrastructure Security: Lessons from Real Incidents",
      excerpt:
        "Analysis of major cloud security breaches and what we learned from them. Best practices for securing AWS, GCP, and Azure deployments based on incident response experience.",
      content:
        "Cloud infrastructure has become the target of sophisticated attacks. This article analyzes real incidents and provides practical recommendations for hardening your cloud...",
      date: "2023-12-28",
      readTime: "9 min",
      author: "Alex Chen",
      authorType: "Written",
      tags: ["Cloud", "Incident Response", "Best Practices"],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6 pb-12">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="border-slate-700/50 bg-slate-900/50 hover:border-cyan-500/50 transition-all glass-dark overflow-hidden group"
        >
          <div className="grid md:grid-cols-4 gap-0">
            {/* Image */}
            <div className="md:col-span-1 aspect-video md:aspect-auto bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-r border-slate-700/50">
              <div className="text-slate-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-6 flex flex-col justify-between space-y-4">
              <div>
                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <Badge
                    className={`text-xs ${
                      post.authorType === "Written"
                        ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                        : "bg-purple-500/20 text-purple-300 border-purple-500/30"
                    }`}
                  >
                    {post.authorType}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Expanded content */}
                {expanded === post.id && <p className="text-slate-400 text-sm mb-4">{post.content}</p>}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} className="bg-slate-800 text-slate-300 border border-slate-700 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Read More Button */}
              <Button
                onClick={() => setExpanded(expanded === post.id ? null : post.id)}
                className="w-fit bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 gap-2"
              >
                {expanded === post.id ? "Show Less" : "Read More"} <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
