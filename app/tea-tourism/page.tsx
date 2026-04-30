"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function TeaTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1723214520491-7f90eeda2cdd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhJTIwVG91cmlzbSUyMnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Tea gardens in Darjeeling with lush green tea plantations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">TEA TOURISM</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl text-center font-bold mb-6 leading-tight">
              Tea Tourism in North Bengal
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Darjeeling • Mirik • Dooars • Siliguri • Tea Estates
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the enchanting world of tea gardens with heritage bungalows, 
              tea tasting sessions, and guided tours through the lush plantations
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Tea Gardens
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Tea Tour
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Tea Heritage</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEA TOURISM OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tea Tourism Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made combination packages with flexible duration and cost
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-800">Tea Estates & Gardens</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At Tea Estates / Gardens of SILIGURI-MIRIK – MAKAIBARI-DOOARS– DARJEELING-1N to 5N. 
                  Experience the authentic tea plantation lifestyle with heritage bungalow stays, 
                  guided tea tours, and immersive cultural experiences in the heart of North Bengal's 
                  tea-growing region.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Darjeeling, Mirik, Dooars, Siliguri</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Heritage Bungalows & 5* Resorts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">For 1 Person</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1602020277972-99978250c8bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhJTIwcGxhbnRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Tea plantation with workers plucking tea leaves"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED ITINERARY ================= */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Detailed Itinerary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Days of immersive tea tourism experience
            </p>
          </div>

                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
            {/* Day 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">DAY 1: Arrival & Tea Estate Check-in</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Start of tour: Arrive directly at Bagdogra Airport / NJP Railway Station. 
                  Upon arrival, meet our representative for smooth transfer to a Resort at a Tea Estate. 
                  The journey follows the course of the Teesta River. Get accommodated in Heritage Bungalows / Cottages. 
                  Lunch en-route or after check-in. Evening free. Dinner & Overnight stay at Resort/Bungalows.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Train className="w-4 h-4" />
                    Bagdogra/NJP Pickup
                  </span>
                  <span className="flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    Heritage Bungalow Stay
                  </span>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">DAY 2: Tea Estate Tour & Tea Tasting</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Morning after breakfast, embark on a guided Tea tour. The tour starts with a presentation 
                  about the history and tea manufacturing process. Visit tea fields with the estate manager, 
                  learn the art of plucking "two leaves and a bud". Visit Tea Nursery to learn about different 
                  tea varieties. Lunch at Rung Dung river banks. Visit hill factory to watch Withering, rolling, 
                  Fermenting, Drying and sorting processes. Day ends with Tea Tasting Session.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Coffee className="w-4 h-4" />
                    Tea Tasting Session
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    Factory Tour
                  </span>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">DAY 3: Local Sightseeing - Peshok & Mirik</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Early morning breakfast. Visit Peshok viewpoint and Triveni or Mirik Lake. 
                  Option for Rafting at Chitrey. Meet growers from Gielle, Runglee Rungliot and Namring 
                  tea plantations. Back to Estate for lunch. Evening drive to Tinchuley viewpoint (Optional). 
                  Late evening stroll around tea plantation. Visit local staff or read heritage history from library.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Mountain className="w-4 h-4" />
                    Peshok View Point
                  </span>
                  <span className="flex items-center gap-1">
                    <Waves className="w-4 h-4" />
                    Mirik Lake
                  </span>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">DAY 4: Darjeeling Hill Station Tour</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Morning after breakfast, full day excursion of Darjeeling. Visit Tiger Hill for panoramic 
                  views of Kangchenjunga and Mount Everest. Enjoy Toy Train ride through Batasia Loop to Ghoom 
                  and Kurseong. Stroll on Mall road. Traditional "Momo and Thukpa" lunch. Visit Himalayan 
                  Mountaineering Institute Zoo with Everest Museum and Mountaineering Museum. Evening visit Ghoom Monastery.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Train className="w-4 h-4" />
                    Toy Train Ride
                  </span>
                  <span className="flex items-center gap-1">
                    <Mountain className="w-4 h-4" />
                    Tiger Hill
                  </span>
                </div>
              </div>
            </div>

            {/* Day 4 Alternative */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">DAY 4: ALTERNATIVE - Forest Trek & Village Experience</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  After breakfast, jeep ride through Simbong forest to river Rung Dung. Cross suspension bridge 
                  to Badamtam forest. Enjoy beautiful birds, butterflies, animals and rich plant life. 
                  Reach Manjitar village. Visit Royal Kingdom of Sikkim and local Shiv temple. Picnic-style lunch. 
                  Witness volleyball match between local police and villagers at 4:30 pm while sipping tea.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Trees className="w-4 h-4" />
                    Forest Trek
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Village Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Day 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">DAY 5: Lamahatta Orchard Visit</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Post breakfast, leave for Lamahatta Orchard. En-route visit Clooney Sisters' Church and School. 
                  10 minutes drive to start trek leading to Lamahatta Orchard. Steep trail climb for 10 minutes 
                  to orchard with spectacular hillside views. Tea with resident caretaker, then descent to main track. 
                  Visit Buddhist and Sai Baba centers within the Estate.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <TreePine className="w-4 h-4" />
                    Orchard Visit
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Cultural Centers
                  </span>
                </div>
              </div>
            </div>

            {/* Day 6 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">DAY 6: River Camp & Nature Activities</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Morning after breakfast, trek down the hill or drive stopping for short walks. Pass Bora Gaon Village 
                  and Simbong Tea Division, past Sim Jhora stream and waterfall, into Simbong Forest. Refreshments provided. 
                  Reach Tea Estate Campsite on River Rungit banks - rock pools, fishing, bird watching, sandy shore relaxation. 
                  Afternoon drive/trek back to bungalow.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Fish className="w-4 h-4" />
                    River Activities
                  </span>
                  <span className="flex items-center gap-1">
                    <Bird className="w-4 h-4" />
                    Bird Watching
                  </span>
                </div>
              </div>
            </div>

            {/* Day 7 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">DAY 7: Departure via Mirik & Nepal Market</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  After breakfast, Check-out (11.00 am). On return journey, visit Mirik, Gopal Dhara View Point & 
                  Pashupati Market in Nepal. Lunch at Mirik. Proceed towards Bagdogra Airport (IXB) / New Jalpaiguri 
                  Railway Station (NJP), 3-4 hrs drive in AC vehicle & drop before 06.00pm for forwarding journey. Tour ends.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <ShoppingBag className="w-4 h-4" />
                    Nepal Market Shopping
                  </span>
                  <span className="flex items-center gap-1">
                    <Train className="w-4 h-4" />
                    Airport/Railway Drop
                  </span>
                </div>
              </div>
            </div>
          </div>
              <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Tea Tour Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Atlantis Experience"
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

   

      {/* ================= TEA TOURISM ADD-ON PRICING ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tea Tourism Add-on Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Tea Garden Heritage - Per Person Basis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-green-700 mb-2">1N/2D</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">₹ 19,000/-</p>
              <p className="text-gray-600 mb-4">Quick tea garden escape</p>
              <a href="/book-tour" className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Book Now
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-green-700 mb-2">2N/3D</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">₹ 28,000/-</p>
              <p className="text-gray-600 mb-4">Complete tea estate experience</p>
              <a href="/book-tour" className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Book Now
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-green-700 mb-2">3N/4D</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">₹ 37,000/-</p>
              <p className="text-gray-600 mb-4">Extended tea heritage tour</p>
              <a href="/book-tour" className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Book Now
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-green-700 mb-2">4N/5D</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">₹ 46,000/-</p>
              <p className="text-gray-600 mb-4">Comprehensive tea journey</p>
              <a href="/book-tour" className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Book Now
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-green-700 mb-2">5N/6D</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">₹ 64,000/-</p>
              <p className="text-gray-600 mb-4">Ultimate tea heritage experience</p>
              <a href="/book-tour" className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Book Now
              </a>
            </div>
          </div>

          <div className="bg-green-100 rounded-xl p-6 mt-8">
            <h4 className="font-bold text-green-800 mb-3">Important Information</h4>
            <div className="space-y-2 text-gray-700">
              <p>• All rates are per person basis</p>
              <p>• Includes heritage bungalow accommodation</p>
              <p>• All meals and tea tasting sessions included</p>
              <p>• Guided tea estate tours included</p>
              <p>• Airport/railway station transfers included</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INCLUSIONS & EXCLUSIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Includes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-800">Package Includes</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-700">Pick-up & Drop from Bagdogra Airport/NJP Railway Station</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-700">Accommodation in 5* Resort / Heritage Bungalows in Tea Estates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-700">Bed Tea + Breakfast + Lunch/Picnic Basket + Evening Tea & Snacks + Dinner</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-700">All Sight-seeing & Private Transfers</span>
                </li>
              </ul>
            </div>

            {/* Excludes */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-800">Package Excludes</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✗
                  </div>
                  <span className="text-gray-700">Price of Air / AC Train Fare (if availed)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✗
                  </div>
                  <span className="text-gray-700">Personal expenses and shopping</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✗
                  </div>
                  <span className="text-gray-700">Additional activities not mentioned in itinerary</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✗
                  </div>
                  <span className="text-gray-700">Travel insurance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

  
      <ContactCTA />

    </main>
  )
}
