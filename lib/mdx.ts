import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export interface DocMeta {
  title: string
  description?: string
  slug: string
}

export interface Heading {
  level: number
  text: string
  id: string
}

export interface Doc extends DocMeta {
  content: string
}

export function getHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    headings.push({ level, text, id })
  }

  return headings
}

export function getDocBySlug(slug: string): Doc | null {
  const filePath = path.join(contentDir, 'docs', `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title || slug,
    description: data.description,
    content,
  }
}

export function getAllDocs(): DocMeta[] {
  const docsDir = path.join(contentDir, 'docs')
  const files = getFilesRecursive(docsDir)

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file
        .replace(docsDir, '')
        .replace(/^\//, '')
        .replace(/\.mdx$/, '')
      const fileContent = fs.readFileSync(file, 'utf-8')
      const { data } = matter(fileContent)

      return {
        slug,
        title: data.title || slug,
        description: data.description,
      }
    })
}

function getFilesRecursive(dir: string): string[] {
  const files: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getFilesRecursive(fullPath))
    } else {
      files.push(fullPath)
    }
  }

  return files
}
