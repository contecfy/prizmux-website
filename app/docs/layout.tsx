import type { Metadata } from "next"
import { Sidebar } from "@/components/SideBar"

export const metadata: Metadata = {
  title: {
    template: "%s | Prizmux Docs",
    default: "Documentation | Prizmux",
  },
  description: "Complete documentation for Prizmux React Native components. Learn how to use each component with examples and best practices.",
  authors: [{ name: "Lukwago Joel Jr", url: "https://github.com/lukwago-jr" }],
  creator: "Lukwago Joel Jr",
}

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-white dark:bg-black">
      <Sidebar />

      <div className="flex-1 w-full md:pl-64">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-10">
          {children}
        </div>

        {/* Footer constrained to content width is rendered at root layout to avoid duplication */}
      </div>
    </div>
  )
}
