'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const servicesList = ['Manicure', 'Pedicure', 'Bridal Makeup']

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: [] as string[],
  })

  useEffect(() => {
    const savedData = localStorage.getItem('appointmentData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('appointmentData', JSON.stringify(formData))
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleServiceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, opt => opt.value)
    setFormData(prev => ({ ...prev, services: selected }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, phone, services } = formData

    if (!name || !email || !phone || services.length === 0) {
      toast.error('Please fill all fields and select at least one service.')
      return
    }

    const message = `Hello, I'd like to book an appointment.%0A%0A👤 *Name:* ${name}%0A📧 *Email:* ${email}%0A📞 *Phone:* ${phone}%0A🛎 *Services:*%0A${services
      .map(service => `   ✅ ${service}`)
      .join('%0A')}`

    const whatsappUrl = `https://wa.me/254705864283?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    toast.success('Appointment sent via WhatsApp!')

    // Reset form & local storage
    setFormData({
      name: '',
      phone: '',
      email: '',
      services: [],
    })
    localStorage.removeItem('appointmentData')
  }

  return (
    <section id="contact" className="bg-beige py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif text-greenish mb-8 text-center">Book an Appointment</h2>

      <form
        onSubmit={handleSubmit}
        id="book-form"
        className="bg-white p-8 rounded-lg shadow-md space-y-6"
      >
        <div>
          <label className="block mb-2 font-medium text-greenish">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c46f6b]"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-greenish">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter WhatsApp number"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c46f6b]"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-greenish">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c46f6b]"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-greenish">Select Service(s)</label>
          <select
            id="service-select"
            multiple
            value={formData.services}
            onChange={handleServiceSelect}
            className="w-full h-32 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c46f6b]"
          >
            {servicesList.map(service => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-[#c46f6b] text-white px-6 py-3 rounded-md hover:opacity-90 transition cursor-pointer w-full"
        >
          Book Now
        </button>
      </form>
    </section>
  )
}

export default AppointmentForm
