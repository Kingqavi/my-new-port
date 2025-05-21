'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Users, Server, Clock } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  stats: { label: string; value: string }[]
  link: string
  discordLink: string
  serviceType: string
}

export default function ProjectCard({ 
  title, 
  description, 
  stats, 
  link, 
  discordLink,
  serviceType 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setRotation({
          x: (y - rect.height / 2) / 20,
          y: (rect.width / 2 - x) / 20,
        })
      }
    }

    const card = cardRef.current
    card?.addEventListener('mousemove', handleMouseMove)

    return () => {
      card?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div 
        ref={cardRef}
        className="glassmorphism overflow-hidden transition-all duration-300 transform hover:scale-105 card-3d"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setRotation({ x: 0, y: 0 })
        }}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <motion.div 
          className="p-6"
          initial={false}
          animate={isHovered ? { y: 0 } : { y: 0 }}
        >
          <div className="flex items-center justify-between">
            <h3 className={`text-2xl font-bold ${isHovered ? 'neon-text' : 'text-gradient'}`}>
              {title}
            </h3>
            <motion.div
              className={`px-3 py-1 rounded-full text-sm ${
                serviceType === 'paid' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-blue-500/20 text-blue-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {serviceType === 'paid' ? 'Premium' : 'Free'}
            </motion.div>
          </div>
          <p className="mt-2 text-gray-400">{description}</p>
          
          <div className="mt-6 grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-gradient animate-pulse-slow">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                href={discordLink} 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Users className="h-4 w-4" />
                <span>Join Discord</span>
              </Link>
            </motion.div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">24/7 Service</span>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-800">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 text-sm font-medium hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-gradient">Join Discord</span>
                <ArrowUpRight className={`h-4 w-4 transition-transform duration-300 ${
                  isHovered ? 'transform translate-x-1 -translate-y-1' : ''
                }`} />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

