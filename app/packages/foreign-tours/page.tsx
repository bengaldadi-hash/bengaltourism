"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Star, MapPinCheck, ArrowRight, Trees, Building, Waves, Mountain, Compass, TreePalm, Sailboat, Landmark, Castle, Crown, Church, CarFront } from "lucide-react";

// Foreign tours packages data
const foreignTourPackages = [
    {
        slug: "bhutan-thimpu-paro",
        title: "Bhutan-Thimpu & Paro",
        subtitle: "Land of Thunder Dragon",
        tag: "Mountain Kingdom",
        duration: "5N & 6D",
        desc: "Explore the serene beauty and spiritual culture of Bhutan's Himalayan kingdom.",
        locations: "Thimphu, Paro, Punakha, Phobjikha",
        image: "https://images.unsplash.com/photo-1532008779255-4b4dd2668c84?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qmh1dGFuLVRoaW1wdXxlbnwwfHwwfHx8MA%3D%3D",
        icon: Mountain,
        iconColor: "text-pink-500",
        route: "/bhutan",
        showBookNow: true,
    },
    {
        slug: "dubai-tour",
        title: "Dubai",
        subtitle: "City of Gold",
        tag: "Luxury & Adventure",
        duration: "4N & 5D",
        desc: "Experience ultra-modern architecture, luxury shopping, and desert adventures.",
        locations: "Dubai, Abu Dhabi, Sharjah",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RHViYWl8ZW58MHx8MHx8fDA%3D",
        icon: Building,
        iconColor: "text-amber-500",
        route: "/dubai",
        showBookNow: true,
    },
    {
        slug: "nepal-kathmandu",
        title: "Nepal & Kathmandu",
        subtitle: "Himalayan Kingdom",
        tag: "Mountain Escape",
        duration: "4N & 5D",
        desc: "A classic Himalayan journey blending culture, nature, and adventure.",
        locations: "Kathmandu, Pokhara, Chitwan, Nagarkot",
        image: "https://images.unsplash.com/photo-1720811970882-70a5196ee37e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmVwYWwlMjAlMjYlMjBLYXRobWFuZHV8ZW58MHx8MHx8fDA%3D",
        icon: Mountain,
        iconColor: "text-yellow-500",
        route: "/nepal",
        showBookNow: true,
    },
    {
        slug: "thailand-bangkok",
        title: "Thailand & Bangkok",
        subtitle: "Land of Smiles",
        tag: "Tropical Paradise",
        duration: "5N & 6D",
        desc: "Discover vibrant nightlife, beaches, temples, and Thai culture.",
        locations: "Bangkok, Pattaya, Phuket, Krabi",
        image: "https://images.unsplash.com/photo-1712487650909-2aaf5c5eac36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGhhaWxhbmQlMjAlMjYlMjBCYW5na29rfGVufDB8fHww",
        icon: Waves,
        iconColor: "text-teal-500",
        route: "/thailand",
        showBookNow: true,
    },
    {
        slug: "lakshadweep",
        title: "Lakshadweep",
        subtitle: "Coral Paradise",
        tag: "Island Escape",
        duration: "4N & 5D",
        desc: "Explore pristine coral islands, crystal clear waters, and marine life.",
        locations: "Kavaratti, Agatti, Bangaram, Kadmat",
        image: "/laksh.avif",
        icon: Waves,
        iconColor: "text-blue-500",
        route: "/lakshadweep",
        showBookNow: true,
    },
    {
        slug: "singapore-tour",
        title: "Singapore",
        subtitle: "Lion City",
        tag: "Modern Metropolis",
        duration: "4N & 5D",
        desc: "Experience futuristic architecture, gardens, and multicultural attractions.",
        locations: "Singapore City, Sentosa, Marina Bay",
        image: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2luZ2Fwb3JlfGVufDB8fHww",
        icon: Building,
        iconColor: "text-yellow-600",
        route: "/singapore",
        showBookNow: true,
    },
    {
        slug: "malaysia-tour",
        title: "Malaysia",
        subtitle: "Truly Asia",
        tag: "Cultural Fusion",
        duration: "5N & 6D",
        desc: "Discover diverse cultures, modern cities, and tropical rainforests.",
        locations: "Kuala Lumpur, Penang, Langkawi, Genting",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200",
        icon: Compass,
        iconColor: "text-blue-600",
        route: "/malaysia",
        showBookNow: true,
    },
    {
        slug: "bali-tour",
        title: "Bali",
        subtitle: "Island of Gods",
        tag: "Tropical Paradise",
        duration: "5N & 6D",
        desc: "Experience spiritual temples, rice terraces, and pristine beaches.",
        locations: "Ubud, Kuta, Seminyak, Nusa Dua",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200",
        icon: Trees,
        iconColor: "text-green-600",
        route: "/bali",
        showBookNow: true,
    },
    {
        slug: "maldives-tour",
        title: "Maldives",
        subtitle: "Tropical Heaven",
        tag: "Luxury Islands",
        duration: "5N & 6D",
        desc: "Relax in overwater villas with crystal clear waters and coral reefs.",
        locations: "Male, Atolls, Resort Islands",
        image: "/Maldives.jpeg",
        icon: Waves,
        iconColor: "text-cyan-600",
        route: "/maldives",
        showBookNow: true,
    },
    {
        slug: "africa-wildlife-adventures",
        title: "Africa Wildlife Adventures",
        subtitle: "Into the Wild",
        tag: "Safari & Nature",
        duration: "6N & 7D",
        desc: "Explore the vast savannas, witness the Big Five, and experience thrilling safari adventures.",
        locations: "Kenya, Tanzania, South Africa",
        image: "https://images.unsplash.com/photo-1731994634956-94a42f6b6290?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhLXdpbGRsaWZlfGVufDB8fDB8fHww",
        icon: TreePalm,
        iconColor: "text-green-600",
        route: "/africa-wildlife-adventures",
        showBookNow: true,
    },
    {
        slug: "australia-tour",
        title: "Australia",
        subtitle: "Land Down Under",
        tag: "Beaches & Adventure",
        duration: "5N & 6D",
        desc: "Discover stunning beaches, iconic landmarks, and vibrant cities across Australia.",
        locations: "Sydney, Melbourne, Gold Coast",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXVzdHJhbGlhfGVufDB8fDB8fHww",
        icon: Sailboat,
        iconColor: "text-blue-500",
        route: "/australia",
        showBookNow: true,
    },
    {
        slug: "italy-tour",
        title: "Italy",
        subtitle: "Timeless Romance",
        tag: "History & Culture",
        duration: "6N & 7D",
        desc: "Walk through ancient ruins, enjoy world-class cuisine, and explore romantic cities.",
        locations: "Rome, Venice, Florence",
        image: "https://images.unsplash.com/photo-1549893072-4bc678117f45?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEl0YWx5fGVufDB8fDB8fHww",
        icon: Landmark,
        iconColor: "text-yellow-500",
        route: "/italy",
        showBookNow: true,
    },
    {
        slug: "germany-tour",
        title: "Germany",
        subtitle: "Castles & Culture",
        tag: "Heritage & Scenic",
        duration: "5N & 6D",
        desc: "Experience fairy-tale castles, vibrant cities, and rich European heritage.",
        locations: "Berlin, Munich, Frankfurt",
        image: "https://images.unsplash.com/photo-1601589313026-80a82ae92920?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdlcm1hbnl8ZW58MHx8MHx8fDA%3D",
        icon: Castle,
        iconColor: "text-gray-700",
        route: "/germany",
        showBookNow: true,
    },
    {
        slug: "switzerland-tour",
        title: "Switzerland",
        subtitle: "Heaven on Earth",
        tag: "Mountains & Luxury",
        duration: "5N & 6D",
        desc: "Witness breathtaking Alpine scenery, serene lakes, and charming towns.",
        locations: "Zurich, Lucerne, Interlaken",
        image: "https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D",
        icon: Mountain,
        iconColor: "text-emerald-600",
        route: "/switzerland",
        showBookNow: true,
    },
    {
        slug: "london-tour",
        title: "London",
        subtitle: "The Royal Capital",
        tag: "Royal & Modern",
        duration: "4N & 5D",
        desc: "Explore royal palaces, iconic landmarks, and vibrant city life.",
        locations: "London, Windsor, Oxford",
        image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9uZG9ufGVufDB8fDB8fHww",
        icon: Crown,
        iconColor: "text-purple-600",
        route: "/london",
        showBookNow: true,
    },
    {
        slug: "cambodia-tour",
        title: "Cambodia",
        subtitle: "Kingdom of Wonders",
        tag: "Temples & Heritage",
        duration: "4N & 5D",
        desc: "Discover ancient temples, rich history, and vibrant local culture.",
        locations: "Siem Reap, Phnom Penh",
        image: "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FtYm9kaWF8ZW58MHx8MHx8fDA%3D",
        icon: Church,
        iconColor: "text-orange-500",
        route: "/cambodia",
        showBookNow: true,
    },
    {
        slug: "sri-lanka-tour",
        title: "Sri Lanka",
        subtitle: "Pearl of the Indian Ocean",
        tag: "Nature & Beaches",
        duration: "5N & 6D",
        desc: "Enjoy lush landscapes, wildlife safaris, and pristine beaches.",
        locations: "Colombo, Kandy, Bentota",
        image: "https://images.unsplash.com/photo-1580910527739-556eb89f9d65?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D",
        icon: Waves,
        iconColor: "text-cyan-500",
        route: "/sri-lanka",
        showBookNow: true,
    },
    {
        slug: "indonesia-tour",
        title: "Indonesia",
        subtitle: "Island Paradise",
        tag: "Beaches & Culture",
        duration: "5N & 6D",
        desc: "Experience tropical islands, vibrant culture, and breathtaking landscapes.",
        locations: "Bali, Jakarta, Lombok",
        image: "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW5kb25lc2lhfGVufDB8fDB8fHww",
        icon: TreePalm,
        iconColor: "text-yellow-500",
        route: "/indonesia",
        showBookNow: true,
    },
    {
        slug: "japan-tour",
        title: "Japan",
        subtitle: "Tradition Meets Future",
        tag: "Culture & Technology",
        duration: "6N & 7D",
        desc: "Explore futuristic cities, ancient temples, and stunning cherry blossoms.",
        locations: "Tokyo, Kyoto, Osaka",
        image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SmFwYW58ZW58MHx8MHx8fDA%3D",
        icon: CarFront,
        iconColor: "text-pink-500",
        route: "/japan",
        showBookNow: true,
    }
];

