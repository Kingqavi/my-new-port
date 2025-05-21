'use client'

import React, { useRef, useEffect, ReactNode } from 'react'

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
}

export default function ParallaxWrapper({ children, speed = 0.5 }: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current
      if (element) {
        const scrollTop = window.pageYOffset
        element.style.transform = `translateY(${scrollTop * speed}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} className="parallax">
      {children}
    </div>
  )
}

