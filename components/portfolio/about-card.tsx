export function AboutCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 col-span-1 md:col-span-2">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
        About Me
      </p>
      <p className="text-lg leading-relaxed text-card-foreground">
        My journey in coding started when I built my first website using HTML in
        class 4. Since then, I{"'"}ve worked with startups and established companies
        to create solutions that solve real problems.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        When I{"'"}m not coding, you can find me hiking, photographing or
        experimenting with new technologies.
      </p>
    </div>
  )
}
