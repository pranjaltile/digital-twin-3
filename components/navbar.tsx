"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/hack-me", label: "Hack Me" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-950/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <Shield className="w-6 h-6 text-cyan-500" />
            <span className="text-white">SecureAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/50 rounded-full border border-slate-700/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-400">PROTECTED</span>
            </div>
            <Button
              className="bg-cyan-600 hover:bg-cyan-700 text-slate-950 font-semibold"
              onClick={() => document.getElementById("chatbot-trigger")?.click()}
            >
              Talk to AI
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900/50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-slate-950 font-semibold"
              onClick={() => {
                document.getElementById("chatbot-trigger")?.click()
                setIsOpen(false)
              }}
            >
              Talk to AI
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
