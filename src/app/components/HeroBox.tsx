'use client';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <div className="py-4 pb-8 ml-auto bg-white text-gray-950">
      <div className="lg:w-2/3 mx-auto px-4">

        <div>
          <img
            className="mb-4 lg:mb-0"
            src="/images/Lenze-Germanu-Logo-official.webp"
            alt="Lenze Logo"
            loading="lazy"
          />
          <h1 className="heading">
            <span className="text-[#004da0]">Lenze Products Bangladesh</span>
          </h1>
        </div>

        <p className="mt-6 text-xl md:text-2xl max-w-3xl">
          We are Authorized System Integrator, Channel Partner & Support/Repair Provider of Lenze Products in Bangladesh.
        </p>

        <div className="mt-12 flex flex-wrap gap-y-4 gap-x-6">
          <a
            href="tel:+8801719073109"
            className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#004da0] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative text-lg font-semibold text-white">+8801719073109</span>
          </a>
          <a
            href="/contact"
            className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-[#004da0] before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative text-lg font-semibold text-white">Contact</span>
          </a>
        </div>
        
      </div>
    </div>
  );
}
