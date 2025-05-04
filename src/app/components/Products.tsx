'use client'

import React, { useState, useMemo } from 'react'

// You can replace this with an import from JSON file
import productsData from '../../../data/product.json'

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
    <section className="py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="mt-2 text-gray-500">
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product: Product) => (
          <div
            key={product.id}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition bg-white dark:bg-[#004da0] dark:border-gray-700"
          >
            
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{product.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{product.brand}</p>
                <p className="text-xs text-gray-400 mt-1">Date: {product.date}</p>
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
