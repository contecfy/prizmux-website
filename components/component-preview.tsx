"use client"

interface ComponentCard {
  name: string
  description: string
}

const components: ComponentCard[] = [
  { name: "ImagePreview", description: "Quick image display" },
  { name: "Toast", description: "Notification with dismiss option" },
  { name: "PhoneInput", description: "Phone number input with formatting" },
  { name: "BottomSheet", description: "Slide-up panel for additional content" },
]

export function ComponentPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-12 text-center">
        Components
      </h2>

      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {components.map((comp) => (
          <div
            key={comp.name}
            className="rounded-md border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 flex flex-col items-center hover:shadow-md transition-shadow"
          >
            {/* Placeholder preview box */}
            <div className="h-20 sm:h-24 w-full mb-3 sm:mb-4 rounded bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
              Preview
            </div>

            <h3 className="text-base sm:text-lg font-semibold tracking-tight mb-1 text-center">
              {comp.name}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 text-center">
              {comp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
