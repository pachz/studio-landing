'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setMobileMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block group" href="/" aria-label="Applix">
              <Image
                src="/images/applix_logo.svg"
                alt="Applix Logo"
                width={120}
                height={33}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex grow">
            {/* Navigation links */}
            <ul className="flex grow justify-center space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="font-cabinet-grotesk text-sm font-medium text-white hover:text-blue-300 transition-colors duration-150"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-us')}
                  className="font-cabinet-grotesk text-sm font-medium text-white hover:text-blue-300 transition-colors duration-150"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="font-cabinet-grotesk text-sm font-medium text-white hover:text-blue-300 transition-colors duration-150"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="font-cabinet-grotesk text-sm font-medium text-white hover:text-blue-300 transition-colors duration-150"
                >
                  FAQ
                </button>
              </li>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex items-center">
              <li>
                <Link className="font-cabinet-grotesk text-sm font-bold text-white underline hover:no-underline flex items-center" href="/signin">
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-blue-300 transition-colors duration-150"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 bg-opacity-95 rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-gray-800 rounded-md transition-colors duration-150"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-gray-800 rounded-md transition-colors duration-150"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-gray-800 rounded-md transition-colors duration-150"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-gray-800 rounded-md transition-colors duration-150"
              >
                FAQ
              </button>
              <div className="border-t border-gray-700 pt-2 mt-2">
                <Link
                  href="/signin"
                  className="block px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-gray-800 rounded-md transition-colors duration-150"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}