"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Calendar, Users, IndianRupee } from "lucide-react"

const popularDestinations = [
  { name: "Darjeeling", image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "₹2,500/night" },
  { name: "Kolkata", image: "/kolkata-DIY.avif", price: "₹3,200/night" },
  { name: "Digha", image: "https://images.unsplash.com/photo-1657282928361-ec9de3f2bc74?w=800&h=600&fit=crop", price: "₹1,800/night" },
  { name: "Sundarban", image: "https://images.unsplash.com/photo-1706459671568-9809c9d13430?w=800&h=600&fit=crop", price: "₹2,100/night" },
]

export default function HotelBookingSection({ className = "" }: { className?: string }) {
  const [searchData, setSearchData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: "1"
  })

  return (
    <section className={`py-20 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 ">
          <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
            Hotel Booking
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Find Your Perfect <span className="text-yellow-600">Stay</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl ">
            Discover comfortable and affordable hotels across West Bengal with instant booking.
          </p>
        </div>

     

        {/* Popular Destinations */}
        <div>
       

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <Link
                key={index}
                href="/book-hotel"
                className="group rounded-2xl overflow-hidden relative shadow-xl"
              >
                <div className="relative h-56">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-xl font-bold">{destination.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
