import { codeToHtml } from "shiki"
import React from "react"
import { CodeBlockClient } from "./code-block-client"

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

  // Generate separate HTML for light and dark themes
  const lightHtml = await codeToHtml(code, {
    lang,
    theme: "github-light",
  })

  const darkHtml = await codeToHtml(code, {
    lang,
    theme: "github-dark",
  })

  return (
    <CodeBlockClient lightHtml={lightHtml} darkHtml={darkHtml} code={code} />
  )
}
