"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'

export default function HotelBookingPage() {
  const router = useRouter()

  const handleBookNow = () => {
    router.push('/book-hotel')
  }
  const puriHotels = [
    "Seagull",
    "Park Beach",
    "Camellia",
    "Sagarika",
    "Golden Tree",
    "Puri Beach Resort",
    "Golden Beach",
    "Beach View",
    "Victoria",
    "Atithi",
    "Raj",
    "Suv Palace",
    "Diamond",
    "Sea Hawk",
    "Sonar Bangla",
    "Sea View",
    "East-West",
    "Empires",
    "Blue Lily",
    "Prabhu Pada",
    "Niladri",
    "Shree Hari",
    "Sea Wave",
    "Landmark",
    "Puri Inn Hotel",
    "Sankhabela",
    "Deep Resort",
    "Surya Beach",
    "Royal Palace",
    "Hans Coco",
    "Zamindar Palace",
    "Dreamland",
    "Sterling",
      "Golden Palace",
    "Nayak Beach",
    "Sandy Villa",
    "Tohshali Sands",
    "Sapphire",
    "MH Residence",
    "Krishna Palace",
    "Sagar Tarang",
    "Mayfair Waves",
    "Holiday Inn",
  ];


  const hillHotels = [
    "Apple Orchard",
    "Anola",
    "Bamboo Grove",
    "Central Heritage",
    "Chumbi Residency",
    "Coral Inn",
    "Central Hotel",
    "Cherry Guest House",
    "Casino Mahjong",
    "Doma Palace",
    "Doma Residency",
    "Fortuna",
    "Juniper",
    "Mayfair Resorts & Spa & Casino",
    "Maya Inn",
    "Mist Tree Mountain",
    "Oakridge Retreat",
    "The Oriental",
    "Riccasa",
    "Rendezvous",
    "Royal Plaza",
    "Sonam Delek",
    "Silk Route Residency",
    "Sai Kripa",
    "Summit Spa",
    "Tamarind",
    "Terrace Valley",
    "Tres Teli",
    "Tara Palace",
    "Tashi Delek",
    "Tashi Thendup",
    "Tashiling",
    "Tibet",
    "White Conch",
  ];
  const beachResorts = [
    "Asha International",
    "Ambalika",
    "Blue View",
    "Dolphin",
    "Digha Tourist Lodge",
    "Jai Ram Hi Tide",
    "JP Hotel",
    "Garden Retreat",
    "Gitanjali",
    "Greenland Inn",
    "M Plaza",
    "Ownland Resort",
    "Peeku's Inn",
    "Sea View",
    "Seagull",
    "Pearl International",
    "Rajeet",
    "Reelook",
    "Sea Green",
    "Sea Bird",
    "Sonar Bangla",
    "Sea Hawk",
    "Sea Coast",
    "Sun View Resort",
    "Sea Sand",
    "Sea Star Resort",
  ];

  const hotels = [
    "Anand Palace",
    "Ascot",
    "Broadway",
    "Bellevue Heritage",
    "Central Heritage",
    "Cedar Inn",
    "Crystal Palace",
    "Central Nirvana",
    "Dolphin",
    "Dreamland",
    "Dakeling",
    "Elgin",
    "Fairmount",
    "Golden Height Enclave",
    "Glenary",
    "Hermitage",
    "Krishna Residency",
    "Mayfair Resorts & Spa",
    "Mayfair Himalayan Retreat",
    "Maple",
    "Mt. Royal",
    "Mt. View",
    "North Star",
    "Oasis",
    "Pineridge",
    "Pinetree",
    "Pink Mountain",
    "Princess",
    "Palbheu",
    "R J Resort",
    "Rhododendron",
    "Spring Burn",
    "Sunflower",
    "Seven Seventeen",
    "Shangri-La",
    "Sonar Bangla",
    "Sinclairs",
    "Swiss Hotel",
    "Sterling Snow Lion",
    "Travellers Inn",
    "Yuma",
    "Viceroy",
    "Windamere",
  ];
  const jungleResorts = [
    "Aranyak Resort",
    "Bamboo Trail",
    "Bonani",
    "Chatakpur Eco Hut",
    "Dooars Mountain",
    "Dreamland",
    "Debrani",
    "Elephanta Forest",
    "Forest Inn",
    "Gorumara",
    "Green Touch Resort",
    "Green Lagoon",
    "Golden Resort",
    "Green Heaven",
    "Hatihana Green Castle",
    "Hollong Tourist Lodge",
    "Hatari Resort",
    "Heaven Inn",
    "Jungle Inn",
    "Jaldapara Resort",
    "Jungle Resort",
    "Jaldapara Inn",
    "Jaldapara Tourist Lodge",
    "Kadambini Resort",
    "Kontiki Resort",
    "Khairibari Forest Hut",
    "Lake View",
    "Murti Tourist Lodge",
    "Murti River Resort",
    "Natures Hut",
    "Neora River Resort",
    "Pagoda Inn",
    "Prime Murti",
    "Pagoda",
    "Rhino Resort",
    "Riverwood Forest",
    "Rovers Inn",
    "Wild Hut",
    "Sinclairs Hotel",
    "Tusker Den",
  ];
  const sundarbanHotels = [
    "Apanjan",
    "Banani",
    "Eco Resort",
    "Mainak",
    "Mangrove Retreat",
    "River Side",
    "Royal Bengal Resort",
    "Riverwood",
    "Riverside Holiday",
    "Sajnekhali Tourist Lodge",
    "Solitary Nook",
    "Sudarban Gateway Resort",
    "Suranjana Resort",
    "Hotel S-21",
    "Tiger Camp",
    "Tiger View Resort",
    "United 21",
  ];

  const hotelData = [
    {
      id: 1,
      place: "DARJEELING",
      region: "NORTH BENGAL",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&h=400&fit=crop",
      rooms: [
        { type: "Basic", meals: "Excluding Breakfast", price: "₹ 2000" },
        { type: "Standard", meals: "Including Breakfast", price: "₹ 2800" },
        { type: "Deluxe", meals: "Including Breakfast", price: "₹ 3700" },
        { type: "Super Deluxe", meals: "Including Breakfast", price: "₹ 4600" },
        { type: "Executive", meals: "Including Breakfast", price: "₹ 5500" },
        { type: "Royal", meals: "Including Breakfast", price: "₹ 6400" },
        { type: "Premium", meals: "Including Breakfast", price: "₹ 7300" },
        { type: "Super Premium", meals: "Including Breakfast", price: "₹ 8200" },
        { type: "Luxury", meals: "Including Breakfast", price: "₹ 9100" },
        { type: "Star Luxury", meals: "Including Breakfast", price: "₹ 15400" }
      ],
      hotels: ["Anand Palace", "Ascot", "Broadway", "Bellevue Heritage", "Central Heritage", "Cedar Inn", "Crystal Palace", "Central Nirvana", "Dolphin", "Dreamland", "Dakeling", "Elgin", "Fairmount", "Golden Height Enclave", "Glenary", "Hermitage", "Krishna Residency", "Mayfair Resorts", "Maple", "Mt. Royal", "Mt. View", "North Star", "Oasis", "Pineridge", "Pinetree", "Pink Mountain", "Princess", "Palbheu", "R J Resort", "Rhododendron", "Spring Burn", "Sunflower", "Seven Seventeen", "Shangri-La", "Sonar Bangla", "Sinclairs / Swiss Hotel", "Sterling Snow Lion", "Travellers Inn", "Yuma", "Viceroy", "Windamare"]
    }

  ]

  const extraPersonCharges = [
    { type: "Child (1-4 years) Without Bed", description: "[Sharing with Parents]", price: "Rs. Free/-" },
    { type: "2nd Child / Person with Bed/Mattress", description: "[Free Breakfast]", price: "Rs. 750/-" },
    { type: "Extra Person / Bed", description: "[Breakfast + Dinner]", price: "Rs. 1500/-" },
    { type: "Extra Person / Bed", description: "[Breakfast + Lunch + Dinner]", price: "Rs. 2000/-" }
  ]

  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576096424-5f6e4e1a5?w=1920&h=1080&fit=crop"
            alt="Luxury hotel resort with swimming pool and mountain view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-pink-800/60 to-purple-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center text-center justify-center gap-2 mb-4">
              <Building className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">HOTEL BOOKING</span>
            </div>

            <h1 className="text-5xl  text-center md:text-7xl font-bold mb-6 leading-tight">
              Best Discounted Hotels
              <span className="block text-3xl md:text-5xl mt-2 text-purple-300">
                Guest Houses • Home Stays • All Tourist Locations
              </span>
            </h1>

            <p className="text-xl  text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Well-appointed accommodations across Bengal, Odisha, Sikkim and other destinations
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                View Hotels
              </button>
              <button onClick={handleBookNow} className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Find Your Perfect Stay</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>



      {/* ================= HOTEL LISTINGS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hotel Room Rates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affiliated Hotels & Resorts at Prominent Tourist Locations
            </p>
          </div>

          <div className="space-y-12">
            {hotelData.map((location) => (
              <div key={location.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                {/* Image Section - Full Width */}


                {/* Content Section - Below Image */}
                <div className="p-6 md:p-8">
                  {/* Room Cards */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                      <Bed className="w-5 h-5 text-blue-600" />
                      Available Room Types
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                      {location.rooms.map((room, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all hover:scale-105 border border-blue-100">
                          <div className="flex items-start justify-between mb-2">
                            <Bed className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">Available</span>
                          </div>
                          <h4 className="font-bold text-sm mb-2 text-gray-800 leading-tight">{room.type}</h4>
                          <p className="text-xs text-gray-600 mb-2">{room.meals}</p>
                          <p className="text-xl font-bold text-blue-600 mb-3">{room.price}</p>
                          <div className='flex gap-3 flex-col '>
                            <button onClick={handleBookNow} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition">
                              Book Now
                            </button>
                            <a
                              href="https://wa.me/917890727339"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg text-sm shadow-xl transition-all duration-300 hover:scale-105"
                            >
                              Chat
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hotels List */}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Main Heading */}
          <header className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Hotels, Resorts & Home Stays Across North Bengal & Eastern India
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer carefully selected hotels, luxury resorts, boutique stays and eco-friendly home stays across
              Darjeeling, Dooars, Sundarban, Gangtok, Puri, Digha and other popular destinations.
              Our accommodations range from premium heritage properties to sustainable community-based homestays. Accommodation / Rooms  will be provided at Hotel / Resort as per your choice / budget [or] as available at any of the Hotel Room & Guest House / Holiday Home / Tourist Lodge by Bengal Tourism on Main throughfare & the guests will fully accept & abide by this.
            </p>
          </header>

          {/* DARJEELING */}
          <section className="mb-16">
            <div className="flex items-center gap-5  mb-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Hotels in Darjeeling
              </h3>
              <Link href="/book-hotel" className="bg-gradient-to-r rounded-full from-yellow-600 to-yellow-600 text-white px-6 py-3  hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Now
              </Link>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Darjeeling, known as the “Queen of the Hills”, offers a blend of colonial charm and modern comfort.
              We provide accommodation options near Mall Road, Chowrasta, tea gardens and scenic viewpoints.
            </p>
            <div className="">
              <div className="flex flex-wrap gap-3">

                {hotels.map((hotel, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/917890727339?text=Hi%20I%20want%20to%20book%20hotel`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          px-4 py-2 rounded-full
          bg-gray-100 text-gray-700
          hover:bg-green-500 hover:text-white
          transition-all duration-300
          text-sm font-medium
          border border-gray-200
          hover:scale-105
          cursor-pointer
        "
                  >
                    {hotel}
                  </a>
                ))}

                {/* Last Text */}
                <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold border border-yellow-200">
                  ... & Similar Category Hotels
                </span>

              </div>
            </div>
          </section>

          {/* DOOARS */}
          <section className="mb-16">
            <div className="flex items-center gap-5  mb-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Dooars Resorts – Jungle Retreats & Wildlife Stays
              </h3>
              <Link href="/book-hotel" className="bg-gradient-to-r rounded-full from-yellow-600 to-yellow-600 text-white px-6 py-3  hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Now
              </Link>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Experience wildlife tourism in Gorumara, Jaldapara, Murti and Lataguri.
              Our Dooars properties include forest resorts, river-side lodges and eco cottages
              ideal for nature lovers and wildlife enthusiasts.
            </p>


            <div className="">

          
              {/* Resorts */}
              <div className="flex flex-wrap gap-3">

                {jungleResorts.map((resort, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/917890727339?text=Hi%20I%20want%20to%20book%20hotel`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          px-4 py-2 rounded-full
          bg-green-50 text-green-800
          border border-green-200
          text-sm font-medium
          transition-all duration-300
          hover:bg-yellow-400
          hover:text-black
          hover:border-yellow-500
          hover:scale-105
          shadow-sm hover:shadow-lg
          cursor-pointer
        "
                  >
                    {resort}
                  </a>
                ))}

                {/* Extra Text */}
                <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200 text-sm font-semibold">
                  ... & Similar Jungle Resorts
                </span>

              </div>
            </div>
          </section>

          {/* SUNDARBAN */}
          <section className="mb-16">

            <div className="flex items-center gap-5  mb-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Sundarban Eco Resorts – Mangrove & Wildlife Tourism
              </h3>
              <Link href="/book-hotel" className="bg-gradient-to-r rounded-full from-yellow-600 to-yellow-600 text-white px-6 py-3  hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Now
              </Link>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover the UNESCO World Heritage Mangrove Forest of Sundarban.
              Our eco-friendly resorts and river-side stays support local communities
              while offering safe and immersive wildlife experiences.
            </p>

            <div className="">


              {/* Hotel Tags */}
              <div className="flex flex-wrap gap-3">

                {sundarbanHotels.map((hotel, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/917890727339?text=Hi%20I%20want%20to%20book%20hotel`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          px-4 py-2 rounded-full
          bg-emerald-50 text-emerald-800
          border border-emerald-200
          text-sm font-medium
          transition-all duration-300
          hover:bg-orange-500
          hover:text-white
          hover:border-orange-500
          hover:scale-105
          hover:shadow-lg
          cursor-pointer
        "
                  >
                    {hotel}
                  </a>
                ))}

                {/* Extra Text */}
                <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 border border-orange-200 text-sm font-semibold">
                  ... & Similar Properties
                </span>

              </div>
            </div>
          </section>

          <section className="mb-16">

            <div className="flex items-center gap-5  mb-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Hotel names at Puri
              </h3>
              <Link href="/book-hotel" className="bg-gradient-to-r rounded-full from-yellow-600 to-yellow-600 text-white px-6 py-3  hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Now
              </Link>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Puri is one of the most popular pilgrimage and beach destinations in Odisha,
              famous for the sacred Jagannath Temple and the serene coastline along the Bay of Bengal.
              Every year thousands of devotees and tourists visit Puri to attend the world-renowned
              Rath Yatra festival and enjoy the peaceful sea breeze at Golden Beach.
              From luxury sea-facing resorts and premium beach hotels to budget-friendly stays
              near VIP Road and Swargadwar, Puri offers accommodation options suitable for
              families, couples, pilgrims and leisure travelers. Many hotels are located close
              to the beach, Jagannath Temple and Marine Drive, making sightseeing and relaxation
              convenient for visitors.
            </p>


            <div className="space-y-8">
  <div className="">

  

    {/* Hotels */}
    <div className="flex flex-wrap gap-3">

      {puriHotels.map((hotel, index) => (
        <a
          key={index}
          href={`https://wa.me/917890727339?text=Hi%20I%20want%20to%20book%20hotel`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-5 py-2.5
            rounded-full
            bg-orange-50
            text-orange-800
            border border-orange-200
            text-sm font-medium
            transition-all duration-300
            hover:bg-gradient-to-r
            hover:from-orange-500
            hover:to-red-500
            hover:text-white
            hover:shadow-xl
            hover:-translate-y-1
          "
        >
          {hotel}
        </a>
      ))}

      <div className="px-5 py-2.5 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200 text-sm font-semibold">
        & Similar Properties
      </div>

    </div>
  </div>
        


            </div>
          </section>


          {/* COASTAL DESTINATIONS */}
          <section className="mb-16">

            <div className="flex items-center gap-5  mb-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Coastal Hotels – Digha, Mandarmoni, Puri & Bakkhali
              </h3>
              <Link href="/book-hotel" className="bg-gradient-to-r rounded-full from-yellow-600 to-yellow-600 text-white px-6 py-3  hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Now
              </Link>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Enjoy beachfront stays along the Bay of Bengal including Digha, Mandarmoni,
              Tajpur, Shankarpur, Puri and Gopalpur. Choose from sea-view resorts,
              premium beach villas and family-friendly hotels.
            </p>

            <div className="">


              {/* Hotels */}
              <div className="flex flex-wrap gap-3">

                {beachResorts.map((hotel, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/917890727339?text=Hi%20I%20want%20to%20book%20hotel`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          group
          relative
          overflow-hidden
          px-5 py-2.5
          rounded-full
          bg-sky-50
          text-sky-800
          border border-sky-200
          text-sm font-medium
          transition-all duration-300
          hover:bg-gradient-to-r
          hover:from-sky-500
          hover:to-blue-600
          hover:text-white
          hover:border-blue-500
          hover:shadow-xl
          hover:-translate-y-1
          cursor-pointer
        "
                  >
                    <span className="relative z-10">
                      {hotel}
                    </span>
                  </a>
                ))}

                {/* Last Text */}
                <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 border border-orange-200 text-sm font-semibold shadow-sm">
                  & Similar Beach Resorts
                </div>

              </div>
            </div>
          </section>

          {/* SIKKIM */}
          <section className="mb-16">

            <div className="flex items-center gap-5  mb-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Sikkim Hotels – Gangtok, Pelling, Lachung & Lachen
              </h3>
              <Link href="/book-hotel" className="bg-gradient-to-r rounded-full from-yellow-600 to-yellow-600 text-white px-6 py-3  hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Now
              </Link>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Explore the Himalayan beauty of Sikkim with our curated hotels in Gangtok,
              Pelling, Ravangla, Lachung and Lachen. Options include spa resorts,
              mountain-view boutique hotels and traditional stays.
            </p>


            <div className="">


              {/* Hotels */}
              <div className="flex flex-wrap gap-3">

                {hillHotels.map((hotel, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/917890727339?text=Hi%20I%20want%20to%20book%20hotel`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          group
          relative
          overflow-hidden
          px-5 py-2.5
          rounded-full
          bg-purple-50
          text-purple-800
          border border-purple-200
          text-sm font-medium
          transition-all duration-300
          hover:bg-gradient-to-r
          hover:from-fuchsia-500
          hover:to-purple-600
          hover:text-white
          hover:border-purple-500
          hover:shadow-xl
          hover:-translate-y-1
          cursor-pointer
        "
                  >
                    <span className="relative z-10">
                      {hotel}
                    </span>
                  </a>
                ))}

                {/* Extra Text */}
                <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 border border-purple-200 text-sm font-semibold shadow-sm">
                  ... & Similar Hotels
                </div>

              </div>
            </div>
          </section>


          {/* ECO TOURISM CONTENT */}
          <section className="mt-20 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-10 shadow-lg">

            <div className="flex items-center gap-5  mb-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Sustainable Tourism & Bengal Home Stay Concept
              </h3>

            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              West Bengal’s biodiversity stretches from the Sundarban Mangrove Forest
              to the Neora Valley National Park in North Bengal.
              Eco-tourism here promotes environmental protection, local employment,
              and responsible travel.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our Bengal Home Stay facilities support local communities while offering
              authentic cultural experiences in off-beat destinations like
              Lamahatta, Teenchuley, Dzongu, Sillery Gaon and Zuluk.
              Together, we contribute towards the global mission —
              <span className="font-semibold text-green-700"> Save Environment, Save Earth.</span>
            </p>
          </section>
        </div>
      </section>


      {/* ================= EXTRA PERSON CHARGES ================= */}
      {/* <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Extra Person Charges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional charges for extra persons (to be charged separately)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraPersonCharges.map((charge, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <Users className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="font-bold mb-2">{charge.type}</h3>
                <p className="text-sm text-gray-600 mb-3">{charge.description}</p>
                <p className="text-2xl font-bold text-orange-600">{charge.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= HOME STAY FACILITIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Home Stay Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience authentic local hospitality with our recommended home stays
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-800">Support Local Communities</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  When it comes to boasting the richness of Indian Bio-diversity, North Bengal's Heritage Forests & Hills are nature lover's heaven.
                  West Bengal's potential to attract nature lovers can certainly create economical, ecological and social relations with the environment.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Eco-tourism is the best example where all feasible conditions are met following environmental rules stringently,
                  further improving it with the inclusion of "community development".
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Sustainable income opportunities for locals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Authentic cultural experiences</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Unexplored natural beauty</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold mb-4 text-green-800">Featured Home Stays</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Bagora Diki House", "Bird's View @ Kalimpong", "Cherry Village @ Pelling", "Druk @ Lamahatta",
                    "Everest Hut @ Lamahatta", "Gurung Guest House", "Khushi Farm", "Mangwa Farm",
                    "Sillery Gaon", "Snow Lion @ Zuluk", "Tinchuley Homestay", "Many more offbeat locations coming soon"].map((stay, index) => (
                      <div key={index} className="bg-green-50 p-3 rounded-lg text-sm">
                        <Home className="w-4 h-4 text-green-600 mb-1" />
                        <span className="text-gray-700">{stay}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOKING DISCLAIMER ================= */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Important Booking Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Booking of Hotel Room/Accommodation in Hotel, Resorts, Lodge, Guest House, Home Stay is subject matter of Solicitation.
                Bengal Tourism will guarantee booking of your accommodation in your preferred Hotel/Guest House but reserves the right
                to allot you accommodation in any property in the same location with similar or upgraded facilities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Off Season Discounts / High Peak Season Rates shall apply & charged separately.
              </p>
            </div>
          </div>
        </div>
      </section>



      <ContactCTA />
    </main>
  )
}
