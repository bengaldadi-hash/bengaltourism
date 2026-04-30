import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent animate-pulse">
            404
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for seems to have vanished into the Bengal mist. 
          Let's get you back on track to explore the beautiful destinations of West Bengal.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-lg hover:bg-yellow-600 hover:text-white transition-all duration-200"
          >
            <Search className="w-5 h-5" />
            Contact Support
          </Link>
        </div>

        {/* Popular Destinations */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Kolkata', href: '/kolkata-tourism' },
              { name: 'Darjeeling', href: '/darjeeling-tourism' },
              { name: 'Sundarbans', href: '/sundarban-tourism' },
              { name: 'Digha', href: '/digha' },
              { name: 'Bolpur', href: '/bolpur' },
              { name: 'Gangtok', href: '/gangtok' },
              { name: 'Puri', href: '/puri-tourism' },
              { name: 'Bakkhali', href: '/bakkhali' },
            ].map((destination, index) => (
              <Link
                key={index}
                href={destination.href}
                className="text-yellow-600 hover:text-yellow-700 font-medium text-sm hover:underline transition-colors"
              >
                {destination.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Still can't find what you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link href="/book-tour" className="text-yellow-600 hover:text-yellow-700 font-medium">
              → Book a Tour
            </Link>
            <Link href="/book-hotel" className="text-yellow-600 hover:text-yellow-700 font-medium">
              → Book a Hotel
            </Link>
            <Link href="/package-cost" className="text-yellow-600 hover:text-yellow-700 font-medium">
              → View Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
