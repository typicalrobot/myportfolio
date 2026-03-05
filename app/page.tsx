import { Header } from "@/components/portfolio/header"
import { HeroCard } from "@/components/portfolio/hero-card"
import { StatsCard } from "@/components/portfolio/stats-card"
import { StatusCard } from "@/components/portfolio/status-card"
import { AboutCard } from "@/components/portfolio/about-card"
import { SkillsCard } from "@/components/portfolio/skills-card"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactCard } from "@/components/portfolio/contact-card"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Header />

        <main className="pb-16">
          {/* Bento Grid - Top Section */}
          <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <HeroCard />
            <div className="flex flex-col gap-4">
              <StatsCard />
              <StatusCard />
            </div>
          </section>

          {/* About + Skills Row */}
          <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
            <AboutCard />
            <SkillsCard />
          </section>

          {/* Projects */}
          <section className="mt-12">
            <ProjectsSection />
          </section>

          {/* Contact */}
          <section className="mt-12">
            <ContactCard />
          </section>
        </main>
      </div>
    </div>
  )
}
