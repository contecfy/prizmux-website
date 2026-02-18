"use client"

interface Feature {
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    title: "Zero dependencies",
    description: "Lightweight components with no extra bloat.",
    icon: "📦",
  },
  {
    title: "Fully typed",
    description: "Built with TypeScript for type safety out of the box.",
    icon: "✅",
  },
  {
    title: "Bring your own icons",
    description: "No icon dependency. Use any icon library you prefer.",
    icon: "🎨",
  },
  {
    title: "Production ready",
    description: "Designed and tested for real-world apps.",
    icon: "🚀",
  },
]

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12">
        Why Choose Prizmux?
      </h2>
      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
          >
            {/* Icon */}
            <div className="h-12 w-12 sm:h-14 sm:w-14 mb-4 sm:mb-5 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900/50 text-lg sm:text-xl">
              {feature.icon}
            </div>

            <h3 className="text-base sm:text-lg font-semibold tracking-tight mb-2 text-black dark:text-white">
              {feature.title}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
