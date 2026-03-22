"use client"

import React, { useState } from 'react'

interface PreviewImagePreviewProps {
  title?: string
}

export function PreviewImagePreview({ title }: PreviewImagePreviewProps) {
  const [show, setShow] = useState(false)

  return (
    <div className="p-8 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900/50 w-full rounded-2xl">
      <div 
        className="group relative w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
        onClick={() => setShow(true)}
      >
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" 
          alt="Preview Item"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-white/90 px-3 py-1.5 rounded-full text-xs font-bold text-black shadow-sm">View Fullscreen</span>
        </div>
      </div>

      {show && (
        <div 
            className="fixed inset-0 z-[100] bg-black animate-in fade-in duration-300 flex flex-col"
            onClick={() => setShow(false)}
        >
          <header className="p-6 flex items-center justify-between z-10">
             <h4 className="text-white font-bold">{title || "1 of 12"}</h4>
             <button onClick={() => setShow(false)} className="text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </header>
          <div className="flex-1 flex items-center justify-center p-4">
             <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                className="max-h-[80vh] max-w-full rounded-lg animate-in zoom-in-95"
                alt="Fullscreen"
             />
          </div>
          <footer className="p-12 flex justify-center gap-4 z-10">
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></div>
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></div>
          </footer>
        </div>
      )}
    </div>
  )
}
