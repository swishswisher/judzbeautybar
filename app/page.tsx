// app/page.tsx
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Works from '../components/Works'
import Testimonials from '../components/Testimonials'
import AppointmentForm from '../components/AppointmentForm'
import MapSection from '../components/MapSection'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Testimonials />
      <AppointmentForm />
      <MapSection />
    </>
  )
}
