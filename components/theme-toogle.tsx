"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Flashlight, FlashlightOff } from "lucide-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Flashlight className="h-4 w-4" />
      ) : (
        <FlashlightOff className="h-4 w-4" />
      )}
    </button>
  )
}
