import { Calendar, Linkedin, Mail } from "lucide-react"

export function ContactCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
        Get in Touch
      </p>
      <p className="text-lg font-semibold text-card-foreground">
        Have a project in mind or want to discuss opportunities?
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Feel free to reach out if you have any questions or would like to connect.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <div
          className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-5 py-4"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-card-foreground">Email</p>
            <p className="text-xs text-muted-foreground">
              anushree.m.work@gmail.com
            </p>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/anushreemisra/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-5 py-4 transition-colors hover:bg-secondary"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Linkedin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-card-foreground">LinkedIn</p>
            <p className="text-xs text-muted-foreground">
              linkedin.com/in/anushreemisra
            </p>
          </div>
        </a>
        <a
          href="https://calendly.com/anushree-m-work"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-5 py-4 transition-colors hover:bg-secondary"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-card-foreground">Calendly</p>
            <p className="text-xs text-muted-foreground">
              Schedule a meeting
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
