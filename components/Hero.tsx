'use client'

import Image from 'next/image'
import SocialIcons from './SocialIcons'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <SocialIcons />

      {/* Mobile Background Image */}
      {isMobile && (
        <Image
          src="/images/hero-face.jpg"
          alt="Bridal makeup"
          fill
          priority
          className="object-cover object-bottom z-0"
        />
      )}

      <div className="flex flex-col md:flex-row h-full max-w-[1440px] mx-auto relative z-10">
        {/* Content Area */}
        <div
          className={`
            w-full md:w-1/2 flex flex-col justify-center
            ${isMobile ? 'absolute bottom-0 left-0 right-0 items-center px-4 pb-0' : 'items-center md:items-start px-6 text-left'}
          `}
        >
          {/* Title only on desktop */}
          {!isMobile && (
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
              JUDZ BEAUTY BAR
            </h1>
          )}

          {/* Glass Card */}
          <div className={`
            ${isMobile ? 'bg-white/10 backdrop-blur-sm w-full max-w-md text-center text-white p-6 pt-4 pb-6 rounded-t-xl' : ''}
          `}>
            <p className={`${isMobile ? 'text-white' : 'text-gray-700'} mb-4`}>
              Our beauty bar successfully provides quality services in the field of beauty and bridal makeup, carefully caring for each client.
            </p>
            <Link href="#services">
              <button className="bg-[#c46f6b] text-white px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition w-full cursor-pointer">
                Get a Service
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop-only image */}
        {!isMobile && (
          <div className="w-1/2 h-full">
            <Image
              src="/images/hero-face.jpg"
              alt="Bridal makeup"
              width={800}
              height={900}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
