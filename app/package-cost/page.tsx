"use client";

import Image from "next/image";

const packages = [
    {
      "id": 1,
      "name": "DARJEELING HILL Circuit",
      "subtitle": "Queen of the Hills",
      "duration": "5N / 6D",
      "inr": 15400,
      "usd": 225,
      "pax": "02 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 2,
      "name": "KALIMPONG + DEOLO / MIRIK + TABAKOSHI",
      "subtitle": "Land of Orchids & Mists",
      "duration": "3N / 4D",
      "inr": 9100,
      "usd": 150,
      "pax": "02 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / NJP/Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 3,
      "name": "CHATAKPUR /-SITTONG-/ AHALDARA",
      "subtitle": "Switzerland of East / Orange Valley",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / NJP/Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 4,
      "name": "SANDAKPHU & MANEBHANJAN",
      "subtitle": "Trekkers Paradise",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 5,
      "name": "OFF BEAT DESTINATIONS - Hills",
      "subtitle": "Explore the Himalayan Range of Bengal",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 6,
      "name": "DOOARS / DUARS FOREST Circuit",
      "subtitle": "National Wildlife Sanctuary",
      "duration": "5N / 6D",
      "inr": 15400,
      "usd": 225,
      "pax": "02 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / NJP/ Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 7,
      "name": "GORUMARA (or) JALDAPARA",
      "subtitle": "Jeep Safari & Elephant Safari",
      "duration": "3N / 4D",
      "inr": 9100,
      "usd": 150,
      "pax": "02 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 8,
      "name": "RISHYAP - JHANDI - LAVA - LONGCHU - CHIBBO",
      "subtitle": "Kolakham - Neora Valley - Change Falls - Gorubathan",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 9,
      "name": "SHORT BREAKS from KOLKATA",
      "subtitle": "From Kolkata to a Place of your Choice",
      "duration": "0N / 1D",
      "inr": 3700,
      "usd": 75,
      "pax": "06 / Curated",
      "schedule": "Any Day",
      "pickup": "Kolkata",
      "generalItineraryPlan": "60"
    },
    {
      "id": 10,
      "name": "REGIONAL DESTINATION in BENGAL",
      "subtitle": "The Diversity & Cultures of Bengal",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Local Station",
      "generalItineraryPlan": "60"
    },
    {
      "id": 11,
      "name": "OFF BEAT DESTINATIONS - Plains",
      "subtitle": "Explore Bengal Countryside",
      "duration": "1N / 2D",
      "inr": 3700,
      "usd": 75,
      "pax": "06 / Curated",
      "schedule": "Any Day",
      "pickup": "Kolkata / Local Station",
      "generalItineraryPlan": "60"
    },
    {
      "id": 12,
      "name": "PILGRIMAGE & RELIGIOUS Tours",
      "subtitle": "Shakti Peetha's in Bengal & Other",
      "duration": "1N / 2D",
      "inr": 3700,
      "usd": 75,
      "pax": "06 / Curated",
      "schedule": "Any Day",
      "pickup": "Kolkata",
      "generalItineraryPlan": "60"
    },
    {
      "id": 13,
      "name": "DIGHA SEA BEACH Circuit",
      "subtitle": "Sea Beach Destination of the East",
      "duration": "4N / 5D",
      "inr": 12700,
      "usd": 175,
      "pax": "02 / Customised",
      "schedule": "Any Day/Weekends",
      "pickup": "Kolkata",
      "generalItineraryPlan": "60"
    },
    {
      "id": 14,
      "name": "MANDARMONI & TAJPUR Sea Beach",
      "subtitle": "Lover's Paradise",
      "duration": "3N / 4D",
      "inr": 9100,
      "usd": 150,
      "pax": "02 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata",
      "generalItineraryPlan": "60"
    },
    {
      "id": 15,
      "name": "BAKKHALI - MOUSUNI Island's",
      "subtitle": "Weekend Destination by the Sea",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day / Weekends",
      "pickup": "Kolkata",
      "generalItineraryPlan": "60"
    },
    {
      "id": 16,
      "name": "BAGURAN JALPAI & MONCHASHA",
      "subtitle": "Offbeat Sea & Eco Retreat",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Curated",
      "schedule": "Any Day / Weekends",
      "pickup": "Kolkata",
      "generalItineraryPlan": "60"
    },
    {
      "id": 17,
      "name": "SUNDARBAN - Royal Bengal Tiger",
      "subtitle": "World's Largest Mangrove Forest",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata",
      "generalItineraryPlan": "60"
    },
    {
      "id": 18,
      "name": "SUNDERBAN - Exclusive Premium Tour",
      "subtitle": "Stay in Premium Resort / AC Houseboat",
      "duration": "2N / 3D",
      "inr": 15400,
      "usd": 225,
      "pax": "06 / Curated",
      "schedule": "Exclusively / On Demand",
      "pickup": "Kolkata",
      "generalItineraryPlan": "60"
    },
    {
      "id": 19,
      "name": "KOLKATA - One Full Day Tour",
      "subtitle": "Explore the City of Joy",
      "duration": "0N / 1D",
      "inr": 1900,
      "usd": 50,
      "pax": "04 / Curated",
      "schedule": "Any Day",
      "pickup": "Kolkata",
      "generalItineraryPlan": "60"
    },
    {
      "id": 20,
      "name": "MIDNAPORE Circuit",
      "subtitle": "Expect more than your Expectation",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day / Weekends",
      "pickup": "Kolkata / Local Station",
      "generalItineraryPlan": "60"
    },
    {
      "id": 21,
      "name": "BIRBHUM Circuit",
      "subtitle": "Santiniketan & Bolpur + Bauls & Batik",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "All Friduration",
      "pickup": "Kolkata / Bolpur",
      "generalItineraryPlan": "60"
    },
    {
      "id": 22,
      "name": "MURSHIDABAD Circuit",
      "subtitle": "Land of the Former Nawabs",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Murshidabad",
      "generalItineraryPlan": "60"
    },
    {
      "id": 23,
      "name": "PURULIA Circuit",
      "subtitle": "Baranti & Ajodhya Hill + Chhau Dance",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day / Weekends",
      "pickup": "Kolkata / Purulia",
      "generalItineraryPlan": "60"
    },
    {
      "id": 24,
      "name": "NADIA & MAYAPUR Circuit",
      "subtitle": "Isckon & Nabadwip + Krisnanagar",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Local Station",
      "generalItineraryPlan": "60"
    },
    {
      "id": 25,
      "name": "BANKURA Circuit",
      "subtitle": "Bishnupur & Mukutmonipur + Teracotta",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Local Station",
      "generalItineraryPlan": "60"
    },
    {
      "id": 26,
      "name": "ARUNACHAL PRADESH Circuit",
      "subtitle": "Tamang + Bomdila + Balukpong + Manas",
      "duration": "6N / 7D",
      "inr": 28000,
      "usd": 350,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Guwahati / Guwahati",
      "generalItineraryPlan": "60"
    },
    {
      "id": 27,
      "name": "KERALA Circuit",
      "subtitle": "Munnar + Cochin + Periyar + Kovalam",
      "duration": "6N / 7D",
      "inr": 19000,
      "usd": 300,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Kochin / Trivandram",
      "generalItineraryPlan": "60"
    },
    {
      "id": 28,
      "name": "PURI Circuit",
      "subtitle": "Konark - Chilika - Bhubaneswar",
      "duration": "4N / 5D",
      "inr": 12700,
      "usd": 175,
      "pax": "02 / Customised",
      "schedule": "Any Day",
      "pickup": "Puri / Bhubaneswar",
      "generalItineraryPlan": "60"
    },
    {
      "id": 29,
      "name": "PURI - Darshan of Lord Jagannath",
      "subtitle": "Abode of the Lord of the Universe",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Puri / Bhubaneswar",
      "generalItineraryPlan": "60"
    },
    {
      "id": 30,
      "name": "ODISHA -Simlipal-Chandipur-Satkosia",
      "subtitle": "National Park-Sea Town-Forest Trails",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Balasore / Bhubaneswar",
      "generalItineraryPlan": "60"
    },
    {
      "id": 31,
      "name": "ODISHA - Bhitarkanika & Gahirmata",
      "subtitle": "Crocodile Island + Olive Ridley Turtle",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Bhadrak / Bhubaneswar",
      "generalItineraryPlan": "60"
    },
    {
      "id": 32,
      "name": "ODISHA - Daringbadi & Gopalpur",
      "subtitle": "Kashmir of the East + Town-on-Sea",
      "duration": "3N / 4D",
      "inr": 9100,
      "usd": 150,
      "pax": "04 / Customised",
      "schedule": "Any Day / Weekends",
      "pickup": "Berhampur / Bhubaneswar",
      "generalItineraryPlan": "60"
    },
    {
      "id": 33,
      "name": "SIKKIM & GANGTOK Circuit",
      "subtitle": "Nathu-La + Changu Lake + Samdruptse",
      "duration": "5N / 6D",
      "inr": 19000,
      "usd": 300,
      "pax": "02 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 34,
      "name": "PELLING & RAVANGLA - South Sikkim",
      "subtitle": "Enchey Monastery + Lingdum + Etc",
      "duration": "2N / 3D",
      "inr": 6400,
      "usd": 95,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 35,
      "name": "LACHEN & LACHUNG - North Sikkim",
      "subtitle": "Gurudongmar + Yumthang + Zero Point",
      "duration": "2N / 3D",
      "inr": 9100,
      "usd": 150,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "Gangtok / Gangtok",
      "generalItineraryPlan": "60"
    },
    {
      "id": 36,
      "name": "SILK ROUTE TRAIL - East Sikkim",
      "subtitle": "Sillery + Aritar + Zuluk + Reshikhola",
      "duration": "4N / 5D",
      "inr": 12700,
      "usd": 175,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 37,
      "name": "JAMMU & KASHMIR Circuit",
      "subtitle": "Srinagar-Pahalgam-Gulmarg-Vaisno Devi",
      "duration": "5N / 6D",
      "inr": 19000,
      "usd": 300,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Srinagar / Jammu",
      "generalItineraryPlan": "60"
    },
    {
      "id": 38,
      "name": "MEGHALAYA & SHILLONG Circuit",
      "subtitle": "Guwahati + Cherrapunji + Kaziranga",
      "duration": "5N / 6D",
      "inr": 19000,
      "usd": 300,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Guawahati",
      "generalItineraryPlan": "60"
    },
    {
      "id": 39,
      "name": "RAJASTHAN & JAIPUR Circuit",
      "subtitle": "Jodhpur + Udaipur + Jaisalmer + More",
      "duration": "6N / 7D",
      "inr": 19000,
      "usd": 300,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Jodhpur / Jaipur",
      "generalItineraryPlan": "60"
    },
    {
      "id": 40,
      "name": "GOA Circuit",
      "subtitle": "Calangute + Anjuna + Baga + Dona Paula",
      "duration": "4N / 5D",
      "inr": 15400,
      "usd": 225,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Panjim / Mumbai",
      "generalItineraryPlan": "60"
    },
    {
      "id": 41,
      "name": "HIMACHAL & SHIMLA Circuit",
      "subtitle": "Simla + Kullu Manali + Rohtang Pass",
      "duration": "5N / 6D",
      "inr": 19000,
      "usd": 300,
      "pax": "04 / Customised",
      "schedule": "Any Day",
      "pickup": "Delhi / Shimla / Chandigarh",
      "generalItineraryPlan": "60"
    },
    {
      "id": 42,
      "name": "ANDAMAN & NICOBAR Circuit",
      "subtitle": "Port Blair + Havlock + Baratang + Niel",
      "duration": "6N / 7D",
      "inr": 28000,
      "usd": 350,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Port Blair / Excluding Airfare",
      "generalItineraryPlan": "60"
    },
    {
      "id": 43,
      "name": "NEPAL & KATHMANDU Circuit",
      "subtitle": "Pokhara + Chitwan + Manakamana",
      "duration": "6N / 7D",
      "inr": 28000,
      "usd": 350,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / Kathmandu / NJP / Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 44,
      "name": "BHUTAN Circuit",
      "subtitle": "Thimpu + Punakha + Paro + Tiger Nest",
      "duration": "6N / 7D",
      "inr": 28000,
      "usd": 350,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "NJP / Paro / NJP / Bagdogra",
      "generalItineraryPlan": "60"
    },
    {
      "id": 45,
      "name": "BANGKOK & PATTAYA",
      "subtitle": "Coral Island + Marine / Safari World",
      "duration": "4N / 5D",
      "inr": 0,
      "usd": 250,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Excluding Airfare",
      "generalItineraryPlan": "60"
    },
    {
      "id": 46,
      "name": "PHUKET / KOH SAMUI / KRABI",
      "subtitle": "Phi Phi / James Bond Island / More",
      "duration": "2N / 3D",
      "inr": 0,
      "usd": 200,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "Bangkok / Excluding Airfare",
      "generalItineraryPlan": "60"
    },
    {
      "id": 47,
      "name": "DUBAI",
      "subtitle": "Desert Safari + Cruise + Burj-Khalifa",
      "duration": "6N / 7D",
      "inr": 0,
      "usd": 600,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Excluding Airfare",
      "generalItineraryPlan": "60"
    },
    {
      "id": 48,
      "name": "MALDIVES (or) BALI",
      "subtitle": "Water Sports + Dolphin Cruise (or) Seminyak + Ubud",
      "duration": "3N / 4D",
      "inr": 0,
      "usd": 300,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Excluding Airfare",
      "generalItineraryPlan": "60"
    },
    {
      "id": 49,
      "name": "SINGAPORE (or) THAILAND",
      "subtitle": "Sentosa Island + Jurong National Park (or) Koh Samui",
      "duration": "3N / 4D",
      "inr": 0,
      "usd": 300,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Excluding Airfare",
      "generalItineraryPlan": "60"
    },
    {
      "id": 50,
      "name": "CAMBODIA (or) VIETNAM",
      "subtitle": "Angkor Wat + Batambang (or) Hanoi + Ho Chi Minh City",
      "duration": "3N / 4D",
      "inr": 0,
      "usd": 300,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Excluding Airfare",
      "generalItineraryPlan": "60"
    },
    {
      "id": 51,
      "name": "MALAYSIA (or) INDONESIA",
      "subtitle": "Petronas Towers + Bati Caves (or) Bali + Comodo Island",
      "duration": "3N / 4D",
      "inr": 0,
      "usd": 300,
      "pax": "06 / Customised",
      "schedule": "Any Day",
      "pickup": "Kolkata / Excluding Airfare",
      "generalItineraryPlan": "60"
    }
  ] 

