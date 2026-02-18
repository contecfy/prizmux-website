import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/SideBar"


export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 lg:pl-64">
        <div className="mx-auto max-w-3xl px-6 py-10">
          {children}
        </div>

        {/* Footer constrained to content width */}
        <Footer />
      </div>
    </div>
  )
}
