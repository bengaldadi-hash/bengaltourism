"use client"

import Image from 'next/image'
import { Trees, MapPin, Calendar, Users, Star, Clock, Camera, Eye, Bird, Truck, Mountain, Car, Home, IndianRupee, AlertCircle, CheckCircle, Compass } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function DooarsPage() {
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
              <Trees className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Wildlife Paradise</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Dooars
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Where Nature Meets Adventure
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Explore lush forests, wildlife sanctuaries, and tea gardens of Dooars
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Wildlife
              </button>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                Book Safari
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/Jaldapara-elephant-safari-in-Jaldapara-National-Park.jpeg"
              alt="Jaldapara National Park elephant safari"
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
                <Truck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">200+ Elephants</h3>
              <p className="text-gray-600 text-sm">Majestic wildlife</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Eye className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">One-Horned Rhino</h3>
              <p className="text-gray-600 text-sm">Star attraction</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trees className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">5 National Parks</h3>
              <p className="text-gray-600 text-sm">Pristine forests</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mountain className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Tea Gardens</h3>
              <p className="text-gray-600 text-sm">Scenic plantations</p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= DETAILED ITINERARY ================= */}
      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">
              Visit and Explore Dooars
            </h1>
            <p className="text-lg text-gray-700">
              Jaldapara, Gorumara, Buxa, Chilapata with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="DOOARS JUNGLE CIRCUIT"
                subtitle="Wildlife Paradise with JALDAPARA – GORUMARA – BUXA – CHILAPATA"
              />

              {/* MAIN DAY WISE */}
              <div className="grid gap-10 grid-col-1">
                <DayCard title="Day – 1">
                  Arrival at NJP/Bagdogra: Our representative will receive you at NJP Railway Station or Bagdogra Airport. After pickup, proceed towards Dooars through the beautiful tea gardens of Dooars region. En-route visit the magnificent Coronation Bridge over River Teesta. Arrive at Jaldapara and check-in to your hotel/resort. Lunch at the resort. In the evening, you can explore the nearby surroundings or relax at the resort. Evening cultural program with tribal dance performance (optional). Dinner and overnight stay at Jaldapara.
                </DayCard>

                <DayCard title="Day – 2">
                  Jaldapara Elephant Safari & Local Sightseeing: Early morning proceed for the most exciting Elephant Safari in Jaldapara National Park (1.5 hours). Experience the thrill of riding through the tall grasslands and spotting one-horned rhinoceros, elephants, bison, and various deer species. Return to resort for breakfast. After breakfast, visit the nearby Jayanti River and Buxa Fort area. Explore the historic Buxa Fort and enjoy the scenic beauty of Jayanti riverbed. Visit Mahakal Temple for spiritual experience. Evening visit to Sikiyajhora for beautiful sunset views. Dinner and overnight stay at Jaldapara.
                </DayCard>

                <DayCard title="Day – 3">
                  Chilapata Forest & Cooch Behar: After breakfast, check-out from Jaldapara hotel and proceed towards Chilapata Forest. Enjoy the dense forest drive and spot various wildlife species. Visit the Chilapata Forest Watch Tower for wildlife viewing. Proceed to Cooch Behar to visit the magnificent Cooch Behar Rajbari (Royal Palace) - a UNESCO World Heritage Site. Visit Madan Mohan Temple and explore the royal architecture of Cooch Behar. Lunch at Cooch Behar. After lunch, proceed to Phuntsholing (Bhutan Border) if time permits, or directly to Lataguri. Check-in at Lataguri resort. Dinner and overnight stay at Lataguri.
                </DayCard>

                <DayCard title="Day – 4">
                  Gorumara Jeep Safari & Murti River: Early morning proceed for Jeep Safari in Gorumara National Park. Spot Indian bison, elephants, leopards, and various bird species. Visit the famous watchtowers - Jatraposad, Chapramari, and Chukchuki for wildlife viewing. Return to resort for breakfast. After breakfast, proceed to Murti River - a beautiful spot surrounded by forests and hills. Enjoy the scenic beauty and peaceful environment. Visit Samsing and Suntalekhola for breathtaking mountain views and orange orchards. Evening free for leisure at Murti riverside. Dinner and overnight stay at Lataguri/Murti.
                </DayCard>

                <DayCard title="Day – 5">
                  Bindu, Jhalong & Rocky Island: After breakfast, proceed for a full day excursion to Bindu and Jhalong - the last hamlets of West Bengal near the Bhutan border. Visit the beautiful Bindu Dam and enjoy the confluence of three rivers. At Jhalong, enjoy the beautiful river views and the hydroelectric project. Proceed to Rocky Island - a beautiful picnic spot with river rocks and natural beauty. Lunch at Jhalong. Evening return to Lataguri. Optional cultural program in the evening. Dinner and overnight stay at Lataguri.
                </DayCard>

                <DayCard title="Day – 6">
                  Departure: After breakfast, check-out from the hotel. If time permits, visit Gajoldoba Teesta Barrage for bird watching and scenic views. Proceed towards NJP/Bagdogra for your onward journey with unforgettable memories of the Dooars wilderness. Tour ends.
                </DayCard>
              </div>

              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="SAMSING & SUNTALEKHOLA"
                subtitle="Add-on (or) Separately From LATAGURI"
              />
              <div className="grid gap-10 grid-col-1">
                <DayCard title="Day – 1">
                  Hill Station Exploration: After breakfast from Lataguri, proceed towards Samsing - a beautiful hill station known for its orange orchards and scenic beauty. Visit Suntalekhola - a beautiful valley with pristine natural beauty. Enjoy the breathtaking views of the Eastern Himalayas. Visit the famous Rocky Island and Mouchuki viewpoint. Lunch at Samsing. Evening enjoy the peaceful environment of the hills. Dinner and overnight stay at Samsing/Suntalekhola.
                </DayCard>

                <DayCard title="Day – 2">
                  Neora Valley & Lava: After breakfast, proceed to Neora Valley National Park - one of the most pristine forests in the region. Enjoy the biodiversity and spot various Himalayan species. Proceed to Lava - a beautiful small village with Buddhist monasteries. Visit the Lava Monastery and enjoy the panoramic views of the Himalayas. Lunch at Lava. Evening return to Samsing. Dinner and overnight stay at Samsing.
                </DayCard>

                <DayCard title="Day – 3">
                  Lolegaon & Rishyap: After breakfast, proceed to Lolegaon - famous for its canopy walk and beautiful views of Kanchenjunga. Experience the thrilling canopy walk through the forest. Proceed to Rishyap - a small Himalayan village with stunning mountain views. Lunch at Rishyap. Evening return to Lataguri or proceed to NJP/Bagdogra for departure. Tour ends.
                </DayCard>
              </div>

              <AddOnSection
                title="BHUTAN BORDER TOUR"
                subtitle="Add-on (or) Separately From PHUNTSHOLING"
              />
              <div className="grid gap-10 grid-col-1">
                <DayCard title="Day – 1">
                  Phuntsholing Exploration: After breakfast, proceed to Phuntsholing - the gateway to Bhutan. Complete immigration formalities. Visit the Zangthoo Pelri Lhakhang - a beautiful Buddhist temple. Explore the local market and Bhutanese culture. Visit the Amo Chuu Crocodile Breeding Centre. Lunch at Phuntsholing. Evening free to explore the border town. Dinner and overnight stay at Phuntsholing.
                </DayCard>

                <DayCard title="Day – 2">
                  Bhutan Sightseeing: After breakfast, proceed for local sightseeing in Phuntsholing. Visit the Karbandi Monastery for panoramic views of Phuntsholing and surrounding areas. Explore the Bhutanese architecture and lifestyle. Visit the local handicraft centers. Lunch at Phuntsholing. Evening free for shopping Bhutanese souvenirs. Dinner and overnight stay at Phuntsholing.
                </DayCard>

                <DayCard title="Day – 3">
                  Return to India: After breakfast, check-out from Phuntsholing hotel. Complete exit formalities. Proceed towards Jaigaon (Indian side). Visit the local markets and return to Lataguri or proceed to NJP/Bagdogra for departure. Tour ends.
                </DayCard>
              </div>
            </div>
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Dooars Tour Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Digha Tour"
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
      </div>
      {/* ================= TOUR PACKAGES ================= */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made combination packages designed for your perfect Dooars experience
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Jungle Circuit - Jaldapara, Gorumara, Murti</h3>
                </div>
                <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
                  Book now For 5N/6D
                </a>
              </div>
            </div>

            <div className="bg-white border-2 border-green-600 border-t-0 rounded-b-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 1</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• NJP/Bagdogra pickup</li>
                    <li>• Drive to Jaldapara (120km/3.5hrs)</li>
                    <li>• Via Coronation Bridge</li>
                    <li>• Bengal Safari Park (if time permits)</li>
                    <li>• Check-in & Elephant Safari booking</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 2</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Elephant Safari (1.5hrs)</li>
                    <li>• Jayanti & Buxa Fort visit</li>
                    <li>• Mahakal Temple trek</li>
                    <li>• Tiger Rehabilitation Centre</li>
                    <li>• Sikiyajhora evening</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 3</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Chilapata Forest</li>
                    <li>• Cooch Behar Rajbari</li>
                    <li>• Madan Mohan Temple</li>
                    <li>• Phuntsholing (Bhutan)</li>
                    <li>• Zangthoo Pelri Lhakhang</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 4</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Jhalong & Bindu visit</li>
                    <li>• Murti River exploration</li>
                    <li>• Scenic beauty of hills</li>
                    <li>• Transfer to Lataguri</li>
                    <li>• Check-in at resort</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 5</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Gorumara Jeep Safari</li>
                    <li>• Samsing & Suntalekhola</li>
                    <li>• Rocky Island visit</li>
                    <li>• Jatraposad Watch Tower</li>
                    <li>• Cultural program evening</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <h4 className="font-bold">Day 6</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Breakfast & checkout</li>
                    <li>• Gajoldoba visit (if time permits)</li>
                    <li>• Drive to NJP/Bagdogra</li>
                    <li>• Drop for onward journey</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section> */}

      {/* ================= WILDLIFE SANCTUARIES ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Wildlife Sanctuaries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the pristine national parks and wildlife sanctuaries of Dooars
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Truck className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Jaldapara National Park</h3>
                <p className="text-gray-700 mb-4">Famous for one-horned rhinoceros and elephant safaris</p>
                <div className="flex items-center gap-2 text-green-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Alipurduar District</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Eye className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Gorumara National Park</h3>
                <p className="text-gray-700 mb-4">Home to Indian bison, leopards, and diverse birdlife</p>
                <div className="flex items-center gap-2 text-orange-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Jalpaiguri District</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Trees className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Buxa Tiger Reserve</h3>
                <p className="text-gray-700 mb-4">Historic fort and diverse wildlife with trekking opportunities</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Alipurduar District</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Bird className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Chapramari Wildlife Sanctuary</h3>
                <p className="text-gray-700 mb-4">Birdwatcher's paradise with elephants and bison</p>
                <div className="flex items-center gap-2 text-yellow-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Jalpaiguri District</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Neora Valley National Park</h3>
                <p className="text-gray-700 mb-4">Pristine tropical forest with endangered species</p>
                <div className="flex items-center gap-2 text-teal-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Kalimpong District</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Mahananda Wildlife Sanctuary</h3>
                <p className="text-gray-700 mb-4">Elephant corridor with stunning Himalayan views</p>
                <div className="flex items-center gap-2 text-purple-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Darjeeling District</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY DESTINATIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the main hubs and attractions of Dooars tourism
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Jaldapara</h3>
              <p className="text-gray-600 text-sm mb-3">Elephant safari hub with rhino sightings</p>
              <div className="text-green-600 font-semibold">Main Attraction</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Trees className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lataguri</h3>
              <p className="text-gray-600 text-sm mb-3">Gateway to Gorumara National Park</p>
              <div className="text-orange-600 font-semibold">Tourist Center</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Compass className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Murti</h3>
              <p className="text-gray-600 text-sm mb-3">Scenic river beauty amidst hills</p>
              <div className="text-blue-600 font-semibold">Nature Spot</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Mountain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chalsa</h3>
              <p className="text-gray-600 text-sm mb-3">Tea garden paradise with scenic views</p>
              <div className="text-purple-600 font-semibold">Tea Hub</div>
            </div>
          </div>

          {/* Additional Destinations */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Jayanti", "Bindu", "Jhalong", "Samsing", "Suntalekhola", "Rocky Island",
              "Lava", "Lolegaon", "Rishyap", "Neora Valley", "Chilapata", "Phuntsholing"
            ].map((place, index) => (
              <div key={index} className="bg-white border border-gray-200 p-4 rounded-xl text-center hover:bg-green-50 transition cursor-pointer">
                <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">{place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SAFARI ACTIVITIES ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Safari & Adventure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thrilling wildlife experiences and adventure activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Elephant Safari</h3>
              <p className="text-gray-600 text-sm mb-3">1.5 hour jungle ride</p>
              <p className="text-orange-600 font-semibold">Jaldapara</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Jeep Safari</h3>
              <p className="text-gray-600 text-sm mb-3">Morning & evening trips</p>
              <p className="text-green-600 font-semibold">Gorumara</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trekking</h3>
              <p className="text-gray-600 text-sm mb-3">Buxa Fort & Mahakal</p>
              <p className="text-blue-600 font-semibold">Buxa</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bird className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bird Watching</h3>
              <p className="text-gray-600 text-sm mb-3">300+ species</p>
              <p className="text-purple-600 font-semibold">All Parks</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT INFORMATION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Important Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential details for your Dooars jungle safari
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-yellow-600" />
                <h3 className="text-2xl font-bold text-yellow-700">Forest Closure Notice</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Forest Entry / Safari is closed from <strong>15th June to 15th September</strong> annually
                due to monsoon season and wildlife breeding period.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Best Time to Visit:</strong> October to March
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-700">Safari Booking</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Guests can book Safari Tickets at their own discretion through official portal
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-mono text-blue-600">
                  www.wbsfda.org/safari
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Additional Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Transportation</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• AC vehicles available for all tours</li>
                  <li>• Pickup from NJP/Bagdogra Airport</li>
                  <li>• Extra vehicle cost: ₹2500 per vehicle (4-6 PAX)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">What's Included</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Accommodation in hotels/resorts</li>
                  <li>• Daily breakfast and dinner</li>
                  <li>• All transfers and sightseeing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing
        title="Dooars Tour Packages"
        subtitle="Choose your perfect wilderness adventure duration"
      />

      <ContactCTA />
    </main>
  )
}

/* COMPONENTS */

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col space-y-2">
      <div className='flex gap-5 items-center'>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
          Book now For 5N/6D
        </a>
      </div>
      <p className="font-semibold text-gray-700">{subtitle}</p>
    </div>
  )
}

function DayCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-green-600">
      <h3 className="text-2xl font-semibold text-green-700 mb-4">{title}</h3>
      <p className="text-gray-700 leading-8 whitespace-pre-line">{children}</p>
    </div>
  )
}

function AddOnSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col space-y-2">
      <div className='flex gap-5 items-center'>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
          Book now For 2N/3D
        </a>
      </div>
      <p className="font-semibold text-gray-700">{subtitle}</p>
    </div>
  )
}
