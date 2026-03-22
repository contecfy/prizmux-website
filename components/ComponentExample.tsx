"use client"

import React, { useState } from 'react'
import { PreviewButton } from './previews/PreviewButton'
import { PreviewAlertDemo } from './previews/PreviewAlert'
import { PreviewFAB } from './previews/PreviewFAB'
import { PreviewToastDemo } from './previews/PreviewToast'
import { PreviewBottomSheetDemo } from './previews/PreviewBottomSheet'
import { PreviewHeader } from './previews/PreviewHeader'
import { PreviewPhoneInput } from './previews/PreviewPhoneInput'
import { PreviewCardDemo } from './previews/PreviewCard'
import { PreviewEmptyState } from './previews/PreviewEmptyState'
import { PreviewImagePreview } from './previews/PreviewImagePreview'

import { DeviceMockup } from './DeviceMockup'

interface ComponentExampleProps {
  name: string
  code: string
  previewProps?: any
}

const PREVIEWS: Record<string, any> = {
  Button: (props: any) => <div className="flex items-center justify-center h-full"><PreviewButton title="Press Me" {...props} /></div>,
  Alert: () => <div className="h-full w-full"><PreviewAlertDemo /></div>,
  FAB: (props: any) => <div className="h-full w-full relative"><PreviewFAB label="New Task" {...props} /></div>,
  Toast: () => <div className="h-full w-full"><PreviewToastDemo /></div>,
  BottomSheet: () => <div className="h-full w-full"><PreviewBottomSheetDemo /></div>,
  Header: (props: any) => <div className="h-full w-full"><PreviewHeader title="Home Screen" {...props} /></div>,
  PhoneInput: (props: any) => <div className="flex items-center justify-center h-full"><PreviewPhoneInput {...props} /></div>,
  Card: () => <div className="flex items-center justify-center h-full p-4"><PreviewCardDemo /></div>,
  EmptyState: (props: any) => <div className="flex items-center justify-center h-full"><PreviewEmptyState title="No Data Found" description="Try adjusting your filters to find what you're looking for." {...props} /></div>,
  ImagePreview: (props: any) => <div className="h-full w-full"><PreviewImagePreview {...props} /></div>,
}

export function ComponentExample({ name, code, previewProps }: ComponentExampleProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  const Preview = PREVIEWS[name] || (() => <div className="p-8 text-zinc-500">Preview not available</div>)

  return (
    <div className="my-8 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-black shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="flex items-center gap-1 p-1 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-lg">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'preview' ? 'bg-white dark:bg-zinc-900 text-black dark:text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
          >
            UI Sample
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'code' ? 'bg-white dark:bg-zinc-900 text-black dark:text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
          >
            Code
          </button>
        </div>
        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            Interactive Preview
        </div>
      </div>

      <div className="relative">
        {activeTab === 'preview' ? (
          <div className="min-h-[600px] flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-900/10 py-12">
            <DeviceMockup>
              <Preview {...previewProps} />
            </DeviceMockup>
          </div>
        ) : (
          <div className="overflow-hidden bg-[#fafafa] dark:bg-[#0d1117] p-6 text-sm font-mono overflow-auto max-h-[500px]">
            <pre className="text-zinc-900 dark:text-zinc-100 leading-relaxed">
              <code>{(code || "").trim()}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
