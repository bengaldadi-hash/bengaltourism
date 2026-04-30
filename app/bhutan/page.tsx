"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'


export default function BhutanPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578556881786-851d4b79cb73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qmh1dGFufGVufDB8fDB8fHww"
            alt="Beautiful Bhutan valley with mountains and traditional monastery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Land of Thunder Dragon</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bhutan
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Paro • Thimpu • Punakha • Tiger Nest
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the mystical Himalayan kingdom with ancient monasteries,
              sacred temples, and breathtaking mountain passes
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Bhutan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Himalayan Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Thunder Dragon</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">
              Visit and Explore Bhutan
            </h1>
            <p className="text-lg text-gray-700">
              Paro, Thimpu, Punakha, Tiger Nest, Dochu La Pass with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="BHUTAN"
                subtitle="Land of the Thunder Dragon With PARO – THIMPU – PUNAKHA-"
              />


              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1">
                  Start of tour from BENGAL: Our representative will be there to receive the Guest at Bagdogra Airport / NJP / Hasimara Station in Bengal. After getting entry permit form immigration office (Closed on Saturday & Sunday). Phuntsholing, we proceed towards Thimpu. Check-into Hotel at Thimpu. Lunch en-route or after check-in. (Note: Avoid reaching on Fridays & Saturdays as immigration office are closed on Saturday & Sunday). Dinner & Overnight stay at Hotel at Phunsholing/Jaigaon.

                  ALTERNATIVELY:Start of tour from PARO AIRPORT: Our representative will be there to receive the Guest at Paro Airport. After getting entry permit form immigration office (Closed on Saturday & Sunday). Phuntsholing, we proceeds towards Thimpu. Hotel at Thimpu. (Note: Avoid reaching on Fridays & Saturdays as immigration office are closed on Saturday & Sunday). Lunch-en-route. Return in the evening. Dinner & Overnight stay at Hotel at Thimpu.
                </DayCard>

                <DayCard title="Day – 2">
                  Phuntsholing-Thimpu—After getting entry permit form immigration office Phuntsholing, we proceeds towards Thimpu. Thimpu is 172 km and 7 hours driving time from Phuntsholing. Thimpu the capital of Bhutan is beautiful valley . The valley is surrounded by hills and provides outstanding view. Lunch-en-route. Return in the evening. Dinner & Overnight stay at Hotel at Thimpu.
                </DayCard>

                <DayCard title="Day – 3">
                  Thimpu Sight-Seeing : In the morning after break fast, your Bhutan tours starts from the National Memorial Chorten built in the memory of Bhutan's 3rd king and it is also a favourite place for local people. The next destination is the Buddha's Dordenma statue. It is a gigantic Buddha statue made of Bronze and gilded gold. Later we will see Bhutan's national animal, the Takin, in the Sanctuary. Finally today's tour end at Thimpu Dzong. It is also called Trashichho Dzong, the largest religious building in Bhutan and the present king's office and administrative center. The afternoon visit is scheduled for you to learn much about Bhutan's culture, history and local peoples life. You will visit the Thirteen Traditional Arts and Craft School and the folk Heritage Museum, before continuing to the National Library and the Traditional Paper Making Factory. Lunch-en-route. Return in the evening. Dinner & Overnight stay at Hotel at Thimpu.
                </DayCard>

                <DayCard title="Day – 4">
                  Thimpu - Paro : Today after break we will move towards Paro. It takes about 2 hours. Today's sightseeing tour starts from Paro Dzong, also named Rinpung Dzong. It is one of the most impressive dzongs in Bhutan and the finest example of Bhutnes' architecture. It was built in 1644 as a fortrees and Buddhist temple, and is now the local religious administrative centre. A visit to Airport View Point is also scheduled. The annual Paro Tshechus held here in spring, is the most important local religious festival and attracts thousands of visitors. Later we visit Ta Dzong at the top of the hill above the Parodzong. It was originally the watch tower of Paro Dzong now it houses the National Museum with over 3000 art treasures. Our next destination is the KyichuLhakhang. One of the oldest temples inn Bhutan where the royal family's most important celebration are held. Lunch-en-route. Return in the evening. Dinner & Overnight stay at Hotel at Paro.
                </DayCard>

                <DayCard title="Day – 5">
                  Paro - Hiking : This morning's private tour is scheduled in the Taktsang (Tiger Nest) , the most famous of Bhutan's monasteries. It has long been recognized as a holy place as it was said that in the8th century the Guru Rinpoch flaw to the site of the monastery on the back of a Tiger and then meditated in a cave here. This site is located in the rocky cliffs over 900 meters above the floor of Paro valley. It is about aa two hours strenuous hike to get there, however it is worthwhile for the spectacular view and historical interest. After that we will go to the ruins of Drukgyel Dzong which was built to honour the memory of Bhutan's victory over the Tibetan invaders. (OR) If you are not hiking to Tiger Nest, some local sight seeing included. Lunch-en-route. Return in the evening. Dinner & Overnight stay at Hotel at Paro.

                  ALTERNATIVELY: Paro – Chele La Pass: Che Le (Pass) considered to be one of the highest motor able passes in Bhutan & some local sight seeing as per time available. On a clear day, you can appreciate the stunning distant view of Mt. Chomolhari behind the ruins. Some local sight-seeing included. Lunch-en-route. Return in the evening. Dinner & Overnight stay at Hotel at Paro.
                </DayCard>

                <DayCard title="Day – 6">
                  Transfer from Paro to Phuntsholing / Dooars : After breakfast, check-out & drop to Paro Airport / Hasimara Station in Bengal around (02-03pm). (OR) Transfer back to Hotel at Phuntsholing. Tour Ends…. On the way take a short stop at Chuzom, the confluence of Paro and Thimpu rivers with three different style of stupa adorn this confluence. Drive further through Chapcha and later take glimpse of famous Chukha Dam and the magnificent Vince waterfall before Gedu town. Alternatively, we will take you to Jaldapara / Lataguri in Dooars. Dinner & Overnight stay at Hotel at Resort at Jaldapara / Lataguri.
                </DayCard>

                <DayCard title="Day – 7">
                  Early breakfast. some local sightseeing & places of interest in the Forest of Jaldapara / Gorumara can be visited. You can also take a Jeep Safari if time permits. Lunch-en-route. Then drive to Bagdogra Airport / NJP Railway Station in Bengal for Forwarding Journey before (06.00pm) Tour ends.
                </DayCard>

              </div>


              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="PUNAKHA"
                subtitle="Add-on (or) Separately From THIMPU - PARO"
              />

              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1  ">
                  ALTERNATIVELY: Thimpu – Punakha: For visiting Punakha, one has to rise early & visit Punakha. (Rs.3000/5500) per vehicle will be charged extra / payable locally). Punakha is situated at an elevation of 4265 feet. Punakha is the winter seat of Je Khenpo (the chief abbot). Its natural drainage from Pho Chhu (male) and Mo Chhu (female) rivers - It offers splendid views of the distant Himalayas at Dochula Pass situated at an elevation of 10065 feet on Thimphu – Punakha road.  The pass is also popular spiritual place for both locals and tourists because of an important temple that is located on the crest of Dochula pass. Visit  Punakha Dzong; strategically built at the confluence of the Pho Chu (male) and Mo Chu (female) rivers by the first Shabdrung of Bhutan, Ngawang Namgyel in 1637. Lunch-en-route. Return in the evening. Dinner & Overnight  at Hote l at Punakha.
                </DayCard>
                <DayCard title="Day – 2 ">
                  Punakha - Paro : Today after break we will move towards Paro. Check into Hotel. After which start a strenuous hiking up to Kila Goempa( Kila Nunnery ), located on the cliffs at about 3500 meters (11,400 ft) above sea level. This hiking takes almost an hour each through forest and steep slopes. From here you will have beautiful views into the Haa and Paro valleys It takes about 2 hours. Today's sightseeing tour starts from Paro Dzong, also named Rinpung Dzong. It is one of the most impressive dzongs in Bhutan and the finest example of Bhutnes'  architecture. It was built in 1644 as a fortress and Buddhist temple, and is now the local religious administrative centre. The annual ParoTshechus held here. Later we visit Ta Dzong at the top of the hill above the Parodzong. It was originally the watch tower of ParoDzong now it houses the National Museum with over 3000 art treasures. Our next destination is the Kyichu Lhakhang; one of the oldest temples inn Bhutan where the royal family's most important celebration are held. Lunch-en-route. Return in the evening.  Dinner & Overnight stay at Hotel at Paro.
                </DayCard>
                <DayCard title="Day – 3 ">
                  Paro – Tiger's Nest Hike – Departure : After early breakfast, proceed for the most iconic hike of Bhutan – Taktsang Monastery (Tiger's Nest). The monastery is perched dramatically on a cliff at 3,120 meters (10,240 ft) above sea level. It is believed that Guru Rinpoche flew to this site on the back of a tigress and meditated here in the 8th century. The hike takes around 4–5 hours round trip depending on pace. Ponies are available (on direct payment basis).

                  After completing the hike, return to hotel for freshening up. Later, depending on flight schedule, transfer to Paro International Airport for onward journey with unforgettable memories of Bhutan.

                  Tour Ends.
                </DayCard>

              </div>




              <AddOnSection
                title="PHOBCHIKA"
                subtitle="Add-on (or) Separately From PUNAKHA"
              />

              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1">
                  Thimphu-Phobchika valley-After breakfast move towards Phobjika valley-also known as the valley of the Cranes. As you leave Thimphu you'll be surrounded by forest as your car climbs to the Dochulla Pass with its spectacular northern facing mountain views, continue to the subtropical valley of Punakha and down in to glacial valley of Phobjikha. Lunch-en-route. Return in the evening. Check into Hotel. Dinner & Overnight stay at Hotel/Resort at Phobchika.
                </DayCard>
                <DayCard title="Day – 2">
                  DAfter breakfast, Check-out for Half day site seen of Phobjikha valley which include visit to Gangtey Gonpa, etc. After site seen back to Punakha. Some local sight-seeing en-route included. Lunch-en-route. Return in the evening. Overnight stay in a Hotel at Punakha.
                </DayCard>
                <DayCard title="Day – 3">
                
                  
                  Departure: After breakfast, check-out of the Hotel in the afternoon.  if time permits and proceed to the airport for return flight to Kolkata, India. Tour ends
                </DayCard>
              </div>
            </div>
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Bhutan Video
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
      </div>
      <TourPricingSection
        title="Bhutan Luxury & Adventure Packages"
        subtitle="Explore the Land of the Thunder Dragon with curated journeys"

     packages={[
          { label: "Customisable & Recommended for extended duration", days: "6N / 7D", price: 22600 },
          { label: "Highly Recommended", days: "5N / 6D", price: 19000 },
          { label: "Most Popular", days: "4N / 5D", price: 15400 },
          { label: "In group of 20+ Persons", days: "3N / 4D", price: 12700 },
          { label: "As add on / Separately ", days: "2N / 3D", price: 9100 },
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
      <div className='flex  gap-5 items-center'>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
          Book now For 6N/7D
        </a>
      </div>
      <p className="font-semibold text-gray-700">{subtitle}</p>

    </div>
  )
}

function DayCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-emerald-600">
      <h3 className="text-2xl font-semibold text-emerald-700 mb-4">{title}</h3>
      <p className="text-gray-700 leading-8 whitespace-pre-line text-lg">{children}</p>
    </div>
  )
}

function AddOnSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col  space-y-2">


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