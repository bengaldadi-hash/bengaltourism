"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Star, MapPinCheck, ArrowRight, Trees, Building, Waves, Mountain, Compass } from "lucide-react";

// India packages data
const indiaPackages = [
   {
    slug: "haridwar-rishikesh",
    title: "Haridwar & Rishikesh",
    subtitle: "Spiritual & Adventure Retreat",
    tag: "Ganga Spiritual Tour",
    duration: "3N & 4D",
    price: "₹ 9500",
    desc: "Experience the divine Ganga Aarti at Haridwar, explore yoga capital Rishikesh, enjoy river rafting, temples, and peaceful Himalayan vibes.",
    locations: "Haridwar, Rishikesh",
    image: "https://images.unsplash.com/photo-1650341259809-9314b0de9268?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Mountain,
    iconColor: "text-orange-500",
    route: "/haridwar-rishikesh-tourism",
    showBookNow: false,
}
,
    {
        slug: "puri-odisha",
        title: "Puri & Odisha",
        subtitle: "Temple Paradise",
        tag: "Spiritual Journey",
        duration: "4N & 5D",
        price: "₹ 12700",
        desc: "Explore ancient temples, beaches, and rich cultural heritage of Odisha.",
        locations: "Puri, Bhubaneswar, Konark, Chilika",
        image: "https://images.unsplash.com/photo-1629723248038-8b3bc1ecce29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVyaS1vZGlzaGF8ZW58MHx8MHx8fDA%3D",
        icon: Building,
        iconColor: "text-orange-500",
        route: "/odisha-tourism",
        showBookNow: false,
    },
    {
    slug: "mathura-vrindavan-kashi-ayodhya",
    title: "Mathura - Vrindavan - Kashi - Ayodhya",
    subtitle: "Divine Spiritual Circuit",
    tag: "Sacred Pilgrimage",
    duration: "5N & 6D",
    price: "₹ 15500",
    desc: "Experience the divine journey through the holy cities of Lord Krishna and Lord Ram along with the spiritual aura of Kashi.",
    locations: "Mathura, Vrindavan, Varanasi (Kashi), Ayodhya",
    image: "/ayoo.jpg",
    icon: Building,
    iconColor: "text-yellow-500",
    route: "/mathura-vrindavan-kashi-ayodhya-tour",
    showBookNow: false,
},
{
    slug: "spiti-valley",
    title: "Spiti Valley",
    subtitle: "Cold Desert Adventure",
    tag: "Himalayan Expedition",
    duration: "7N & 8D",
    price: "₹ 28500",
    desc: "Discover the breathtaking beauty of Spiti Valley with its snow-capped mountains, ancient monasteries, and thrilling high-altitude roads.",
    locations: "Shimla, Kaza, Key Monastery, Hikkim, Langza, Chandratal",
    image: "/spiti.jpeg",
    icon: Mountain,
    iconColor: "text-blue-500",
    route: "/spiti-valley-tour",
    showBookNow: false,
},
{
    slug: "leh-ladakh",
    title: "Leh & Ladakh Tour",
    subtitle: "Land of High Passes",
    tag: "Adventure & Nature",
    duration: "6N & 7D",
    price: "₹ 32500",
    desc: "Experience the majestic landscapes of Leh & Ladakh including high mountain passes, crystal-clear lakes, and ancient monasteries.",
    locations: "Leh, Nubra Valley, Pangong Lake, Khardung La, Shanti Stupa",
    image: "/leh1.jpg",
    icon: Mountain,
    iconColor: "text-sky-500",
    route: "/leh-ladakh-tour",
    showBookNow: false,
},
    {
        slug: "sikkim-gangtok",
        title: "Sikkim & Gangtok",
        subtitle: "Himalayan Beauty",
        tag: "Mountain Escape",
        duration: "5N & 6D",
        price: "₹ 14500",
        desc: "Discover pristine landscapes, monasteries, and snow-clad mountains.",
        locations: "Sikkim, Gangtok, Pelling, Lachen",
        image: "/img/Bhutan.jpeg",
        icon: Mountain,
        iconColor: "text-indigo-500",
        route: "/sikkim-tourism",
        showBookNow: false,
    },
 
    {
        slug: "goa",
        title: "Goa",
        subtitle: "Beach Paradise",
        tag: "Coastal Fun",
        duration: "4N & 5D",
        price: "₹ 12700",
        desc: "Experience sun, sand, and Portuguese heritage in India's beach capital.",
        locations: "North Goa, South Goa, Panjim, Old Goa",
        image: "/Goa.jpeg",
        icon: Waves,
        iconColor: "text-blue-500",
        route: "/goa-tourism",
        showBookNow: false,
    },
    {
        slug: "himachal",
        title: "Himachal",
        subtitle: "Mountain Bliss",
        tag: "Hill Station",
        duration: "5N & 6D",
        price: "₹ 14500",
        desc: "Explore snow-capped peaks, valleys, and colonial hill towns.",
        locations: "Shimla, Manali, Kullu, Dharamshala",
        image: "/Himachal.jpeg",
        icon: Mountain,
        iconColor: "text-green-500",
        route: "/himachal-tourism",
        showBookNow: false,
    },
    {
        slug: "jammu-kashmir",
        title: "Jammu & Kashmir",
        subtitle: "Paradise on Earth",
        tag: "Heavenly Beauty",
        duration: "5N & 6D",
        price: "₹ 14500",
        desc: "Discover the breathtaking beauty of valleys, lakes, and Mughal gardens.",
        locations: "Srinagar, Gulmarg, Pahalgam, Sonamarg",
        image: "https://images.unsplash.com/photo-1600845747913-e33543f94892?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGFsJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D",
        icon: Mountain,
        iconColor: "text-yellow-500",
        route: "/jammu-kashmir-tourism",
        showBookNow: false,
    },
    {
        slug: "andaman-nicobar",
        title: "Andaman & Nicobar",
        subtitle: "Island Paradise",
        tag: "Beach Adventure",
        duration: "5N & 6D",
        price: "₹ 14500",
        desc: "Explore pristine beaches, coral reefs, and tropical forests.",
        locations: "Port Blair, Havelock, Neil Island, Ross Island",
        image: "/Andaman.jpeg",
        icon: Waves,
        iconColor: "text-cyan-500",
        route: "/andaman-nicobar-tourism",
        showBookNow: false,
    },
    {
        slug: "assam-guwahati",
        title: "Assam & Guwahati",
        subtitle: "Gateway to Northeast",
        tag: "Wildlife & Tea",
        duration: "5N & 6D",
        price: "₹ 14500",
        desc: "Experience wildlife safaris, tea gardens, and Brahmaputra river.",
        locations: "Guwahati, Kaziranga, Shillong, Tezpur",
        image: "/hotal/Kamakhya41.webp",
        icon: Trees,
        iconColor: "text-green-600",
        route: "/assam-guwahati-tourism",
        showBookNow: false,
    },
    {
        slug: "rajasthan-jaipur",
        title: "Rajasthan & Jaipur",
        subtitle: "Land of Kings",
        tag: "Heritage Tour",
        duration: "5N & 6D",
        price: "₹ 14500",
        desc: "Discover magnificent forts, palaces, and royal Rajasthani culture.",
        locations: "Jaipur, Udaipur, Jodhpur, Jaisalmer",
        image: "https://images.unsplash.com/photo-1651516725197-9ed18b572abe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZvcnQlMjBSYWphc3RoYW58ZW58MHx8MHx8fDA%3D",
        icon: Building,
        iconColor: "text-amber-500",
        route: "/rajasthan-tourism",
        showBookNow: false,
    },
    {
        slug: "kerala-munnar",
        title: "Kerala & Munnar",
        subtitle: "God's Own Country",
        tag: "Backwaters & Hills",
        duration: "5N & 6D",
        price: "₹ 14500",
        desc: "Experience backwaters, tea plantations, and Ayurvedic wellness.",
        locations: "Kochi, Munnar, Alleppey, Thekkady",
        image: "/Kerala.jpeg",
        icon: Trees,
        iconColor: "text-emerald-500",
        route: "/kerala-tourism",
        showBookNow: false,
    }
];

