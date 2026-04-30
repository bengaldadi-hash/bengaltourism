"use client"

import Image from 'next/image'
import { Mountain, Train, MapPin, Utensils, Camera, Calendar, Star, Clock, Users, Link, Sunrise, Home, Plane, } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function DarjeelingPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white to-orange-50 py-24 overflow-hidden">
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
              <Mountain className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Queen of the Hills</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Darjeeling
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                What Alps is to Switzerland – Kanchendzonga is to Bengal
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Located at 6,800 ft above sea level, home to the finest Darjeeling Tea on earth,
              with a backdrop of mighty snow-capped Kanchendzonga
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/book-tour" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Book Your Journey
              </a>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                Explore Attractions
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/download.jpeg"
              alt="Kanchendzonga mountain range with Darjeeling tea gardens"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>

      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mountain className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">6,800 ft</h3>
              <p className="text-gray-600 text-sm">Above sea level</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Train className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">UNESCO Heritage</h3>
              <p className="text-gray-600 text-sm">Toy Train & Ghoom Station</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">Finest Tea</h3>
              <p className="text-gray-600 text-sm">World's best Darjeeling Tea</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">40+ Attractions</h3>
              <p className="text-gray-600 text-sm">Tiger Hill to Tea Gardens</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HISTORICAL BACKGROUND ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Rich Historical Heritage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a sleepy hamlet to the Queen of Hills - A journey through time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-orange-600">The Early Days</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the early 19th century, a patrol of the East India Company exploring access to Sikkim
                  discovered a sleepy hamlet atop a thickly wooded ridge with a brilliant view of Mt. Kangchendzonga.
                  The British soul, yearning for cold and rain, instantly recognized a 'hill station'.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Frontier Town Era</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the 1840s & '50s, Darjeeling became a haven for international misfits - Tibetan & East European
                  refugees, fleeing Russians, displaced monarchs like the Emir of Afghanistan, and spies of every persuasion
                  from British to Japanese, all drawn to this political compost shrouded in high mists.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-green-600">The Name's Origin</h3>
                <p className="text-gray-700 leading-relaxed">
                  The name is believed to be a corruption of Dorje-ling, literally the 'land of the mystic thunderbolt'
                  from Indo-Tibetan Buddhist mythology. However, the Earl of Ronaldshay claimed it came from Lama
                  Dorje-rinzing, founder of the monastery on Observatory Hill.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/1827756-aa-26731221.webp"
                alt="Historic Darjeeling with colonial architecture"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-4 rounded-xl font-bold">
                Since 1817
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
         <div className="flex flex-col  space-y-2">


        <div className='flex gap-5 items-center'>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                 Darjeeling – Kalimpong Tour Itinerary
              </h2>
               <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
              Book now For 5N/6D
            </a>
              
            </div>
           <p className="text-gray-600 max-w-2xl">
                Detailed sightseeing plan covering Darjeeling, Kurseong,
                Kalimpong & Mirik.
              </p>
          </div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

  {/* LEFT SIDE – ITINERARY */}
  <div className="lg:col-span-2 space-y-8">

    {/* Day 1 */}
    <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-orange-500 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
        <MapPin className="w-6 h-6" />
        Day 1 – Arrival & Darjeeling Transfer
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Receive at NJP / IXB / Tenzing Norgay Bus Stand. Transfer to
        Darjeeling (6750 ft), known as the Queen of the Hills.
        Scenic drive through tea gardens with Himalayan views.
        Check-in at hotel. Evening free at Mall Road.
        Dinner & Overnight stay at Darjeeling.
      </p>
    </div>

    {/* Day 2 */}
    <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-yellow-500 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center gap-2">
        <Sunrise className="w-6 h-6" />
        Day 2 – Tiger Hill & City Tour
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Early morning visit to Tiger Hill for sunrise view.
        En-route visit Ghoom Monastery & Batasia Loop.
        After breakfast, city tour including HMI, Zoo,
        Ropeway, Tea Estate, Japanese Temple,
        Tibetan Refugee Centre & more.
        Dinner & Overnight at Darjeeling.
      </p>
    </div>

    {/* Day 3 */}
    <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-green-500 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
        <Mountain className="w-6 h-6" />
        Day 3 – Scenic Local Sightseeing
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Full day tour covering Ghoom, Lepchajagat,
        Lamahatta, Teen Chuley, Lover’s View Point,
        and Tea Estates. Return by evening.
        Dinner & Overnight at Darjeeling.
      </p>
    </div>

    {/* Day 4 */}
    <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-purple-500 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
        <Train className="w-6 h-6" />
        Day 4 – Kurseong / Toy Train
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Visit Kurseong attractions including Eagle’s Craig,
        Dow Hills, Makaibari Tea Estate.
        Optional Toy Train Ride (subject to availability).
        Dinner & Overnight at Darjeeling.
      </p>
    </div>

    {/* Day 5 */}
    <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
        <Home className="w-6 h-6" />
        Day 5 – Kalimpong Transfer / South Sikkim (Optional)
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Transfer to Kalimpong. Visit Durpin Monastery,
        Deolo Hill, Morgan House etc.
        OR Optional South Sikkim tour (Char Dham,
        Temi Tea Garden, Namchi – extra charge).
        Dinner & Overnight at Kalimpong.
      </p>
    </div>

    {/* Day 6 */}
    <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-yellow-500 hover:shadow-xl transition">
      <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center gap-2">
        <Plane className="w-6 h-6" />
        Day 6 – Mirik & Departure
      </h3>
      <p className="text-gray-700 leading-relaxed">
        After breakfast check-out.
        Visit Mirik, Gopal Dhara View Point,
        Pashupati Market (Nepal border).
        Drop at NJP / IXB before 6 PM.
        Tour ends with beautiful memories.
      </p>
    </div>

  </div>

  {/* RIGHT SIDE – VIDEO + AD */}
  <div className="space-y-8 sticky top-8 self-start">

    {/* Video Section */}
    <div className="bg-white rounded-3xl shadow-lg p-6 ">
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        Watch Darjeeling Tour Video
      </h3>

      <div className="aspect-video rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Darjeeling Tour"
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
      {/* ================= PLACES OF INTEREST ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Places of Interest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the crown jewels of Darjeeling - from majestic mountains to serene monasteries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Major Attractions */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Mountain Views</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Tiger Hill - Sunrise over Kanchendzonga
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Observatory Hill - Panoramic views
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Batasia Loop - Spiral railway track
                  </li>
                </ul>
              </div>
            </div>

            {/* Heritage Sites */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Train className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Heritage Sites</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Himalayan Heritage Train - UNESCO Site
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Ghoom Monastery - Oldest in area
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Himalayan Mountaineering Institute
                  </li>
                </ul>
              </div>
            </div>

            {/* Gardens & Parks */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Gardens & Parks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Padmaja Naidu Zoological Park
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Lloyd Botanical Garden
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Rock Garden & Ganga Maiya Park
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extended Attractions Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Japanese Peace Pagoda", "Bhutia Busty Monastery", "Shrubbery Nightingale Park",
              "Natural History Museum", "Dhirdham Temple", "Chowrasta", "Tea Gardens", "Makaibari Tea Estate",
              "Happy Valley Tea Estate", "Takdah", "Mungpoo", "Tibetan Refugee Center"
            ].map((place, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:bg-orange-50 transition cursor-pointer">
                <MapPin className="w-6 h-6 text-orange-500 mx-auto mb-2" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nearby Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extend your journey to these enchanting destinations around Darjeeling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD */}
            {[
              { name: "Mirik", img: "/Mirik.jpeg", desc: "Divine Lake & Orange Orchards", link: "/mirik" },
              { name: "Kurseong", img: "/Kurseong.jpeg", desc: "Land of the White Orchid", link: "/kurseong" },
              { name: "Kalimpong", img: "/Kalimpong.jpeg", desc: "Flower Nurseries & Views", link: "/kalimpong" },
              { name: "Lava", img: "/Lava.jpg", desc: "Gateway to Neora Valley", link: "/lava" },
              { name: "Rishap", img: "/Rishap.jpeg", desc: "Misty Magic", link: "/rishap" },
            ].map((place, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
              >
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white w-full">

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                    <p className="text-gray-200 mb-4">{place.desc}</p>
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-3  transition duration-500">



                    <a
                      href="/book-tour"
                      className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
                    >
                      Book Now for 2N/3D
                    </a>


                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>


      {/* ================= CUISINE SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Utensils className="w-8 h-8 text-orange-500" />
              <h2 className="text-4xl md:text-5xl font-bold">Must Try Cuisine</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authentic local delicacies influenced by Bengal's hill region cultures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Momos", desc: "Steamed dumplings with vegetable or meat filling", icon: "🥟" },
              { name: "Thukpa", desc: "Tibetan noodle soup with vegetables and meat", icon: "🍜" },
              { name: "Sel Roti", desc: "Traditional Nepali circular rice bread", icon: "🫓" },
              { name: "Gundruk", desc: "Fermented leafy green vegetable dish", icon: "🥬" },
              { name: "Aloo Dum", desc: "Spicy potato preparation with local spices", icon: "🥔" },
              { name: "Darjeeling Tea", desc: "World's finest aromatic tea varieties", icon: "🍵" },
              { name: "Churpee", desc: "Traditional cheese made from yak milk", icon: "🧀" },
              { name: "Kinema", desc: "Fermented soybean delicacy", icon: "🫘" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Cultural Influences</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Gorkha", "Tibetan", "Sikkimese", "Bhutia", "Nepali", "Bhutanese", "Bengali"].map((culture, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Adventures & Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From thrilling treks to peaceful experiences - Darjeeling offers it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Trekking</h3>
              <p className="text-gray-700 mb-4">Tangtey • River Rafting • Singla • Majitar</p>
              <button className="text-green-600 font-semibold hover:text-green-700">Explore Treks →</button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Camera className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Photography</h3>
              <p className="text-gray-700 mb-4">Sunrise at Tiger Hill • Tea Gardens • Mountain Views</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Photo Tours →</button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Train className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Heritage Train</h3>
              <p className="text-gray-700 mb-4">Toy Train Ride • Ghoom Station • Batasia Loop</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">Book Journey →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing
        title="Darjeeling Tour Packages"
        subtitle="Choose your perfect Himalayan getaway duration"
      />


      <ContactCTA />

    </main>
  )
}
