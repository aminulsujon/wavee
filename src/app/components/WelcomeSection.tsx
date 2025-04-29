'use client';
import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section id="features" className="bg-[#004da0] py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-50 mb-12">
        <img
          src="/images/wave-engineering-logo-white.png"
          alt="Wave Engineering Logo"
          width={64}
          height={64}
          className="inline-block w-16 h-auto"
        />
        <span className="ml-4 align-middle">WELCOME TO WAVE ENGINEERING</span>
      </h2>

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 text-gray-300 text-xl leading-relaxed">
        <p>
          WAVE ENGINEERING is an Inverter, Industrial Machine, Industrial Machinery Parts, Automation Products & Automation Solution Company in Bangladesh.
        </p>
        <p className="mt-4">
          We are an Authorized System Integrator & Support/Repair provider for Lenze Products in Bangladesh.
        </p>
        <p className="mt-4">
          WAVE ENGINEERING is a Channel Partner for Lenze Products in Bangladesh.
        </p>
        <p className="mt-4">
          We offer REPAIRING SERVICES for all types of Inverters, AC/DC Drives, PLCs, HMIs, Controllers, Servo Drives & Electronic Cards.
        </p>
        <p className="mt-4">
          We are a dynamic Electrical, Electronics, Control & Industrial Automation company specializing in Motion Control Solutions.
        </p>
        <p className="mt-4">
          Our experienced team supports Textile Automation across Bangladesh and supplies a wide range of automation products.
        </p>
        <p className="mt-4">
          We provide both system integration and product supply, collaborating with internationally reputed companies.
        </p>
      </div>
    </section>
  );
}
