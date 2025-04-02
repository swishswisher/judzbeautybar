'use client'

import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

const services = [
  {
    title: 'Manicure',
    description: 'Classic, hardware, gel polish, nail care',
    price: 'Kshs. 500',
    image: '/images/service-manicure.jpg',
  },
  {
    title: 'Pedicure',
    description: 'Spa pedicure, callus treatment, nail polish',
    price: 'Kshs. 500',
    image: '/images/service-pedicure.jpg',
  },
  {
    title: 'Bridal Makeup',
    description: 'Flawless wedding-day coverage & trial',
    price: 'Kshs. 500',
    image: '/images/service-makeup.jpg',
  },
]

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const goToIndex = (index: number) => {
    const newIndex = (index + services.length) % services.length
    setCurrentIndex(newIndex)
  }

  const goNext = () => goToIndex(currentIndex + 1)
  const goPrev = () => goToIndex(currentIndex - 1)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goNext()
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentIndex])

  const handleSelect = (service: string) => {
    const stored = localStorage.getItem('appointmentForm')
    let data = stored
      ? JSON.parse(stored)
      : { name: '', email: '', phone: '', services: [] }

    if (!data.services.includes(service)) {
      data.services.push(service)
    }

    localStorage.setItem('appointmentForm', JSON.stringify(data))

    const form = document.getElementById('book-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="bg-beige py-16 px-6 max-w-5xl mx-auto relative text-center">
      <h2 className="text-3xl font-serif text-greenish mb-8">Our Services</h2>

      <div className="relative transition-all duration-500">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="w-full h-64 relative mb-4 rounded-md overflow-hidden">
            <Image
              src={services[currentIndex].image}
              alt={services[currentIndex].title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-greenish mb-2">{services[currentIndex].title}</h3>
          <p className="text-gray-700 mb-4">{services[currentIndex].description}</p>
          <p className="text-lg font-semibold text-[#c46f6b] mb-4">{services[currentIndex].price}</p>
          <button
            onClick={() => handleSelect(services[currentIndex].title)}
            className="bg-[#c46f6b] text-white px-6 py-2 rounded-md hover:opacity-90 transition cursor-pointer"
          >
            Select Service
          </button>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-4 mt-6 pr-2">
          <button
            onClick={goPrev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-greenish hover:bg-[#c46f6b] hover:text-white transition"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={goNext}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-greenish hover:bg-[#c46f6b] hover:text-white transition"
          >
            <FaChevronRight size={18} />
          </button>
        </div>


        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-4">
          {services.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex ? 'bg-[#c46f6b]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
