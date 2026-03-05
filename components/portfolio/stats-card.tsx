export function StatsCard() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Experience
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-6">
        <div>
          <p className="text-5xl font-bold tracking-tight text-card-foreground">4+</p>
          <p className="mt-1 text-sm text-muted-foreground">Years of Experience</p>
        </div>
        <div className="h-px bg-border" />
        <div>
          <p className="text-5xl font-bold tracking-tight text-card-foreground">50+</p>
          <p className="mt-1 text-sm text-muted-foreground">Projects Completed</p>
        </div>
      </div>
    </div>
  )
}
