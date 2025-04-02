// app/layout.tsx
import '../styles/globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: "JUDZ BEAUTY BAR",
  description: 'Cheap and Affordable Beauty, Manicure, Pedicure and Bridal Makeup Studio in Makueni County, Kenya',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-beige text-greenish font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
