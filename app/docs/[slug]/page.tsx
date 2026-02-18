import { allDocs } from "@/.contentlayer/generated"
import { notFound } from "next/navigation"
import { MDXComponents } from "mdx/types"
import { getMDXComponent } from "next-contentlayer/hooks"
import { CodeBlock } from "@/components/code-block"

interface PageProps {
  params: Promise<{ slug: string }>
}

const mdxComponents: MDXComponents = {
  code: (props) => <CodeBlock {...props} />,
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const doc = allDocs.find((d: any) => d.slug === slug)

  if (!doc) notFound()

  const { title, description, body } = doc
  const MDXContent = getMDXComponent(body.code)

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto px-6 py-10">
      <h1>{title}</h1>
      {description && <p className="text-zinc-600 dark:text-zinc-400">{description}</p>}
      <div>
        <MDXContent components={mdxComponents} />
      </div>
    </article>
  )
}
