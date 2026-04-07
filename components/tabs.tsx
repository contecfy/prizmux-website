"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsProps {
  children: React.ReactNode
  defaultValue?: string
  className?: string
}

interface TabProps {
  children: React.ReactNode
  value: string
  className?: string
}

export function Tabs({ children, defaultValue, className }: TabsProps) {
  const childrenArray = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child)
  ) as React.ReactElement<TabProps>[]

  const tabs = childrenArray.map((child) => child.props.value)
  const [activeTab, setActiveTab] = React.useState(defaultValue || tabs[0])

  return (
    <div className={cn("w-full my-6", className)}>
      <div className="flex items-center gap-1 border-b border-zinc-200 dark:border-zinc-800 mb-4 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors relative whitespace-nowrap",
              activeTab === tab
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
            )}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff00]" />
            )}
          </button>
        ))}
      </div>
      <div className="transition-all duration-300">
        {childrenArray.map((child) => {
          if (child.props.value === activeTab) {
            return (
              <div key={child.props.value} className="fade-in">
                {child.props.children}
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export function Tab({ children }: TabProps) {
  return <>{children}</>
}