export default function ForeignToursPackagesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=2070&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="International Tourism"
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
                            <span className="text-white font-medium text-sm">International Adventures</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Foreign
                            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Tour Packages
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Explore exotic destinations worldwide with our curated international tour packages
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
                            Popular <span className="text-yellow-600">Foreign</span> Tour Packages
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From Southeast Asia to Middle East, discover world's most amazing destinations
                        </p>
                    </div>

                    {(() => {
                        const remainder = foreignTourPackages.length % 3;
                        const comingSoonCount =
                            remainder === 0 ? 0 : 3 - remainder;

                        return (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {foreignTourPackages.map((item, i) => (
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
                                                <span className="text-xs font-medium text-gray-600">Foreign Tour</span>
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

                                            </div>

                                            {/* Description */}
                                            <div className="mb-4">
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>

                                            {/* Price */}
                                            {/* <div className="mt-auto mb-4">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-sm text-gray-500">Starting from</span>
                                            <span className="text-2xl font-bold text-yellow-600">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div> */}

                                            {/* Action Buttons */}
                                            <div className="flex gap-2">
                                                {/* {item.showBookNow && (
                                            <Link
                                                href="/book-tour"
                                                className="flex-1 flex items-center justify-center gap-2 bg-yellow-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-yellow-700 transition-colors"
                                            >
                                                Book Now
                                            </Link>
                                        )} */}
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
                                                New exclusive destinations launching shortly
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
