"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <header className="WaveEngineering border-b">
      <nav className="w-full border-b border-black/5 dark:border-white/5 lg:border-transparent waveEngg bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative flex flex-wrap items-center justify-between gap-6 pt-3 pb-2 md:gap-0 waveEngg">
            
            {/* Logo and Hamburger */}
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max waveEngg">
              <Link href="/" aria-label="logo" className="flex items-center space-x-2 text-sky-800 p-2 radius-lg">
                <img 
                src="/images/wave-engineering-logo.png" 
                alt="Wave Engineering Logo" 
                className="dark:invert h-10"
                />
                <span className="md:text-3xl font-bold text-wave dark:text-white waveEngg">WAVE</span>
                <span className="md:text-3xl font-bold text-engg dark:text-white waveEngg">ENGINEERING</span>
              </Link>

              <div className="relative flex max-h-10 items-center lg:hidden waveEngg right-2">
                <button
                  aria-label="hamburger"
                  onClick={handleMenuToggle}
                  className="relative -mr-6 p-2 waveEngg border rounded"
                >
                  <div aria-hidden="true" className="m-auto h-0.5 w-5 rounded bg-[#004da0] transition duration-300 waveEngg"></div>
                  <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-5 rounded bg-[#004da0] transition duration-300 waveEngg"></div>
                </button>
              </div>
            </div>

            {/* Mobile menu overlay */}
            <div
              id="navLayer"
              aria-hidden="true"
              className={`fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden waveEngg ${menuOpen ? 'scale-y-100' : 'scale-y-0'}`}
            ></div>

            {/* Navigation Links */}
            <div
              id="navlinks"
              className={`absolute top-full left-0 z-20 w-full origin-top-right 
              translate-y-1 scale-90 md:flex-col flex-wrap justify-center md:justify-end gap-2 rounded-2xl border border-sky-100 
              p-0 md:p-8 opacity-0 shadow-2xl shadow-sky-600/10 transition-all duration-300 dark:border-sky-700 
              dark:bg-[#004da0] dark:shadow-none lg:visible lg:relative lg:flex lg:w-8/12 lg:translate-y-0 lg:scale-100 
              lg:flex-row lg:items-center lg:gap-1 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none waveEngg ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
              <Link href="/" className="block md:inline-block mb-2 md:inline font-medium text-white bg-[#004da0] px-2 py-2 rounded-md hover:bg-[#004da0] transition">
                Home
              </Link>
              <Link href="/products" className="block md:inline-block mb-2 md:inline font-medium text-white bg-[#004da0] px-2 py-2 rounded-md hover:bg-[#004da0] transition">
                Products
              </Link>
              <Link href="/services" className="block md:inline-block mb-2 md:inline font-medium text-white bg-[#004da0] px-2 py-2 rounded-md hover:bg-[#004da0] transition">
                Services
              </Link>
              <Link href="/contact" className="block md:inline-block mb-2 md:inline font-medium text-white bg-[#004da0] px-2 py-2 rounded-md hover:bg-[#004da0] transition">
                Contact
              </Link>

              {/* Search input (visible only on mobile) */}
              <div className="relative lg:mr-4 block md:hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-md px-3 py-3 text-sm text-white focus:outline-none border border-white"
                />
                <svg className="absolute right-4 top-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386-1.414 1.415-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
