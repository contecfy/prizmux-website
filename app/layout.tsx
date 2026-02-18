import { Navbar } from "@/components/Nav"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-[#09090b] dark:bg-[#09090b] dark:text-[#fafafa]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar/>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
