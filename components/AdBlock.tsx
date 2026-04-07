"use client"

import React from "react"
import { ArrowRight } from "lucide-react"

export function AdBlock() {
  return (
    <div className="mt-12 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-4 group">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#00ff00] flex items-center justify-center text-black font-bold">
          P
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Prizmux Pro</span>
      </div>
      
      <h4 className="text-base font-bold text-black dark:text-white leading-snug">
        Get advanced components and premium support.
      </h4>
      
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Unlock our exclusive UI kit for enterprise-grade React Native apps.
      </p>
      
      <a 
        href="#" 
        className="flex items-center gap-2 text-sm font-bold text-[#00ff00] hover:text-[#00cc00] transition-colors"
      >
        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>

      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
          Sponsored by Prizmux
        </p>
      </div>
    </div>
  )
}
