export function StatusCard() {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>
        <span className="text-sm font-medium text-card-foreground">
          Open to opportunities
        </span>
      </div>
    </div>
  )
}
