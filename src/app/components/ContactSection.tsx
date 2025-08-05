'use client';

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto text-gray-950 px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="max-w-md">
              Reach out to us for any inquiries, support, or partnership opportunities regarding Lenze Products in Bangladesh.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <span className="text-xl">📍</span>
              <div>
                <h4 className="text-md font-semibold">Corporate Office Address</h4>
                <p className="">
                  2nd Floor, House-241, Sector-04, Jalaluddin Road, Bottola Railgate, Uttara, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-xl">⏰</span>
              <div>
                <h4 className="text-md font-semibold">Open Hours</h4>
                <p className="">Sat - Thu: 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-xl">📞</span>
              <div>
                <h4 className="text-md font-semibold">Contact Now</h4>
                <p className="">
                  Phone: +8801719073109<br />
                  Email: info [at] waveengineeringbd.com
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
