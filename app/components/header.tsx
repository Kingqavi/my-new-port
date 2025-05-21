'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <header className={`glassmorphism sticky top-0 z-50 transition-all duration-300 ${scrollPosition > 50 ? 'py-2' : 'py-4'} ${pathname === '/' ? 'bg-transparent' : 'bg-black/50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold neon-text">
              <span className="animate-pulse-slow">Nikhil</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="glassmorphism rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {['Home', 'Projects', 'Hire Me'].map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              const isActive = pathname === href;
              return (
                <Link 
                  key={item} 
                  href={href}
                  className={`text-base font-medium transition-colors duration-300 relative overflow-hidden group ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              onClick={() => setIsDark(!isDark)}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
            >
              {isDark ? <Sun className="h-5 w-5 animate-spin-slow" /> : <Moon className="h-5 w-5 animate-pulse" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="text-2xl font-bold neon-text">Nikhil</Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {['Home', 'Projects', 'Hire Me'].map((item) => (
                    <Link
                      key={item}
                      href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-base font-medium text-gray-900 hover:text-gray-700 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

