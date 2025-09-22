'use client'

import Image from 'next/image'
import { useState } from 'react'
import FeatImage from '@/public/images/features-02.png'

export default function Features02() {

  const [category, setCategory] = useState<string>('1')

  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-cabinet-grotesk">Features</h2>
            <p className="text-lg text-gray-500 mt-4">Everything you need to launch, customize, and grow your mobile app with ease.</p>
          </div>

          <div>
            {/* Category buttons */}
            <div className="pb-12 md:pb-20">
              <div className="flex flex-wrap justify-center -m-1.5">
                <button
                  className={`btn-sm m-1.5 h-8 shadow-sm ${category === '1' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('1')}
                >
                  Drag & Drop
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow-sm ${category === '2' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('2')}
                >
                  Brand Ready
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow-sm ${category === '3' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('3')}
                >
                  Live Preview
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow-sm ${category === '4' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('4')}
                >
                  Fast Checkout
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow-sm ${category === '5' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('5')}
                >
                  Notifications
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow-sm ${category === '6' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('6')}
                >
                  Multi-Language
                </button>
              </div>
            </div>

            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="fade-up">
                {/* Content #1 - Drag & Drop */}
                <div className={`${category !== '1' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Drag & Drop</h3>
                  <p className="text-lg text-gray-500 mb-8">
                    Build your app visually with a simple, no-code editor.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Intuitive Design</div>
                        <div className="text-gray-500">
                          Arrange elements exactly where you want them.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">No Coding</div>
                        <div className="text-gray-500">
                          Focus on creativity, not technical details.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Faster Launch</div>
                        <div className="text-gray-500">
                          Get your app ready in record time.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #2 - Brand Ready */}
                <div className={`${category !== '2' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Brand Ready</h3>
                  <p className="text-lg text-gray-500 mb-8">
                    Make your app look and feel like your store.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Custom Colors</div>
                        <div className="text-gray-500">
                          Match your brand identity.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Logo & Fonts</div>
                        <div className="text-gray-500">
                          Upload and personalize in minutes.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Consistent Style</div>
                        <div className="text-gray-500">
                          Keep the same look across web and app.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #3 - Live Preview */}
                <div className={`${category !== '3' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Live Preview</h3>
                  <p className="text-lg text-gray-500 mb-8">
                    See updates instantly as you design your app.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Real-Time View</div>
                        <div className="text-gray-500">
                          Check changes on any device instantly.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Error-Free</div>
                        <div className="text-gray-500">
                          Spot mistakes before you publish.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Confidence</div>
                        <div className="text-gray-500">
                          Launch knowing your app looks perfect.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #4 - Fast Checkout */}
                <div className={`${category !== '4' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Fast Checkout</h3>
                  <p className="text-lg text-gray-500 mb-8">
                    Deliver a smooth, secure shopping experience.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">One-Click Pay</div>
                        <div className="text-gray-500">
                          Simplify purchases for customers.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Secure Process</div>
                        <div className="text-gray-500">
                          Built with trusted payment systems.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Cart Sync</div>
                        <div className="text-gray-500">
                          Keep cart data synced with your store.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #5 - Notifications */}
                <div className={`${category !== '5' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Notifications</h3>
                  <p className="text-lg text-gray-500 mb-8">
                    Stay connected and drive repeat sales.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Push Alerts</div>
                        <div className="text-gray-500">
                          Send promotions directly to users.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Customer Retention</div>
                        <div className="text-gray-500">
                          Remind them to come back.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Instant Reach</div>
                        <div className="text-gray-500">
                          Deliver updates in real-time.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Content #6 - Multi-Language */}
                <div className={`${category !== '6' && 'hidden'}`}>
                  <h3 className="h3 font-cabinet-grotesk mb-3">Multi-Language</h3>
                  <p className="text-lg text-gray-500 mb-8">
                    Serve your customers in Arabic and English.
                  </p>
                  <ul className="inline-flex flex-col space-y-6">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Arabic Support</div>
                        <div className="text-gray-500">
                          Right-to-left layout ready.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">English Support</div>
                        <div className="text-gray-500">
                          Seamless global compatibility.
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <div>
                        <div className="font-cabinet-grotesk font-bold text-lg mb-1">Switch Easily</div>
                        <div className="text-gray-500">
                          Let users choose their language.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <Image className="mx-auto md:max-w-none rounded-lg" src={FeatImage} width="540" height="405" alt="Features" />
                {/* <Image className="mx-auto md:max-w-none border border-gray-200 rounded-lg" src={FeatImage} width="540" height="405" alt="Features" /> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}