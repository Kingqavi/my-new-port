'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Code2, Palette, Settings, MessageSquarePlus, Globe, CircleIcon as AdCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Web Development',
    icon: Globe,
    description: 'Custom websites built with modern technologies',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning']
  },
  {
    title: 'Panel Themes',
    icon: Palette,
    description: 'Beautiful and functional panel themes',
    features: ['Custom Branding', 'Dark/Light Modes', 'User-friendly Interface']
  },
  {
    title: 'Addon Creation',
    icon: Code2,
    description: 'Custom addons for your platform',
    features: ['Integration APIs', 'Custom Features', 'Performance Optimized']
  },
  {
    title: 'Ads Implementation',
    icon: AdCircle,
    description: 'Strategic ad placement and integration',
    features: ['Website Ads', 'Panel Integration', 'Revenue Optimization']
  }
]

const steps = [
  {
    title: 'Join Discord',
    description: 'Click the button below to join our Discord server',
    icon: MessageSquarePlus,
    action: 'Join Server',
    link: 'https://discord.gg/DBetpAm7AM'
  },
  {
    title: 'Create Ticket',
    description: 'Go to the create ticket section in our Discord server',
    icon: Settings,
    action: 'How to Create Ticket',
    link: '#ticket-guide'
  },
  {
    title: 'Discuss Project',
    description: 'Share your requirements and get a custom quote',
    icon: CheckCircle2,
    action: 'View Services',
    link: '#services'
  }
]

export default function HirePage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-20 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "95vh" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="text-white font-semibold text-5xl mb-8">
                  Let's Build Something <span className="text-gradient">Amazing</span> Together
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  From web development to panel themes, I'm here to help you create exceptional digital experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Steps Section */}
      <section className="pb-20 bg-black/30 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
              >
                <div className="relative flex flex-col min-w-0 break-words bg-black/40 w-full mb-8 shadow-lg rounded-lg glassmorphism hover:transform hover:scale-105 transition-all duration-300">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h6 className="text-xl text-white font-semibold">{step.title}</h6>
                    <p className="mt-2 mb-4 text-gray-300">
                      {step.description}
                    </p>
                    <Link
                      href={step.link}
                      target={step.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      {step.action}
                      <ArrowRight className="ml-2 -mr-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Section */}
          <div className="flex flex-wrap items-center mt-32" id="services">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
              >
                <Code2 className="w-8 h-8 text-purple-500" />
              </motion.div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Professional Services
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-300">
                Choose from a range of professional services tailored to your needs. Each service is crafted to deliver maximum value and quality.
              </p>
            </div>

            <div className="w-full md:w-7/12 px-4 mr-auto ml-auto mt-16 md:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 * index, duration: 0.8 }}
                    className="bg-black/40 rounded-lg p-6 glassmorphism hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <service.icon className="w-6 h-6 text-purple-400 mr-3" />
                      <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-400">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Guide Section */}
      <section className="py-20 bg-black/50" id="ticket-guide">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center"
          >
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto">
              <div className="text-white">
                <h3 className="text-3xl font-semibold mb-6">How to Create a Ticket</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        1
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">Join the Server</h4>
                      <p className="text-gray-300">Click the Discord invite link and join our server</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        2
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">Find Ticket Section</h4>
                      <p className="text-gray-300">Navigate to the #create-ticket channel</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        3
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">Create Your Ticket</h4>
                      <p className="text-gray-300">Click the ticket creation button and follow the prompts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto mt-8 lg:mt-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Discord Ticket Creation Guide"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-lg mix-blend-multiply" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