export default function IndiaPackagesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/india-tour-by-jcr-1.png"
                        alt="India Tourism"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/70 via-orange-800/50 to-yellow-900/40"></div>
                </div>

                <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white font-medium text-sm">Explore Incredible India</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            India
                            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Tourism Packages
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Explore diverse landscapes, cultures, and heritage of incredible India
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/packages" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all">
                                <ArrowRight className="w-5 h-5 rotate-180" />
                                Back to All Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Grid Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Popular <span className="text-yellow-600">India</span> Tour Packages
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From Himalayas to beaches, discover the best of India with our curated tour packages
                        </p>
                    </div>
                    {(() => {
                        const remainder = indiaPackages.length % 3;
                        const comingSoonCount =
                            remainder === 0 ? 0 : 3 - remainder;

                        return (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {indiaPackages.map((item, i) => (
                                    <div
                                        key={item.slug}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col group"
                                    >
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                priority={i < 3}
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                            {/* Title overlay */}
                                            <div className="absolute top-4 left-4">
                                                <h3 className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-3 py-2 rounded-lg shadow">
                                                    <MapPinCheck className="w-4 h-4" />
                                                    <span>{item.title}</span>
                                                </h3>
                                            </div>

                                            {/* Locations overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <div className="overflow-hidden">
                                                    <div className="flex items-center gap-1 whitespace-nowrap">
                                                        {item.locations.split(',').map((location, index) => (
                                                            <div key={index} className="flex items-center">
                                                                <span className="text-sm text-white font-medium">{location.trim()}</span>
                                                                {index < item.locations.split(',').length - 1 && (
                                                                    <ArrowRight className="w-3 h-3 text-white shrink-0 mx-1" />
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            {/* Badge */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                                                <span className="text-xs font-medium text-gray-600">Exclusive Offers</span>
                                            </div>

                                            {/* Title and Subtitle */}
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-sm text-gray-600">{item.subtitle}</p>
                                            </div>

                                            {/* Tag and Duration */}
                                            <div className="grid grid-cols-2 gap-3 mb-4">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Compass className="w-4 h-4 text-gray-400" />
                                                    <span>{item.tag}</span>
                                                </div>
                                                {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Calendar className="w-4 h-4 text-gray-400" />
                                            <span>{item.duration}</span>
                                        </div> */}
                                            </div>

                                            {/* Description */}
                                            <div className="mb-4">
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>



                                            {/* Action Buttons */}
                                            <div className="flex gap-2">
                                                {/* <Link
                                            href="/book-tour"
                                            className="flex-1 flex items-center justify-center gap-2 bg-yellow-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-yellow-700 transition-colors"
                                        >
                                            Book Now
                                        </Link> */}
                                                <Link href={item.route} className="flex items-center justify-center gap-2 border border-yellow-600 text-yellow-600 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-yellow-50 transition-colors">
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Coming Soon Cards (Desktop Only) */}
                                {Array.from({ length: comingSoonCount }).map((_, index) => (
                                    <div
                                        key={`coming-soon-${index}`}
                                        className="hidden lg:flex bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl items-center justify-center p-10 text-center"
                                    >
                                        <div>
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
                                                <Clock className="w-8 h-8 text-yellow-500" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                                Coming Soon
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                New exclusive service launching shortly
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        );
                    })()}
                </div>
            </section>
        </main>
    );
}
