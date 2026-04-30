"use client"

import React from 'react'

export default function VideoLandingSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Section */}
    

        {/* Video Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
          <div className="aspect-video">
            <video
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/home.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Optional: Overlay text on video */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Amazing Destinations</h3>
            <p className="text-gray-600">From the Himalayas to the Bay of Bengal, explore diverse landscapes</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Rich Culture</h3>
            <p className="text-gray-600">Experience vibrant traditions, festivals, and heritage of Bengal</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Adventure Awaits</h3>
            <p className="text-gray-600">Thrilling activities and unforgettable experiences at every turn</p>
          </div>
        </div>

      </div>
    </section>
  )
}
