import { cn } from "@/lib/utils"
import { ExternalLink, Github } from "lucide-react"

interface LiveLink {
  url: string
  label?: string
}

interface ProjectCardProps {
  title: string
  description: string
  problem: string
  tags: string[]
  codeUrl?: string
  liveUrl?: string
  liveLinks?: LiveLink[]
  span?: "normal" | "wide"
}

const linkBase = "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
const primaryLink = cn(linkBase, "bg-primary text-primary-foreground hover:bg-primary/90")
const outlineLink = cn(linkBase, "border border-border text-card-foreground hover:bg-secondary")

export function ProjectCard({
  title,
  description,
  problem,
  tags,
  codeUrl,
  liveUrl,
  liveLinks,
  span = "normal",
}: ProjectCardProps) {
  const hasLinks = codeUrl || liveUrl || liveLinks

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg",
        span === "wide" && "col-span-1 md:col-span-2 lg:col-span-2"
      )}
    >
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold tracking-tight text-card-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-3 rounded-lg bg-primary/5 px-3 py-2">
          <p className="text-xs font-medium text-primary">Real-world impact:</p>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
            {problem}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        {hasLinks && (
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className={outlineLink}>
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={primaryLink}>
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            {liveLinks?.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={primaryLink}>
                <ExternalLink className="h-3.5 w-3.5" />
                {link.label || "Live Demo"}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
