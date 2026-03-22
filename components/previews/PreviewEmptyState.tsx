"use client"

import React from 'react'

interface PreviewEmptyStateProps {
  title: string
  description: string
  backgroundColor?: string
}

export function PreviewEmptyState({
  title,
  description,
  backgroundColor = 'transparent',
}: PreviewEmptyStateProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center p-12 text-center"
      style={{ backgroundColor }}
    >
      <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h3>
      <p className="max-w-[240px] text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
        {description}
      </p>
      <button className="px-6 py-2 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white rounded-full text-sm font-bold hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
        Create New
      </button>
    </div>
  )
}
