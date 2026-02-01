import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skills = [
    {
      category: "Security Domains",
      items: ["Web Application Security", "Cloud Security", "API Security", "Threat Intelligence", "Incident Response"],
    },
    {
      category: "Technologies",
      items: ["Node.js", "Python", "Go", "AWS", "GCP", "Kubernetes", "Docker"],
    },
    {
      category: "Methodologies",
      items: ["Penetration Testing", "Security Architecture", "Threat Modeling", "SDLC Integration", "Risk Assessment"],
    },
    {
      category: "Certifications",
      items: ["CEH (Certified Ethical Hacker)", "OSCP", "AWS Security Speciality", "GIAC Security Essentials"],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <Card key={idx} className="border-slate-700/50 bg-slate-900/50 glass-dark">
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
