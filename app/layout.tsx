import { Navbar } from "@/components/Nav"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"

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
          <Footer/>
        </ThemeProvider>

      </body>
    </html>
  )
}
