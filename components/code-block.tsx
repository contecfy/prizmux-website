import { codeToHtml } from "shiki"

import React from "react"

type CodeBlockProps = {
  // MDX passes content as `children` and language in `className` (e.g. "language-tsx").
  children?: React.ReactNode
  className?: string
}

export async function CodeBlock({ children, className }: CodeBlockProps) {
  const code = Array.isArray(children) ? children.join("") : String(children ?? "")

  const langMatch = className ? className.match(/language-(\w+)/) : null
  const lang = langMatch ? langMatch[1] : "tsx"

  // If there's no code (inline or empty), render a simple <code> element.
  if (!code) {
    return <code>{children}</code>
  }

  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  })

  return (
    <div
      className="rounded-md border border-zinc-200 dark:border-zinc-800 overflow-hidden text-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
