import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-zinc-600 dark:text-zinc-400 mt-24 relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12">

          {/* Left Intro */}
          <div className="col-span-2 space-y-6">
            <div>
              <Image src="/logo.png" width={50} height={50} alt="prizmux logo"/>
            </div>
            <div className="font-semibold text-lg font-orbitron" style={{ color: '#00ff00' }}>
              Prizmux
            </div>

            <p className="max-w-xs text-sm text-zinc-500 dark:text-zinc-500">
              Prizmux is a developer-first React Native component system
              built for production apps.
            </p>

            <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <Link href="https://github.com/contecfy/prizmux" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                GitHub
              </Link>
              <Link href="https://www.npmjs.com/package/prizmux" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                npm
              </Link>
              <span>MIT</span>
            </div>

            <div className="text-xs text-zinc-500 dark:text-zinc-600">
              © {new Date().getFullYear()} Prizmux
            </div>
          </div>

          {/* Column 1 */}
          <div className="space-y-4">
            <h4 className="text-sm text-zinc-900 dark:text-white font-medium">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/docs/introduction" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Components</Link></li>
              <li><Link href="/changelog" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Changelog</Link></li>
              <li><Link href="/docs" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Docs</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-sm text-zinc-900 dark:text-white font-medium">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/docs/introduction" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Installation</Link></li>
              {/* <li><Link href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Guides</Link></li> */}
              <li><Link href="https://github.com/contecfy/prizmux/tree/main/examples/sample" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Examples</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-sm text-zinc-900 dark:text-white font-medium">Community</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="https://github.com/contecfy/prizmux" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">GitHub</Link></li>
              <li><Link href="https://github.com/contecfy/prizmux/issues" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Issues</Link></li>
              {/* <li><Link href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Discussions</Link></li> */}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h4 className="text-sm text-zinc-900 dark:text-white font-medium">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">License</Link></li>
              <li><Link href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Massive Background Brand Text */}
      <div className="left-0 w-full text-center pointer-events-none select-none">
        <h2 className="text-[160px] md:text-[220px] font-bold leading-none font-orbitron" style={{ color: '#00ff00' }}>
          Prizmux
        </h2>
      </div>
    </footer>
  )
}