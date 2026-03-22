"use client"

import React, { useState } from 'react'
import { X } from 'lucide-react'
import { DeviceMockup } from './DeviceMockup'
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

interface ComponentCard {
  name: string
  description: string
}

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
  const [selectedComponent, setSelectedComponent] = useState<any | null>(null)

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-24 w-full">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 sm:mb-16 text-center text-black dark:text-white">
        Explore Components
      </h2>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((comp) => (
          <div
            key={comp.name}
            onClick={() => setSelectedComponent(comp)}
            className="group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col items-center hover:border-[#00ff00] transition-all duration-300 bg-white dark:bg-zinc-950 shadow-sm hover:shadow-xl hover:shadow-[#00ff00]/5 cursor-pointer"
          >
            {/* Simple Preview Box */}
            <div className="w-full h-48 mb-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center overflow-hidden border border-zinc-100 dark:border-zinc-800/50">
               <div className="scale-90 transform-gpu group-hover:scale-100 transition-transform duration-300">
                  <comp.Preview />
               </div>
            </div>

            <h3 className="text-xl font-bold tracking-tight mb-2 text-black dark:text-white group-hover:text-[#00ff00] transition-colors">
              {comp.name}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-center text-sm leading-relaxed">
              {comp.description}
            </p>
            
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest text-[#00ff00]">
              Tap to see in dynamic island
            </div>
          </div>
        ))}
      </div>

      {/* Large Device Modal */}
      {selectedComponent && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedComponent(null)}
        >
          <div 
            className="relative scale-90 sm:scale-100 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedComponent(null)}
              className="absolute -top-12 right-0 sm:-right-12 p-2 text-white hover:text-zinc-300 transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="shadow-2xl">
               <DeviceMockup 
                  className="!w-[420px] !h-[840px] !border-[4px] !rounded-[3.5rem] shadow-none"
                  contentClassName="!rounded-[3rem]"
               >
                  <div className="h-full flex flex-col items-center justify-center p-6 relative">
                     <selectedComponent.Preview />
                     <div className="absolute top-16 left-6 right-6 p-5 rounded-3xl bg-zinc-50/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400 backdrop-blur-md shadow-lg">
                        <p className="font-bold text-zinc-900 dark:text-zinc-100 mb-1 text-base">{selectedComponent.name}</p>
                        <p>{selectedComponent.description}</p>
                     </div>
                  </div>
               </DeviceMockup>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
