// pages/404.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Wave Engineering Bangladesh</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
        <div className="max-w-md w-full space-y-6">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900">404</h1>
            <h2 className="mt-4 text-3xl font-medium text-gray-800">Page Not Found</h2>
            <p className="mt-4 text-lg text-gray-600">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            <Link href="/" className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Return to Homepage
            </Link>
            
            <div className="grid grid-cols-2 gap-4">
              <Link href="/products" className="py-3 px-6 border border-gray-300 rounded-md text-lg font-medium text-gray-700 hover:bg-gray-50">
                Our Products
              </Link>
              <Link href="/contact" className="py-3 px-6 border border-gray-300 rounded-md text-lg font-medium text-gray-700 hover:bg-gray-50">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}