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
    <div className="min-h-screen w-full bg-white dark:bg-black relative">
      <Sidebar />
      <main className="md:pl-56 w-full min-h-screen">
        <div className="w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-10 shadow-sm">
          {children}
        </div>
      </main>

    </div>
  )
}
