"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeBlockClientProps {
  lightHtml: string
  darkHtml: string
  code: string
}

export function CodeBlockClient({ lightHtml, darkHtml, code }: CodeBlockClientProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden text-sm">
      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
        )}
      </button>

      {/* Light mode version */}
      <div
        className="block dark:hidden [&>pre]:!bg-zinc-50 [&>pre]:!p-6 [&>pre]:!rounded-lg"
        dangerouslySetInnerHTML={{ __html: lightHtml }}
      />
      {/* Dark mode version */}
      <div
        className="hidden dark:block [&>pre]:!bg-black [&>pre]:!p-6 [&>pre]:!rounded-lg"
        dangerouslySetInnerHTML={{ __html: darkHtml }}
      />
    </div>
  )
}
