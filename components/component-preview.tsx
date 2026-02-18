"use client"

interface ComponentCard {
  name: string
  description: string
}

const components: ComponentCard[] = [
  { name: "Button", description: "Pressable with variants and icons" },
  { name: "Card", description: "Content container with shadows" },
  { name: "BottomSheet", description: "Slide-up panel" },
  { name: "ImagePreview", description: "Quick image display" },
  { name: "HeaderWithBack", description: "Header with back navigation" },
  { name: "EmptyState", description: "Placeholder for empty views" },
  { name: "PhoneInput", description: "Phone number input with formatting" },
]

export function ComponentPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
        Components
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {components.map((comp) => (
          <div
            key={comp.name}
            className="rounded-md border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col items-center hover:shadow-md transition-shadow"
          >
            {/* Placeholder preview box */}
            <div className="h-24 w-full mb-4 rounded bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 dark:text-zinc-400">
              Preview
            </div>

            <h3 className="text-lg font-semibold tracking-tight mb-1">
              {comp.name}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
              {comp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
