import { Suspense } from "react"
import { CodeBlock } from "./code-block"
import Link from "next/link"

export function Hero() {
  const codeExample = `
import { useState } from "react"
import { BottomSheet, Button } from "prizmux"
import { Text } from "react-native"

export default function App() {
  const [visible, setVisible] = useState(false)
  
  return (
    <>
      <Button 
        title="Open Sheet" 
        onPress={() => setVisible(true)}
      />
      
      <BottomSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title="Example Sheet"
      >
        <Text>Your content here</Text>
      </BottomSheet>
    </>
  )
}
  `.trim()

  return (
    <section className="relative bg-white dark:bg-black text-black dark:text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Hero Text */}
          <div className="w-full">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
              Developer-first React Native UI
            </span>

            <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug">
              Build modern{" "} React Native {" "}
              <span className="text-[#00ff00]">
                UI components
              </span>{" "}
              with ease
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-lg">
              Prizmux is a fully typed, production-ready component system for React Native. Zero dependencies, customizable, and ready for production.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                href="/docs"
                className="inline-flex justify-center bg-black dark:bg-white text-white dark:text-black px-5 sm:px-7 py-2.5 sm:py-3 font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                Get Started
              </Link>
              <a
                href="https://github.com/contecfy/prizmux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center border border-black dark:border-white text-black dark:text-white px-5 sm:px-7 py-2.5 sm:py-3 font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors text-sm sm:text-base"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Code Preview */}
          <div className="w-full hidden lg:block">
            <Suspense fallback={<div className="rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 h-64 bg-zinc-50 dark:bg-zinc-900 animate-pulse" />}>
              <div className="overflow-auto">
                <CodeBlock className="language-tsx">{codeExample}</CodeBlock>
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
