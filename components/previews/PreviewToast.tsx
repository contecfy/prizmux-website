"use client"

import React, { useState, useEffect } from 'react'

interface PreviewToastProps {
  visible: boolean
  onHide: () => void
  text: string
  description?: string
  type?: 'success' | 'error' | 'info' | 'warning'
  shadowColor?: string
  backgroundColor?: string
}

export function PreviewToast({
  visible,
  onHide,
  text,
  description,
  type = 'info',
  shadowColor = 'rgba(0,0,0,0.1)',
  backgroundColor: customBg,
}: PreviewToastProps) {
  const [shouldRender, setShouldRender] = useState(visible)

  useEffect(() => {
    if (visible) setShouldRender(true)
  }, [visible])

  if (!shouldRender) return null

  const colors = {
    success: '#10B981',
    error: '#EF4444',
    info: '#6366F1',
    warning: '#F59E0B',
  }

  const bg = customBg || '#FFFFFF'
  const iconColor = colors[type]

  return (
    <div 
      className={`fixed bottom-8 right-8 z-[100] max-w-sm w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 shadow-xl rounded-xl flex items-start gap-3 transition-all duration-300 ${visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'}`}
      onTransitionEnd={() => !visible && setShouldRender(false)}
      style={{ 
        boxShadow: `0 10px 25px -5px ${shadowColor}`,
        borderLeft: `4px solid ${iconColor}`
      }}
    >
      <div className="flex-1">
        <h4 className="font-bold text-zinc-900 dark:text-zinc-100">{text}</h4>
        {description && <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{description}</p>}
      </div>
      <button 
        onClick={onHide}
        className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

export function PreviewToastDemo() {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [show])

  return (
    <div className="flex items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
      <button 
        onClick={() => setShow(true)}
        className="px-6 py-2 bg-indigo-500 text-white rounded-lg font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 transition-colors"
      >
        Show Success Toast
      </button>
      <PreviewToast 
        visible={show} 
        onHide={() => setShow(false)}
        text="Update Successful"
        description="Your profile changes have been saved to the cloud."
        type="success"
      />
    </div>
  )
}
