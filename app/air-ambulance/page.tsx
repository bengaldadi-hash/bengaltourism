"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function AirAmbulancePage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1696243144343-56a235858dce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFpciUyMEFtYnVsYW5jZSUyMFNlcnZpY2V8ZW58MHx8MHx8fDA%3D"
            alt="Medical helicopter with emergency medical team and equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/80 via-orange-800/60 to-yellow-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400  font-semibold tracking-wide">Air Ambulance Service</span>
            </div>
            
            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Emergency Medical Services
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Charter Flights • Medical Team • Patient Care
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional air ambulance services with experienced medical teams, 
              specialized aircraft, and comprehensive patient care for critical situations
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Emergency Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-yellow-800 transition transform hover:scale-105">
                Book Charter Flight
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">24/7 Emergency Support</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AIRCRAFT CHARTER SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Aircraft Charter Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Private aircraft charter services for urgent medical and time-sensitive situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Helicopter Services */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Helicopter Charter</h3>
                <p className="text-gray-700 mb-4">Rapid medical evacuation with experienced medical teams</p>
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Emergency Response</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 24/7 availability</li>
                    <li>• ICU/CCU specialists</li>
                    <li>• Advanced life support systems</li>
                    <li>• Experienced pilots</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-yellow-600 font-semibold">Critical Care</span>
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Private Jets */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Private Jet Charter</h3>
                <p className="text-gray-700 mb-4">Luxury private jets for VIP medical transport</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Premium Service</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Turbo prop jets</li>
                    <li>• Mid-size jets</li>
                    <li>• Super mid-size jets</li>
                    <li>• Heavy jets</li>
                    <li>• Business class seating</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">VIP Transport</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Medical Aircraft */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Medical Aircraft</h3>
                <p className="text-gray-700 mb-4">Specialized medical aircraft with ICU facilities</p>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Medical Care</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• King Air B-200</li>
                    <li>• Platus PC-12</li>
                    <li>• Lear Jets</li>
                    <li>• Gulfstream GIII</li>
                    <li>• Piaggio P180</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Medical Transport</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEDICAL TEAM ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Medical Team & Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced medical professionals with advanced equipment and training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical Team */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Medical Team</h3>
              <p className="text-gray-700 mb-4">
                Highly qualified doctors, paramedics, and medical assistants with years 
                of experience in emergency care and rescue operations.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">24/7 Available</span>
              </div>
            </div>

            {/* Advanced Equipment */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
              <p className="text-gray-700 mb-4">
                State-of-the-art medical equipment including ICU/CCU facilities, 
                advanced life support systems, oxygen supplies, and specialized 
                medical equipment for critical care situations.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Advanced Care</span>
              </div>
            </div>

            {/* Safety Record */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Perfect Safety</h3>
              <p className="text-gray-700 mb-4">
                Perfect safety record with zero accidents. Our trained professionals 
                undergo rigorous training for emergency operations and flight safety.
              </p>
              <div className="flex items-center gap-2 text-teal-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Safety First</span>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* Video Section */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Watch  Air Ambulance Video
          </h3>

          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Sundarban Boat Stay Tour Video"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8 lg:sticky lg:top-24 h-fit">

        {/* Advertisement */}
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-3xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            🚀 Advertise With Us
          </h3>

          <p className="text-sm opacity-90 mb-6">
            Promote your travel brand, tour packages, or special offers.
            Reach thousands of travelers visiting our platform.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact For Promotion
          </a>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-3xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            🌍 Travel Partner Promotion
          </h3>

          <p className="text-sm opacity-90 mb-6">
            Showcase your brand, hotel deals or travel experiences
            to our growing travel audience.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact For Promotion
          </a>
        </div>

      </div>
    </div>
  </div>
</section>
      {/* ================= SPECIAL SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Special Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical services with specialized care and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bed-to-Bed Service */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bed-to-Bed Transfer</h3>
              <p className="text-gray-700 mb-4">
                Complete bed-to-bed patient transfer service with trained medical escort. 
                Our team ensures safe and comfortable transfer with proper medical 
                supervision throughout the journey.
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Complete Care</span>
              </div>
            </div>

            {/* Medical Escort */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Escort</h3>
              <p className="text-gray-700 mb-4">
                Trained medical professionals accompany patients during transfer. 
                Special arrangements for wheelchairs, oxygen supplies, and other medical needs.
              </p>
              <div className="flex items-center justify-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Escort Service</span>
              </div>
            </div>

            {/* Ground Transportation */}
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Train className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ground Transport</h3>
              <p className="text-gray-700 mb-4">
                Ambulance-equipped ground transportation with stretcher facilities. 
                Special arrangements for wheelchairs and mobility assistance.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Ground Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* ================= PRICING INFORMATION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white  p-10 border border-blue-100">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pricing Information</h2>
              <p className="text-lg text-gray-600">
                Custom pricing based on your specific medical transport needs
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Price Factors</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Price will depend upon ground position of the availability of planes, place of travel, 
                availability of nearest airport, and other specific requirements. 
                Exact pricing can only be determined after getting all necessary information.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Aircraft availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Travel distance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Nearest airport access</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Medical requirements</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-green-800">Tax Exemption Benefit</h3>
              </div>
              <p className="text-green-700 font-semibold">
                This service is 100% tax exempted
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Get Exact Pricing</h3>
                <p className="text-gray-700 mb-4">
                  Contact us on WhatsApp for detailed quotation based on your specific requirements
                </p>
                <a 
                  href="https://wa.me/919804333779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp for Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

<ContactCTA />
    

    </main>
  )
}
