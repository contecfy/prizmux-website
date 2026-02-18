import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/SideBar"


export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-white dark:bg-black">
      <Sidebar />

      <div className="flex-1 w-full md:pl-64">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-10">
          {children}
        </div>

        {/* Footer constrained to content width */}
        <Footer />
      </div>
    </div>
  )
}
