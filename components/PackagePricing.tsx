"use client"

import { Check } from "lucide-react"
import { useRouter } from "next/navigation"

interface PackagePricingProps {
  title?: string
  subtitle?: string
  className?: string
}

export default function PackagePricing({
  title = "Darjeeling Tour Packages",
  subtitle = "Choose your perfect Himalayan duration",
  className = "",
}: PackagePricingProps) {
  const router = useRouter()

  const handleBookNow = () => {
    router.push('/book-tour')
  }

  return (
    <section className={`py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
  <div className="bg-white border border-indigo-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between">

            <div>
              <span className="text-gray-500 text-xs py-1 rounded-full">
                Most Popular
              </span>

      <h3 className="text-2xl font-bold mt-6 text-gray-900">6N / 7D</h3>
               <p className="text-2xl font-semibold text-indigo-600 mt-3">
                ₹ 17,200
              </p>


                   <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Deluxe Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Breakfast & Dinner
                </li>
                 <li className="flex items-center gap-2">  <Check className="w-4 h-4 text-indigo-600" /> PickU & Drop
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Sightseeing as per Itinerary
                </li>
               
              </ul>
            </div>

             <button
              onClick={handleBookNow}
              className="mt-8 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              Book Now
            </button>
          </div>
          {/* 5N/6D */}
          <div className="bg-white border border-indigo-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between">

            <div>
              <span className="text-gray-500 text-xs py-1 rounded-full">
                Most Popular
              </span>

      <h3 className="text-2xl font-bold mt-6 text-gray-900">5N / 6D</h3>
               <p className="text-2xl font-semibold text-indigo-600 mt-3">
                ₹ 15,400
              </p>


                   <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Deluxe Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Breakfast & Dinner
                </li>
                 <li className="flex items-center gap-2">  <Check className="w-4 h-4 text-indigo-600" /> PickU & Drop
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Sightseeing as per Itinerary
                </li>
               
              </ul>
            </div>

             <button
              onClick={handleBookNow}
              className="mt-8 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              Book Now
            </button>
          </div>

          {/* 4N/5D */}
          <div className="bg-white border border-indigo-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between">

            <div>
              <span className="text-gray-500 text-xs py-1 rounded-full">
                Recommended
              </span>

              <h3 className="text-2xl font-bold mt-6 text-gray-900">4N / 5D</h3>
              <p className="text-2xl font-bold text-indigo-600 mt-3">
                ₹ 12,700
              </p>

                  <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Deluxe Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Breakfast & Dinner
                </li>
                 <li className="flex items-center gap-2">  <Check className="w-4 h-4 text-indigo-600" /> Pick & Drop
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Sightseeing as per Itinerary
                </li>
               
              </ul>
            </div>

            <button
              onClick={handleBookNow}
              className="mt-8 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              Book Now
            </button>
          </div>

          {/* 3N/4D */}
          <div className="bg-white border border-indigo-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between">

            <div>
              <span className="text-gray-500 text-xs py-1 rounded-full">
                Recommended for short breaks
              </span>

              <h3 className="text-2xl font-bold mt-6 text-gray-900">3N / 4D</h3>
              <p className="text-2xl font-semibold text-indigo-600 mt-3">
                ₹ 9,100
              </p>
                   <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Deluxe Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Breakfast & Dinner
                </li>
                 <li className="flex items-center gap-2">  <Check className="w-4 h-4 text-indigo-600" /> Pick & Drop
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Sightseeing as per Itinerary
                </li>

              </ul>
            </div>

             <button
              onClick={handleBookNow}
              className="mt-8 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              Book Now
            </button>
          </div>

          {/* 2N/3D */}
          <div className="bg-white border border-indigo-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between">

            <div>
              <span className="text-gray-500 text-xs py-1 rounded-full">
                Recommended only for group of 20+ persons
              </span>

              <h3 className="text-2xl font-bold mt-6 text-gray-900">2N / 3D</h3>
              <p className="text-2xl font-semibold text-indigo-600 mt-3">
                ₹ 6,400
              </p>
                    <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Deluxe Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Breakfast & Dinner
                </li>
                 <li className="flex items-center gap-2">  <Check className="w-4 h-4 text-indigo-600" /> Pick & Drop
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Sightseeing as per Itinerary
                </li>
               
              </ul>
            </div>

            <button
              onClick={handleBookNow}
              className="mt-8 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              Book Now
            </button>
          </div>

          {/* 1N/2D */}
          <div className="bg-gray-100 border border-gray-200 rounded-3xl p-8 flex flex-col justify-between opacity-70">

            <div>
              <span className=" text-black text-xs py-1 rounded-full">
                Not feasible
              </span>

              <h3 className="text-2xl font-bold text-gray-500 mt-6">1N / 2D</h3>
              <p className="text-2xl font-semibold text-gray-400 mt-3">
                ₹ 3,700
              </p>
                  <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Deluxe Accommodation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Breakfast & Dinner
                </li>
                 <li className="flex items-center gap-2">  <Check className="w-4 h-4 text-indigo-600" /> Pick & Drop
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" /> Sightseeing as per Itinerary
                </li>

              </ul>
            </div>

            <button
              disabled
              className="mt-8 bg-gray-300 text-gray-500 py-3 rounded-xl cursor-not-allowed"
            >
              Not Available
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}