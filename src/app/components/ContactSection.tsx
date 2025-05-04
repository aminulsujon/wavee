'use client';

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-sky-800 mb-2">Get in Touch</h2>
            <p className="text-gray-600 max-w-md">
              Reach out to us for any inquiries, support, or partnership opportunities regarding Lenze Products in Bangladesh.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-xl">📍</span>
              <div>
                <h4 className="text-md font-semibold text-gray-800">Corporate Office Address</h4>
                <p className="text-gray-600">
                  2nd Floor, House-241, Sector-04, Jalaluddin Road, Bottola Railgate, Uttara, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-xl">⏰</span>
              <div>
                <h4 className="text-md font-semibold text-gray-800">Open Hours</h4>
                <p className="text-gray-600">Sat - Thu: 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-xl">📞</span>
              <div>
                <h4 className="text-md font-semibold text-gray-800">Contact Now</h4>
                <p className="text-gray-600">
                  Phone: +8801719073109<br />
                  Email: info@waveengineeringbd.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Google Map Embed */}
        <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Wave Engineering Location"
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6367609981264!2d90.41251861445628!3d23.79354049325954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7af017c7f75%3A0x0!2zMjPCsDQ3JzM2LjgiTiA5MMKwMjQnNDMuMCJF!5e0!3m2!1sen!2sbd!4v1642610081534!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
