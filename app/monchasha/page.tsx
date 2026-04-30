"use client"

import Image from 'next/image'
import { Waves, MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, Ship, Utensils, Fish, Beer, TreePine, Train, Mountain, Link, Sunrise, Plane } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function MonchashaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white to-green-50 py-24 overflow-hidden">
        {/* Decorative Image - Touching top and right */}
        <img
          src="/Decore.png"
          alt="Decorative elements"
          className="absolute top-0 right-0 w-auto h-full object-contain"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ---------- LEFT CONTENT ---------- */}
          <div>
            <div className="flex items-center  gap-2 mb-4">
              <Home className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Sustainable Eco Village</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Monchasha
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Where Tradition Meets Sustainability - Village Life Experience
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Located in Contai, home to sustainable tourism and authentic village life,
              with the perfect blend of Bengali culture and eco-friendly practices
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/book-tour" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Experience Village Life
              </a>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                Explore Sustainability
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Monchasha.jpeg"
              alt="Monchasha eco village with traditional Bengali village life"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>

      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Home className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Eco Village</h3>
              <p className="text-gray-600 text-sm">Sustainable living</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TreePine className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Organic</h3>
              <p className="text-gray-600 text-sm">Natural farming</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Cultural</h3>
              <p className="text-gray-600 text-sm">Traditional life</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Authentic</h3>
              <p className="text-gray-600 text-sm">Real experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HISTORICAL BACKGROUND ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sustainable Tourism Initiative</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Village Concept to Eco Paradise - A green revolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-green-600">The Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  Monchasha Eco Village is a sustainable tourism destination promoting self-sufficient village life. 
                  It was created with the vision of showcasing traditional Bengali rural life while implementing 
                  modern eco-friendly practices.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Cultural Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Experience Bengali culture, folk programs, and eco-friendly practices in harmony with nature. 
                  The village offers authentic rural experiences from farming to traditional crafts and cuisine.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-blue-600">Sustainable Practices</h3>
                <p className="text-gray-700 leading-relaxed">
                  The village operates on principles of sustainability, with organic farming, renewable energy, 
                  waste management, and community-based tourism that benefits local residents directly.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/Monchasha.jpeg"
                alt="Monchasha eco village showing sustainable practices and village life"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-xl font-bold">
                Since 2010
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLACES OF INTEREST ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Village Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the authentic jewels of Monchasha - from farming to cultural activities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Agricultural Activities */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <TreePine className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Agricultural Activities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Organic Farming
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Vegetable Harvesting
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Traditional Agriculture
                  </li>
                </ul>
              </div>
            </div>

            {/* Cultural Programs */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Cultural Programs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Folk Dance Shows
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Traditional Music
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Village Storytelling
                  </li>
                </ul>
              </div>
            </div>

            {/* Eco Activities */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Home className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Eco Activities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Nature Walks
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Bird Watching
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-500" />
                    Sustainable Tours
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extended Attractions Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Organic Farm", "Village Tour", "Folk Program", "Traditional Cooking",
              "Nature Trail", "Bird Sanctuary", "Craft Workshop", "Cultural Center",
              "Eco Lodge", "Community Hall", "Village School", "Local Market"
            ].map((place, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:bg-green-50 transition cursor-pointer">
                <MapPin className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium">{place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEARBY DESTINATIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nearby Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more gems around Monchasha
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="/digha">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Digha.jpeg"
                  alt="Digha Beach"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Digha</h3>
                  <p className="text-gray-200">Brighton of the East</p>
                </div>
              </div>
            </a>
            <a href="/mandarmoni">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Mandarmoni.jpeg"
                  alt="Mandarmoni Beach"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Mandarmoni</h3>
                  <p className="text-gray-200">Adventure Beach Paradise</p>
                </div>
              </div>
            </a>
            <a href="/contai">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Contai.jpeg"
                  alt="Contai Town"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Contai</h3>
                  <p className="text-gray-200">Coastal Town</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ================= CUISINE SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Utensils className="w-8 h-8 text-orange-500" />
              <h2 className="text-4xl md:text-5xl font-bold">Organic Village Cuisine</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farm-to-table traditional Bengali village delicacies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Organic Vegetables", desc: "Fresh from village farms", icon: "🥬" },
              { name: "Traditional Curry", desc: "Authentic Bengali style", icon: "🍛" },
              { name: "Farm Fresh Eggs", desc: "Free-range poultry", icon: "🥚" },
              { name: "Local Rice", desc: "Traditional varieties", icon: "🍚" },
              { name: "Village Sweets", desc: "Homemade delicacies", icon: "🍮" },
              { name: "Fresh Milk", desc: "From village cows", icon: "🥛" },
              { name: "Organic Fruits", desc: "Seasonal produce", icon: "🍎" },
              { name: "Traditional Tea", desc: "Herbal infusions", icon: "🍵" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Farm-to-Table Experience</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Organic", "Traditional", "Sustainable", "Local", "Fresh", "Authentic", "Village"].map((culture, index) => (
                <span key={index} className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
                  {culture}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Village Life Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From farming to cultural programs - Monchasha offers authentic rural experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition">
              <TreePine className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Farming Experience</h3>
              <p className="text-gray-700 mb-4">Organic Farming • Vegetable Harvesting • Traditional Agriculture • Farm Tours</p>
              <button className="text-green-600 font-semibold hover:text-green-700">Farm Activities →</button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Cultural Programs</h3>
              <p className="text-gray-700 mb-4">Folk Dance • Traditional Music • Village Stories • Craft Workshops</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">Cultural Tours →</button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Eco Living</h3>
              <p className="text-gray-700 mb-4">Sustainable Tours • Nature Walks • Eco Education • Green Practices</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Eco Experience →</button>
            </div>
          </div>
        </div>
      </section>

      <PackagePricing 
        title="Monchasha Eco Village Packages"
        subtitle="Choose your perfect sustainable village experience duration"
      />
      <ContactCTA />

    </main>
  )
}
