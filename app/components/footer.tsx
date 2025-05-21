import { Github, Linkedin, Mail, Twitter, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:nikhil@example.com' },
    { name: 'Website', icon: Globe, href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold neon-text">
              <span className="animate-pulse-slow">Nikhil</span>
            </Link>
            <p className="text-gray-300 text-base">
              Empowering your digital presence with cutting-edge hosting solutions and web development expertise.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  {['Hosting', 'Web Development', 'Cloud Services', 'Security'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  {['Pricing', 'Documentation', 'Guides', 'API Status'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {['About', 'Blog', 'Jobs', 'Press'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {['Privacy', 'Terms', 'Cookie Policy', 'Trademark Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Nikhil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

