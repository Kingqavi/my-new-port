'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import ParallaxWrapper from './parallax-wrapper'
import MagneticButton from './magnetic-button'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      <ParallaxWrapper speed={0.5}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-animated opacity-30" />
        </div>
      </ParallaxWrapper>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center"
      >
        <div className="text-center lg:text-left lg:w-1/2">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span className="block xl:inline neon-text">Hi, I'm Nikhil</span>{' '}
            <span className="block text-gradient xl:inline animate-pulse-slow">Web Developer & Entrepreneur</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            Passionate about creating innovative web solutions and building successful hosting platforms. Let's bring your ideas to life!
          </motion.p>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
          >
            <div className="rounded-md shadow">
              <MagneticButton>
                <a
                  href="/hire"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#00ff88] to-[#00ccff] hover:from-[#00ccff] hover:to-[#00ff88] md:py-4 md:text-lg md:px-10 transition-all duration-300"
                >
                  Hire Me
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5 animate-bounce-slow" aria-hidden="true" />
                </a>
              </MagneticButton>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <MagneticButton>
                <a
                  href="/projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md glassmorphism hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                >
                  View Projects
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 lg:mt-0 lg:w-1/2"
        >
          <ParallaxWrapper speed={0.2}>
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-full">
              <Image
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl animate-levitate"
                src="/placeholder.svg?height=600&width=800"
                alt="Nikhil working on a computer"
                layout="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/50 to-[#00ccff]/50 mix-blend-multiply opacity-50 rounded-lg" />
            </div>
          </ParallaxWrapper>
        </motion.div>
      </motion.div>
    </div>
  )
}

