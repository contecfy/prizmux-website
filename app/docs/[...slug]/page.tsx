import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { CodeBlock } from "@/components/code-block"
import { getDocBySlug } from "@/lib/mdx"
import remarkGfm from "remark-gfm"

interface PageProps {
  params: Promise<{ slug: string[] }>
}

const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mt-0 mb-6" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white mt-10 mb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold tracking-tight text-black dark:text-white mt-8 mb-3" {...props} />
  ),
  p: (props: any) => (
    <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 my-4" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside space-y-2 my-4 text-zinc-700 dark:text-zinc-300" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside space-y-2 my-4 text-zinc-700 dark:text-zinc-300" {...props} />
  ),
  li: (props: any) => (
    <li className="ml-4" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 pl-4 py-2 my-4 text-zinc-600 dark:text-zinc-400 italic" {...props} style={{ borderLeftColor: '#00ff00' }} />
  ),
  code: (props: any) => (
    <code className="bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded text-sm font-mono text-zinc-900 dark:text-zinc-100" {...props} />
  ),
  pre: (props: any) => {
    const child = props.children as any
    if (child?.props && child.props.className?.startsWith('language-')) {
      return <CodeBlock {...child.props} />
    }
    return <pre className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded overflow-x-auto my-4" {...props} />
  },
  a: (props: any) => (
    <a className="hover:underline" {...props} style={{ color: '#00ff00' }} />
  ),
  table: (props: any) => (
    <div className="my-6 overflow-x-auto border border-zinc-200 dark:border-zinc-700 rounded-lg">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: any) => (
    <thead className="bg-zinc-100 dark:bg-zinc-900" {...props} />
  ),
  tbody: (props: any) => (
    <tbody {...props} />
  ),
  tr: (props: any) => (
    <tr className="border-b border-zinc-200 dark:border-zinc-700" {...props} />
  ),
  th: (props: any) => (
    <th className="border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-3 text-zinc-700 dark:text-zinc-300" {...props} />
  ),
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const slugPath = slug.join('/')
  const doc = getDocBySlug(slugPath)

  if (!doc) notFound()

  const { title, description, content } = doc

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white mb-2">{title}</h1>
      {description && <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">{description}</p>}
      <div className="prose-content">
        <MDXRemote 
          source={content} 
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
    </article>
  )
}
