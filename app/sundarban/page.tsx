"use client"

import Image from 'next/image'
import { Trees, Waves, MapPin, Calendar, Users, Star, Clock, Camera, Anchor, Eye, Bird, Fish, Trees as TreeIcon, Home, Ship, IndianRupee, Award, Compass, Play } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'
const watchTowers = [
  {
    id: 1,
    name: "Sajnekhali Watch Tower",
    image: "/hotal/Sajnekhali.jpeg",
    description:
      "Main tourist hub with museum, crocodile park, turtle sanctuary and mangrove interpretation center.",
    location: "Sajnekhali, Sundarbans Tiger Reserve"
  },
  {
    id: 2,
    name: "Dobanki Watch Tower",
    image: "/hotal/do-banki-camp02.png",
    description:
      "Famous for its thrilling canopy walk through dense mangrove forest.",
    location: "Dobanki Camp Area"
  },
  {
    id: 3,
    name: "Netidhopani Watch Tower",
    image: "/hotal/netidhopani.jpeg",
    description:
      "Historic ruins with mythological significance and excellent tiger sighting zone.",
    location: "Deep Forest Core Area"
  },
  {
    id: 4,
    name: "Sudhanyakhali Watch Tower",
    image: "/hotal/sudhanyakhali.jpeg",
    description:
      "Prime wildlife spotting location for Royal Bengal Tiger, deer and crocodiles.",
    location: "Core Tiger Reserve Area"
  },
  {
    id: 5,
    name: "Burir Dabri Watch Tower",
    image: "/hotal/burirdabri.jpeg",
    description:
      "Mud walk and mangrove cage trail leading to Raimangal View Point near Indo-Bangladesh border.",
    location: "Extended Zone (Special Permit Required)"
  },
  {
    id: 6,
    name: "Kumirmari Watch Tower",
    image: "/hotal/kumirmari.jpeg",
    description:
      "Village side watch point offering rustic mangrove landscape and local culture experience.",
    location: "Kumirmari Village Area"
  }
];
export default function SundarbanPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Um95YWwlMjBCZW5nYWwlMjBUaWdlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Sundarban mangrove forest with waterways"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-800/60 to-green-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trees className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">UNESCO World Heritage Site</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sundarban
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Land of the Royal Bengal Tiger
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore the world's largest mangrove forest, home to majestic tigers,
              diverse wildlife, and the unique ecosystem of West Bengal
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Book Your Safari
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Explore Tour Packages
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the wilderness</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trees className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">10,000 km²</h3>
              <p className="text-gray-600 text-sm">World's largest mangrove</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Eye className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">100+ Tigers</h3>
              <p className="text-gray-600 text-sm">Royal Bengal Tigers</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Bird className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">300+ Species</h3>
              <p className="text-gray-600 text-sm">Birds & Wildlife</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">UNESCO Site</h3>
              <p className="text-gray-600 text-sm">Since 1987</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOUR PACKAGES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made combination packages designed for your perfect Sundarban experience
            </p>
          </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Circuit I - 2N/3D */}
            <Destination
              title="SUNDARBAN - I"
              cta='Book Now for 2N/3D'
              subtitle="Circuit-I MANGROVE FOREST-ROYAL BENGAL TIGER"
              content={[
                `Day - 1 : Start of tour : Pick up from Science City (08.30 a.m.). Packet breakfast with bottled water will be served in the Car / Bus. Arrival at Godhkhali (about 120 km / 3 hrs later). Departure by Launch at Resort / Hotel at Gosaba / Pakhiralay / Dayapur / Dulki / Bonnie Camp Island. Tea / Coffee / Refreshment to be served during the launch journey. Reach & check-in at the Resort / Hotel Buffet Lunch as per menu. Post lunch, Sightseeing by river cruise around Jotirampur Bird Watching Island for sighting of Migratory Birds. Evening Tea / Coffee / Refreshments are served. A colourful Cultural Programme of local village folk dance at the Resort / Hotel  (optional) can be arranged. Dinner & Overnight stay in Resort/ Hotel at Sundarban.`,

                `Day - 2 : Early Morning tea. Breakfast at Resort / Served on Boat, Sightseeing by river cruise around Do-Banki Tiger Reserve & Gazikhali, Pirkhali Creeks & Panchamukhi River crossing. Lunch as per menu at Resort / Served on Boat while-on-cruise. Visit 3 Watch Towers & Canopy Walk; namely in Netidhopani, Dobanki, Sajnekhali in the Tiger Project Area for a view of the wild animals, crocodiles, museum, watch towers, etc. A colourful Cultural Programme of local village folk dance at the Resort / Hotel (optional) can be arranged. Dinner & Overnight stay in Resort / Hotel at Sundarban.`,

                `Day – 3 : Early Morning tea. Breakfast at Resort / Served on Boat. A stroll down the river sides. A village tour on foot is held to experience the life of the local inhabitants and visit Rabindranath’s Heritage Bungalow & Hamilton’s Bungalow  (OR) visit to Sudhanyakhali watch tower by river cruise through creeks & around the cluster of islands of Sunderban Tiger Project area. Then towards Godhkhali by launch (lunch will be served on Boat. Proceed towards Kolkata by Car / Coach & drop off at Kolkata Science City around (06-07 pm). Tour ends…..`
              ]}
            />

            <Destination
              title=" SUNDARBAN Customise"
              cta='Book Now for 2N/3D'
              subtitle="Add on (or) Separately"
              content={[
                `OPTION – 1:[Min 10-15 PAX] Rs.19000/- PAX :Overnight stay & food at a  Premium 5* Resort at Sundarban.`,
                `OPTION –2: [Min 10-15 PAX] Rs.19000/- PAX :Overnight stay & food at AC House Boat anchored on the River in Sundarban.`
              ]}
            />
            <Destination
              title="SUNDARBAN-III"
              cta='Book Now for 3N/4D'
              subtitle="Circuit-III MANGROVE FOREST-OTHER AREAS - Add on (or) Separately"
              content={[
                `Day - 1 :Start of tour : Pick up from Science City (08.30 a.m.). Packet breakfast with bottled water will be served in the Car / Bus. Arrival at Godhkhali (about 120 km / 3 hrs later). Departure by Launch at Resort / Hotel at Gosaba / Pakhiralay / Dayapur / Dulki / Bonnie Camp Island. Tea / Coffee / Refreshment to be served during the launch journey. Reach & check-in at the Resort / Hotel Buffet Lunch as per menu. Post lunch, Sightseeing by river cruise around Jotirampur Bird Watching Island for sighting of Migratory Birds. Evening Tea / Coffee / Refreshments are served. A colourful Cultural Programme of local village folk dance at the Resort / Hotel  (optional) can be arranged. Dinner & Overnight stay in Resort/ Hotel at Sundarban.`,

                `Day - 2 :Early Morning tea. Breakfast at Resort / Served on Boat, Sightseeing by river cruise around Do-Banki Tiger Reserve & Gazikhali, Pirkhali Creeks & Panchamukhi River crossing. Lunch as per menu at Resort / Served on Boat while-on-cruise. Visit 3 Watch Towers & Canopy Walk; namely in Netidhopani, Dobanki, Sajnekhali in the Tiger Project Area for a view of the wild animals, crocodiles, museum, watch towers, etc. A colourful Cultural Programme of local village folk dance at the Resort / Hotel (optional) can be arranged. Dinner & Overnight stay in Resort / Hotel at Sundarban.`,

                `Day - 3 :Sundarban Other Area: (With additional Cost & Minimum 6-8 PAX) After bed tea, you will be cruising through the deep creeks and covering the watchtowers of Burir Dabri, Kumirmari as well as Morich Jhapi & Bonnie Camp. Breakfast on-board. Burirdabri in Sundarban national Park is famous for its watchtower, a mud-walk and mangrove cage trail leading to a viewpoint known as Raimongal View Point. A visit to the watch Tower at Burirdabri camp. The Kumirmari watchtower offers an exciting view of the jungles. (Rs.1000/- extra per persons towards special permission is required for this excursion). Overlooking an untamed forest, enjoy the sights and sounds of nature resplendent in her pristine virginal beauty. Lunch will be served on-board. Guest can also take a stroll through the Kumirmari bazaar if one wants to have a first-hand view of a typical rustic Indian market place. Dinner & Overnight stay in Hotel / Resort at Sundarban (OR) Boat Stay anchored in middle of the river.`,

                `Day - 4 :Early Morning tea. Breakfast at Resort / Served on Boat. A stroll down the river sides. A village tour on foot is held to experience the life of the local inhabitants and visit Rabindranath’s Heritage Bungalow & Hamilton’s Bungalow  (OR) visit to Sudhanyakhali watch tower by river cruise through creeks & around the cluster of islands of Sunderban Tiger Project area. Then towards Godhkhali by launch (lunch will be served on Boat. Proceed towards Kolkata by Car / Coach & drop off at Kolkata Science City around (06-07 pm). Tour ends`
              ]}
            />


          </div>
          <div className="space-y-8 lg:sticky lg:top-24 h-fit">

            {/* Video Section */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Watch Sunderban Tour Video
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

      {/* ================= WATCH TOWERS & ATTRACTIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Watch Towers & Attractions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic viewpoints for wildlife spotting and experiencing the mangrove ecosystem
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watchTowers.map((tower) => (
              <div
                key={tower.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group"
              >
                {/* Image */}
                <div className="relative h-56">
                  <Image
                    src={tower.image}
                    alt={tower.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {tower.name}
                  </h3>

                  <p className="text-gray-700 mb-4">
                    {tower.description}
                  </p>

                  <div className="flex items-center gap-2 text-green-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">
                      {tower.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WILDLIFE & NATURE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Wildlife & Nature</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the incredible biodiversity of the Sundarban mangrove ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-green-700">Royal Bengal Tiger</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The majestic apex predator of Sundarban, uniquely adapted to mangrove habitat.
                These magnificent tigers are excellent swimmers and have developed special behaviors
                to thrive in the delta region.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-700 mb-2">Population</h4>
                  <p className="text-2xl font-bold text-orange-600">100+</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-2">Best Season</h4>
                  <p className="text-lg font-semibold text-green-600">Nov - Mar</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Video Section */}
              <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mb-4 mx-auto" />
                  <h4 className="text-2xl font-bold mb-2">Tiger Videos</h4>
                  <p className="text-lg">Coming Soon</p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop"
                alt="Royal Bengal Tiger in Sundarban"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Spotted Deer", icon: "🦌", count: "30,000+" },
              { name: "Crocodiles", icon: "🐊", count: "500+" },
              { name: "Wild Boar", icon: "🐗", count: "10,000+" },
              { name: "Monkeys", icon: "🐒", count: "40,000+" },
              { name: "Kingfishers", icon: "🦜", count: "50+ species" },
              { name: "Mangrove Trees", icon: "🌳", count: "60+ species" },
              { name: "Dolphins", icon: "🐬", count: "Ganges River" },
              { name: "Turtles", icon: "🐢", count: "5+ species" }
            ].map((animal, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{animal.icon}</div>
                <h4 className="font-bold text-lg mb-1">{animal.name}</h4>
                <p className="text-green-600 font-semibold">{animal.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the main hubs of Sundarban tourism
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sajnekhali</h3>
              <p className="text-gray-600 text-sm mb-3">Main tourist hub with watch tower and museum</p>
              <div className="text-green-600 font-semibold">Tourist Center</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pakhiralay</h3>
              <p className="text-gray-600 text-sm mb-3">Resort area with accommodation facilities</p>
              <div className="text-blue-600 font-semibold">Stay Hub</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Anchor className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gosaba</h3>
              <p className="text-gray-600 text-sm mb-3">Gateway to Sundarban with launch services</p>
              <div className="text-orange-600 font-semibold">Gateway</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition group">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Ship className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Godhkhali</h3>
              <p className="text-gray-600 text-sm mb-3">Main boarding point for Sundarban cruises</p>
              <div className="text-purple-600 font-semibold">Boarding Point</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULTURAL EXPERIENCES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the rich local culture and traditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold">Village Life Experience</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Guided village tours to experience authentic rural life</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Interaction with local fishermen and honey collectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Visit to local markets and handicraft centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Traditional fishing techniques demonstration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold">Folk Cultural Programs</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Traditional village folk dance performances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Local music and storytelling sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Bonfire evenings with cultural activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Traditional cuisine cooking demonstrations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Heritage Sites</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Rabindranath Tagore's Heritage Bungalow</h4>
                <p className="text-green-100">Visit the historic bungalow where the Nobel laureate stayed during his Sundarban visits</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Hamilton's Bungalow</h4>
                <p className="text-green-100">Explore the colonial-era heritage site with rich historical significance</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <PackagePricing
        title="Sundarban Tour Packages"
        subtitle="Choose your perfect mangrove adventure duration"
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