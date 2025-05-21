'use client'

import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsHidden(false)
    }

    const handleMouseLeave = () => {
      setIsHidden(true)
    }

    const handleMouseEnter = () => {
      setIsHidden(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (isHidden) return null

  return (
    <div
      id="custom-cursor"
      className="mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        id="cursor-outer"
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
          isPointer ? 'scale-150' : ''
        }`}
      />
      <div
        id="cursor-inner"
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
          isPointer ? 'scale-75' : ''
        }`}
      />
    </div>
  )
}

