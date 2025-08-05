'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="pb-20">
      <div className="bg-[#ddd] py-4 border-b flex flex-wrap justify-center gap-x-6">
          <a className="border-2 border-sky-900 rounded px-2 py-1 bg-sky-50" href="/lenze-i510">How Lenze i510 Works?</a>
      </div>
      {/* Navigation */}
      <div className="bg-[#004da0] py-4 mb-10 border-b flex flex-wrap justify-center gap-x-6">
        {[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' },
        ].map(({ label, href }) => (
          <Link key={label} href={href} className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
            <span className="relative text-white font-bold">{label}</span>
          </Link>
        ))}
        <a
          href="tel:+8801719073109"
          className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max text-white"
        >
          <span className="relative text-2xl font-bold">Call +8801719073109</span>
        </a>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
          <div className="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
            {/* Logo */}
            <div className="flex justify-center sm:justify-start mb-4">
              <img
                src="/images/wave-engineering-logo.png"
                alt="Wave Engineering Logo"
                loading="lazy"
                width={96}
                height={48}
              />
            </div>

            {/* Description */}
            <p className="text-sm md:text-base">
              We are an Authorized System Integrator, Channel Partner, and Support/Repair Provider for Lenze Products in Bangladesh.
            </p>

            {/* Social Links */}
            <div className="platforms">
              <a 
              href="https://www.facebook.com/wavelenze"
              target="_blank"
              rel="noopener noreferrer"
              className=""
               >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <span>Lenze Inverter</span>
            </a>
              <a
                href="https://www.linkedin.com/company/wave-engineering-bd"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                  <path d="M12.5 0h-9A3.5 3.5 0 000 3.5v9A3.5 3.5 0 003.5 16h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0012.5 0zM5.6 12H3.4V6h2.2v6zm-1.1-7.3c-.7 0-1.1-.6-1.1-1.3s.4-1.3 1.1-1.3 1.1.6 1.1 1.3-.4 1.3-1.1 1.3zm8.1 7.3h-2.2v-3.3c0-.8-.4-1.3-1.1-1.3-.6 0-.9.4-1.1.9V12h-2.2V6h2.2v1.7c.3-.5.9-.9 1.5-.9 1.1 0 1.9.8 1.9 2.1v3.1z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100088529135630"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@waveengineeringbd"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM8 14.4c-3.55 0-6.4-2.85-6.4-6.4 0-3.55 2.85-6.4 6.4-6.4 3.55 0 6.4 2.85 6.4 6.4 0 3.55-2.85 6.4-6.4 6.4zM6.6 5.8l3.6 2.4-3.6 2.4V5.8z" />
                </svg>
                <span>YouTube</span>
              </a>

              
            </div>

            {/* Copyright */}
            <span className="block text-xs md:text-sm mt-4">
              &copy; {year} Wave Engineering. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
