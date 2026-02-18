import { allDocs } from "@/.contentlayer/generated"
import { notFound } from "next/navigation"
import { MDXComponents } from "mdx/types"
import { getMDXComponent } from "next-contentlayer/hooks"
import { CodeBlock } from "@/components/code-block"

interface PageProps {
  params: Promise<{ slug: string[] }>
}

const mdxComponents: MDXComponents = {
  // keep inline code as a regular <code> element
  code: (props) => <code {...props} />,
  // MDX wraps fenced code blocks as <pre><code className="language-...">..</code></pre>
  // Map `pre` to a component that extracts the inner <code> and forwards it
  // to our `CodeBlock` component so it renders a block-level element.
  pre: (props) => {
    const child = props.children as any
    if (child?.props && child.props.mdxType === 'code') {
      return <CodeBlock {...child.props} />
    }
    // fallback to default pre
    return <pre {...props} />
  },
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const slugPath = slug.join('/')
  const doc = allDocs.find((d: any) => d.slug === slugPath)

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
