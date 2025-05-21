'use client'

import { useEffect, useState, useRef } from 'react'
import Hero from './components/hero'
import ProjectCard from './components/project-card'

export default function Home() {
  const [animatedStats, setAnimatedStats] = useState({
    darkHostingMembers: 0,
    darkHostingCustomers: 0,
    hyperbyteMembers: 0,
    hyperbyteServers: 0,
    darkhosting2Members: 0,
    darkhosting2Customers: 0
  })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimatedStats(prev => ({
          darkHostingMembers: Math.min(prev.darkHostingMembers + 100, 10000),
          darkHostingCustomers: Math.min(prev.darkHostingCustomers + 2, 200),
          hyperbyteMembers: Math.min(prev.hyperbyteMembers + 27, 2700),
          hyperbyteServers: Math.min(prev.hyperbyteServers + 10, 1000),
          darkhosting2Members: Math.min(prev.darkhosting2Members + 27, 2700),
          darkhosting2Customers: Math.min(prev.darkhosting2Customers + 1, 100)
        }))
      }, 50)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  const projects = [
    {
      title: 'DarkHosting',
      description: 'Premium hosting solution with unparalleled performance and security.',
      stats: [
        { label: 'Discord', value: `${animatedStats.darkHostingMembers.toLocaleString()}+` },
        { label: 'Customers', value: `${animatedStats.darkHostingCustomers}+` },
        { label: 'Service', value: '24/7' },
      ],
      link: '/projects/darkhosting',
      discordLink: 'https://discord.gg/eVncBeq4rr',
      serviceType: 'paid'
    },
    {
      title: 'HyperByte',
      description: 'Free high-performance hosting optimized for reliability.',
      stats: [
        { label: 'Discord', value: `${animatedStats.hyperbyteMembers.toLocaleString()}+` },
        { label: 'Servers', value: `${animatedStats.hyperbyteServers}+` },
        { label: 'Service', value: '24/7' },
      ],
      link: '/projects/hyperbyte',
      discordLink: 'https://discord.gg/aZjV7EDyUj',
      serviceType: 'free'
    },
    {
      title: 'DarkHosting 2.0',
      description: 'Next-generation hosting platform with advanced features.',
      stats: [
        { label: 'Discord', value: `${animatedStats.darkhosting2Members.toLocaleString()}+` },
        { label: 'Customers', value: `${animatedStats.darkhosting2Customers}+` },
        { label: 'Service', value: '24/7' },
      ],
      link: '/projects/darkhosting-2',
      discordLink: 'https://discord.gg/DBetpAm7AM',
      serviceType: 'paid'
    },
  ]

  return (
    <>
      <Hero />
      <div ref={sectionRef} className="py-12 bg-gradient-animated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-gray-400 tracking-wide uppercase animate-glow">
              Our Projects
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight neon-text sm:text-5xl">
              Innovative Hosting Solutions
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
              Explore our cutting-edge hosting platforms designed to meet your needs.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ease-out transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

