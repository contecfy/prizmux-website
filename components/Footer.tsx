import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        
        {/* Big Word */}
        <div className="space-y-6">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight">
            Prizmux
          </h2>

          {/* Small Text */}
          <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            A developer-first React Native component system built for
            production apps.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a
              href="https://npmjs.com/package/prizmux"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              npm
            </a>

            <a
              href="https://github.com/your-username/prizmux"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>

            <span>MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
