'use client'

import { useState, useEffect, useRef } from 'react'
import ProjectCard from '../components/project-card'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
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

  const projects = [
    {
      title: 'DarkHosting',
      description: 'Premium hosting solution with unparalleled performance and security.',
      stats: [
        { label: 'Discord Members', value: '10k+' },
        { label: 'Customers', value: '200+' },
        { label: 'Servers', value: '300+' },
      ],
      link: '/projects/darkhosting',
      discordLink: 'https://discord.gg/eVncBeq4rr',
      serviceType: 'paid'
    },
    {
      title: 'HyperByte',
      description: 'High-performance hosting optimized for speed and reliability.',
      stats: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'Customers', value: '150+' },
        { label: 'Servers', value: '200+' },
      ],
      link: '/projects/hyperbyte',
      discordLink: 'https://discord.gg/aZjV7EDyUj',
      serviceType: 'free'
    },
    {
      title: 'DarkHosting 2.0',
      description: 'Next-generation hosting platform with advanced features and improved scalability.',
      stats: [
        { label: 'Beta Users', value: '500+' },
        { label: 'Performance', value: '2x' },
        { label: 'Launch', value: 'Soon' },
      ],
      link: '/projects/darkhosting-2',
      discordLink: 'https://discord.gg/DBetpAm7AM',
      serviceType: 'paid'
    },
  ]

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Projects</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Innovative Hosting Solutions
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
              Explore our cutting-edge hosting platforms designed to meet your needs and exceed your expectations.
            </p>
          </div>
        </div>
      </div>
      <div ref={sectionRef} className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ease-out transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${selectedProject === project.title ? 'scale-105' : 'hover:scale-102'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setSelectedProject(project.title)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

