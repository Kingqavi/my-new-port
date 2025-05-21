'use client'

import { useState, useEffect, useRef } from 'react'
import Layout from '../components/layout'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function HiringPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
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

  const contactMethods = [
    { icon: Mail, title: 'Email', description: 'Drop me a line anytime. I\'ll get back to you as soon as possible.', action: 'nikhil@example.com', link: 'mailto:nikhil@example.com' },
    { icon: Phone, title: 'Phone', description: 'Feel free to call me during business hours for urgent matters.', action: '+1 (234) 567-890', link: 'tel:+1234567890' },
    { icon: MapPin, title: 'Location', description: 'Based in India, but available for remote work worldwide.', action: 'View on map', link: '#' },
  ]

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Let's Work Together</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              I'm always open to new opportunities and collaborations. With my expertise in web development and hosting solutions, I can help your business grow and succeed.
            </p>
          </div>
          <div ref={sectionRef} className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className={`flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-all duration-1000 ease-out transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  } ${hoveredCard === method.title ? 'scale-105' : 'hover:scale-102'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredCard(method.title)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                    <div className={`absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2 transition-all duration-300 ${hoveredCard === method.title ? 'scale-110' : ''}`}>
                      <method.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">{method.title}</h3>
                    <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
                      {method.description}
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-bl-2xl rounded-br-2xl md:px-8">
                    <a href={method.link} className="text-base font-medium text-indigo-700 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-300">
                      {method.action}<span aria-hidden="true" className="ml-1 transition-transform duration-300 transform group-hover:translate-x-1">&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

