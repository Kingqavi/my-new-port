'use client'

import './globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import Background from './components/background'
import Header from './components/header'
import Footer from './components/footer'
import CustomCursor from './components/custom-cursor'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Background />
        <div className="relative z-10 min-h-screen flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-grow flex flex-col"
            >
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </motion.div>
          </AnimatePresence>
        </div>
        <CustomCursor />
      </body>
    </html>
  )
}

