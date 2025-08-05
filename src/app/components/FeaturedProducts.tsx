'use client'
import React, { useRef } from 'react'
import productsData from '../../../data/productMay.json'

const FeaturedProducts = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const featuredProducts = productsData.filter(product => product.featured)

  const scrollSlider = (direction: number) => {
    const scrollAmount = 320
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += direction * scrollAmount
    }
  }

  return (
    <section className="py-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Featured Products</h2>
        <p className="mt-4 text-lg text-[#D00000]">
          Lenze Partner | Repairing | Automation | Engineering Solutions
        </p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scrollSlider(-1)}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-white border p-2 px-4 pl-3 rounded-full shadow-md hover:bg-gray-100"
        >
          ◀
        </button>
        <button
          onClick={() => scrollSlider(1)}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white border p-2 px-4 pr-3 rounded-full shadow-md hover:bg-gray-100"
        >
          ▶
        </button>

        {/* Product Slider */}
        <div ref={sliderRef} className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-6">
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className="flex-shrink-0 sm:w-80 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10"
            >
              <div className="relative overflow-hidden rounded-xl">
                  <a href={product.link} title={product.title}>
                    <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  </a>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#004da0]">
                    <a href={product.link} title={product.title}>{product.title}</a>
                    <span className="block mt-2 text-sm text-bold text-gray-900">
                      {product.brand}
                    </span>
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <a
            href="/products"
            className="block md:inline-block mb-2 md:inline font-medium text-white bg-[#004da0] px-2 py-2 rounded-md hover:bg-[#004da0] transition"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
