"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function ThemeToursPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513475298257-6dd063e6d6aa?w=1920&h=1080&fit=crop"
            alt="Cultural festival with colorful decorations and traditional Bengali celebrations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-pink-800/60 to-purple-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-yellow-400 font-semibold tracking-wide">Theme Tours & Short Breaks</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Theme Tours from Kolkata
              <span className="block text-3xl md:text-5xl mt-2 text-pink-300">
                Cultural Festivals • Heritage • Adventure • Relaxation
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the vibrant cultural tapestry and natural beauty of West Bengal 
              through specially curated theme tours and rejuvenating short breaks
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Theme Tours
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-800 transition transform hover:scale-105">
                Book Short Breaks
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover cultural Bengal</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THEME TOURS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Theme Tours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in Bengal's rich cultural heritage through these special themed tours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ajodhya Pahar */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <PartyPopper className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Ajodhya Pahar Hunting Festival</h3>
                <p className="text-gray-700 mb-4">Experience the traditional hunting festival with tribal performances and cultural programs</p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Festival Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Traditional hunting rituals</li>
                    <li>• Tribal dance performances</li>
                    <li>• Local craft exhibitions</li>
                    <li>• Cultural exchange programs</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">2N/3D Package</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Baranti */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Baranti Terracotta Crafts</h3>
                <p className="text-gray-700 mb-4">Explore the famous terracotta hub and traditional handicraft villages</p>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Craft Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Terracotta pottery workshops</li>
                    <li>• Traditional craft demonstrations</li>
                    <li>• Artisan village visits</li>
                    <li>• Handicraft shopping</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Day Tour Available</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Bishnupur */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bishnupur Heritage Tour</h3>
                <p className="text-gray-700 mb-4">Discover the ancient city with Okra artifacts and traditional crafts</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Heritage Sites</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Okra museum & artifacts</li>
                    <li>• Traditional craft villages</li>
                    <li>• Historical monuments</li>
                    <li>• Cultural performances</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">2N/3D Package</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Bethuadari */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <PartyPopper className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bethuadari Clay Modelling</h3>
                <p className="text-gray-700 mb-4">Visit the traditional clay idol makers' workshop and witness the craft process</p>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Workshop Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Clay idol making demonstration</li>
                    <li>• Traditional pottery techniques</li>
                    <li>• Artisan interaction</li>
                    <li>• Craft shopping opportunities</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-purple-600 font-semibold">Day Tour Available</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REGIONAL HIGHLIGHTS ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Regional Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique attractions and cultural treasures across West Bengal's diverse regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Purulia", desc: "Ajodhya Pahar, Chhau Dance", icon: "🏹" },
              { name: "Bankura", desc: "Susunia Hills, Terracotta", icon: "🏛️" },
              { name: "Birbhum", desc: "Shantiniketan, Wildlife", icon: "🦌" },
              { name: "Burdwan", desc: "Bardhaman Temple, History", icon: "⛪" },
              { name: "Murshidabad", desc: "Silk City, Hazar Duari", icon: "🧵" },
              { name: "Malda", desc: "Ancient Mosques, Mangoes", icon: "🕌" },
              { name: "Nadia", desc: "Krishnanagar, Terracotta", icon: "🏺" },
              { name: "North 24 Parganas", desc: "Palaces, Gardens", icon: "🏰" },
              { name: "South 24 Parganas", desc: "Beaches, Delta", icon: "🏖" }
            ].map((region, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition">{region.icon}</div>
                <h3 className="font-bold text-lg mb-2">{region.name}</h3>
                <p className="text-gray-600 text-sm">{region.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SHORT BREAKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Quick Short Breaks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejuvenating getaways to beaches, hills, and cultural destinations near Kolkata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digha */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Digha Beach Escape</h3>
                <p className="text-gray-700 mb-4">Perfect weekend getaway with golden beaches and fresh seafood</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Beach camping & water sports</li>
                    <li>• Fresh seafood dining</li>
                    <li>• Sunset views</li>
                    <li>• Local market visits</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">2N/3D from ₹8,000</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Mandarmoni */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Sun className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Mandarmoni Beach Retreat</h3>
                <p className="text-gray-700 mb-4">Romantic beach destination with rolling waves and bonfire evenings</p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Romantic beach walks</li>
                    <li>• Beach bonfire dinners</li>
                    <li>• Water sports activities</li>
                    <li>• Red crab specialities</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">2N/3D from ₹9,000</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Sundarban */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Trees className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Sundarban Mangrove</h3>
                <p className="text-gray-700 mb-4">Spiritual journey through mangrove forests and sacred pilgrimage sites</p>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Mangrove boat safaris</li>
                    <li>• Wildlife watching</li>
                    <li>• Temple visits</li>
                    <li>• Village experiences</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">2N/3D from ₹7,000</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULTURAL FESTIVALS ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Festivals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the vibrant festival culture of West Bengal throughout the year
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Durga Puja", season: "Sep-Oct", desc: "Biggest festival, clay idols, pandals", icon: "🙏" },
              { name: "Kali Puja", season: "Oct-Nov", desc: "Devotional worship, temple fairs", icon: "⛪" },
              { name: "Saraswati Puja", season: "Jan-Feb", desc: "Goddess of learning, cultural programs", icon: "📚" },
              { name: "Poila Boishakh", season: "Apr", desc: "Bengali New Year, sweets, gifts", icon: "🎆" },
              { name: "Basant Utsav", season: "Spring", desc: "Spring festival, colors, flowers", icon: "🌸" },
              { name: "Holi", season: "Mar", desc: "Festival of colors, sweets, celebrations", icon: "🎨" },
              { name: "Rath Yatra", season: "Jun-Jul", desc: "Chariot festivals, processions", icon: "🏛️" },
              { name: "Janmashtami", season: "Aug-Sep", desc: "Krishna's birth, cultural events", icon: "👶" }
            ].map((festival, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition">{festival.icon}</div>
                <h3 className="font-bold text-lg mb-2">{festival.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{festival.season}</p>
                <p className="text-gray-700">{festival.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCAL CUISINE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Must Try Local Cuisine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We highly recommend authentic Bengali cuisine - eat with your hands for enhanced flavors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Fish & Crab", items: "Ilish, Hilsa, Golda Chingri, Bagda, Prawn, Crab", icon: "🦐" },
              { name: "Lamb & Vegetable", items: "Mangsho, Mutton, Chholar, Kosha Mangsho", icon: "🍖" },
              { name: "Rice & Bhat", items: "Steamed rice varieties, Basanti, Gobindo Bhog", icon: "🍚�" },
              { name: "Sweets & Mishti", items: "Rosogolla, Sandesh, Payesh, Sondesh", icon: "🍮" },
              { name: "Street Food", items: "Kati Roll, Fuchka, Jhaal Muri, Mughlai", icon: "🌮" },
              { name: "Traditional Breads", items: "Luchi, Porota, Radhaballabhi", icon: "🫓" }
            ].map((cuisine, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 text-center hover:shadow-xl transition group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition">{cuisine.icon}</div>
                <h4 className="font-bold text-lg mb-2">{cuisine.name}</h4>
                <p className="text-gray-600 text-sm">{cuisine.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PackagePricing
        title="Theme Tour Packages"
        subtitle="Choose your perfect cultural adventure duration"
      />

      <ContactCTA />

    </main>
  )
}
