import { Suspense } from "react"
import { CodeBlock } from "./code-block"
import Link from "next/link"

export function Hero() {
  const codeExample = `
import { Button } from "prizmux"

<Button title="Click Me" variant="filled" onPress={() => console.log("Hello")} />
  `.trim()

  return (
    <section className="relative bg-white dark:bg-black text-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Hero Text */}
        <div className="flex-1">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
            Developer-first React Native UI
          </span>

          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Build modern React Native apps <br /> with ease
          </h1>

          <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-xl text-lg">
            Prizmux is a fully typed, production-ready component system for React Native. Zero dependencies, customizable, and ready for production.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/docs"
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/your-username/prizmux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-black dark:border-white text-black dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right: Code Preview */}
        <div className="flex-1 w-full">
          <Suspense fallback={<div className="rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 h-48 bg-zinc-50 dark:bg-zinc-900 animate-pulse" />}>
            <CodeBlock className="language-tsx">{codeExample}</CodeBlock>
          </Suspense>
        </div>
      </div>
    </section>
  )
}
