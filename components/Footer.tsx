'use client'

import { FaFacebookF, FaInstagram, FaSnapchatGhost } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#606f50] text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:items-start">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-4">JUDZ BEAUTY BAR</h2>
          <p className="text-sm max-w-xs leading-relaxed">
            Elevating your beauty with our premium manicure, pedicure and bridal makeup services.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="uppercase text-sm mb-2 tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-[#c46f6b] transition">About Us</Link></li>
            <li><Link href="#services" className="hover:text-[#c46f6b] transition">Services</Link></li>
            <li><Link href="#gallery" className="hover:text-[#c46f6b] transition">Gallery</Link></li>
            <li><Link href="#contact" className="hover:text-[#c46f6b] transition">Contacts</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="uppercase text-sm mb-2 tracking-wide">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:judzbeautybar@gmail.com" className="hover:text-[#c46f6b]">judzbeautybar@gmail.com</a></li>
            <li>Phone: <a href="tel:+254705864283" className="hover:text-[#c46f6b]">+254 705 864 283</a></li>
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="uppercase text-sm mb-2 tracking-wide">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c46f6b] transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c46f6b] transition">
              <FaInstagram />
            </a>
            <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c46f6b] transition">
              <FaSnapchatGhost />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & copyright */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs text-white/80">
        © {new Date().getFullYear()} JUDZ BEAUTY BAR. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
