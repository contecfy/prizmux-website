"use client"

import React, { useState } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface PreviewButtonProps {
  title: string
  variant?: 'filled' | 'outline'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  isLoading?: boolean
  showShadow?: boolean
  backgroundColor?: string
  textColor?: string
  borderRadius?: number
  shadowColor?: string
  pressedBackgroundColor?: string
  onClick?: () => void
}

export function PreviewButton({
  title,
  variant = 'filled',
  size = 'medium',
  disabled = false,
  isLoading = false,
  showShadow = true,
  backgroundColor,
  textColor,
  borderRadius = 8,
  shadowColor,
  pressedBackgroundColor,
  onClick,
}: PreviewButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const sizeStyles = {
    small: 'px-3 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  }

  const baseStyles = cn(
    'relative inline-flex items-center justify-center font-semibold transition-all duration-100 active:scale-95',
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed',
    isLoading && 'cursor-wait'
  )

  const variantStyles = variant === 'filled' 
    ? {
        backgroundColor: isPressed && pressedBackgroundColor ? pressedBackgroundColor : (backgroundColor || '#6366F1'),
        color: textColor || '#FFFFFF',
        boxShadow: showShadow ? `0 4px 14px 0 ${shadowColor || 'rgba(99, 102, 241, 0.39)'}` : 'none',
      }
    : {
        backgroundColor: isPressed && pressedBackgroundColor ? pressedBackgroundColor : 'transparent',
        border: `2px solid ${backgroundColor || '#6366F1'}`,
        color: textColor || backgroundColor || '#6366F1',
      }

  return (
    <button
      disabled={disabled || isLoading}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
      className={baseStyles}
      style={{
        ...variantStyles,
        borderRadius: `${borderRadius}px`,
      }}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        title
      )}
    </button>
  )
}
