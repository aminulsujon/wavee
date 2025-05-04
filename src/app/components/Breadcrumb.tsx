'use client'

import React from 'react'
import Link from 'next/link'

export default function Breadcrumb({ block, text }) {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        <div className="p-4">
          <nav className="flex text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-gray-700 font-medium hover:text-blue-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L2 8h3v8h4v-5h2v5h4V8h3L10 2z" />
                  </svg>
                  Home
                </Link>
              </li>

              {block && (
                <li>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7.05 4.05a1 1 0 011.414 0L13 8.586a1 1 0 010 1.414l-4.536 4.536a1 1 0 01-1.414-1.414L10.172 10 7.05 6.879a1 1 0 010-1.414z" />
                    </svg>
                    <span className="text-gray-500 font-medium">{text || ''}</span>
                  </div>
                </li>
              )}

              {/* Optional extra breadcrumb item */}
              {/* 
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.05 4.05a1 1 0 011.414 0L13 8.586a1 1 0 010 1.414l-4.536 4.536a1 1 0 01-1.414-1.414L10.172 10 7.05 6.879a1 1 0 010-1.414z" />
                  </svg>
                  <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">Products</Link>
                </div>
              </li>
              */}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}
