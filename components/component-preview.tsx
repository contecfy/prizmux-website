"use client"

interface ComponentCard {
  name: string
  description: string
}

import { PreviewButton } from './previews/PreviewButton'
import { PreviewAlertDemo } from './previews/PreviewAlert'
import { PreviewFAB } from './previews/PreviewFAB'
import { PreviewBottomSheetDemo } from './previews/PreviewBottomSheet'
import { PreviewToastDemo } from './previews/PreviewToast'

import { PreviewCardDemo } from './previews/PreviewCard'
import { PreviewEmptyState } from './previews/PreviewEmptyState'
import { PreviewHeader } from './previews/PreviewHeader'
import { PreviewImagePreview } from './previews/PreviewImagePreview'
import { PreviewPhoneInput } from './previews/PreviewPhoneInput'

const components = [
  { name: "Button", description: "Versatile button with variants", Preview: () => <PreviewButton title="Press Me" showShadow={true} /> },
  { name: "Alert", description: "Modal alert dialogs", Preview: () => <PreviewAlertDemo /> },
  { name: "FAB", description: "Floating action button", Preview: () => <PreviewFAB showShadow={true} /> },
  { name: "BottomSheet", description: "Slide-up panel", Preview: () => <PreviewBottomSheetDemo /> },
  { name: "Toast", description: "Floating notifications", Preview: () => <PreviewToastDemo /> },
  { name: "Card", description: "Flexible container", Preview: () => <PreviewCardDemo /> },
  { name: "EmptyState", description: "Helpful placeholders", Preview: () => <PreviewEmptyState title="No Data Found" description="Try adjusting your filters." /> },
  { name: "Header", description: "Navigation headers", Preview: () => <PreviewHeader title="Home Screen" /> },
  { name: "ImagePreview", description: "Intuitive galleries", Preview: () => <PreviewImagePreview /> },
  { name: "PhoneInput", description: "International inputs", Preview: () => <PreviewPhoneInput /> },
]

export function ComponentPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-24 w-full">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 sm:mb-16 text-center text-black dark:text-white">
        Explore Components
      </h2>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((comp) => (
          <div
            key={comp.name}
            className="group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col items-center hover:border-[#00ff00] transition-all duration-300 bg-white dark:bg-zinc-950 shadow-sm hover:shadow-xl hover:shadow-[#00ff00]/5"
          >
            {/* Real Preview Box */}
            <div className="w-full h-48 mb-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center overflow-hidden border border-zinc-100 dark:border-zinc-800/50">
               <comp.Preview />
            </div>

            <h3 className="text-xl font-bold tracking-tight mb-2 text-black dark:text-white group-hover:text-[#00ff00] transition-colors">
              {comp.name}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-center text-sm leading-relaxed">
              {comp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
