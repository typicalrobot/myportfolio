import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="flex items-center justify-end py-6">
      <ThemeToggle />
    </header>
  )
}
