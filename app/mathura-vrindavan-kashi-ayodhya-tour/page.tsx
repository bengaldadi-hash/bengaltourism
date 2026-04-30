"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Snowflake } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function MathuraVrindavanKashiAyodhyaTourPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/ayooo.webp"
            alt="Sacred temples and holy cities of India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-saffron-900/80 via-orange-800/60 to-saffron-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Temple className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">SPIRITUAL JOURNEY</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Divine Circuit
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Mathura • Vrindavan • Kashi • Ayodhya
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the divine bliss with special tailor-made
              spiritual packages designed on request
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Sacred Sites
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Divine Path</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN SPIRITUAL PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
          <Destination
            title="Divine Circuit Package"
            cta="Book now For 5N/6D"
            subtitle="Mathura - Vrindavan - Kashi - Ayodhya"
            content={[
              `Day 1: Arrival in Mathura
Pickup: Arrive at Mathura Railway Station or Delhi Airport. Transfer to your hotel in Mathura.
Check-in: Freshen up and get ready for the day’s exploration.
Afternoon: Nand Bhavan Temple: Visit the sacred temple where Lord Krishna spent his early years. Take a dip in the holy Yamuna River.
Krishna Janmabhoomi Temple: Explore the revered site where Lord Krishna was born.
Evening: Dwarkadhish Temple: Discover this iconic temple dedicated to Lord Krishna.
Vishram Ghat: Experience the serene evening aarti and enjoy a peaceful walk along the ghats.
Dinner and Overnight Stay: Relax and enjoy dinner at your hotel.`,

              `Day 2: Mathura to Vrindavan
Morning: Banke Bihari Temple: Begin your day with a visit to this famous temple in Vrindavan: Breakfast: Enjoy a traditional breakfast at a local restaurant.
Afternoon: Prem Mandir: Visit this stunning temple illuminated beautifully at night.
Radha Vallabh Temple: Explore this temple dedicated to Radha and Krishna.
Lunch: Savor a delicious meal at a local eatery.
Evening: ISKCON Temple: Attend the evening aarti and immerse yourself in the spiritual ambiance.
Dinner and Overnight Stay: Return to your hotel in Vrindavan for a restful night.`,

              `Day 3: Vrindavan to Kashi (Varanasi)
Morning: Radha Rani Temple in Barsana: Visit this prominent temple dedicated to Radha.
Ladliji Temple: Explore this significant temple in Barsana.
Breakfast: Have breakfast at a local restaurant.
Afternoon: Drive to Varanasi: Depart for Varanasi, a journey of approximately 7-8 hours.Check-in: Arrive in Varanasi and check into your hotel.
Dinner: Enjoy dinner at the hotel or a local restaurant.
Overnight Stay: Rest at your hotel in Varanasi.`,

              `Day 4: Varanasi Exploration
Morning: Kashi Vishwanath Temple: Begin your exploration with a visit to this sacred temple.
Breakfast: Enjoy breakfast at the hotel.
Afternoon: Sarnath: Discover the significant Buddhist site, including the Dhamek Stupa, Chaukhandi Stupa, and Sarnath Museum.
Lunch: Have lunch at a local restaurant.
Evening: Ganga Aarti at Dashashwamedh Ghat: Experience the captivating evening aarti ceremony on the ghats.
Boat Ride on the Ganges: Enjoy a serene boat ride along the river.
Dinner and Overnight Stay: Return to the hotel for dinner and relaxation.`,

              `Day 5: Varanasi to Ayodhya
Morning: Have breakfast at the hotel.
Drive to Ayodhya: Depart for Ayodhya, which is about a 4-5 hour drive.
Afternoon: Ram Janmabhoomi: Visit the birthplace of Lord Rama.
Hanuman Garhi: Explore this significant temple dedicated to Lord Hanuman.
Lunch: Enjoy lunch at a local restaurant.
Evening: Kanak Bhawan: Discover this beautiful temple dedicated to Lord Rama and Sita.
Saryu River: Experience a peaceful evening by the banks of the Saryu River.
Dinner and Overnight Stay: Relax and have dinner at your hotel in Ayodhya.`,

              `Day 6: Departure from Varanasi
Morning: Have breakfast at the hotel in Ayodhya. then proceed towards Varanasi.
Afternoon Free Time: Enjoy some last-minute shopping or exploration in Varanasi.
Lunch: Have lunch at a local restaurant.
Evening: Departure: Transfer to Varanasi Railway Station or Lal Bahadur Shastri International Airport for your onward journey. Tour ends........`,

            
            ]}
          />
            <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-8 shadow-xl mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-orange-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-orange-800 mb-3">Package Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Sri Krishna Janmabhoomi - Mathura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Banke Bihari Temple - Vrindavan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Kashi Vishwanath - Varanasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Ram Janmabhoomi - Ayodhya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
 </div>
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Spiritual Journey Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Divine Circuit Experience"
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

      {/* ================= GAYA ADD-ON ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <Destination
            title="Mathura - Vrindavan - Kashi - Ayodhya Tour "
            cta="Book Now For 2N/3D"
            subtitle="Add on / Separately"
            content={[
              `Day 1: Arrival in Mathura
Pickup: Arrive at Mathura Railway Station or Delhi Airport. Transfer to your hotel in Mathura.
Check-in: Freshen up and get ready for the day’s exploration.
Afternoon: Nand Bhavan Temple: Visit the sacred temple where Lord Krishna spent his early years. Take a dip in the holy Yamuna River. Then visit Krishna Janmabhoomi Temple. Explore the revered site where Lord Krishna was born. Evening, visit Dwarkadhish Temple . Discover this iconic temple dedicated to Lord Krishna. Vishram Ghat, Experience the serene evening aarti and enjoy a peaceful walk along the ghats. Dinner and overnight stay  at Mathura`,

              `Day 2: Varanasi to Ayodhya
After breakfast at the hotel, drive to Ayodhya, which is about a 4-5 hour drive.Afternoon, visit Ram Janmabhoomi. Visit the birthplace of Lord Rama. Then Hanuman Garhi: Explore this significant temple dedicated to Lord Hanuman.
Lunch: Enjoy lunch at a local restaurant.
Evening: Kanak Bhawan: Discover this beautiful temple dedicated to Lord Rama and Sita. Saryu River: Experience a peaceful evening by the banks of the Saryu River. Dinner and overnight Stay in Ayodhya`,

              `Day 3: Departure from Varanasi. After breakfast at the hotel in Ayodhya,  proceed towards Varanasi.
Afternoon free. Enjoy some last-minute shopping or exploration in Varanasi. Have lunch at a local restaurant of your choice. Departure & transfer to Varanasi Railway Station or Lal Bahadur Shastri International Airport for your onward journey. Tour ends........`
            ]}
          />

          <div className="bg-white rounded-2xl shadow-xl p-8 mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-blue-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-blue-800 mb-3">Bodh Gaya Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Mahabodhi Temple - UNESCO Site</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Bodhi Tree - Enlightenment Place</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Vishnupad Temple - Pind Daun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* ================= SPIRITUAL HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Spiritual Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Divine experiences and sacred destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Temple className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Krishna Temples</h3>
              <p className="text-sm text-gray-600">Janmabhoomi, Dwarkadhish, Banke Bihari</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Waves className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Holy Rivers</h3>
              <p className="text-sm text-gray-600">Ganges, Yamuna, Sangam, Ganga Arti</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ram Temples</h3>
              <p className="text-sm text-gray-600">Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Shiva Temples</h3>
              <p className="text-sm text-gray-600">Kashi Vishwanath, Vishnupad, Mahabodhi</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Sun className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Spiritual Rituals</h3>
              <p className="text-sm text-gray-600">Pind Daan, Ganga Snan, Evening Arti</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT INFORMATION ================= */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• October to March: Pleasant weather for temple visits</li>
                  <li>• November to February: Ideal for spiritual activities</li>
                  <li>• March to April: Festival seasons - Holi, Ram Navami</li>
                  <li>• Avoid extreme summers (May-June) and monsoons</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Travel Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Book accommodations in advance during festival seasons</li>
                  <li>• Carry modest clothing for temple visits</li>
                  <li>• Respect local customs and temple protocols</li>
                  <li>• Carry prasad offerings and donation for temples</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <PackagePricing
        title="Divine Circuit Tour Packages"
        subtitle="Choose your perfect spiritual journey"
      />


      <ContactCTA />
    </main>
  )
}

function Destination({ title, subtitle, content, cta }: { title: string; subtitle: string; content: string[]; cta: string; }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-10 space-y-6">
      <div className="flex gap-5 items-center mt-8">
        <h2 className="text-3xl font-bold text-indigo-700">{title}</h2>
        <a
          href="/book-tour"
          className="bg-yellow-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
        >
          {cta}
        </a>
      </div>

      <p className="font-semibold text-gray-700">{subtitle}</p>

      <div className="space-y-6">
        {content.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 border-l-4 border-indigo-500"
          >
            <p className="text-gray-700 leading-8 whitespace-pre-line">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
