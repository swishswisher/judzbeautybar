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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const stored = localStorage.getItem('appointmentForm')
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

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => {
      if (formRef.current) observer.disconnect()
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    const updated = { ...formData, [name]: value }
    setFormData(updated)
    localStorage.setItem('appointmentForm', JSON.stringify(updated))
  }

  const handleServiceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedService = e.target.value
    if (!formData.services.includes(selectedService)) {
      const updatedServices = [...formData.services, selectedService]
      const updated = { ...formData, services: updatedServices }
      setFormData(updated)
      localStorage.setItem('appointmentForm', JSON.stringify(updated))
    }
  }

  const removeService = (serviceToRemove: string) => {
    const updatedServices = formData.services.filter(s => s !== serviceToRemove)
    const updated = { ...formData, services: updatedServices }
    setFormData(updated)
    localStorage.setItem('appointmentForm', JSON.stringify(updated))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hello, I'd like to book an appointment.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service(s):* ${formData.services.join(', ')}`

    localStorage.removeItem('appointmentForm')
    setFormData({ name: '', email: '', phone: '', services: [] })
    toast.success('Booking sent successfully via WhatsApp!')

    const whatsappUrl = `https://wa.me/254705864283?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="book" className="bg-beige py-16 px-6 max-w-4xl mx-auto">
      <Toaster position="top-right" />

      <h2 className="text-3xl font-serif text-greenish mb-8">Book an Appointment</h2>

      <form ref={formRef} id="book-form" onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          value={formData.name}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={formData.email}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter WhatsApp number"
          onChange={handleChange}
          value={formData.phone}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />

        <select
          onChange={handleServiceSelect}
          className="w-full p-3 border border-gray-300 rounded"
          defaultValue=""
        >
          <option value="" disabled>Select Service(s)</option>
          {allServices.map(service => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>

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
