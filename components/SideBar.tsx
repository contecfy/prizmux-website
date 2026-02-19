"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { BookOpen, Package, Zap, Layout } from "lucide-react"
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
      { title: "Alert", href: "/docs/components/alert", icon: undefined },
      { title: "BottomSheet", href: "/docs/components/bottom-sheet", icon: undefined },
      { title: "Button", href: "/docs/components/button", icon: undefined },
      { title: "Card", href: "/docs/components/card", icon: undefined },
      { title: "EmptyState", href: "/docs/components/empty-state", icon: undefined },
      { title: "FAB", href: "/docs/components/fab", icon: undefined },
      { title: "Header", href: "/docs/components/header", icon: undefined },
      { title: "ImagePreview", href: "/docs/components/image-preview", icon: undefined },
      { title: "PhoneInput", href: "/docs/components/phone-input", icon: undefined },
      { title: "Sidebar", href: "/docs/components/sidebar", icon: undefined },
      { title: "Toast", href: "/docs/components/toast", icon: undefined },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const SidebarContent = () => (
    <nav className="px-3 sm:px-4 py-6 space-y-8">
      {navigation.map((section) => (
        <div key={section.title} className="space-y-3">
          <h4 className="px-3 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-4">
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
                      "relative flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 rounded-lg"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 rounded-lg"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00ff00] rounded-r-full" />
                    )}
                    {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                    <span className="flex-1">{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )

  return (
    <>
      {/* Desktop Sidebar - hidden on mobile */}
      <aside className="hidden md:block fixed top-16 left-0 h-[calc(100vh-64px)] w-56 border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto bg-white dark:bg-black scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent">
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
