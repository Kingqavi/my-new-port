'use client'

import { useState, useRef, MouseEvent } from 'react'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (ref.current) {
      const { clientX, clientY } = e
      const { left, top, width, height } = ref.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      const distance = Math.sqrt(x * x + y * y)
      const maxDistance = 100

      if (distance < maxDistance) {
        const factor = 1 - distance / maxDistance
        setPosition({
          x: x * factor * 0.3,
          y: y * factor * 0.3,
        })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <button
      ref={ref}
      className={`magnetic-target relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </button>
  )
}

