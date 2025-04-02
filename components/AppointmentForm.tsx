'use client'

import { useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const allServices = ['Manicure', 'Pedicure', 'Bridal Makeup']

const AppointmentForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
  })

  // Load prefilled form from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('appointmentData')
    if (stored) setFormData(JSON.parse(stored))
  }, [])

  // Watch when form enters view and update services
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const stored = localStorage.getItem('appointmentData')
          if (stored) {
            const updated = JSON.parse(stored)
            setFormData((prev) => ({
              ...prev,
              services: updated.services || [],
            }))
          }
        }
      },
      { threshold: 0.5 }
    )

    const current = formRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    const updated = { ...formData, [name]: value }
    setFormData(updated)
    localStorage.setItem('appointmentData', JSON.stringify(updated))
  }

  const handleServiceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedService = e.target.value
    if (!formData.services.includes(selectedService)) {
      const updatedServices = [...formData.services, selectedService]
      const updated = { ...formData, services: updatedServices }
      setFormData(updated)
      localStorage.setItem('appointmentData', JSON.stringify(updated))
    }
  }

  const removeService = (serviceToRemove: string) => {
    const updatedServices = formData.services.filter(s => s !== serviceToRemove)
    const updated = { ...formData, services: updatedServices }
    setFormData(updated)
    localStorage.setItem('appointmentData', JSON.stringify(updated))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, phone, services } = formData
    if (!name || !email || !phone || services.length === 0) {
      toast.error('Please fill out all fields and select at least one service.')
      return
    }

    const message = `Hello, I'd like to book an appointment.\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📞 *Phone:* ${phone}\n🛎 *Services:*\n${services.map(service => `   ✅ ${service}`).join('\n')}`

    localStorage.removeItem('appointmentData')
    setFormData({ name: '', email: '', phone: '', services: [] })

    toast.success('Booking sent successfully via WhatsApp!')

    const whatsappUrl = `https://wa.me/254705864283?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="book" className="bg-beige py-16 px-6 max-w-4xl mx-auto">
      <Toaster position="top-right" />
      <h2 className="text-3xl font-serif text-greenish mb-8">Book an Appointment</h2>

      <form ref={formRef} onSubmit={handleSubmit} id="book-form" className="max-w-md mx-auto space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter WhatsApp number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />

        {/* Custom Select */}
        <select
          onChange={handleServiceSelect}
          value=""
          className="w-full p-3 border border-gray-300 rounded"
        >
          <option value="" disabled>Select Service</option>
          {allServices.map(service => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>

        {/* Selected Service Pills */}
        <div className="flex flex-wrap gap-2">
          {formData.services.map(service => (
            <span
              key={service}
              className="bg-[#c46f6b] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {service}
              <button
                type="button"
                onClick={() => removeService(service)}
                className="text-white hover:text-gray-200"
              >
                &times;
              </button>
            </span>
          ))}
        </div>

        <button
          type="submit"
          className="bg-[#c46f6b] text-white px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition w-full cursor-pointer"
        >
          Book Now
        </button>
      </form>
    </section>
  )
}

export default AppointmentForm
