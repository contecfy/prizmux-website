import type { Metadata } from "next"
import { Navbar } from "@/components/Nav"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/Footer"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Prizmux - React Native Component Library",
  description: "Build beautiful, performant React Native apps with production-ready components. Prizmux offers a comprehensive component library with best practices and accessibility built-in.",
  keywords: ["React Native", "Components", "UI Library", "Mobile Development", "TypeScript", "React"],
  authors: [{ name: "Lukwago Joel Jr", url: "https://github.com/lukwago-joel-jr" }],
  creator: "Lukwago Joel Jr",
  publisher: "Prizmux",
  openGraph: {
    title: "Prizmux - React Native Component Library",
    description: "Build beautiful, performant React Native apps with production-ready components.",
    url: "https://prizmux.dev",
    siteName: "Prizmux",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Prizmux - React Native Component Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prizmux - React Native Component Library",
    description: "Build beautiful, performant React Native apps with production-ready components.",
    creator: "@prizmux",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="author" content="Lukwago Joel Jr" />
        <meta name="creator" content="Lukwago Joel Jr" />
        <meta name="application-name" content="Prizmux" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Prizmux" />
        <meta property="og:type" content="website" />
        {/* Preconnect & load Google Fonts (Orbitron + Space Grotesk) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className="bg-white text-[#09090b] dark:bg-[#09090b] dark:text-[#fafafa]"
        style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

