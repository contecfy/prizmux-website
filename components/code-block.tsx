import { codeToHtml } from "shiki"

interface CodeBlockProps {
  code: string
  lang?: string
}

export async function CodeBlock({
  code,
  lang = "tsx",
}: CodeBlockProps) {
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
