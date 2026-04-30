"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Snowflake, Trees as TreesIcon } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function SikkimTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1635346537940-9d51faeb6e32?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2lra2ltJTIwJTI2JTIwR2FuZ3Rva3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Snowy mountains of Sikkim with Buddhist monastery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-indigo-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">SIKKIM TOURISM</span>
            </div>

            <h1 className="text-5xl  text-center md:text-7xl test-center font-bold mb-6 leading-tight">
              Visit & Explore Sikkim
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Gangtok • Nathu La • Lachen • Lachung • Pelling
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the land of monasteries, mystic rituals, and festivals
              at an altitude of 1670 meters with special tailor-made packages
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Sikkim
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Himalayan Paradise</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SIKKIM & GANGTOK MAIN PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
              <Destination
                title="Sikkim & Gangtok"
                cta="Book now For 5N/6D"
                subtitle="With Changu Lake – Nathu La Pass – Baba Mandir"
                content={[
                  `Day 1: Arrival in Gangtok, Our representative will receive you at New Jalpaiguri Railway Station (NJP) / Pakyong Airport / Bagdogra Airport.
              Transfer to Gangtok, the capital of Sikkim at 1670 meters / 5480 feet height.
              Nearly 135 kilometers, 4½ - 5 hours drive. Check into hotel.
              Evening free to roam around M G Road (Mall) or local Shopping center.
              Dinner & Overnight stay at Hotel in Gangtok.`,

                  `Day 2: Gangtok City Tour, After breakfast, visit Ranka Monastery - one of the oldest and most beautiful monasteries of India.
              Visit Ban Jhagri Falls, Shanti View Point, Ban Jhagri Falls, Institute of Tibetology,
              Ganesh Tok, Cottage Industry, Flower Show, White Hall, Tashi View Point, Hanuman Tok.
              Dinner & Overnight at Hotel in Gangtok.`,

                  `Day 3: Gangtok Sightseeing, After breakfast, experience full day sightseeing of places like Char Dham, Samdruptse,
              at 135 ft high is the tallest statue of "Guru Padmasambhava", also known as Guru Rinpoche &
              Siddhesvar Dham, DuDrul Chorten, Temi Tea Garden, Namchi Village.
              Lunch en-route. Return to Hotel by evening. Night stay in Hotel/Resort at Gangtok.`,

                  `Day 4: Changu Lake & Nathu La Pass, After early breakfast, this is nearly 50 km drive and takes nearly 2 hours.
              Visit to Tsomgo / Changu Lake and Baba Mandir to experience cool, serene water and picturesque beauty.
              Tsomgo lake is one of the holy lakes of the region.
              A temple of Lord Shiva is built on the lakeside.
              Primula flowers and other alpine plantation provide immaculate beauty to this place.
              Till April it is full of snow and lay frozen.
              Nathu La Pass permits have to be arranged the previous night when Voters ID card will be asked for.
              Nathu La Pass (Monday closed) - once booked, amount is not refunded even if trip gets cancelled.
              (For Nathula Pass, extra US $100 / Rs. 5,000/- per vehicle with 4-6 PAX has to be paid for permit & to be paid at spot).
              Lunch en-route. Without permit, you can only visit Changu Lake & Baba Mandir.
              Evening free to stroll around M G Road or Local Market.
              Dinner & Overnight stay in Hotel/Resort at Gangtok.`,

                  `Day 5: Rumtek Monastery, After breakfast, proceed to visit Rumtek Monastery, Do Drul Chorten, Saramsa Garden,
              Enchey Monastery - a must visit when in Sikkim.
              Lunch en-route. Return in evening.
              Dinner & Overnight at Hotel/Resort in Gangtok.`,

                  `Day 6: Departure, After breakfast & Check-out. Lunch en-route.
              Drive to Pakyong Airport in Sikkim / Bagdogra Airport in Bengal (IXB) /
              New Jalpaiguri Railway Station (NJP), a 3-4 hrs drive in AC vehicle for forwarding journey.
              Tour ends...`
                ]}
              />

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl mt-5">
                <div className="grid md:grid-cols-1 gap-8">
                  <div className="bg-blue-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-blue-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Gangtok - Capital at 1670 meters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Tsomgo Lake & Baba Mandir</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Nathu La Pass (Permit required)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Rumtek Monastery visit</span>
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
                  Watch Sikkim Video
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

      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* PAGE TITLE */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-700">
              Sikkim Add-On Tour Packages
            </h1>
            <p className="text-gray-600">
              Explore Wildlife, Beaches & Eco Tourism Destinations
            </p>
          </div>

          {/* DESTINATIONS */}
          <Destination
            title="WEST SIKKIM"
            subtitle="Add-on (or) Separately with PELLING-RAVANGLA"
            cta='Book Now for 3N/4D'
            content={[
              `Day – 1 : Pick-up from New Jalpaiguri Railway Station (NJP) / Pakyong Airport / Bagdogra Airport (or) Hotel in Gangtok proceed towards Pelling/Ravangla. En-route local sight seeing. Lunch en-route. Check into Hotel. Evening free. Dinner & Overnight at Hotel/Resort at Pelling / Ravangla.`,

              `Day – 2 : After breakfast, sightseeing to Pemayangsha Monastery, Sangachoely, Kanchenjongha Falls, Singshore Bridge, Pelling Skywalk, Etc. Lunch en-route. Return in evening. Dinner & Overnight at Hotel/Resort at Pelling / Ravangla.`,

              `Day – 3 :ALTERNATIVELY: After breakfast, sightseeing to Ravangla, Buddha Park, Ralang Monastery, Khechiopairi Lake. Lunch en-route. Return in evening.Dinner & Overnight at Hotel/Resort at Pelling / Ravangla.`,

              `Day – 4 : After breakfast & Check-out. Lunch en-route. Drive to Pakyong Airport in Sikkim / Bagdogra Airport in Bengal (IXB) / New Jalpaiguri Railway Station (NJP), a 3-4 hrs drive in AC vehicle for Forwarding Journey. Tour ends...`
            ]}
          />


          <Destination
            title="NORTH SIKKIM"
            subtitle="Add-on (or) Separately with LACHEN - LACHUNG - GORUDONGMAR"
            cta='Book Now for 2N/3D'
            content={[
              `Day – 1 :Transfer to Lachen (North Sikkim): After breakfast, pick-up from Hotel at Gangtok (09.00am). Drive 135 km, 5 – 6 hours drive. Chungthang is 96 kilometers from Gangtok. Lunch at Chungthang. Lachen is 35 kilometers from Chungthang. Visit Seven Sister Falls & Naga Waterfalls. Check into a hotel. Welcome Tea. Evening free to stroll and visit the Lepcha Village. Dinner & Overnight stay in Hotel/ Resort at Lachen.`,

              `Day – 2 :Excursion to Gurudongmar Lake and Transfer to Lachung (North Sikkim); After early breakfast, Visit to Gurudongmar Lake 55 km, 2 ½ to 3 ½ hour's drive. A valley at an altitude of 11, 800 feet through which Lachen Chu flows, generally covered with snow from December to April or even more is known as the Holy / Sacred Lak. Next drive through the cold desert till Tibet / China back to Resort for Lunch. After lunch drive to Lachung. The region is fully covered with Rhododendron forest with Chopta Valley and Thangu as the other places of interest. Nearly 50 km and two hours' drive. Check into hotel at Lachung. Evening free to visit Lachung Monastery. Dinner & Overnight stay in Hotel / Resort at Lachung.`,

              `Day – 3 :Sight seeing trip to Yumthang and transfer to Gangtok:  After early morning breakfast, drive towards Yumthang situated at an elevation of nearly 11800 feet, 30 km and 1 ½ hour's drive. On the way back one can visit the famous hot spring which is known for its curative properties of skin diseases. Yumthang is a valley near the river Lachung Chu surrounded by mountains where the tree line ends. In spring the valley erupts in riots of colours as Primulae, Rhododendrons and many other Alpine flowers in full bloom along with snow covered valley except in autumn. During winter Yumthang is sombere with snow all around and the snow clad mountains adding to the beauty. Yumesamdong (Zero Point) is optional tour (with extra US $100/ Rs.4000/- per vehicle with 4-6 PAX has to be paid for permit & to be paid at spot). Return to Lachung for lunch. After lunch drive to Gangtok 130kilometers, 4–5 hours drive. Drop at Hotel/ Resort at Gangtok. Tour ends...`
            ]}
          />

          <Destination
            title="SILK ROUTE"
            cta='Book Now for 4N/5D'
            subtitle="Add-on (or) Separately with SILLERY-ZULUK-ARITAR-RESHIKHOLA"
            content={[
              `Day –1 :Start of tour: Our representative will be there to receive the Guest at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (09.00 am). He will be assisting you to proceed for Sillery Gaon. Lunch en-route. Check-in to Hotel/Homestay. Post lunch, rest. Evening free for photography & idle your time. Back to resort. Dinner & Night stay in Hotel / Resort  Home Stay at Sillery Gaon.`,

              `Day – 2 : Proceed for Zuluk:  Early morning breakfast. Check Out to visit Rongli (for inner line permit), Visit Lingtam, Kuekhola Falls. Lunch-en-route. Dinner & Night stay in Hotel / Resort / Home Stay at Zuluk.`,

              `Day – 3 :Sight-seeing around Zuluk: After early breakfast, start the journey of the famed Silk Route Trail. Enjoy the beauty of the Thambi View Point, Lunghthung, Laxmi Chawk, Nathang Valley, Tukla Valley, Kalapokhri, Jeelep-La-Pass & Elephant Lake at Kupup. Lunch en-route. Back to Hotel in the evening. Dinner & Night stay in Hotel / Resort / Home Stay at Zuluk.`,

              `Day – 4 :Proceed for Aritar / Reshikhola: After breakfast, proceed to visit Aritar. See the Lampokhri Lake, the highest boating lake in Sikkim. Lunch en-route. Dinner & Overnight at Hotel/Resort / Home Stay at Aritar / Reshikhola.`,

              `Day –5 : Early morning breakfast. Check-out around 08.00 AM & transfer to NJP Station / Bagdogra Airport. Next one has to drive to NJP / Bagdogra Airport with stoppage at Teesta River & Coronation Bridge / Sevoke Kali Mandir. Lunch en-route (your cost). Reach Bagdogra Airport  / NJP (as per your departure time). Tour ends….`
            ]}
          />




        </div>
      </div>

      {/* ================= SIKKIM HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sikkim Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in the land of monasteries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ancient Monasteries</h3>
              <p className="text-sm text-gray-600">Rumtek, Ranka, Pemayangtse, Enchey Monasteries</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <WavesIcon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sacred Lakes</h3>
              <p className="text-sm text-gray-600">Tsomgo Lake, Gurudongmar Lake, Lampokhri Lake</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Mountain Passes</h3>
              <p className="text-sm text-gray-600">Nathu La Pass, Jeelep-La Pass, Zero Point Yumesamdong</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Silk Route</h3>
              <p className="text-sm text-gray-600">Historic trade route with Zuluk, Aritar, Reshikhola</p>
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
                <h3 className="font-bold text-gray-800 mb-2">Nathu La Pass Information</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Permits must be arranged the previous night</li>
                  <li>• Voters ID card required</li>
                  <li>• Monday closed</li>
                  <li>• Extra US $100 / Rs. 5,000/- per vehicle (4-6 PAX)</li>
                  <li>• Amount non-refundable once booked</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Snowflake className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• March to June: Clear views, blooming flowers</li>
                  <li>• October to December: Snow-covered landscapes</li>
                  <li>• December to April: Snow at higher altitudes</li>
                  <li>• Avoid monsoon (July-September) for clear views</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PackagePricing
        title="Sikkim Tour Packages"
        subtitle="Choose your perfect Himalayan adventure duration"
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