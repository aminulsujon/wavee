import React from 'react';

const Top = () => {
  return (
    <div className="w-full bg-[#004da0] text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-6 py-2">
        
        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <a href="https://www.linkedin.com/company/wave-engineering-bd" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
            <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0V8zm7.5 0H12v2.4h.08c.63-1.2 2.18-2.4 4.42-2.4 4.73 0 5.6 3.1 5.6 7.1V24h-5V14.2c0-2.4-.05-5.5-3.34-5.5-3.35 0-3.86 2.6-3.86 5.3V24H7.5V8z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100088529135630" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
            <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24">
              <path d="M22 12A10 10 0 1 0 10 21.93V14.89h-2.3v-2.89H10v-2.2c0-2.26 1.34-3.5 3.39-3.5.98 0 2.01.17 2.01.17v2.21h-1.13c-1.12 0-1.47.69-1.47 1.4v1.72h2.5l-.4 2.89H12.8v7.04A10 10 0 0 0 22 12z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@waveengineeringbd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 transition duration-300 hover:text-red-600 hover:scale-110"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM8 14.4c-3.55 0-6.4-2.85-6.4-6.4 0-3.55 2.85-6.4 6.4-6.4 3.55 0 6.4 2.85 6.4 6.4 0 3.55-2.85 6.4-6.4 6.4zM6.6 5.8l3.6 2.4-3.6 2.4V5.8z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/wavelenze" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
            <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24">
              <path d="M22 12A10 10 0 1 0 10 21.93V14.89h-2.3v-2.89H10v-2.2c0-2.26 1.34-3.5 3.39-3.5.98 0 2.01.17 2.01.17v2.21h-1.13c-1.12 0-1.47.69-1.47 1.4v1.72h2.5l-.4 2.89H12.8v7.04A10 10 0 0 0 22 12z"/>
            </svg>
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap items-center space-x-4 w-full sm:w-auto text-sm">
          <a href="tel:+8801719073109" className="hover:underline whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 011 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.2 2.42.57 3.54a1 1 0 01-.25 1.05l-2.2 2.2z"/>
            </svg>
            +8801719073109
          </a>
          <a href="tel:+8801880076385" className="hover:underline whitespace-nowrap">+8801880076385</a>
          <a href="mailto:info@waveengineering.com" className="hover:underline whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"/>
            </svg>
            info@waveengineering.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
