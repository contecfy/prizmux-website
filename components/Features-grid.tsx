"use client"

interface Feature {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: "Zero dependencies",
    description: "Lightweight components with no extra bloat.",
  },
  {
    title: "Fully typed",
    description: "Built with TypeScript for type safety out of the box.",
  },
  {
    title: "Bring your own icons",
    description: "No icon dependency. Use any icon library you prefer.",
  },
  {
    title: "Production ready",
    description: "Designed and tested for real-world apps.",
  },
]

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-md border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-md transition-shadow"
          >
            {/* Optional icon placeholder */}
            <div className="h-12 w-12 mb-4 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900">
              {/* Icon can go here */}
            </div>

            <h3 className="text-lg font-semibold tracking-tight mb-2">
              {feature.title}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
