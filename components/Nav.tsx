"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toogle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        
        {/* Left */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            Prizmux
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">
            <Link
              href="/docs"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Docs
            </Link>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com/your-username/prizmux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://npmjs.com/package/prizmux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            npm
          </a>

          <ThemeToggle/>
        </div>
      </div>
    </header>
  )
}
