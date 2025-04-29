'use client';
import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="bg-[#004da0] pb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-sky-50 mb-12 bg-[#004da0] py-8">
        Wave Engineering – Official Lenze Partner in Bangladesh
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          
          {/* Product Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img 
              src="/images/Productivity_Machnes.jpg" 
              alt="Machine Motion Productivity" 
              className="w-full h-56 object-cover transition duration-300 ease-in-out hover:brightness-90"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Products</h2>
              <p className="text-gray-600 mb-4">The portfolio of machine task</p>
            </div>
          </div>

          {/* Industry Expertise */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img 
              src="/images/Productivitz__Machine_Motion.jpg" 
              alt="Industry Expertise Conversation" 
              className="w-full h-56 object-cover transition duration-300 ease-in-out hover:brightness-90"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Solutions</h2>
              <p className="text-gray-600 mb-4">Extensive industry know-how</p>
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img 
              src="/images/Productivity_People_in_Production.jpg" 
              alt="Complete Engineering Solutions" 
              className="w-full h-56 object-cover transition duration-300 ease-in-out hover:brightness-90"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Repair & Service</h2>
              <p className="text-gray-600 mb-4">From the idea to aftersales</p>
            </div>
          </div>

          {/* Service */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img 
              src="/images/Partner_In_Conversation.jpg" 
              alt="Service and Support" 
              className="w-full h-56 object-cover transition duration-300 ease-in-out hover:brightness-90"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Industry Experts</h2>
              <p className="text-gray-600 mb-4">For safe operation worldwide</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
