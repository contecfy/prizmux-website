import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { CodeBlock } from "@/components/code-block"
import { getDocBySlug } from "@/lib/mdx"

interface PageProps {
  params: Promise<{ slug: string[] }>
}

const mdxComponents = {
  code: (props: any) => <code {...props} />,
  pre: (props: any) => {
    const child = props.children as any
    if (child?.props && child.props.className?.startsWith('language-')) {
      return <CodeBlock {...child.props} />
    }
    return <pre {...props} />
  },
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const slugPath = slug.join('/')
  const doc = getDocBySlug(slugPath)

  if (!doc) notFound()

  const { title, description, content } = doc

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto px-6 py-10">
      <h1>{title}</h1>
      {description && <p className="text-zinc-600 dark:text-zinc-400">{description}</p>}
      <div>
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  )
}
