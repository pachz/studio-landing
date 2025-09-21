'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Illustration from '@/public/images/features-illustration.svg'
import GrowSales from '@/public/images/GrowـSales.png'
import Setup from '@/public/images/setup.png'
import CutCosts from '@/public/images/CutـCosts.png'
import SaveTime from '@/public/images/save_time.png'
import Icon01 from '@/public/images/icon-01.svg'
import Icon02 from '@/public/images/icon-02.svg'
import Icon03 from '@/public/images/icon-03.svg'
import Icon04 from '@/public/images/icon-04.svg'

// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Navigation])

export default function Features01() {

  useEffect(() => {
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  return (
    <section className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-blue-600 -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image className="max-w-none" src={Illustration} alt="Illsutration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-16">
            <h2 className="h2 font-cabinet-grotesk text-white">Why Us</h2>
            <p className="text-xl text-white">Your shortcut to building a mobile app — faster, easier, and smarter.</p>
          </div>

          {/* Carousel */}
          <div className="pb-12 md:pb-16">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="carousel swiper-container max-w-sm mx-auto sm:max-w-none">
              <div className="swiper-wrapper">
                {/* Carousel items */}
                <div className="swiper-slide max-w-[446px] h-auto">
                  {/* Image */}
                  <Image
                    className="w-full aspect-4/3 object-cover h-full rounded-lg border border-gray-200"
                    src={SaveTime}                    width="446"
                    height="335"
                    alt="Grow Sales"
                  />
                </div>
                <div className="swiper-slide max-w-[446px] h-auto">
                  {/* Image */}
                  <Image
                    className="w-full aspect-4/3 object-cover h-full rounded-lg border border-gray-200"
                    src={Setup}
                    width="446"
                    height="335"
                    alt="Setup"
                  />
                </div>
                <div className="swiper-slide max-w-[446px] h-auto">
                  {/* Image */}
                  <Image
                    className="w-full aspect-4/3 object-cover h-full rounded-lg border border-gray-200"
                    src={CutCosts}
                    width="446"
                    height="335"
                    alt="Cut Costs"
                  />
                </div>
                <div className="swiper-slide max-w-[446px] h-auto">
                  {/* Image */}
                  <Image
                    className="w-full aspect-4/3 object-cover h-full rounded-lg border border-gray-200"
                    
                    src={GrowSales}

                    width="446"
                    height="335"
                    alt="Save Time"
                  />
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex mt-12 space-x-3 justify-end">
              <button className="carousel-prev relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-gray-900">
                <span className="sr-only">Previous</span>
                <svg
                  className="fill-blue-500 group-hover:fill-white transition duration-150 ease-in-out"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m3.914 5 3.5-3.5L6 .086 1.086 5H1v.086L.086 6 1 6.914V7h.086L6 11.914 7.414 10.5 3.914 7H13V5z" />
                </svg>
              </button>
              <button className="carousel-next relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-gray-900">
                <span className="sr-only">Next</span>
                <svg
                  className="fill-blue-500 group-hover:fill-white transition duration-150 ease-in-out"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m9.086 5-3.5-3.5L7 .086 11.914 5H12v.086l.914.914-.914.914V7h-.086L7 11.914 5.586 10.5l3.5-3.5H0V5z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="max-w-sm mx-auto grid sm:grid-cols-2 sm:max-w-3xl lg:grid-cols-4 lg:max-w-none items-start">
            {/* #1 */}
            <div
              className="relative p-5 before:opacity-0 hover:before:opacity-20 before:absolute before:inset-0 before:rounded-sm before:bg-linear-to-tr before:from-white before:to-white/25 before:shadow-xl before:transition-all before:duration-150 before:ease-in-out"
              data-aos="fade-up"
            >
              <Image className="mb-3" src={Icon01} alt="Icon 01" />
              <h3 className="font-cabinet-grotesk font-bold text-lg text-white">Save Time</h3>
              <div className="text-white text-opacity-80">Go from idea to live app in days instead of months, so you can focus on growing your business.</div>
            </div>

            {/* #2 */}
            <div
              className="relative p-5 before:opacity-0 hover:before:opacity-20 before:absolute before:inset-0 before:rounded-sm before:bg-linear-to-tr before:from-white before:to-white/25 before:shadow-xl before:transition-all before:duration-150 before:ease-in-out"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image className="mb-3" src={Icon02} alt="Icon 02" />
              <h3 className="font-cabinet-grotesk font-bold text-lg text-white">Cut Costs</h3>
              <div className="text-white text-opacity-80">Avoid expensive developers and agencies by building your app yourself with no code required.</div>
            </div>

            {/* #3 */}
            <div
              className="relative p-5 before:opacity-0 hover:before:opacity-20 before:absolute before:inset-0 before:rounded-sm before:bg-linear-to-tr before:from-white before:to-white/25 before:shadow-xl before:transition-all before:duration-150 before:ease-in-out"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image className="mb-3" src={Icon03} alt="Icon 03" />
              <h3 className="font-cabinet-grotesk font-bold text-lg text-white">Easy Setup</h3>
              <div className="text-white text-opacity-80">Simply connect your store and use our drag-and-drop tools to design your app without hassle.</div>
            </div>

            {/* #4 */}
            <div
              className="relative p-5 before:opacity-0 hover:before:opacity-20 before:absolute before:inset-0 before:rounded-sm before:bg-linear-to-tr before:from-white before:to-white/25 before:shadow-xl before:transition-all before:duration-150 before:ease-in-out"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Image className="mb-3" src={Icon04} alt="Icon 04" />
              <h3 className="font-cabinet-grotesk font-bold text-lg text-white">Grow Sales</h3>
              <div className="text-white text-opacity-80">Reach more customers on mobile, send push notifications, and boost your sales effortlessly.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}