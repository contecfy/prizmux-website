"use client"

import React, { useState, useEffect } from 'react'

interface PreviewBottomSheetProps {
  visible: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  borderRadius?: number
  backgroundColor?: string
  closePosition?: 'left' | 'right'
  titlePosition?: 'left' | 'center' | 'right'
}

export function PreviewBottomSheet({
  visible,
  onClose,
  title,
  children,
  borderRadius = 32,
  backgroundColor = '#FFFFFF',
  closePosition = 'right',
  titlePosition = 'left'
}: PreviewBottomSheetProps) {
  const [shouldRender, setShouldRender] = useState(visible)

  useEffect(() => {
    if (visible) setShouldRender(true)
  }, [visible])

  if (!shouldRender) return null

  return (
    <div 
      className={`absolute inset-0 z-[100] flex items-end justify-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      onClick={onClose}
      onTransitionEnd={() => !visible && setShouldRender(false)}
    >
      <div 
        className={`w-full transition-transform duration-300 ease-out p-6 shadow-2xl ${visible ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ 
          backgroundColor, 
          borderTopLeftRadius: `${borderRadius}px`,
          borderTopRightRadius: `${borderRadius}px`,
          minHeight: '30vh' 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full mx-auto mb-6" />
        
        <header className="flex items-center justify-between mb-6 relative min-h-[40px]">
          {/* Left Slot */}
          <div className="flex-1 flex items-center justify-start">
            {closePosition === 'left' && (
              <button onClick={onClose} className="p-2 -ml-2 text-zinc-400 hover:text-zinc-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
            {titlePosition === 'left' && title && <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>}
          </div>

          {/* Center Slot */}
          <div className="flex-1 flex items-center justify-center">
            {titlePosition === 'center' && title && <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>}
          </div>

          {/* Right Slot */}
          <div className="flex-1 flex items-center justify-end">
             {titlePosition === 'right' && title && <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>}
             {closePosition === 'right' && (
              <button onClick={onClose} className="p-2 -mr-2 text-zinc-400 hover:text-zinc-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>
        </header>

        <div className="pb-8">
          {children}
        </div>
      </div>
    </div>
  )
}

export function PreviewBottomSheetDemo() {
  const [show, setShow] = useState(false)
  return (
    <div className="flex items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
      <button 
        onClick={() => setShow(true)}
        className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:scale-105 transition-transform"
      >
        Toggle Sheet
      </button>
      <PreviewBottomSheet 
        visible={show} 
        onClose={() => setShow(false)} 
        title="Quick Settings"
        titlePosition="center"
        borderRadius={40}
      >
        <div className="space-y-4">
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-between">
             <span className="font-semibold">Dark Mode</span>
             <div className="w-12 h-6 bg-indigo-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" /></div>
          </div>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-between">
             <span className="font-semibold">Notifications</span>
             <div className="w-12 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full relative"><div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" /></div>
          </div>
        </div>
      </PreviewBottomSheet>
    </div>
  )
}
