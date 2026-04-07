"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toogle"
import { useState } from "react"
import Image from "next/image"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { href: "/", label: "_yoo" },
    { href: "/docs", label: "docs" },
    { href: "/changelog", label: "changelogs" },
    { href: "/blogs", label: "blogs" },
    // { href: "/community", label: "community" },
    // { href: "/enterprise", label: "enterprise" },
    { href: "/license", label: "license" },
  ]

  return (
    <header className="
  sticky top-0 z-50 w-full
  backdrop-blur-xl
  bg-white/60 dark:bg-black/50
  supports-[backdrop-filter]:bg-white/60
  supports-[backdrop-filter]:dark:bg-black/50
  border-b border-white/20 dark:border-white/10
  shadow-sm
  text-black dark:text-white
">
      <div className={`flex h-16 items-center justify-between px-4 sm:px-6 ${pathname.startsWith('/docs') ? 'w-full' : 'mx-auto max-w-7xl'}`}>

        {/* Left — Logo */}
        <div className="flex items-center gap-6">
          <Image src="/logo.png" width={30} height={30} alt="prizmux logo" />
          <Link
            href="/"
            className="font-bold text-base sm:text-lg tracking-tight hover:opacity-80 transition-opacity font-orbitron"
            style={{ color: '#00ff00' }}
          >
            Prizmux
          </Link>
        </div>

        {/* Center / Right — Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1 text-sm font-medium hover:opacity-80 transition-opacity ${isActive ? "border-b-2 border-black dark:border-white" : ""
                  }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Far Right — Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://www.npmjs.com/package/prizmux"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prizmux on npm"
            className="hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img">
              <rect width="24" height="24" rx="3" fill="#000000" />
              <text x="50%" y="57%" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fill="white" fontWeight="700">npm</text>
            </svg>
          </a>

          <a
            href="https://github.com/contecfy/prizmux"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Prizmux on GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583v-2.234c-3.338.724-4.033-1.613-4.033-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.552 3.295-1.23 3.295-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.921.43.37.823 1.096.823 2.21v3.293c0 .323.192.699.8.58C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
          <div className="px-4 py-3 space-y-2">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors ${isActive ? "bg-zinc-100 dark:bg-zinc-900 border-l-2 border-black dark:border-white" : ""
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
