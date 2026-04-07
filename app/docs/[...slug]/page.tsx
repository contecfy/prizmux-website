import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { CodeBlock } from "@/components/code-block"
import { getDocBySlug, getHeadings } from "@/lib/mdx"
import remarkGfm from "remark-gfm"

interface PageProps {
  params: Promise<{ slug: string[] }>
}

import { ComponentExample } from "@/components/ComponentExample"
import { Tabs, Tab } from "@/components/tabs"
import { TableOfContents } from "@/components/TableOfContents"
import { AdBlock } from "@/components/AdBlock"

const mdxComponents = {
  ComponentExample,
  Tabs,
  Tab,
  h1: (props: any) => (
    <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mt-0 mb-6" {...props} />
  ),
  h2: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
    return <h2 id={id} className="text-2xl font-bold tracking-tight text-black dark:text-white mt-10 mb-4 scroll-mt-20 group flex items-center gap-2" {...props}>
      {props.children}
      <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-[#00ff00]">#</a>
    </h2>
  },
  h3: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
    return <h3 id={id} className="text-xl font-semibold tracking-tight text-black dark:text-white mt-8 mb-3 scroll-mt-20 group flex items-center gap-2" {...props}>
      {props.children}
      <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-[#00ff00]">#</a>
    </h3>
  },
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
    <a className="hover:underline font-medium" {...props} style={{ color: '#00ff00' }} />
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
  const headings = getHeadings(content)

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-12 relative w-full">
      <div className="flex-1 min-w-0">
        <article className="max-w-4xl">
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
      </div>

      <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start h-[calc(100vh-6rem)] overflow-y-auto pr-4 scrollbar-hide">
        <TableOfContents headings={headings} />
        <AdBlock />
      </aside>
    </div>
  )
}
