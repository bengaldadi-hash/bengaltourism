"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'
import TourPricingSection from '@/components/TourPricingSection'

export default function MaldivesPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Maldives.jpeg"
            alt="Luxury overwater villas in Maldives with crystal clear turquoise waters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-teal-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sun className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Maldives Tropical Heaven</span>
            </div>

            <h1 className="text-5xl md:text-7xl text-center  font-bold mb-6 leading-tight">
              Maldives
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Luxury Islands • Overwater Villas • Coral Paradise
              </span>
            </h1>

            <p className="text-xl  text-center  md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate luxury destination with overwater villas,
              pristine beaches, and world-class diving in crystal clear waters
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Luxury
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Tropical Heaven
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Tropical Heaven</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED ITINERARY ================= */}
      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
              Visit and Explore Maldives
            </h1>
            <p className="text-lg text-gray-700">
              Male, Atolls, Overwater Villas, Island Hopping with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="MALDIVES"
                subtitle="Tropical Paradise with MALE – NORTH MALE ATOLL – SOUTH MALE ATOLL"
              />

              {/* MAIN DAY WISE */}
              <div className="grid gap-10 grid-col-1">
                <DayCard title="Day – 1">
                  Arrival at Male International Airport: Our representative will be there to receive you at Velana International Airport, Male. After immigration clearance, transfer to your resort by speedboat or seaplane depending on the resort location. Check-in to your luxurious overwater villa or beach villa. Welcome drink and orientation about the resort facilities. Lunch at the resort restaurant. In the evening, enjoy a sunset walk along the pristine beach or relax at your private villa. Dinner at the resort restaurant with ocean views. Overnight stay at the resort.
                </DayCard>

                <DayCard title="Day – 2">
                  Island Exploration & Water Sports: After breakfast, proceed for a half-day island hopping tour. Visit local fishing villages to experience authentic Maldivian culture and lifestyle. Explore the capital city Male - visit the Grand Friday Mosque, Presidential Palace, and local markets for souvenirs. Lunch at a local restaurant in Male to taste traditional Maldivian cuisine. Return to resort in the afternoon. Enjoy water sports activities like snorkeling, jet skiing, or kayaking. Evening sunset dolphin watching cruise. Dinner at the resort. Overnight stay at the resort.
                </DayCard>

                <DayCard title="Day – 3">
                  Underwater World & Spa Experience: Morning after breakfast, proceed for a guided snorkeling tour to explore vibrant coral reefs and tropical marine life. Visit a nearby house reef for swimming with manta rays and sea turtles (seasonal). Lunch at the resort. In the afternoon, indulge in a luxurious spa treatment at the resort's world-class spa overlooking the ocean. Experience traditional Maldivian therapies and modern wellness treatments. Evening free for leisure - relax at your private pool or beachside. Dinner at an underwater restaurant (if available at resort) or special beach BBQ setup. Overnight stay at the resort.
                </DayCard>

                <DayCard title="Day – 4">
                  Luxury Yacht Experience & Sunset Cruise: After breakfast, embark on a luxury yacht cruise to explore nearby uninhabited islands and sandbanks. Enjoy swimming and snorkeling in pristine lagoons. BBQ lunch on the yacht or a deserted sandbank. Return to resort in the afternoon. Evening special sunset cruise on a traditional dhoni boat with champagne service and canapés. Watch the spectacular Maldivian sunset while dolphins play alongside the boat. Farewell dinner at the resort's specialty restaurant. Overnight stay at the resort.
                </DayCard>

                <DayCard title="Day – 5">
                  Leisure & Departure: After breakfast, enjoy the morning at leisure. Take advantage of resort facilities - swimming pool, fitness center, or last-minute water activities. Optional last-minute shopping for local handicrafts. Check-out from the resort. Transfer to Male International Airport for your return flight with unforgettable memories of tropical paradise. Tour ends.
                </DayCard>
              </div>

              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="LUXURY CRUISE PACKAGE"
                subtitle="Add-on (or) Separately From MALE"
              />
              <div className="grid gap-10 grid-col-1">
                <DayCard title="Day – 1">
                  Board Luxury Cruise: After breakfast, transfer to Male to board your luxury liveaboard cruise vessel. Orientation and safety briefing by the cruise director. Set sail towards North Male Atoll. Lunch onboard while cruising to your first destination. Afternoon snorkeling at a vibrant coral reef. Evening anchorage at a beautiful lagoon. Dinner onboard under the stars. Overnight on the cruise.
                </DayCard>

                <DayCard title="Day – 2">
                  Atoll Hopping: Early morning cruise to Baa Atoll, a UNESCO Biosphere Reserve. Breakfast onboard followed by snorkeling with manta rays at Hanifaru Bay (seasonal). Visit a local island for cultural experience. Lunch onboard. Afternoon cruise to Ari Atoll, famous for whale shark sightings (seasonal). Evening fishing trip with local guides. Dinner onboard with fresh catch. Overnight on the cruise.
                </DayCard>

                <DayCard title="Day – 3">
       Leisure & Departure: After breakfast, enjoy the morning at leisure. Take advantage of resort facilities - swimming pool, fitness center, or last-minute water activities. Optional last-minute shopping for local handicrafts. Check-out from the resort. Transfer to Male International Airport for your return flight with unforgettable memories of tropical paradise. Tour ends.
                </DayCard>
              </div>

              <AddOnSection
                title="ROMANTIC HONEYMOON PACKAGE"
                subtitle="Add-on (or) Separately From MAIN PACKAGE"
              />
              <div className="grid gap-10 grid-col-1">
                <DayCard title="Day – 1">
                  Romantic Arrival: Private seaplane transfer to your overwater villa with champagne welcome. Decorated villa with rose petals and romantic setup. Private candlelit dinner on your villa deck overlooking the ocean. Couples spa treatment in your villa. Breakfast in bed service. Evening private sunset cruise on a traditional dhoni boat. Overnight in luxury overwater villa.
                </DayCard>

                <DayCard title="Day – 2">
                  Island Romance: Private breakfast on a deserted sandbank arranged exclusively for you. Couples cooking class with resort chef to learn Maldivian cuisine. Afternoon private yacht trip to a secluded island for swimming and relaxation. Romantic beach BBQ dinner under the stars with personal butler service. Stargazing session with astronomy guide. Overnight in luxury villa.
                </DayCard>

                <DayCard title="Day – 3">
              Leisure & Departure: After breakfast, enjoy the morning at leisure. Take advantage of resort facilities - swimming pool, fitness center, or last-minute water activities. Optional last-minute shopping for local handicrafts. Check-out from the resort. Transfer to Male International Airport for your return flight with unforgettable memories of tropical paradise. Tour ends.
                </DayCard>
              </div>
            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Maldives Tour Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Italy Tour"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Advertisement Section */}
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
      {/* ================= MAIN TOUR PACKAGES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Maldives Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive luxury packages for the ultimate tropical island experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Overwater Villa Package */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Home className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Overwater Villa Paradise</h3>
                <p className="text-gray-700 mb-4">5 Nights / 6 Days of luxury living</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Luxury Experience</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Private overwater villa</li>
                    <li>• Direct ocean access</li>
                    <li>• Glass floor panels</li>
                    <li>• Private infinity pool</li>
                    <li>• 24/7 butler service</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Ultimate Luxury</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Island Hopping Package */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Island Hopping Adventure</h3>
                <p className="text-gray-700 mb-4">4 Nights / 5 Days exploring multiple islands</p>
                <div className="bg-teal-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Island Adventure</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Visit 3 different atolls</li>
                    <li>• Luxury yacht transfers</li>
                    <li>• Snorkeling at best spots</li>
                    <li>• Local island experiences</li>
                    <li>• Sunset dolphin cruises</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-teal-600 font-semibold">Island Explorer</span>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LUXURY EXPERIENCES ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Luxury Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Indulge in world-class luxury and exclusive experiences in the Maldives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Male City */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Malé - Capital City</h3>
              <p className="text-gray-700 mb-4">
                Explore the vibrant capital with colorful markets,
                Islamic architecture, and luxury shopping.
                Visit the Presidential Palace and Grand Friday Mosque.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Capital Experience</span>
              </div>
            </div>

            {/* Water Sports */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Water Sports Paradise</h3>
              <p className="text-gray-700 mb-4">
                World-class water sports including jet skiing,
                parasailing, windsurfing, and kitesurfing.
                Professional instructors and top-quality equipment.
              </p>
              <div className="flex items-center justify-center gap-2 text-cyan-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">All Resorts</span>
              </div>
            </div>

            {/* Spa & Wellness */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Spa & Wellness</h3>
              <p className="text-gray-700 mb-4">
                Award-winning spas offering traditional Maldivian treatments,
                couples massages, and holistic wellness programs
                overlooking the pristine Indian Ocean.
              </p>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Luxury Spas</span>
              </div>
            </div>

            {/* Underwater Dining */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Underwater Dining</h3>
              <p className="text-gray-700 mb-4">
                Experience world's first underwater restaurants
                with 360-degree views of marine life.
                Fine dining with sharks, rays, and tropical fish.
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Unique Experience</span>
              </div>
            </div>

            {/* Diving & Snorkeling */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Diving & Snorkeling</h3>
              <p className="text-gray-700 mb-4">
                Explore vibrant coral reefs, manta rays, whale sharks,
                and countless tropical fish. PADI certification
                courses and guided dives available.
              </p>
              <div className="flex items-center justify-center gap-2 text-teal-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Marine Paradise</span>
              </div>
            </div>

            {/* Sunset Cruises */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sunset Cruises</h3>
              <p className="text-gray-700 mb-4">
                Romantic sunset cruises on traditional dhoni boats,
                dolphin watching, and private beach dinners
                under the stars with champagne service.
              </p>
              <div className="flex items-center justify-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Romantic Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <TourPricingSection
        title="Maldives Signature Island Experiences"
        subtitle="Exclusive stays in the world’s most luxurious tropical paradise"

     packages={[
          { label: "Customisable & Recommended for extended duration", days: "6N / 7D", price: 91000},
          { label: "Highly Recommended", days: "5N / 6D", price: 82000 },
          { label: "Most Popular", days: "4N / 5D", price: 73000 },
          { label: "In group of 20+ Persons", days: "3N / 4D", price: 64000 },
          { label: "As add on / Separately ", days: "2N / 3D", price: 55000 },
        ]}
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-blue-600">
      <h3 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h3>
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
