import Link from "next/link"

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Learn tips, tricks, and best practices for building with Prizmux.
          </p>
        </div>

        {/* Coming Soon */}
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 text-center bg-zinc-50 dark:bg-zinc-900/50">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
            <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2v-5.5a2 2 0 012-2H9m5 0H9m0 0a2 2 0 012-2h2a2 2 0 012 2m0 0V5a2 2 0 012 2v10a2 2 0 01-2 2z" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Coming Soon</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-8">
            We're working on creating insightful articles, tutorials, and guides to help you get the most out of Prizmux.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="inline-flex justify-center bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              Go Home
            </Link>
            <Link
              href="/docs"
              className="inline-flex justify-center border border-black dark:border-white text-black dark:text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors text-sm sm:text-base"
            >
              Read Docs
            </Link>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2 text-lg">📚 Tutorials</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Step-by-step guides to help you build amazing React Native apps with Prizmux components.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2 text-lg">💡 Best Practices</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Learn patterns and practices for building scalable, maintainable React Native applications.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2 text-lg">🎨 Design Tips</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Explore design patterns and UI/UX tips for creating beautiful mobile experiences.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2 text-lg">🚀 Case Studies</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Real-world examples of how teams use Prizmux in production applications.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-purple-800">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Subscribe to be notified when we publish new articles and guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              disabled
              className="flex-1 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-black text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              disabled
              className="px-6 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
