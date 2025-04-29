'use client';
import React, { useRef } from 'react';

const products = [
  {
    id: 1,
    title: "i950 cabinet servo inverter",
    link: "i950-cabinet-servo-inverter",
    image: "images/i950-cabinet-servo-inverter.webp",
    brand: "Lenze",
    date: "2025-04-22"
  },
  {
    id: 5,
    title: "i510 cabinet frequency inverter",
    link: "i510-cabinet-frequency-inverter",
    image: "images/i510-cabinet-frequency-inverter.webp",
    brand: "Lenze",
    date: "2025-04-22"
  },
  {
    id: 2,
    title: "8400 protec frequency inverter",
    link: "8400-protec-frequency-inverter",
    image: "images/8400-protec-frequency-inverter.webp",
    brand: "Lenze",
    date: "2025-04-22"
  },
  {
    id: 6,
    title: "i550 protec frequency inverter",
    link: "i550-protec-frequency-inverter",
    image: "images/i550-protec-frequency-inverter.webp",
    brand: "Lenze",
    date: "2025-04-22"
  },
  {
    id: 3,
    title: "8400 motec frequency inverter",
    link: "8400-motec-frequency-inverter",
    image: "images/8400-motec-frequency-inverter.webp",
    brand: "Lenze",
    date: "2025-04-22"
  },
  {
    id: 4,
    title: "i550 motec frequency inverter",
    link: "i550-motec-frequency-inverter",
    image: "images/i550-motec-frequency-inverter.webp",
    brand: "Lenze",
    date: "2025-04-22"
  }
];

const FeaturedProducts = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Accept number (-1 or 1) for scrolling
  const scrollSlider = (direction: number) => {
    const scrollAmount = 320;

    if (sliderRef.current) {
      sliderRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <section className="py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Featured Products</h2>
        <p className="mt-4 text-lg text-[#D00000]">
          Lenze Partner | Repairing | Automation | Engineering Solutions
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scrollSlider(-1)}  // Pass -1 for scrolling left
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-[#004da0] border dark:border-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={() => scrollSlider(1)}   // Pass 1 for scrolling right
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-[#004da0] border dark:border-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          ▶
        </button>

        {/* Scrollable Products */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-6"
        >
          {products.map(product => (
            <div
              key={product.id}
              className="flex-shrink-0 w-72 sm:w-80 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-[#004da0] bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div className="relative overflow-hidden rounded-xl">
                  <a href={product.link}>
                    <img src={product.image} alt={product.title} className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                  </a>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  <a href={`/${product.link}`}>
                    {product.title}
                    <span className="block mt-2 text-sm text-gray-500 dark:text-gray-400">{product.brand}</span>
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
