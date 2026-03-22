"use client"

import React, { useState } from 'react'

interface PreviewFABProps {
  label?: string
  backgroundColor?: string
  showShadow?: boolean
  size?: 'small' | 'medium' | 'large'
}

export function PreviewFAB({
  label,
  backgroundColor = '#6366F1',
  showShadow = true,
  size = 'medium'
}: PreviewFABProps) {
  const sizeMap = {
    small: 'h-10 w-10',
    medium: 'h-14 w-14',
    large: 'h-[72px] w-[72px]',
  }

  return (
    <div 
      className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm"
    >
      <button
        className={`flex items-center justify-center rounded-full text-white transition-transform active:scale-90 hover:opacity-90 ${sizeMap[size]}`}
        style={{
          backgroundColor,
          boxShadow: showShadow ? `0 8px 20px -4px ${backgroundColor}66` : 'none'
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
      {label && <span className="font-semibold text-zinc-700 dark:text-zinc-200">{label}</span>}
    </div>
  )
}