export default function TariffPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Bengal Tourism Packages"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-yellow-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Premium Tour Packages</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Bengal Tourism's
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Tariff
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              SOME OF OUR PRE-SCHEDULED & POPULAR TOUR PACKAGES
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="min-h-screen bg-slate-100 px-4 py-10">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 -mt-20 relative z-20">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-yellow-600">
            Bengal Tourism’s Tariff
          </h1>
          <p className="text-gray-600 mt-2">
            Some of our Pre-Scheduled & Popular Tour Packages
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-3 border">No</th>
                <th className="p-3 border text-left">Package Name</th>
                <th className="p-3 border">Duration</th>
                <th className="p-3 border">₹ / Head</th>
                <th className="p-3 border">$ / Head</th>
                <th className="p-3 border">PAX</th>
                <th className="p-3 border">Schedule</th>
                <th className="p-3 border">Pick-up / Drop</th>
              <th className="p-3 border">  GENERAL ITINERARY PLAN</th>
                <th className="p-3 border">Book</th>
              </tr>
            </thead>

            <tbody>
              {packages.map((pkg) => (
                <tr
                  key={pkg.id}
                  className="odd:bg-gray-50 hover:bg-blue-50 transition"
                >
                  <td className="p-3 border text-center text-gray-500">{pkg.id}</td>

                  <td className="p-3 border text-gray-500">
                    <p className="font-semibold">{pkg.name}</p>
                    <p className="text-xs text-gray-500">
                      ({pkg.subtitle})
                    </p>
                  </td>

                  <td className="p-3 border text-center text-gray-500">{pkg.duration}</td>
                  <td className="p-3 border text-center text-gray-500">₹{pkg.inr}</td>
                  <td className="p-3 border text-center text-gray-500">${pkg.usd}</td>
                  <td className="p-3 border text-center text-gray-500">{pkg.pax}</td>
                  <td className="p-3 border text-center text-gray-500">{pkg.schedule}</td>
                  <td className="p-3 border text-center text-gray-500">{pkg.pickup}</td>
                  <td className="p-3 border text-center text-gray-500">{pkg.generalItineraryPlan}</td>
                  <td className="p-3 border text-center">
                    <a
                      href="/book-tour"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md font-semibold"
                    >
                      GO
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-yellow-50 border border-yellow-300 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-slate-800">
            BOOK A TOUR (Only with ₹1500/-)
          </h2>
          <p className="text-gray-700 mt-2">
            Refer only 3 persons & get Cash-Back upto ₹2.5 Lacs
          </p>
        </div>

        {/* Terms */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Terms & Conditions
          </h2>

          <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-bold text-yellow-700 mb-2">ALL INCLUSIVE PRICE:</h3>
              <p className="mb-3">
                All transfer in Deluxe Car/Bus/Coach/Train Seats/Berth as booked. Accommodation in 2* Dlx Hotels/Resort with Spacious Deluxe Rooms with Satellite TV, essential Toiletries, attached Bath (hot/cold running water) on Double/Triple sharing basis with children. All meals in MAP plan includes Bed Tea, Breakfast, Lunch/Dinner (All meals in Home Stays) Evening Tea/Coffee with bottled Drinking water, Tea/Coffee Maker (where available) in Rooms as inclusive & Complementary Welcome Drinks with all Local sightseeing as per Itinerary in (SIC).
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-bold text-blue-700 mb-2">CHILD POLICY:</h3>
              <p className="mb-3">
                1 CHILD below 4 years Free. 2nd Child and/or above 4 years but below 8 years @ 50% of price in sharing accommodation with parents. Extra Bed & separate Bus/Train seat will be provided to child above 4 years.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-bold text-green-700 mb-2">UPGRADE OPTIONS:</h3>
              <p className="mb-3">
                UPGRADE to AC Dlx Rooms/Cottage/Superior View Room/Haveli (@ $10/Rs.500/-) per person/day (or) to Premium Star Category Hotels/Resorts/Bungalows (@ USD $100/Rs.7,000/-) per person/day where available. Also upgrade to Non Sharing & Exclusive AC Car/Vehicle (@ $25/Rs.2500/-) per day (Compulsory if less than 6 PAX/Exclusive - non sharing/Peak Season surcharge). Upgrade to AC Bus (or) AC occupancy in Trains at extra surcharge & if available.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-bold text-yellow-700 mb-2">OTHER TOURS:</h3>
              <p className="mb-3">
                We will arrange ANY other tour packages to ANY other destination & places, other than those mentioned, only for our Members at no extra cost. Join Us today to avail Cash-Back benefits.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-bold text-purple-700 mb-2">CONFIRMATION:</h3>
              <p className="mb-3">
                For confirmed price, booking has to be made at least 60 days prior to start of tour/journey with 50% advance payment made to our Bank only through (online transfer/bank deposit/remittance through debit/credit card) via secured banking. Use only Booking Form. Money receipt will be generated online. Balance will be paid before start of journey/tour (or) on arrival at destination. Bengal Tourism promises & guarantees NO other extra charges or any un-declared cost.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <h3 className="font-bold text-orange-700 mb-2">PACKAGE RATES:</h3>
              <p className="mb-3">
                Rates as shown here are as confirmed. Separate rates are available for Tailor made/Package/Customised/Foreign Tours as quoted (or) on requests. See some at Home & Hotel.
              </p>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded">
              <h3 className="font-bold text-cyan-700 mb-2">FOOD & WATER:</h3>
              <p className="mb-3">
                FOOD & Bottled Water will be made available from Railway Catering/Wayside eateries while during transit hours. Meal plan as in Itinerary. Mention any special food preferences while booking. We Do Not Encourage use of Plastics Carry Bags/Bottles/Thermocol items. Please do not litter.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded">
              <h3 className="font-bold text-pink-700 mb-2">SPECIAL CARE:</h3>
              <p className="mb-3">
                WE take special care for Only Ladies Group & Senior Citizens travelling alone. Government LTC Tour/Packages are organized by us with approved & authenticated Tax Invoice/Bill and receipt issued to guests availing our service.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
              <h3 className="font-bold text-indigo-700 mb-2">FREE DAY OFFER:</h3>
              <p className="mb-3">
                Avail 1 (one) Free Day offer with 7 (seven) Nights continuous booking. Offer valid with individual package price. Free 1 (one) day Stay/Tour (in Deluxe Category Room) is applicable if booked for continuous & minimum 7 (seven) nights in package.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded">
              <h3 className="font-bold text-gray-700 mb-2">CANCELLATION POLICY:</h3>
              <p className="mb-3">
                100% Refund if cancelled before 45 days. 50% refund if cancelled before 15 days of start of journey/tour date. No refunds will be made if cancelled any days after that (or) for cancellation or no-show for tours booked for and during Peak seasons/Black-out Days/Festival dates & Express Tour. Rescheduling of booked tour will be treated as cancellation, but minor amendments can be made on payment of $100/Rs.5000/- as re-structuring charges (and/or) refunds will be made; less 10% as administration charges.
              </p>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
              <h3 className="font-bold text-teal-700 mb-2">FOREIGNERS:</h3>
              <p className="mb-3">
                Encashment certificate is required for Foreigners visiting India and valid passports, visas, photographs, and related documents are also necessary for smooth operations. In some states there are provisions of Restricted Area Permit and Protected Area Permits for foreigners. Foreigners are requested to deliver their proper documents to get permits needed. Responsibility to obtain proper, current and valid passports, visas, vaccinations, inoculations and like, where required, is that of Guest/Traveller alone. Though all necessary assistance will be provided, Bengal Tourism will not be responsible or liable for any consequence of any nature arising from customer failing to ensure that he/she has complied with all such requirements. All travellers are expected to follow & fulfill all Covid instructions & Vaccination rules as compulsory.
              </p>
            </div>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded">
              <h3 className="font-bold text-rose-700 mb-2">EXPRESS TOUR:</h3>
              <p className="mb-3">
                We can arrange any Tour within 24 hour's notice.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <h3 className="font-bold text-amber-700 mb-2">FOREIGN TRAVEL:</h3>
              <p className="mb-3">
                Price quoted are in INR & US $. Please check actual Package Cost before booking on-line. Please enquire over Mail/Phone before booking. Cost are as shown in Package Cost.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-bold text-yellow-700 mb-2">EXCLUDES:</h3>
              <p className="mb-3">
                Air travel (actual), 4-5 Star Premium Hotels/Resorts/Haveli/Tea Estates boarding & facilities as per itinerary. Charges for Safari/Entry Fees/Cruises/Shows/Exclusive non-sharing Vehicle (surface transfer)/Recreational activities not included in Itinerary. Extra Beverages/Drinks, Porter charges, Non-Sharing Vehicle, Entry fees, Recreational rides, Tips, Laundry, Phone bills, Room heaters & anything not specifically mentioned & taxes.
              </p>
            </div>

            <div className="bg-slate-100 border-4 border-yellow-600 p-6 rounded-lg mt-6">
              <p className="font-bold text-yellow-600 text-center text-lg">
                ⚠️ Please read all Terms & Conditions carefully before booking. *
              </p>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
