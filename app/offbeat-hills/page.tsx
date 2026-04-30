import React from 'react'
import Link from 'next/link'
import { Mountain, MapPin, Calendar, Users, Star, ArrowRight, Trees, Compass } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function OffbeatHills() {
  const hillDestinations = [
    { name: "RISHYAP", location: "LAVA & NEORA VALLY", duration: "2N/3D", type: "Himalayan Views", altitude: "8500 Ft" },
    { name: "JORPOKHRI", location: "PEDONG", duration: "2N/3D", type: "Mountain Views", altitude: "7200 Ft" },
    { name: "SITTONG", location: "AHALDATRA", duration: "2N/3D", type: "Orange Valley", altitude: "4000 Ft" },
    { name: "CHATAKPUR", location: "DAWAIPANI", duration: "2N/3D", type: "Switzerland of East", altitude: "7800 ft" },
    { name: "TINCHULEY", location: "TAKDAH - RAMDHURA", duration: "2N/3D", type: "Sunset Point", altitude: "5800 Ft" },
    { name: "SANDAKPHU", location: "MANEBHANJAN – TUMLING/PHALUT", duration: "2N/3D", type: "Trekkers Paradise", altitude: "13,000 Ft" }
  ]

  const experiences = [
    {
      icon: Mountain,
      title: "Fresh Mountain Air",
      description: "Abundant space for fresh air and unpolluted environment"
    },
    {
      icon: Trees,
      title: "Organic Living",
      description: "Home cooked meals with organic & locally grown vegetables"
    },
    {
      icon: Compass,
      title: "Local Culture",
      description: "Learn about local cultures and everyday living"
    },
    {
      icon: Star,
      title: "Sustainable Tourism",
      description: "Support less privileged communities and reduce carbon footprint"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}

          <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1652543393354-2056fc3e9551?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE9mZkJlYXQlMjBIaWxsc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Beautiful Cambodia with Angkor Wat temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 via-yellow-800/60 to-orange-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
     

        <h1 className="text-5xl font-bold mb-4">OFFBEAT TOUR – Hills</h1>
            <p className="text-xl mb-6">Special Tailor made Combination Package, Number of Days & Cost can be designed on Request</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
           <Link href="/book-tour" className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition flex items-center gap-2">
                Book Your Adventure
              </Link>
            </div>
          </div>
        </div>

     
      </section>

 

      {/* Destinations Grid */}
      <section id="destinations" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">HILLS - OFF BEAT DESTINATIONS</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get back to Nature. Contribute to reduce the Carbon footprint & make Earth a better place for our Generation.
              Support the less privileged community to earn a sustainable income.
            </p>
          </div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
          <div className='space-y-6'>
            <Destination
              title="RISHYAP"
              cta='Book Now for 2N/3D'
              subtitle="With [LAVA & NEORA VALLY-2N/3D]"
              content={[
                `Day – 1:Start of tour: Our representative will be there to receive the Guest at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (IXB) / Tenzing Norgay Bus Stand (Junction). He will be assisting you for the transfer to Rishyap at 8500 Ft,  lies the land of breath taking beauty, sloping tea gardens with spectacular views of the Mount Everest.  Check-in at Hotel/Homestay. Lunch & rest. Evening free to roam around the local area & Shopping centre on your own. Dinner & Overnight stay at Hotel/Resort/Homestay at Rishop / Neora Valley.`,

                `Day – 2:Local sightseeing: Rishyap & Neora Vallley: Enjoy the early morning sunrise over the Kanchenjunga from your Hotel. Early breakfast and start for a whole day tour excursion to visit  places of interest Like Tiffin Dara, Changey Falls (1000 mtrs by walk), Lava,  Kolakham, Shiva Budhha Temple, etc. (as per time available) can be explored. Lunch en-route or back to Hotel for lunch . Rest. Evening free. Dinner & Overnight stay at Hotel/Resort/Homestay at Rishyap / Neora Valley.`,

                `Day – 3 :After breakfast, Check-out (10.00 am) from Hotel. On the return journey, visit Mirik, Gopal Dhara View Point & Pashupati Market in Nepal. Lunch at Mirik. Then proceed towards Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP), a 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends...`
              ]}
            />



            <Destination
              title="JORPOKHRI"
              cta='Book Now for 2N/3D'
              subtitle="With [PEDONG-2N/3D]"
              content={[
                `Day –1:Start of tour: Our representative will be there to receive the Guest at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (IXB) / Tenzing Norgay Bus Stand (Junction). He will be assisting you for the transfer to Rishyap at 8500 Ft, lies the land of breath taking beauty, sloping tea gardens with spectacular views of the Mount Everest.  Check-in at Hotel/Homestay. Lunch & rest. Evening free to roam around the local area & Shopping centre on your own . Dinner & Overnight stay at Hotel/Resort/Homestay at Rishop / Jorpokri.`,

                `Day –2:Local sightseeing: Enjoy the early morning sunrise over the Kanchenjunga from your Hotel. Early breakfast and start for a whole day tour excursion to visit  to Jorpokhri at 7200 Ft & Pedong at 4200 Ft. Other places of interest is Lava at 7300 Ft on the way etc. (as per time available) can be explored. Lunch en-route or back to Hotel for lunch . Rest. Evening free. Dinner & Overnight stay at Hotel/Resort/Homestay at Rishyap / Jorpokhri / Pedong.`,

                `Day –3:After breakfast, Check-out (10.00 am) from Hotel. On the return journey, visit Mirik, Gopal Dhara View Point & Pashupati Market in Nepal. Lunch at Mirik. Then proceed towards Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP), a 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends...`
              ]}
            />


            <Destination
              title="SITTONG"
              cta='Book Now for 2N/3D'
              subtitle="The Orange Valley with [AHALDATRA-2N/3D]"
              content={[
                `Day –1:Start of tour: Our representative will be there to receive the Guest at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (IXB) / Tenzing Norgay Bus Stand (Junction). He will be assisting you for the transfer to Sittong at 4000 Ft. Often called the Orange Valley,  lies the land of breath taking beauty, sloping tea gardens with spectacular views of the Mount Everest is the Queen of the hills. Check-in at Homestay. Lunch & rest. Evening free to roam around the local area on your own. Dinner & Overnight stay at Farmhouse/Homestay at Sittong / Latpanchar / Ahaldara.`,

                `Day –2:Local sightseeing: After breakfast, start for a half  day tour excursion to visit Jogi Ghat, Orange Garden, Ahaldara, Mongpoo, Latpanchar, Mahaldiram,  Namthing Lake, Sittong Falls, Riyang River, etc. Back to Farm House / Home Stay for lunch. Rest & evening free. Dinner & Overnight stay at Farmhouse/Homestay at Sittong / Latpanchar / Ahaldara.`,

                `Day –3:After breakfast, Check-out (10.00 am) from Farmhouse/Homestay. On the return journey, visit Mirik, Gopal Dhara View Point & Pashupati Market in Nepal. Lunch at Mirik. Then proceed towards Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP), a 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends`
              ]}
            />



            <Destination
              title="CHATAKPUR"
              cta='Book Now for 2N/3D'
              subtitle="Switzerland of the East with [DAWAIPANI-2N/3D]"
              content={[
                'Day – 1 :Start of tour: Our representative will be there to receive the Guest at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (IXB) / Tenzing Norgay Bus Stand (Junction). Forwarding journey towards Chatakpur at 7800 ft.  Often called Switzerland of the East, its with mesmerizing beauty offers spectacular views of the Mount Everest, Mt. Kanchendzonga and the rest of spectacular Himalayan range. Check into Homestay. Lunch & rest.. Evening free to roam around the local area on your own. Dinner & Overnight stay at Farmhouse/Homestay at Chatakpur /  Dawaipani / Chitrey.',

                `Day – 2 :Local sightseeing: Early morning, visit Sunrise Point. Return. After breakfast, start for a half  day tour excursion to visit, Kal Phokhri, Hanging Bridge, Lamahatta Park, Ramdhura, Chitrey, etc. Back to Farm House / Home Stay for lunch. Rest & evening free. Dinner & Overnight stay at Farmhouse/Homestay at Chatakpur / Dawaipani / Chitrey.`,

                `Day – 3 :After breakfast, Check-out (10.00 am) from Farmhouse/Homestay. On the return journey, visit Mirik, Gopal Dhara View Point & Pashupati Market in Nepal. Lunch at Mirik. Then proceed towards Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP), a 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends...`
              ]}
            />


            <Destination
              title="TINCHULEY"
              subtitle="Offbeat with [TAKDAH -  RAMDHURA-2N/3D]"
              cta='Book Now for 2N/3D'
              content={[
                `Day –1:Start of tour: Our representative will be there to receive the Guest at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (IXB) / Tenzing Norgay Bus Stand (Junction). He will be assisting you for the transfer to Tinchuley at 5800 Ft lies the land of breath taking beauty, sloping tea gardens with spectacular views of the Mount Everest. Check-in at Homestay. Lunch & rest. Evening free to roam around the local area on own. Dinner & Overnight stay at Farmhouse/Homestay at Tinchuley / Ramdhura / Takdah.`,

                `Day –2:Local sightseeing: Early morning, visit Sunrise Point. Return. After breakfast, start for a half  day tour excursion to visit, Gombagara Manastery, Orchid Centre, Lamahatta Park, Ramdhura, Chitrey, etc. Back to Farm House / Home Stay for lunch. Post lunch, visit Rogli Rongliot Tea Garden, 360 degree View Point, Hanging Bridge, etc. You can also undertake an adventurous Para-Gliding activities. Return & evening free. Dinner & Overnight stay at Farmhouse/Homestay at Tinchuley / Ramdhura / Takdah.`,

                `Day –3:After breakfast, Check-out (10.00 am) from Farmhouse/Homestay. On the return journey, visit Mirik, Gopal Dhara View Point & Pashupati Market in Nepal. Lunch at Mirik. Then proceed towards Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP), a 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends...`
              ]}
            />
            <Destination
              title="SANDAKPHU"
              cta='Book Now for 2N/3D'
              subtitle="Trekkers Paradise with [MANEBHANJAN – TUMLING/PHALUT-2N/3D]"
              content={[
                `Day –1 :Start of tour: Our representative will be there to receive the Guest at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (IXB) / Tenzing Norgay Bus Stand (Junction) at (07-08 am). He will be assisting you for the transfer to Manebhanjan. Breakfast here & start of journey in Land Rover from here. Purchase a Singalila Forest entry Permit. Proceed towards Tonglu /Tumling. Halt at Chitrey Monastery. Reach Tumling at a height of 10,000 ft, lies the land of breath taking beauty with spectacular views of the Mount Everest. Lunch en-route. Reach your Homestay & check-in. Evening free to roam around or local shopping centre. Dinner & Overnight stay at Hotel/Homestay at Tumling.`,

                `Day –2 :Experience sunrise over the Sleeping Budhha. After breakfast, check out. Proceed towards Sandakphu at 13,000 Ft, via Singalila National Park. Reach  Gouribas. Beware, road condition not that good. Halt at Kali Phokhri Lake. Check-into Homestay. Have lunch. Dinner & Overnight stay at Hotel/Homestay at Sandakphu.`,

                `Day –3 :After breakfast, Check-out (08.00 am) from Hotel/Homestay. Alternatively; extend your excursion to  Phalut at 11800 Ft  (extra cost). Experience the entire range of Kanchenjunga Range on a clear day. Range Rover will drop you at Manebhanjan. On the return journey, visit Mirik, Gopal Dhara View Point & Pashupati Market in Nepal. Lunch at Mirik. Then proceed towards Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP), a 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. Tour ends...`
              ]}
            />

          </div>

 </div>
              {/* RIGHT SIDE – VIDEO + AD */}
              <div className="space-y-8 lg:sticky lg:top-24 h-fit">

                {/* Video Section */}
                <div className="bg-white rounded-3xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Watch OffBeat Hills Video
                  </h3>

                  <div className="aspect-video rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                      title="Tonle Sap Lake Tour"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="mb-16">
          
            <div className="flex gap-5 items-center mt-8 mb-5">

              <h2 className="text-3xl font-bold text-indigo-700">   Offbeat Hill Locations</h2>
              <a
                href="/book-tour"
                className="bg-yellow-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now for 2N/3D
              </a>
            </div>

            <p className="text-gray-600 max-w-3xl ">
              Discover hidden gems of Darjeeling & Kalimpong hills with customised tour packages.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

            {[
              "Tabakoshi", "Sittong", "Dawaipani", "Rishyap",
              "Takdah", "Mungpoo", "Jorpokhri", "Pedong",
              "Ahaldara", "Chatakpur", "Ramdura", "Longchu",
              "Daragaon", "Kolakham", "Lava", "Chitrey",
              "Latpanchar", "Kaffergaon", "Sandakphu", "Manebhanjan",
              "Tinchuley", "Lepcha Jagat", "Charkhole", "Lamahatta",
              "Tea Gardens", "Chibbo", "Tumling"
            ].map((place, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 cursor-pointer"
              >
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                  {place}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>
      {/* Tour Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tour Itinerary</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed information about your offbeat hills journey experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Day – 1: Start of tour</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Our representative will receive you at NJP Railway Station / Bagdogra Airport (IXB) / Tenzing Norgay Bus Stand</li>
                <li>• Transfer to your destination (8500-13000 Ft altitude)</li>
                <li>• Check-in at Hotel/Homestay</li>
                <li>• Lunch & rest</li>
                <li>• Evening free to roam around local area & shopping centre on your own</li>
                <li>• Dinner & Overnight stay at Hotel/Resort/Homestay</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Day – 2: Local sightseeing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Early morning sunrise over the Kanchenjunga from your Hotel</li>
                <li>• Early breakfast and start for whole day tour excursion</li>
                <li>• Visit places of interest (Tiffin Dara, Changey Falls, Lava, Kolakham, etc.)</li>
                <li>• Lunch en-route or back to Hotel</li>
                <li>• Rest & evening free</li>
                <li>• Dinner & Overnight stay at Hotel/Resort/Homestay</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Day – 3: Return Journey</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• After breakfast, Check-out (10.00 am) from Hotel</li>
                <li>• On the return journey, visit Mirik, Gopal Dhara View Point & Pashupati Market in Nepal</li>
                <li>• Lunch at Mirik</li>
                <li>• Proceed towards Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP)</li>
                <li>• 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm)</li>
                <li>• Tour ends...</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Note Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Notes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important information for your offbeat hills experience
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-gray-700 mb-4">
              <strong>Recommended to stay in the tea estates to undertake Tea Tourism & experience the Tea Planters everyday life.</strong>
            </p>
            <p className="text-gray-700">
              Some more of Off-Beat Destinations & Eco-Tourism facilities in the Plains on offer are Plains-Off Beat Destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Inclusions/Exclusions Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Package Details</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What's included and excluded in your offbeat hills tour package
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">✓ Includes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pick-up & Drop</li>
                <li>• Accommodation in Resort/Farmhouse/Homestay with Bed Tea</li>
                <li>• Breakfast</li>
                <li>• Lunch/Picnic Basket</li>
                <li>• Evening Tea & Snacks</li>
                <li>• Dinner</li>
                <li>• All Sight-seeing</li>
                <li>• Pvt. Transfer</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-700 mb-4">✗ Excludes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AC Accommodation where available</li>
                <li>• Price of Air Travel</li>
                <li>• AC Train Fare</li>
                <li>• Exclusive Non Sharing Car/ Vehicle extra if availed</li>
                <li>• Anything not mentioned in Tour Itinerary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Offbeat Hills Tourism?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience authentic Himalayan living with sustainable tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <experience.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PackagePricing
        title="Offbeat Hills Tour Packages"
        subtitle="Choose your perfect Himalayan adventure"
      />


      <ContactCTA />
    </div>
  )
}
function Destination({ title, subtitle, content, cta }: { title: string; subtitle: string; content: string[]; cta: string }) {
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