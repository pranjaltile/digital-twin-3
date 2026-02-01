import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hack-me" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Ethical Hacking Zone
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Threat Monitor
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1"
                >
                  API Docs <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Security</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Disclosure Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Bug Bounty
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Security.txt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8">
          <p className="text-slate-500 text-sm text-center">
            Built with Next.js, TypeScript, and <span className="text-cyan-400">security</span> in mind
          </p>
        </div>
      </div>
    </footer>
  )
}
