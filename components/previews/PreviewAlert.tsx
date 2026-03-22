"use client"

import React, { useState } from 'react'
import { PreviewButton } from './PreviewButton'

interface PreviewAlertProps {
  visible: boolean
  onClose: () => void
  title: string
  message: string
  backgroundColor?: string
  overlayColor?: string
  borderRadius?: number
}

export function PreviewAlert({
  visible,
  onClose,
  title,
  message,
  backgroundColor = '#FFFFFF',
  overlayColor = 'rgba(0,0,0,0.5)',
  borderRadius = 16,
}: PreviewAlertProps) {
  if (!visible) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      style={{ backgroundColor: overlayColor }}
      onClick={onClose}
    >
      <div 
        className="w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        style={{ 
          backgroundColor, 
          borderRadius: `${borderRadius}px` 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
          <p className="text-zinc-600 mb-6">{message}</p>
          <div className="flex justify-end">
            <PreviewButton 
               title="Close" 
               onClick={onClose} 
               size="small"
               backgroundColor="#6366F1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// A wrapper to show it in a container for the website
export function PreviewAlertDemo() {
  const [show, setShow] = useState(false)
  return (
    <div className="flex items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
      <button 
        onClick={() => setShow(true)}
        className="px-4 py-2 bg-[#6366F1] text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20"
      >
        Trigger Alert
      </button>
      <PreviewAlert 
        visible={show} 
        onClose={() => setShow(false)} 
        title="Welcome to Prizmux"
        message="This is a real-time preview of the Alert component running in your browser."
      />
    </div>
  )
}
