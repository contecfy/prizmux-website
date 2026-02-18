

"use client"

import { Navbar } from "@/components/Nav"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { usePathname } from "next/navigation"
import { Footer } from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Footer only for non-docs pages
  const showFooter = !pathname?.startsWith("/docs")

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-[#09090b] dark:bg-[#09090b] dark:text-[#fafafa]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          {showFooter && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  )
}

