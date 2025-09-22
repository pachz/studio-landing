'use client'

import Image from 'next/image'
import Link from 'next/link'
import Illustration from '@/public/images/footer-illustration.svg'
import ApplixLogo from '@/public/images/applix_logo.svg'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <footer className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-blue-600 -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image className="max-w-none" src={Illustration} alt="Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main content */}
        <div className="py-12 border-t border-blue-500">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo */}
            <Link className="block group" href="/" aria-label="Applix">
              <Image 
                src={ApplixLogo} 
                alt="Applix Logo" 
                width={200} 
                height={60}
                className="h-12 w-auto group-hover:opacity-80 transition duration-150 ease-in-out"
              />
            </Link>

            {/* Simple navigation */}
            <nav className="flex flex-wrap justify-center gap-8">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-blue-300 hover:text-white transition duration-150 ease-in-out"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('why-us')}
                className="text-blue-300 hover:text-white transition duration-150 ease-in-out"
              >
                Why Us
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-blue-300 hover:text-white transition duration-150 ease-in-out"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-blue-300 hover:text-white transition duration-150 ease-in-out"
              >
                FAQ
              </button>
            </nav>

            {/* Copyright */}
            <div className="text-sm text-blue-300">
              © Applix. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
