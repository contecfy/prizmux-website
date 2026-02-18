"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { BookOpen, Package, Zap, Layout, Image, ArrowLeft, Database, Phone } from "lucide-react"
import { useState } from "react"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction", icon: BookOpen },
      { title: "Installation", href: "/docs/installation", icon: Zap },
      { title: "Philosophy", href: "/docs/philosophy", icon: Package },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button", icon: Layout },
      { title: "Card", href: "/docs/components/card", icon: Package },
      { title: "BottomSheet", href: "/docs/components/bottom-sheet", icon: Database },
      { title: "ImagePreview", href: "/docs/components/image-preview", icon: Image },
      { title: "HeaderWithBack", href: "/docs/components/header-with-back", icon: ArrowLeft },
      { title: "EmptyState", href: "/docs/components/empty-state", icon: Layout },
      { title: "PhoneInput", href: "/docs/components/phone-input", icon: Phone },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const SidebarContent = () => (
    <div className="px-4 sm:px-6 py-6 space-y-6 sm:space-y-8">
      {navigation.map((section) => (
        <div key={section.title}>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {section.title}
          </h4>

          <ul className="space-y-1">
            {section.items.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-3 border-l px-3 py-2 text-sm transition-colors",
                      isActive
                        ? "border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100"
                        : "border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar - hidden on mobile */}
      <aside className="hidden md:block fixed top-16 left-0 h-[calc(100vh-64px)] w-48 lg:w-64 border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto bg-white dark:bg-black">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Toggle Button - visible only on mobile */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed bottom-6 right-6 z-40 bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Toggle sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Sidebar - slides in from left */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 z-30 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          
          {/* Mobile Sidebar */}
          <aside className="md:hidden fixed top-16 left-0 h-[calc(100vh-64px)] w-56 border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto bg-white dark:bg-black z-40">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  )
}
