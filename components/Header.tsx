"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const navItems = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contacts", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#606f50] text-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-serif cursor-pointer">
        JUDZ BEAUTY <span className="font-light tracking-wide">BAR</span>
      </Link>


        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 text-sm uppercase font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-[#c46f6b] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open menu">
            <FiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-[80%] bg-[#606f50]/50 backdrop-blur-md z-50 px-8 py-6 transition-transform duration-300 transform translate-x-0 flex flex-col">
          {/* Close (X) button only */}
          <div className="flex justify-end mb-10">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-white hover:text-[#c46f6b] transition"
            >
              <AiOutlineClose size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg text-white uppercase font-medium items-start justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#c46f6b] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
