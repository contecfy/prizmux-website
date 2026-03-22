"use client"

import React from 'react'

interface PreviewCardProps {
  children: React.ReactNode
  backgroundColor?: string
  borderRadius?: number
}

export function PreviewCard({ 
  children, 
  backgroundColor = '#FFFFFF', 
  borderRadius = 12 
}: PreviewCardProps) {
  return (
    <div 
      className="p-6 shadow-lg border border-zinc-200 dark:border-zinc-800"
      style={{ backgroundColor, borderRadius: `${borderRadius}px` }}
    >
      {children}
    </div>
  )
}

export function PreviewCardDemo() {
  return (
    <div className="p-8 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/50 w-full">
      <PreviewCard borderRadius={24}>
        <div className="flex flex-col gap-4">
          <div className="w-full h-32 bg-zinc-100 dark:bg-zinc-800 rounded-xl" />
          <div>
            <h4 className="font-bold text-lg">Prizmux Card</h4>
            <p className="text-sm text-zinc-500">Flexible container for any content.</p>
          </div>
          <button className="w-full py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-bold">Action</button>
        </div>
      </PreviewCard>
    </div>
  )
}
