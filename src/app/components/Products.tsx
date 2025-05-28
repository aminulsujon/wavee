'use client'

import React, { useState, useMemo } from 'react'

// You can replace this with an import from JSON file
import productsData from '../../../data/productMay.json'
import Link from 'next/link'

type Product = {
  id: number
  title: string
  link: string
  image: string
  brand: string
  date: string
}

const ProductPage = () => {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'date'>('name')

  const filteredProducts = useMemo(() => {
    let filtered = productsData.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase())
    )

    if (sortBy === 'name') {
      filtered.sort((a, b) => a.title.localeCompare(b.title))
    } else {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    return filtered
  }, [search, sortBy])

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto bg-white text-[#004da0]">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="mt-2">
          Browse our automation and engineering products from Lenze
        </p>
      </div>

      {/* Search and Sort Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name or brand..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border rounded-md"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'name' | 'date')}
          className="px-4 py-2 border rounded-md"
        >
          <option value="name">Sort by Name (A-Z)</option>
          <option value="date">Sort by Date (Newest First)</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="boxes">
        {filteredProducts.map((product: Product) => (
          <div
            key={product.id}
            className="flex-shrink-0 sm:w-80 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10"
          >
            <div className="relative overflow-hidden rounded-xl">
              
                {/* <img
                  src={product.image}
                  alt={product.title}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                /> */}
              
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">
                
                  {product.title}
                  <span className="block mt-2 text-sm">
                    {product.brand}
                  </span>
                
              </h3>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      )}
    </section>
  )
}

export default ProductPage
