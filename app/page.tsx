import type { Metadata } from "next"
import { ComponentPreview } from "@/components/component-preview"
import { FeatureGrid } from "@/components/Features-grid"
import { Hero } from "@/components/Hero"

export const metadata: Metadata = {
  title: "Prizmux - React Native Component Library",
  description: "Build beautiful, performant React Native apps with production-ready components. Prizmux offers a comprehensive component library with best practices and accessibility built-in.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
      <Hero />
      <FeatureGrid />
      <ComponentPreview />
    </div>
  )
}
