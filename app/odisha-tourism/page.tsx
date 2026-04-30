"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function OdishaTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Odhisha.jpeg"
            alt="Puri Golden Beach with Konark Sun Temple in background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 via-amber-800/60 to-orange-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Temple className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">ODISHA TOURISM</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Visit & Explore Odisha
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Puri • Bhubaneswar • Konark • Chilika • Chandipur • Gopalpur
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the golden beaches, ancient temples, and rich cultural heritage
              of Odisha with special tailor-made combination packages
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Packages
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Ancient Heritage</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PURI PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
              <Destination
                title="Golden Beach Puri"
                cta="Book now For 4N/5D"
                subtitle="With Konark, Chilika & Bhubaneswar"
                content={[
                  `Day 1: Arrival & Puri, Our representative will receive you at Bhubaneswar Airport / Puri Station in the morning.
              Drive to Puri and check into Hotel/Resort. Visit Lord Jagannath Temple to offer prayer to the Lord of the Universe.
              Return to Hotel. Hit the Golden Beach for a bath. Laze around on the beach. Evening free to visit local market.
              Dinner & Overnight at Hotel/Resort at Puri.`,

                  `Day 2: Chilika Lake Excursion, Wake up early to spend time on the Golden Beach. After breakfast, proceed towards Chilika around 11.00 am.
              Excursion to Satpada on Chilika Lake to spot Irrawady Dolphins at the confluence of Bay of Bengal & Asia's second largest brackish water lake.
              Every year from mid-December to mid-April, birds from Siberia & Australia migrate to this lake for breeding.
              Lunch at Chilika local hotels for famed Odiya cuisine. Return by early evening.
              Dinner & Overnight in Hotel/Resort at Puri.`,

                  `Day 3: Konark Sun Temple, Early morning, watch sunrise over the sea. Offer prayers at Jagannath Dham if not done earlier.
              Back to hotel for breakfast. Proceed towards Konark to marvel at the Sun Temple, one of the World Heritage sites,
              built in the form of a Chariot - the culmination of Orissan Temple Architecture in 13th Century AD.
              The life-size figures depicting social, royal, cultural life on the Temple wall made Rabindranath Tagore express his feelings as
              'Language of Man is defeated by Language of Stone at Konark'. Also famed Kamasutra carvings.
              Lunch en-route. Visit 64 Yogini Temple at Heerapur, Pipli Appliqué work village & Raghurajpur Artisan's Village.
              Return in evening. Dinner & Overnight at Hotel/Resort at Puri.`,

                  `Day 4: Udaigiri & Khandagiri, After breakfast, visit Nandan Kanan zoo. The Caves of Udaigiri & Khandagiri dating back to 3rd Century BC
              are worth visiting for their sculptures depicting social life of people of that age.
              On the way visit Muketeshwar Temple, Dhauli Sanchi Stupa, Lingaraja Temple, Bramheswara Temple.
              Lunch en-route. Drop to Bhubaneshwar Airport / Railway Station or back to Puri.
              Dinner & Overnight at Hotel/Resort at Puri.`,

                  `Day 5: Departure, After breakfast, Check-out (10.00 am) of Hotel. On return journey, visit some local places of interest if you have missed earlier.
              Drop to Bhubaneswar Airport / Bhubaneswar / Puri Station in AC vehicle & drop at your point before 06.00pm for your forwarding journey.
              Tour ends.`
                ]}
              />

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-xl mt-5">
                <div className="grid md:grid-cols-1 gap-8">
                  <div className="bg-orange-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-orange-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Golden Beach experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Lord Jagannath Temple visit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Chilika Lake Dolphin watching</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Konark Sun Temple - UNESCO World Heritage</span>
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
              Odisha Add-On Tour Packages
            </h1>
            <p className="text-gray-600">
              Explore Wildlife, Beaches & Eco Tourism Destinations
            </p>
          </div>

          {/* DESTINATIONS */}
          <Destination
            title="BHITARKANIKA"
            cta='Book Now for 2N/3D'
            subtitle="Add-on (or) Separately with Bhubaneswar Airport"
            content={[
              `Day – 1: Start of tour: Our representative will receive you at Bhubaneswar Airport / Balasore Station in the morning at (06-10 am). If from Airport, drive to Bhadrak via Chadbali (or) pick-up from Bhadrak station. Lunch en-route. Check into Hotel/Resort. Lunch break. Rest. Evening free to visit the local market. Dinner & Overnight at Hotel / Resort at Panchalingeswar.`,
              `Day – 2: Local Sight-seeing: Early morning breakfast, excursion to Devkund water Falls, packed lunch served on the way, after launch visit Kuldiha Wildllife Sanctuary, Jorachua, Rishia Dam, Garh Simulia tower. On the returning time at evening we will visit Jagannath Temple, Nilgiri, Chandi Mandir, Kings Palace, etc. Return in evening. Evening free to stroll around local bazaar for shopping of handicrafts and relics. Overnight stay at Hotel/Resort at Panchalingeswar.`,
              `Day – 3: Bhitarkanika Wildlife Santuary: After breakfast, check-out & excursion to visit & explore Bhitarkanika National Park, an Unesco World Heritage Site, Bhitarkanika is a Hot-spot of Biodiversity. You need to have an entry permit before you enter. It’s home to largest population of salt water crocodile in India. The land of lush green mangroves, migrating birds and turtles, the menacing estuarine crocodiles, meandering water courses, tranquil surrounding intercepted by the chirping of birds and the ever embracing nature, entrails visitors from near and far off places to flock these unique places of tourist importance. Out of more than 1,600 crocodiles, 1,485 are inside the sanctuary and 125 live on the fringes. Olive Ridley (Lepidochelys olivacea) is the most common sea turtle in Indian waters. Large nesting sites are found in Odiisha, the largest nesting site ever recorded is Gahirmatha adjacent to Bhitarkanika. Lunch en-route. Dinner & Overnight stay at Hotel/Resort at Balasore.`
            ]}
          />

          <Destination
            title="CHANDIPUR"
            cta='Book Now for 2N/3D'
            subtitle="Add-on (or) Separately with Bhubaneswar Airport"
            content={[
              `Day – 1: Start of tour: Our representative will receive you at Bhubaneswar Airport / Balsore Station in the morning at (06-10 am). If from Airport, drive to Chandipur Sea Beach (or) pick-up from Balasore station. Lunch en-route. Check into Hotel/Resort. Lunch break. Rest. Evening free to visit the local market. Dinner & Overnight at Hotel / Resort at Chandipur.`,
              `Day – 2: Early morning enjoy a sunrise over sea. After breakfast, visit Nilagiri & Panchelingeswar . Lunch break. Rest & evening free to explore local area. Dinner & Overnight stay at Hotel/Resort at Chandipur.`,
              `Day – 3: After breakfast, Check-out (10.00 am) from Hotel. Proceed for your onward journey. Lunch en-route. Then proceed towards Bhubaneswar Airport (extra charge) / Balasore Railway Station, a 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends...`
            ]}
          />

          <Destination
            title="SIMLIPAL"
            cta='Book Now for 2N/3D'
            subtitle="Add-on (or) Separately with FOREST"
            content={[
              `Day – 1: Start of tour: Our representative will receive you at Bhubaneswar Airport / Balsore Station in the morning at (06-10 am). If from Airport, drive to Simlipal (or) pick-up from Balasore station. Lunch en-route. Check into Hotel/Resort. Lunch break. Rest. Evening free to visit the local market. Dinner & Overnight at Hotel / Resort at Chandipur.`,
              `Day – 2: Excursion to Simlipal: Early morning after breakfast, experience a Jungle Safari. Visit Joranda / Barehipani Waterfalls. Lunch en-route. Return in evening. Dinner & Overnight stay at Hotel/Resort at Simlipal.`,
              `Day – 3: After breakfast, Check-out (10.00 am) from Hotel. Proceed for your onward journey. Lunch en-route. Then proceed towards Bhubaneswar Airport (extra charge) / Balasore Railway Station, a 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends...`
            ]}
          />


          {/* SAME PATTERN FOR OTHER DESTINATIONS */}
          {/* GOPALPUR */}


          <Destination
            title="GOPALPUR"
            cta='Book Now for 2N/3D'
            subtitle="Add-on (or) Separately with Bhubaneswar Airport"
            content={[
              `Day – 1: Start of tour: Our representative will receive you at Bhubaneswar Airport / Berhampur Station in the morning at (06-10 am). If from Airport, drive to Chandipur Sea Beach (or) pick-up from Balasore station. Lunch en-route. Check into Hotel/Resort. Lunch break. Rest. Evening free to visit the local market. Dinner &   Overnight at  Hotel / Resort at Gopalpur.`,
              `Day –2: Enjoy an early morning sunrise over the Bay of Bengal. After breakfast, proceed to visit Taptapani , Dhabaleshwar, The Light House, etc.  Lunch en-route. Return  & evening free to explore local area near the sea beach area. Dinner &   Overnight at  Hotel / Resort at Gopalpur.`,
              `Day –3: After breakfast, Check-out (10.00 am) from Hotel. Proceed for your onward journey. Visit some places of attraction like Tampura, Ghodahada, Aryapalli Beach, Rambha Forest, etc (as time permit). Lunch en-route. Then proceed towards Bhubaneswar Airport (extra charge)/ Berhampur  Railway Station,  in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends...`
            ]}
          />
          {/* DARINGBADI */}


          <Destination
            title="DARINGBADI"
            cta='Book Now for 2N/3D'
            subtitle="Add-on (or) Separately with Bhubaneswar Airport"
            content={[
              `Day –1: Start of tour: Our representative will receive you at Bhubaneswar Airport / Berhampur Station in the morning at (06-10 am). If from Airport, drive to Chandipur Sea Beach (or) pick-up from Balasore station. Lunch en-route. Check into Hotel/Resort. Lunch break. Rest. Evening free to visit the local market. Dinner &   Overnight at  Hotel / Resort at Daringbadi.`,
              `Day –2: Local sightseeing: After breakfast, proceed to explore Hill View Point, Nature Park, Dolun River, Pine Jungle, Daringbadi Waterfalls, Coffee Garden, etc. Lunch en-route. Back in evening. Dinner &   Overnight at  Hotel / Resort at Daringbadi.`,
              `Day –3: Enjoy an early morning sunrise from Sunrise View Point. After breakfast, Check-out (10.00 am) from Hotel. Proceed for your onward journey. Lunch en-route. Then proceed towards Bhubaneswar Airport (extra charge) / Balasore  Railway Station in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends...`
            ]}
          />

          <Destination
            title="SATKOSIA TIGER RESERVE"
            cta='Book Now for 2N/3D'
            subtitle="Add-on (or) Separately with Bhubaneswar Airport"
            content={[
              `Day –1: Start of tour: Our representative will receive you at Bhubaneswar Airport (extra charge) / Angul/Khurda Rd. Railway Station in the morning at (06-10 am). If from Airport, drive to Satkosia. Breakfast at Dhenkanal. Arrive & Check-in at Hotel/Resort at Purunakot. Lunch & rest. Afternoon, go for a jungle safari at Kandahera range. Evening free. Overnight at  Hotel / Resort (or) Swiss Cottages (extra charge) at Satkosia / Purunakot.`,

              `Day –2: Local sightseeing: Early morning, enjoy a Jungle Trek at Nandini Nalla area. After breakfast, proceed to explore Jungle Safari at Tulka Forest range, Bhimdhara Waterfalls, etc. Lunch en-route. Post lunch, visit Baghmunda Forest range. Back in evening. Overnight at  Hotel / Resort (or) Swiss Cottages (extra charge) at Satkosia / Purunakot.`,

              `Day –2: ALTERNATIVELY: Early morning, enjoy a Jungle Safari at Hatigirja Forest range. After breakfast, proceed to explore Jungle Safari at Katrang Nalla range. Lunch en-route. Post lunch, enjoy a boat ride on river Mahanadi. Back in evening. Dinner & you can go for a thrilling Night Safari in the Kandahera Forest range (if available).   Dinner &   Overnight at  Hotel / Resort (or) Swiss Cottages (extra charge) at Satkosia / Purunakot.`,

              `Day –3: Enjoy an early morning sunrise from Sunrise View Point. After breakfast, Check-out (10.00 am) from Hotel. Proceed for your onward journey. Lunch en-route. Then proceed towards Bhubaneswar Airport (extra charge) / Angul/Khurda Rd.  Railway Station in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends.`
            ]}
          />


          {/* CHANDRABHAGA */}

          <Destination
            title="CHANDRABHAGA "
            cta='Book Now for 2N/3D'
            subtitle="Add-on (or) Separately with Bhubaneswar Airport"
            content={[
              `Day –1: Start of tour: Our representative will receive you at Bhubaneswar Airport (extra charge) / Puri Station in the morning at (06-10 am). Drive to Chandrabhaga Sea Beach .Check into Hotel/Resort at Konark (or) Swiss Tent at Chandrabhaga beach (extra cost).Then visit the Konark Sun Temple, a must visit place while at Konark. Lunch en-route. Evening free to visit the local market. Dinner & Overnight at  Hotel / Resort (or) Swiss Cottages at Chandrabhaga / Konark.`,

              `Day –2: Enjoy an early morning sunrise over the Bay of Bengal. After breakfast, explore & enjoy the various Water Sports activities on offer.  Lunch break. Return  & evening free to explore local area near the sea beach area. Dinner &   Overnight at  Hotel / Resort (or) Swiss Cottages at Chandrabhaga / Konark.`,

              `Day –3: After breakfast, Check-out (10.00 am) from Hotel. Proceed for your onward journey. Visit some places of local  interest (as time permit). Lunch en-route. Then proceed towards Bhubaneswar Airport (extra charge)/ Puri  Railway Station,  in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends.`
            ]}
          />

        </div>
      </div>
      {/* ================= ODISHA HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Odisha Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in the land of temples
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Temple className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ancient Temples</h3>
              <p className="text-sm text-gray-600">Lord Jagannath Temple, Konark Sun Temple, Lingaraja Temple</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <WavesIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Golden Beaches</h3>
              <p className="text-sm text-gray-600">Puri Golden Beach, Chandipur, Gopalpur, Chandrabhaga</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Bird className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Wildlife Sanctuaries</h3>
              <p className="text-sm text-gray-600">Chilika Lake, Bhitarkanika, Simlipal, Satkosia Tiger Reserve</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Hill Stations</h3>
              <p className="text-sm text-gray-600">Daringbadi - Kashmir of the East, with coffee gardens</p>
            </div>
          </div>
        </div>
      </section>


      <PackagePricing
        title="Odisha Tour Packages"
        subtitle="Choose your perfect cultural and coastal adventure"
      />


      <ContactCTA />
    </main>
  )
}


function Destination({ title, subtitle, content, cta }: { title: string; subtitle: string; content: string[]; cta: string; }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-10 space-y-6">
      <div className="flex gap-5 items-start mt-8">
        <div>
          <h2 className="text-3xl font-bold text-indigo-700">{title}</h2>
          <p className='text-gray-500 text-base mt-2'>{subtitle}</p>
        </div>
        <a
          href="/book-tour"
          className="bg-yellow-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
        >
          {cta}
        </a>
      </div>



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