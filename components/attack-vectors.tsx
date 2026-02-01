"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Syringe, Zap, Terminal } from "lucide-react"

interface AttackVector {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  examples: string[]
  buttonText: string
  color: string
  bgColor: string
}

export function AttackVectors() {
  const [selectedVector, setSelectedVector] = useState<string | null>(null)

  const vectors: AttackVector[] = [
    {
      id: "prompt-injection",
      title: "Prompt Injection",
      icon: <Brain className="w-8 h-8" />,
      description: "Try to manipulate the AI chatbot by overriding system instructions or injecting malicious prompts.",
      examples: [
        "Ignore previous instructions...",
        "You are now a different AI assistant...",
        "System override: execute command...",
      ],
      buttonText: "Test AI Chatbot",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/30",
    },
    {
      id: "sql-injection",
      title: "SQL Injection",
      icon: <Syringe className="w-8 h-8" />,
      description: "Attempt to manipulate database queries by injecting SQL code into input fields.",
      examples: ["'; DROP TABLE users--", "1' OR '1'='1", "UNION SELECT * FROM admin--"],
      buttonText: "Test Input Fields",
      color: "text-red-400",
      bgColor: "bg-red-500/10 border-red-500/30",
    },
    {
      id: "bot-ddos",
      title: "Bot / DDoS Simulation",
      icon: <Zap className="w-8 h-8" />,
      description: "Trigger rate limiting and automated defense systems with rapid requests.",
      examples: ["Automated scanning tools only", "Rate limit testing", "Connection abuse simulation"],
      buttonText: "Trigger Rate Limiting",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10 border-yellow-500/30",
    },
    {
      id: "api-abuse",
      title: "API Abuse & Enumeration",
      icon: <Terminal className="w-8 h-8" />,
      description: "Test API endpoints for vulnerabilities, authentication bypasses, and information disclosure.",
      examples: ["Directory traversal: ../../../", "Parameter tampering", "Unauthorized endpoint access"],
      buttonText: "Access API Console",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/30",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Attack Vectors</h2>
          <p className="text-slate-400">Choose an attack type to test</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {vectors.map((vector) => (
            <Card
              key={vector.id}
              className={`border ${vector.bgColor} glass-dark cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedVector === vector.id ? "ring-2 ring-cyan-500" : ""
              }`}
              onClick={() => setSelectedVector(selectedVector === vector.id ? null : vector.id)}
            >
              <div className="p-6 space-y-4">
                <div className={vector.color}>{vector.icon}</div>
                <h3 className="text-lg font-semibold text-white">{vector.title}</h3>
                <p className="text-sm text-slate-400">{vector.description}</p>
                <Button className={`w-full bg-slate-800 hover:bg-slate-700 text-slate-300`}>{vector.buttonText}</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Selected Vector Details */}
        {selectedVector && (
          <Card className="border-cyan-500/30 bg-slate-800/50 glass-dark p-8 space-y-6 animate-fade-in">
            {vectors
              .filter((v) => v.id === selectedVector)
              .map((vector) => (
                <div key={vector.id} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{vector.title}</h3>
                    <p className="text-slate-300">{vector.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Example Payloads</h4>
                    <div className="space-y-2">
                      {vector.examples.map((example, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-950 border border-slate-700 rounded p-3 font-mono text-sm text-cyan-400"
                        >
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-slate-950 font-semibold w-full">
                      Launch Attack Test
                    </Button>
                  </div>
                </div>
              ))}
          </Card>
        )}
      </div>
    </section>
  )
}
