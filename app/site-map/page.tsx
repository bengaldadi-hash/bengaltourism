import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

export default function Sitemap() {
  const destinations = [
    { name: 'Darjeeling', href: '/destinations/darjeeling', description: 'Queen of the Hills' },
    { name: 'Sundarban', href: '/destinations/sundarban', description: 'Mangrove Paradise' },
    { name: 'Kolkata', href: '/destinations/kolkata', description: 'City of Joy' },
    { name: 'Digha', href: '/destinations/digha', description: 'Beach Destination' },
    { name: 'Shantiniketan', href: '/destinations/shantiniketan', description: 'Cultural Heritage' },
    { name: 'Murshidabad', href: '/destinations/murshidabad', description: 'Historical City' },
    { name: 'Cooch Behar', href: '/destinations/cooch-behar', description: 'Royal Heritage' },
    { name: 'Maldives', href: '/maldives', description: 'Tropical Paradise' },
    { name: 'Lakshadweep', href: '/lakshadweep', description: 'Island Paradise' },
  ]

  const packages = [
    { name: 'Bengal Beckons', href: '/packages/bengal-beckons', description: 'Explore Bengal' },
    { name: 'Exclusive Packages', href: '/packages/exclusive', description: 'Premium Tours' },
    { name: 'Foreign Tours', href: '/packages/foreign-tours', description: 'International Destinations' },
    { name: 'Hotel & Resort', href: '/hotel-resort', description: 'Luxury Stays' },
  ]

  const services = [
    { name: 'Book Tour', href: '/book-tour', description: 'Tour Booking' },
    { name: 'Book Hotel', href: '/book-hotel', description: 'Hotel Booking' },
    { name: 'Air Ambulance', href: '/air-ambulance', description: 'Emergency Services' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through Bengal Tourism website with ease. Find all pages, destinations, and services in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white mr-3 text-sm">1</span>
              Main Pages
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Home</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition group">
                  <span className="text-gray-700 group-hover:text-yellow-600">About Us</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                </Link>
              </li>
              <li>
                <Link href="/packages" className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Tour Packages</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Destinations</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Contact</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white mr-3 text-sm">2</span>
              Tour Packages
            </h2>
            <ul className="space-y-3">
              {packages.map((pkg, index) => (
                <li key={index}>
                  <Link href={pkg.href} className="block p-3 rounded-lg hover:bg-yellow-50 transition group">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-700 group-hover:text-yellow-600 font-medium">{pkg.name}</span>
                        <p className="text-sm text-gray-500">{pkg.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 mt-2" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white mr-3 text-sm">3</span>
              Destinations
            </h2>
            <ul className="space-y-3">
              {destinations.map((dest, index) => (
                <li key={index}>
                  <Link href={dest.href} className="block p-3 rounded-lg hover:bg-yellow-50 transition group">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-700 group-hover:text-yellow-600 font-medium">{dest.name}</span>
                        <p className="text-sm text-gray-500">{dest.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 mt-2" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white mr-3 text-sm">4</span>
              Services
            </h2>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="block p-3 rounded-lg hover:bg-yellow-50 transition group">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-700 group-hover:text-yellow-600 font-medium">{service.name}</span>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 mt-2" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Pages */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white mr-3 text-sm">5</span>
              Policies
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Privacy Policy</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                </Link>
              </li>
              <li>
                <Link href="/terms" className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Terms of Service</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                </Link>
              </li>
              <li>
                <Link href="/refund" className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Refund Policy</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                </Link>
              </li>
              <li>
                <Link href="/site-map" className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition group">
                  <span className="text-gray-700 group-hover:text-yellow-600">Sitemap</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white mr-3 text-sm">6</span>
              Contact Info
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Tour Booking</p>
                  <p className="text-gray-600">6289783779</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Hotel Booking</p>
                  <p className="text-gray-600">7890727339</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Email</p>
                  <p className="text-gray-600">bengaltourism@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Address</p>
                  <p className="text-gray-600">123, Park Street<br />Kolkata, West Bengal 700016</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Office Hours</p>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Website Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600">{destinations.length}</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600">{packages.length}</div>
              <div className="text-gray-600">Tour Packages</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600">{services.length}</div>
              <div className="text-gray-600">Services</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600">4</div>
              <div className="text-gray-600">Policy Pages</div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">Can't find what you're looking for?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
