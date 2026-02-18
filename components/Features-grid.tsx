"use client"

import { Box, Code, Image, ArrowLeft, ImageOff, Phone } from "lucide-react"

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
  const commonProps = { className: "w-5 h-5" }
  switch (id) {
    case "zero-deps":
      return <Box {...commonProps} />
    case "fully-typed":
      return <Code {...commonProps} />
    case "bring-your-own":
      return <Image {...commonProps} />
    case "no-navigation":
      return <ArrowLeft {...commonProps} />
    case "no-image-lib":
      return <ImageOff {...commonProps} />
    case "phoneinput":
      return <Phone {...commonProps} />
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
