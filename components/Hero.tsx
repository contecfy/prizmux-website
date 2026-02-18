"use client"

import Link from "next/link"

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6">
      
      {/* Package Name */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight">
        Prizmux
      </h1>

      {/* Tagline */}
      <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
        A developer-first React Native component system built for production apps.
      </p>

      {/* Install Command */}
      <pre className="mt-6 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#111] p-4 text-sm overflow-x-auto">
        <code>npm install prizmux</code>
      </pre>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/docs"
          className="rounded-md border border-zinc-900 dark:border-zinc-100 px-6 py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-black transition-colors"
        >
          Docs
        </Link>

        <a
          href="https://github.com/your-username/prizmux"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-zinc-900 dark:border-zinc-100 px-6 py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-black transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
