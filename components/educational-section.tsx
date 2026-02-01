import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink } from "lucide-react"

export function EducationalSection() {
  const resources = [
    {
      title: "OWASP Top 10",
      description: "The 10 most critical web application security risks",
      link: "#",
    },
    {
      title: "SQL Injection Prevention",
      description: "Learn how prepared statements and parameterized queries prevent SQL injection",
      link: "#",
    },
    {
      title: "Prompt Injection Defense",
      description: "Techniques for securing AI systems against prompt manipulation attacks",
      link: "#",
    },
    {
      title: "Rate Limiting Strategies",
      description: "Implement effective rate limiting to prevent abuse and DDoS attacks",
      link: "#",
    },
  ]

  return (
    <section className="py-16 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Why This Matters</h2>
          </div>

          <Card className="border-blue-500/30 bg-blue-500/5">
            <div className="p-6 space-y-4 text-slate-300 leading-relaxed">
              <p>Security should never be a secret. By openly inviting security testing and education, we:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Build stronger, more resilient systems through continuous testing</li>
                <li>Create a community of security-aware developers and researchers</li>
                <li>Demonstrate commitment to transparency and responsible disclosure</li>
                <li>Help others learn real-world security defense mechanisms</li>
              </ul>
            </div>
          </Card>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Educational Resources</h3>
          <div className="grid gap-4">
            {resources.map((resource, idx) => (
              <Card key={idx} className="border-slate-700/50 bg-slate-800/50 hover:border-slate-600/50 transition-all">
                <div className="p-6 flex items-start justify-between">
                  <div>
                    <h4 className="text-white font-semibold mb-2">{resource.title}</h4>
                    <p className="text-sm text-slate-400">{resource.description}</p>
                  </div>
                  <a href={resource.link}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-8 border-green-500/30 bg-green-500/5">
          <div className="p-6 space-y-4">
            <h4 className="text-white font-semibold flex items-center gap-2">Responsible Disclosure Policy</h4>
            <p className="text-sm text-slate-300">
              If you discover a genuine vulnerability outside this testing zone, please report it responsibly at
              security@example.com. We appreciate your help in keeping this system secure and will acknowledge all
              legitimate disclosures.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
