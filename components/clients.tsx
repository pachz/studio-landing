'use client'

import Image from 'next/image'
import UpaymentsLogo from '@/public/images/upayments.svg'
import ShopifyLogo from '@/public/images/shopify.svg'

export default function Clients() {
  return (
    <section className="bg-gray-900">
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="h4 font-cabinet-grotesk text-gray-100">We support Shopify and Ustore — with more coming soon.</h2>
        </div>

        {/* Static client logos */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {/* First logo */}
            <div className="h-24 w-48 bg-gray-800 rounded-2xl flex items-center justify-center group hover:bg-gray-700 transition-colors duration-300 p-4">
              <Image 
                className="opacity-60 group-hover:opacity-100 transform duration-500 ease-in-out max-h-12 w-auto" 
                src={UpaymentsLogo} 
                alt="Upayments Logo" 
                width={120}
                height={60}
              />
            </div>
            
            {/* Second logo */}
            <div className="h-24 w-48 bg-gray-800 rounded-2xl flex items-center justify-center group hover:bg-gray-700 transition-colors duration-300 p-4">
              <Image 
                className="opacity-60 group-hover:opacity-100 transform duration-500 ease-in-out max-h-12 w-auto" 
                src={ShopifyLogo} 
                alt="Shopify Logo" 
                width={120}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}