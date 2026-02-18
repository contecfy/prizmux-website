import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Changelog | Prizmux",
  description: "Track updates, improvements, and new features in Prizmux. View all version releases and breaking changes.",
  authors: [{ name: "Lukwago Joel Jr", url: "https://github.com/lukwago-jr" }],
}

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Changelog
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Track all the updates, improvements, and bug fixes in Prizmux.
          </p>
        </div>

        {/* Coming Soon */}
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 text-center bg-zinc-50 dark:bg-zinc-900/50">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Coming Soon</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-8">
            We're preparing a comprehensive changelog to track all the amazing updates, features, and improvements to Prizmux.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/docs"
              className="inline-flex justify-center bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              View Docs
            </Link>
            <a
              href="https://github.com/your-username/prizmux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center border border-black dark:border-white text-black dark:text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors text-sm sm:text-base"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-semibold mb-2 text-lg">Latest Release</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Check our <a href="https://github.com/your-username/prizmux" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub Releases</a> for the latest updates.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-semibold mb-2 text-lg">Report Issues</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Found a bug? Please create an <a href="https://github.com/your-username/prizmux/issues" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">issue on GitHub</a>.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-semibold mb-2 text-lg">Feature Requests</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Have an idea? Share it in our <a href="https://github.com/your-username/prizmux/discussions" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">discussions</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
