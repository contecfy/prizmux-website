"use client"

import React, { useState } from 'react'

interface PreviewPhoneInputProps {
  label?: string
  placeholder?: string
  backgroundColor?: string
}

export function PreviewPhoneInput({
  label = "Phone Number",
  placeholder = "Enter phone number",
  backgroundColor = "#F9FAFB",
}: PreviewPhoneInputProps) {
  return (
    <div className="w-full max-w-sm p-6 bg-white dark:bg-zinc-950 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
      {label && <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">{label}</label>}
      <div 
        className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all"
        style={{ backgroundColor }}
      >
        <button className="flex items-center gap-2 px-4 py-3 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <span className="text-lg">🇺🇬</span>
          <span className="text-sm font-bold text-zinc-600 dark:text-zinc-400">+256</span>
          <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        </button>
        <input 
          type="tel" 
          placeholder={placeholder}
          className="flex-1 px-4 py-3 bg-transparent outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
        />
      </div>
      <p className="mt-2 text-[10px] text-zinc-400 uppercase tracking-widest font-medium">Auto-formatted by Prizmux</p>
    </div>
  )
}
