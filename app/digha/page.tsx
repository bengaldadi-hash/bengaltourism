"use client"

import Image from 'next/image'
import { Waves, MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Fish, Beer, TreePine, Ship, Train, Mountain, Link, Sunrise, Plane } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function DighaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white to-blue-50 py-24 overflow-hidden">
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
              <Waves className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Golden Beaches of Bengal</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Digha
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                What Brighton is to England – Digha is to Bengal
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Located at Bay of Bengal, home to pristine golden sands and gentle waves,
              with the perfect blend of coastal charm and beach activities
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/book-tour" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Book Your Beach Holiday
              </a>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                Explore Beaches
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1657282928361-ec9de3f2bc74?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Digha sea beach with golden sand and blue waters"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>

      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Waves className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">25km Coastline</h3>
              <p className="text-gray-600 text-sm">Pristine beach stretch</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sun className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Year-round</h3>
              <p className="text-gray-600 text-sm">Perfect beach weather</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Fish className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fresh Seafood</h3>
              <p className="text-gray-600 text-sm">Daily catch delicacies</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Water Sports</h3>
              <p className="text-gray-600 text-sm">Adventure activities</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex gap-5 flex-col mb-16">
            <div className="flex gap-5 items-center mt-8">

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Digha & Mandarmoni – Beach Circuit Tour Itinerary
              </h2>

              <a
                href="/book-tour"
                className="bg-yellow-600 shrink-0 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now for 4N/5D
              </a>
            </div>
            <p className="text-gray-600 max-w-2xl ">
              Detailed sightseeing plan covering Digha, Mandarmoni,
              Tajpur, Shankarpur & Udaipur.
            </p>



          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">

              {/* Day 1 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Day 1 – Kolkata to Digha | Arrival & Leisure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Early morning departure from Kolkata (7:00–8:00 AM).
                  En-route breakfast stop at Kolaghat Riverside Dhaba.
                  Scenic highway drive towards Digha (approx 4–5 hrs).
                  Arrival by 1–2 PM followed by hotel check-in & freshening up.
                  Enjoy delicious lunch at hotel.
                  Evening free for leisure – explore New Digha Beach,
                  beachside shopping market & local street food stalls.
                  Optional sea bathing during sunset.
                  Dinner & Overnight stay at Digha.
                </p>
              </div>

              {/* Day 2 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-yellow-500 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center gap-2">
                  <Sunrise className="w-6 h-6" />
                  Day 2 – Beach Exploration
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Early morning walk to witness breathtaking sunrise at Old Digha Beach.
                  After breakfast, explore Old & New Digha beaches.
                  Optional visit to Udaipur Beach (Odisha Border).
                  Enjoy water sports activities like Banana Ride, Jet Ski,
                  ATV rides & Parasailing (own cost).
                  Fresh coconut water & beach snacks experience.
                  Evening leisure time for photography & relaxation.
                  Dinner & Overnight at Digha.
                </p>
              </div>

              {/* Day 3 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-green-500 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <Waves className="w-6 h-6" />
                  Day 3 – Shankarpur & Tajpur
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  After breakfast proceed for full-day coastal excursion.
                  Visit Shankarpur Beach – known for peaceful atmosphere & fishing harbor.
                  Continue towards Tajpur Beach – less crowded & ideal for relaxation.
                  Enjoy beach activities & photography sessions.
                  Special seafood lunch – Spicy Crab Curry, Fresh Pomfret Fry,
                  Country Chicken & Local Bengali delicacies.
                  Return to Digha by evening.
                  Dinner & Overnight stay at Digha.
                </p>
              </div>

              {/* Day 4 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-purple-500 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                  <Ship className="w-6 h-6" />
                  Day 4 – Mandarmoni Transfer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Breakfast at hotel & check-out (10–11 AM).
                  En-route visit Mohona Fishing Harbour (if time permits).
                  Drive towards Mandarmoni (approx 1.5 hrs).
                  Check-in at beach resort.
                  Afternoon leisure time – explore Asia’s longest motorable beach.
                  Enjoy beach rides, sunset views & photography.
                  Evening special Bonfire & BBQ session (subject to weather conditions).
                  Dinner & Overnight stay at Mandarmoni.
                </p>
              </div>

              {/* Day 5 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-yellow-500 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center gap-2">
                  <Plane className="w-6 h-6" />
                  Day 5 – Departure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Early morning beach walk with tea.
                  Optional sea bathing & relaxation.
                  Breakfast at resort.
                  Check-out by 11 AM.
                  Return journey towards Kolkata.
                  Arrival by evening with beautiful beach memories.
                  Tour Ends.
                </p>
              </div>

            </div>


            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Digha Tour Video
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
      </section>
      <div className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Digha Section */}
          <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
            <h2 className="text-4xl font-bold text-blue-700 border-b-4 border-blue-500 inline-block pb-2">
              Digha – The Brighton of the East
            </h2>

            <p className="text-gray-700 leading-8">
              Once upon a time, Digha was called ‘Brighton of the East’. Some websites still flaunts that tag.
              There was a time when the hard & flat beach at Digha stretched for miles & the salt wind soughed among the casuarinas.
              About 200 kms from Kolkata, on the shores of Bay of Bengal. Miles & miles of secluded Sea & rolling Beach’s,
              it’s fringed by casuarinas & eucalyptus trees. Lovers & Honeymooner’s playground. Far away from the madding crowd.
              Virgin & uncluttered.
            </p>

            <p className="text-gray-700 leading-8">
              On the long walk to the mohona, one would come across beached boats, fishing nets & occasional giant turtles.
              Over 200 yards of the water-front are now encased in concrete & tone, to prevent further erosion by the sea.
              Lining the stone embankments are rows of food stalls & sovereign shops.
            </p>

            <p className="text-gray-700 leading-8">
              Once upon a time, it was derigueur to shoot almost all romantic Bengali films in this grove.
              There are now two beaches at Digha, Old & New. The waters at these beaches can be very choppy at times,
              specially during the rainy season. Every second house in Digha is a hotel or a lodge,
              catering to the budget as well as the fussy travellers.
            </p>
          </section>

          {/* Mandarmani Section */}
          <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">

            <div className="flex gap-5 items-start mt-8">
              <div>
                <h2 className="text-4xl font-bold text-orange-600 border-b-4 border-orange-500 inline-block pb-2">
                  Mandarmoni
                </h2>
                <p className='text-gray-500 text-base  mt-3'>
                  Add on (or) Separately
                </p>
              </div>
              <a
                href="/book-tour"
                className="bg-yellow-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now for 2N/3D
              </a>
            </div>

            <p className="text-gray-700 leading-8">
              Mandarmani is one of Bengal’s recently developed tourist destination that lies close to ever-popular
              Digha and Shankarpur. With sun and surf, pristine sea beach and untrammelled silt coloured sand,
              this beach is slowly becoming popular among the tourists.
            </p>

            <p className="text-gray-700 leading-8">
              Mandarmani boasts of a 13 km long motorable beach, probably the longest motorable beach road in India.
              On the beach you will undoubtedly get the chance to feel the divinity and tranquility.
              If that is not enough to please your senses, then try to loll on the sand and listen to the waves crashing upon the shore,
              which will surely drive away your bustling pressure.
            </p>

            <p className="text-gray-700 leading-8">
              As an added attraction; this is the only place in eastern India where one can enjoy many beach adventure activities
              like ATV Rides, Water Scooter, Para Gliding, Speed Boats & local motorised Cycle Van cruise on the beach.
              Also try the freshly caught shrimps & crabs, fried to perfection with a glass of beer on the many make-shift shacks
              that dot the beach while the waves laps at your feet & the breeze plays with your hair.
              A perfect destination for some sun-bathing.
            </p>
          </section>

          {/* Shankarpur Section */}
          <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">

            
  <div className="flex gap-5 items-start mt-8">
              <div>
                <h2 className="text-4xl font-bold text-orange-600 border-b-4 border-orange-500 inline-block pb-2">
                 Shankarpur
                </h2>
                <p className='text-gray-500 text-base mt-3'>
                  Add on (or) Separately
                </p>
              </div>
            
              <a
                href="/book-tour"
                className="bg-yellow-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now for 2N/3D
              </a>
            </div>
            <p className="text-gray-700 leading-8">
              Then there is the secrets of the sea in Shankarpur. There is something about the silence of the seclude shore
              that revives memories of innocence lost, or of a secret that one was privileged to learn & cherish as a giggly child.
            </p>
          </section>



          {/* Places of Interest */}
          <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">

            <div className="flex gap-5 items-start mt-8">
              <div>
                <h2 className="text-4xl font-bold text-orange-600 border-b-4 border-orange-500 inline-block pb-2">
                   Tajpur – Upcoming Port town
                </h2>
                <p className='text-gray-500 text-base mt-3'>
                  Add on (or) Separately
                </p>
              </div>
            
              <a
                href="/book-tour"
                className="bg-yellow-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now for 2N/3D
              </a>
            </div>

            <p className="text-gray-700 leading-8">
              Tajpur is one of the most peaceful and offbeat beach destinations in West Bengal,
              located between Mandarmoni and Shankarpur along the Bay of Bengal. Known for its
              red crab beaches, tranquil surroundings and casuarina tree-lined coastline,
              Tajpur offers a perfect weekend getaway for couples, families and nature lovers.
            </p>

            <p className="text-gray-700 leading-8">
              Unlike crowded commercial beaches, Tajpur retains its untouched charm and
              serene ambiance. Visitors can enjoy long beach walks, sunrise views over the
              Bay of Bengal, and various water sports activities such as ATV rides,
              speed boating and beach adventure games.
            </p>

            <p className="text-gray-700 leading-8">
              Nearby attractions include Mandarmoni Beach, Shankarpur fishing harbour,
              Mohona (where rivers meet the sea), Gadiara (confluence of three rivers),
              Marine Aquarium & Research Centre in Digha and the Science Centre.
              The calm environment, fresh seafood and eco-friendly resorts make Tajpur
              an emerging favorite coastal destination in East India.
            </p>
          </section>


          {/* Nearby Destinations */}
          <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-bold text-yellow-600 border-b-4 border-yellow-500 inline-block pb-2">
              At a Short Distance
            </h2>

            <p className="text-gray-700 leading-8">
              Puri (abode of the Lord of the Universe) • Konark (Sun temple & Erotic sculptures) • Simlipal (Tiger Reserve) •
              Bhubaneswar, Udaigiri, Khandagiri & Ratnagiri • Nandan Kanan (Animal kingdom) • Chandipur •
              Gopalpur (a sea to walk on) • Chilika Lagoon (River dolphins & Migratory birds) •
              Gahirmatha (UNESCO World Heritage Site) • Bhitarkanika (Crocodiles) & more…
            </p>
          </section>

        </div>
      </div>

      {/* ================= HISTORICAL BACKGROUND ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Rich Coastal Heritage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Brighton of the East to Modern Beach Paradise - A journey through time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-blue-600">The Brighton Era</h3>
                <p className="text-gray-700 leading-relaxed">
                  Once upon a time, Digha was called 'Brighton of the East'. There was a time when the hard & flat beach
                  at Digha stretched for miles & the salt wind soughed among the casuarinas. About 200 kms from Kolkata,
                  on the shores of Bay of Bengal.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Coastal Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Miles & miles of secluded Sea & rolling Beach's, fringed by casuarinas & eucalyptus trees.
                  Lovers & Honeymooner's playground. Far away from the madding crowd. Virgin & uncluttered.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-green-600">Modern Transformation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Over 200 yards of the water-front are now encased in concrete & stone, to prevent further erosion by the sea.
                  Lining the stone embankments are rows of food stalls & souvenir shops. Every second house in Digha is a hotel.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/digha.jpeg"
                alt="Historic Digha beach with casuarina trees"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-4 rounded-xl font-bold">
                Since 1923
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ================= PLACES OF INTEREST ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Places of Interest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the coastal jewels of Digha - from pristine beaches to marine attractions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Major Beaches */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Beach Attractions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Old Digha Beach - Traditional charm
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    New Digha Beach - Modern facilities
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Mohona - Sea confluence point
                  </li>
                </ul>
              </div>
            </div>

            {/* Marine Attractions */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <Fish className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Marine Attractions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Marine Aquarium - Rich marine life
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Science Centre - Educational fun
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Amarabati Park - Recreational hub
                  </li>
                </ul>
              </div>
            </div>

            {/* Adventure Activities */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Water Sports</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Speed Boat Rides - Thrilling adventure
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Parasailing - Bird's eye view
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    Jet Ski - High-speed fun
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extended Attractions Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Mandarmoni Beach", "Tajpur Beach", "Shankarpur Beach", "Udaipur Beach",
              "Casuarina Trees", "Gadiara (3 Rivers)", "Chandaneswar Temple", "Digha Gate",
              "Local Markets", "Seafood Stalls", "Coconut Vendors", "Beach Shacks"
            ].map((place, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:bg-blue-50 transition cursor-pointer">
                <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-medium">{place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEARBY DESTINATIONS ================= */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nearby Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extend your journey to these enchanting coastal destinations around Digha
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="/mandarmoni">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/mandarmani-sea-beach.jpg"
                  alt="Mandarmoni Beach"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Mandarmoni</h3>
                  <p className="text-gray-200">13km Motorable Beach</p>
                </div>
              </div>
            </a>
            <a href="/tajpur">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1656087477241-90caeb015887?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqcHVyfGVufDB8fDB8fHww"
                  alt="Tajpur Beach"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tajpur</h3>
                  <p className="text-gray-200">Serene Secluded Beach</p>
                </div>
              </div>
            </a>
            <a href="/shankarpur">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Shankarpur.jpeg"
                  alt="Shankarpur Beach"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Shankarpur</h3>
                  <p className="text-gray-200">Quiet Beach Paradise</p>
                </div>
              </div>
            </a>
            <a href="/udaipur">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Udaipur.jpeg"
                  alt="Udaipur Beach"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Udaipur</h3>
                  <p className="text-gray-200">Odisha Border Beach</p>
                </div>
              </div>
            </a>
            <a href="/gadiara">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Gadiara.jpeg"
                  alt="Gadiara"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Gadiara</h3>
                  <p className="text-gray-200">Three Rivers Confluence</p>
                </div>
              </div>
            </a>
            <a href="/monchasha">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Monchasha.jpeg"
                  alt="Monchasha Eco Village"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Monchasha</h3>
                  <p className="text-gray-200">Eco Village Experience</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section> */}

      {/* ================= CUISINE SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Utensils className="w-8 h-8 text-orange-500" />
              <h2 className="text-4xl md:text-5xl font-bold">Must Try Beach Cuisine</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authentic coastal delicacies influenced by Bengal's beach region cultures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Spicy Crab Curry", desc: "Fresh local crabs in spicy coastal gravy", icon: "🦀" },
              { name: "Prawn Malai Curry", desc: "Creamy prawn delicacy with coconut milk", icon: "🦐" },
              { name: "Fresh Fish Fry", desc: "Daily catch from the Bay of Bengal", icon: "🐟" },
              { name: "Country Chicken Fry", desc: "Traditional Bengali preparation", icon: "🍗" },
              { name: "Coconut Water", desc: "Fresh tender coconuts from beach vendors", icon: "🥥" },
              { name: "Beach BBQ", desc: "Evening bonfire grills with seafood", icon: "🍖" },
              { name: "Local Beer", desc: "Chilled beverages by the beach", icon: "🍺" },
              { name: "Seafood Platter", desc: "Mixed coastal delights assortment", icon: "🦞" }
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
              {["Bengali", "Odia", "Coastal", "Seafood", "Beach", "Traditional", "Local"].map((culture, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Beach Adventures & Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From thrilling water sports to peaceful beach experiences - Digha offers it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Ship className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Water Sports</h3>
              <p className="text-gray-700 mb-4">Speed Boats • Jet Ski • Parasailing • Banana Boat</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Explore Water Sports →</button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Camera className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Beach Photography</h3>
              <p className="text-gray-700 mb-4">Sunrise • Sunset • Marine Life • Beach Portraits</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">Photo Tours →</button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Fish className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Seafood Tours</h3>
              <p className="text-gray-700 mb-4">Fresh Catch • Local Markets • Cooking Classes</p>
              <button className="text-green-600 font-semibold hover:text-green-700">Food Tours →</button>
            </div>
          </div>
        </div>
      </section>


      <PackagePricing
        title="Digha Beach Packages"
        subtitle="Choose your perfect beach getaway duration"
      />
      <ContactCTA />
    </main>
  )
}
