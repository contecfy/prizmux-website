"use client"

import React from 'react'

interface PreviewHeaderProps {
  title: string
  backgroundColor?: string
  borderColor?: string
  backIconColor?: string
}

export function PreviewHeader({
  title,
  backgroundColor = '#FFFFFF',
  borderColor = '#E5E7EB',
  backIconColor = '#000000',
}: PreviewHeaderProps) {
  return (
    <div 
      className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800"
    >
      <header 
        className="flex items-center px-4 py-4 border-b"
        style={{ backgroundColor, borderColor }}
      >
        <button className="p-2 mr-2">
          <svg className="w-6 h-6" style={{ color: backIconColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex-1 truncate">
          {title}
        </h1>
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </header>
      <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center italic text-zinc-400 text-sm italic">
        Page Content Placeholder
      </div>
    </div>
  )
}
