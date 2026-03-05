"use client"

import { ArrowDownRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const FULL_TEXT = "Hi, I'm Anushree Misra"
const TYPE_SPEED = 60
const DELETE_SPEED = 35
const PAUSE_DURATION = 2500
const RESTART_DELAY = 400

export function HeroCard() {
  const [displayed, setDisplayed] = useState("")
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing")
  const cancelledRef = useRef(false)

  useEffect(() => {
    cancelledRef.current = false

    function runAnimation() {
      if (cancelledRef.current) return
      let i = 0
      setPhase("typing")
      setDisplayed("")

      const typeInterval = setInterval(() => {
        if (cancelledRef.current) { clearInterval(typeInterval); return }
        if (i < FULL_TEXT.length) {
          setDisplayed(FULL_TEXT.slice(0, i + 1))
          i++
        } else {
          clearInterval(typeInterval)
          setPhase("pausing")
          setTimeout(() => {
            if (cancelledRef.current) return
            setPhase("deleting")
            let j = FULL_TEXT.length
            const deleteInterval = setInterval(() => {
              if (cancelledRef.current) { clearInterval(deleteInterval); return }
              if (j > 0) {
                j--
                setDisplayed(FULL_TEXT.slice(0, j))
              } else {
                clearInterval(deleteInterval)
                setTimeout(() => runAnimation(), RESTART_DELAY)
              }
            }, DELETE_SPEED)
          }, PAUSE_DURATION)
        }
      }, TYPE_SPEED)
    }

    runAnimation()
    return () => { cancelledRef.current = true }
  }, [])

  return (
    <div className="col-span-1 row-span-2 flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 md:col-span-2 md:p-10">
      <div>
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Developer
        </p>
        <h1 className="whitespace-nowrap text-3xl font-bold leading-tight tracking-tight text-card-foreground md:text-4xl lg:text-5xl">
          {displayed}
          <span
            className={`ml-0.5 inline-block w-[3px] bg-primary ${phase === "pausing" ? "animate-pulse" : ""}`}
            style={{ height: "1em" }}
            aria-hidden="true"
          />
        </h1>
      </div>
      <div className="mt-auto pt-6">
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
          Curating digital experiences that users love. Building solutions that solve real problems.
        </p>
        <div className="mt-6 flex items-center gap-2 text-primary" aria-hidden="true">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDownRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}
