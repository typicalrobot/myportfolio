const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express", "RESTful APIs"],
  },
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "JQL"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "Firebase", "Supabase"],
  },
  {
    title: "DevOps",
    skills: ["Git", "GitHub Actions", "Docker", "AWS"],
  },
  {
    title: "Data & Viz",
    skills: ["Tableau", "Looker", "Power BI", "Salesforce"],
  },
] as const

export function SkillsCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 col-span-1 md:col-span-2">
      <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary">
        Skills & Technologies
      </p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 text-sm font-semibold text-card-foreground">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
