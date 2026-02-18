import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "License | Prizmux",
  description: "Prizmux is released under the MIT License. Learn about the terms and conditions.",
  authors: [{ name: "Lukwago Joel Jr", url: "https://github.com/lukwago-jr" }],
}

export default function LicensePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            License
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Prizmux is open source and released under the MIT License.
          </p>
        </div>

        {/* MIT License Text */}
        <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 font-mono text-sm leading-relaxed space-y-4">
          <p className="font-semibold text-base">MIT License</p>
          
          <p>Copyright (c) 2024 Prizmux</p>

          <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </p>

          <p>
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
          </p>

          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </div>

       
      </div>
    </main>
  )
}
