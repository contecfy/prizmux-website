"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Philosophy", href: "/docs/philosophy" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Card", href: "/docs/components/card" },
      { title: "BottomSheet", href: "/docs/components/bottom-sheet" },
      { title: "ImagePreview", href: "/docs/components/image-preview" },
      { title: "HeaderWithBack", href: "/docs/components/header-with-back" },
      { title: "EmptyState", href: "/docs/components/empty-state" },
      { title: "PhoneInput", href: "/docs/components/phone-input" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block fixed top-14 left-0 h-[calc(100vh-56px)] w-64 border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto">
      <div className="px-6 py-6 space-y-8">
        {navigation.map((section) => (
          <div key={section.title}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {section.title}
            </h4>

            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "block border-l px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100"
                          : "border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}
