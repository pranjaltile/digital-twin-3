"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Minimize2, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(true)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hey there! I'm the AI representation of Pranjal, a cybersecurity professional. Ask me anything about their expertise, projects, or security insights.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input
    setInput("")
    setIsLoading(true)

    try {
      // Call the real AI chatbot API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || "Failed to get response")
      }

      // Handle streaming response from Groq
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])

      if (reader) {
        let buffer = ""
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          
          // Update the message with accumulated buffer
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMessage.id ? { ...msg, content: buffer } : msg
            )
          )
        }
      }

      setIsLoading(false)
    } catch (error: any) {
      console.error("Chat error:", error)

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: error.message || "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Hidden trigger button for navbar */}
      <button
        id="chatbot-trigger"
        onClick={() => {
          setIsOpen(true)
          setIsMinimized(false)
        }}
        className="hidden"
      />

      {/* Chatbot Widget */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 z-40 transition-all duration-300 ${
            isMinimized ? "w-16 h-16" : "w-96 h-96"
          } md:w-96 md:h-96`}
        >
          {isMinimized ? (
            // Minimized state
            <button
              onClick={() => setIsMinimized(false)}
              className="w-full h-full rounded-full bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg glow-cyan flex items-center justify-center animate-pulse"
            >
              <MessageCircle className="w-8 h-8" />
            </button>
          ) : (
            // Expanded state
            <div className="w-full h-full flex flex-col bg-slate-900 border border-cyan-500/30 rounded-lg shadow-2xl overflow-hidden glass-dark">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-cyan-500/20 p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    AI Assistant
                  </h3>
                  <p className="text-xs text-slate-400">Online</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-1 hover:bg-slate-700 rounded transition-colors text-slate-400 hover:text-white"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-slate-700 rounded transition-colors text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.role === "user"
                          ? "bg-cyan-600 text-white rounded-br-none"
                          : "bg-slate-800 text-slate-100 rounded-bl-none border border-slate-700/50"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 text-slate-100 px-4 py-2 rounded-lg border border-slate-700/50 rounded-bl-none">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Warning */}
              <div className="px-4 py-2 text-xs text-slate-400 border-t border-slate-700/50 bg-slate-950/50">
                ⚠️ Conversations are monitored for security
              </div>

              {/* Input */}
              <div className="p-4 border-t border-slate-700/50 space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask me something..."
                    className="flex-1 bg-slate-950 text-white placeholder-slate-500 border border-slate-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="bg-cyan-600 hover:bg-cyan-700 text-slate-950 p-2 h-auto"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
