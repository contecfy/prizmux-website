"use client"

import React from 'react'

interface DeviceMockupProps {
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

export function DeviceMockup({ children, className = "", contentClassName = "" }: DeviceMockupProps) {
  return (
    <div className={`relative mx-auto border-[8px] border-zinc-900 dark:border-zinc-800 rounded-[3rem] bg-zinc-900 dark:bg-zinc-800 shadow-2xl overflow-hidden ${className}`}
         style={{ width: '280px', height: '580px' }}>
      
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-900 dark:bg-zinc-800 rounded-b-2xl z-50 flex items-center justify-center">
        <div className="w-10 h-1 bg-zinc-800 dark:bg-zinc-700 rounded-full" />
      </div>

      {/* Status Bar */}
      <div className="absolute top-0 inset-x-0 h-10 px-6 flex items-center justify-between text-[10px] font-bold text-zinc-900 dark:text-zinc-100 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" />
          </svg>
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
          </svg>
        </div>
      </div>

      {/* Content Area */}
      <div className={`absolute inset-0 pt-10 pb-6 overflow-hidden bg-white dark:bg-zinc-950 ${contentClassName}`}>
        {children}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full z-50" />
      
      {/* Side Buttons Mock */}
      <div className="absolute -left-[10px] top-24 w-[2px] h-12 bg-zinc-800 dark:bg-zinc-700 rounded-l-md" />
      <div className="absolute -left-[10px] top-40 w-[2px] h-12 bg-zinc-800 dark:bg-zinc-700 rounded-l-md" />
      <div className="absolute -right-[10px] top-32 w-[2px] h-20 bg-zinc-800 dark:bg-zinc-700 rounded-r-md" />
    </div>
  )
}
