import React from 'react';

const WaveServices = () => {
  return (
    <section className="section text-gray-950 bg-white">
      <div className="mb-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold py-4">
          Wave Engineering Services
        </h2>
        <div className="p-4 pt-0">
          <span>Automation & Solutions, </span>
          <span>Repairing & Support</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 text-left text-xl">
        
        {/* Repairing Service */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-4xl font-bold">Repairing Service</h3>
          <p className="py-2">
            Inverter Repairing Service Center in Wave Engineering Bangladesh. We repair all types of Inverters, AC/DC Drives, HMIs, PLCs, Servo Drives, and Electronic Cards.
          </p>
          <p className="py-2">
            We offer fast REPAIR SERVICES to minimize costly downtime. With a skilled team of engineers and support staff, we strive to reduce turnaround times and ensure the highest quality repairs.
          </p>
          <p className="py-2">
            Our engineers are dedicated to completing repairs within the standard time frame.
          </p>
        </div>

        {/* Local Product Repair */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-4xl font-bold">Local Products Repair and Troubleshooting Service</h3>
        </div>

        {/* Automation Service */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-4xl font-bold">Automation Service</h3>
          <ul className="list-disc list-inside ml-4">
            <li className="py-2 underline">For Electrical Drive & Automation Systems</li>
            <li className="py-2 underline">Industrial Automation Projects</li>
            <li className="py-2 underline">PLC & Drive-based Industrial Automation Projects</li>
          </ul>
          <p className="py-2">
            We are fully equipped to handle all your industrial automation needs, including complete turnkey electrical solutions for any scale of process plant.
          </p>
          <p className="py-2">
            Engineering solutions for Electrical Drive & Automation Systems.
          </p>
          <p className="py-2">
            AC Variable Speed Drive (VFD) panels for motor speed control.
          </p>
          <p className="py-2">
            Comprehensive service support before and after sales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaveServices;
