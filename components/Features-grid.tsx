"use client"

interface Feature {
  id: string
  label: string
  highlight: string
  description: string
}

const features: Feature[] = [
  {
    id: "zero-deps",
    label: "Zero",
    highlight: "dependencies",
    description:
      "Lightweight components with no forced external libraries — bring your own icons, images, and navigation.",
  },
  {
    id: "fully-typed",
    label: "Fully",
    highlight: "typed",
    description: "Built with TypeScript and shipped with `.types.ts` for a great developer experience.",
  },
  {
    id: "bring-your-own",
    label: "Bring your own",
    highlight: "icons & images",
    description: "Every icon and image slot accepts a `ReactNode` — use lucide, vector icons, or custom SVGs.",
  },
  {
    id: "no-navigation",
    label: "No",
    highlight: "navigation dependency",
    description: "`HeaderWithBack` requires an `onBackPress` so you can use any navigation library you prefer.",
  },
  {
    id: "no-image-lib",
    label: "No",
    highlight: "image library required",
    description: "`ImagePreview` and `HeaderWithBack` accept ReactNode for images — no image package is bundled.",
  },
  {
    id: "phoneinput",
    label: "PhoneInput",
    highlight: "flags optional",
    description: "Searchable country picker with ISO-code fallback; pass a `renderFlag` or use the built-in fallback.",
  },
]

function Icon({ id }: { id: string }) {
  switch (id) {
    case "frameworks":
      return (
        <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M3 7h18M3 17h18" />
        </svg>
      )
    case "authentication":
      return (
        <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a6 6 0 0112 0v2" />
        </svg>
      )
    case "oauth":
      return (
        <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M19 12a7 7 0 00-14 0" />
        </svg>
      )
    case "mfa":
      return (
        <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="1.5" />
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 7V5a5 5 0 0110 0v2" />
        </svg>
      )
    case "multi-tenant":
      return (
        <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.657 0 3-1.343 3-3S17.657 5 16 5s-3 1.343-3 3 1.343 3 3 3zM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3z" />
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2 21v-2a4 4 0 014-4h12a4 4 0 014 4v2" />
        </svg>
      )
    case "plugins":
      return (
        <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 8v6a2 2 0 01-2 2h-3l-4 4v-4H6a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2z" />
        </svg>
      )
    default:
      return null
  }
}

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-8">
        Why Choose Prizmux?
      </h2>

      <div className="grid gap-0 sm:gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-200 dark:border-zinc-800">
        {features.map((feature, idx) => (
          <div
            key={feature.id}
            className="group p-6 border-b border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-md bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
                  <Icon id={feature.id} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  <span className="text-zinc-500 dark:text-zinc-400 mr-2 text-sm font-medium">{feature.label}</span>
                  <span className="ml-1"> <strong className="font-extrabold">{feature.highlight}</strong></span>
                </h3>

                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-prose">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
