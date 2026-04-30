"use client"

import Image from 'next/image'
import { MapPin, Check, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'
import { useRouter } from "next/navigation"
export default function HotelResortPage() {
  const router = useRouter()

  const handleBookNow = () => {
    router.push('/book-tour')
  }

  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761470371217-a4de0ff0e8df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90ZWwtUmVzb3J0LUd1ZXN0JTIwSG91c2V8ZW58MHx8MHx8fDA%3D"
            alt="Luxury resort with swimming pool and ocean view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-blue-800/60 to-indigo-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Premium Accommodation</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Hotel-Resort
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Guest House • Luxury Stays • Premium Hospitality
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the finest accommodations ranging from luxury resorts to cozy guest houses across India
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Stays
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-800 transition transform hover:scale-105">
                Book Premium Stay
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Premium Hospitality</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ACCOMMODATION PACKAGES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Accommodation Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive stays tailored for your comfort and luxury experience
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid md:grid-cols-1 gap-8">
                {/* Luxury Resort Package */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                    <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Luxury Resort Experience</h3>
                    <p className="text-gray-700 mb-4">Flexible duration with world-class amenities</p>
                    <div className="bg-purple-100 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Luxury Features</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 5-star luxury resorts</li>
                        <li>• Private pools & spas</li>
                        <li>• Fine dining restaurants</li>
                        <li>• Concierge services</li>
                        <li>• Beach access & views</li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-purple-600 font-semibold">Premium Luxury</span>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Guest House Package */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                    <Home className="w-16 h-16 text-white group-hover:scale-110 transition" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Cozy Guest House Stay</h3>
                    <p className="text-gray-700 mb-4">Flexible duration with homely comfort</p>
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Guest House Features</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Traditional guest houses</li>
                        <li>• Local family hosts</li>
                        <li>• Home-cooked meals</li>
                        <li>• Cultural experiences</li>
                        <li>• Budget-friendly options</li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-blue-600 font-semibold">Homely Comfort</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Spa Wellness video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Tonle Sap Lake Tour"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Advertisement Section */}
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-3xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  🚀 Paste Your Advertisement Here
                </h3>
                <p className="text-sm opacity-90">
                  Promote your brand, offer or travel deals here.
                  This space is perfect for partner promotions.
                </p>
                <button className="mt-6 bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                  Contact For Promotion
                </button>
              </div>

            </div>
            </div>
          </div>
      </section>

      {/* ================= ACCOMMODATION TYPES ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Accommodation Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of premium accommodations across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beach Resorts */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Beach Resorts</h3>
              <p className="text-gray-700 mb-4">
                Luxury beachfront properties with stunning ocean views,
                private beaches, water sports, and tropical gardens.
                Perfect for romantic getaways and family vacations.
              </p>
              <div className="flex items-center justify-center gap-2 text-cyan-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Goa, Kerala, Andaman</span>
              </div>
            </div>

            {/* Mountain Retreats */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mountain Retreats</h3>
              <p className="text-gray-700 mb-4">
                Serene mountain resorts with breathtaking views,
                fresh mountain air, and adventure activities.
                Ideal for nature lovers and peace seekers.
              </p>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Himalayas, Western Ghats</span>
              </div>
            </div>

            {/* Heritage Hotels */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Heritage Hotels</h3>
              <p className="text-gray-700 mb-4">
                Historic properties converted into luxury hotels with
                royal architecture, antique furniture, and cultural heritage.
                Experience regal hospitality.
              </p>
              <div className="flex items-center  justify-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Rajasthan, Mysore, Kolkata</span>
              </div>
            </div>

            {/* Business Hotels */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Business Hotels</h3>
              <p className="text-gray-700 mb-4">
                Modern business hotels with conference facilities,
                executive lounges, and premium business services.
                Perfect for corporate travelers and meetings.
              </p>
              <div className="flex items-center  justify-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Metro Cities</span>
              </div>
            </div>

            {/* Eco Stays */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trees className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Stays</h3>
              <p className="text-gray-700 mb-4">
                Sustainable accommodations with solar power,
                organic gardens, and nature conservation.
                Experience eco-luxury at its finest.
              </p>
              <div className="flex items-center justify-center gap-2 text-emerald-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Wildlife Sanctuaries</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Hotel & Resort Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Luxury stay experience with buffet breakfast included
            </p>
          </div>

          {/* 2 Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE IMAGE */}
            <div className="relative group">

              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/hotal/myfair.jpg"
                  alt="Premium Hotel and Resort"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Advertise Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        Place For advertisement of preminum Hotels & Resorts
                      </h4>
                    </div></div>
                </div>

                {/* Bottom CTA */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        Book Premium Hotels & Resorts
                      </h4>
                      <p className="text-gray-600 text-xs">
                        Experience comfort, luxury & scenic stays
                      </p>
                    </div>

                    <a
                      href="/book-hotel"
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE PACKAGE CARD */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 border border-orange-200 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between">

              <div>
                <span className="text-orange-600 text-xs font-semibold">
                  Premium Hotel & Resort
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mt-6">
                  1N / 2D Package
                </h3>

                <p className="text-4xl font-bold text-orange-600 mt-3">
                  ₹ 21,000
                </p>

                <ul className="mt-8 space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600" /> Luxury Accommodation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600" /> Buffet Breakfast  & Dinner Included
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600" /> Resort Amenities Access
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-600" /> Scenic & Relaxing Experience
                  </li>
                </ul>
              </div>

              <a
                href="/book-hotel"
                className="mt-10 bg-orange-500 text-white py-3 rounded-xl font-semibold text-center hover:bg-orange-600 transition"
              >
                Book Now
              </a>
            </div>

          </div>
        </div>
      </section>


      <ContactCTA />
    </main>
  )
}
