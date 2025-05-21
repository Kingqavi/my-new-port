'use client'

import { useState, useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import CustomCursor from './custom-cursor'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-animated relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }}
      />
      <Header />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
      <CustomCursor />
    </div>
  )
}

