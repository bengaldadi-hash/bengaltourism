"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Star, MapPinCheck, ArrowRight, Trees, Building, Waves, Mountain, Compass, Ship, Tent, PartyPopper, Camera, Landmark, Church, Footprints } from "lucide-react";

// Experience types
interface Experience {
    title: string;
    icon: any;
    route: string;
    image: string;
}

// Bengal Beckons experiences data
const experiences: Experience[] = [
    {
        title: "Boat Cruise & Stay",
        icon: Ship,
        route: "/boat-stay",
        image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Camping & Tenting",
        icon: Tent,
        route: "/camping-adventure",
        image: "https://images.unsplash.com/photo-1727640826472-bf7456dc030c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Event Management",
        icon: PartyPopper,
        route: "/event-management",
        image: "https://images.unsplash.com/photo-1550697797-f01b4e83a1be?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Film Shooting",
        icon: Camera,
        route: "/film-shooting",
        image: "https://images.unsplash.com/photo-1681137063068-081072cf04b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmlsbSUyMHNob290aW5nfGVufDB8fDB8fHww",
    },
    {
        title: "Heritage Tour & Walks",
        icon: Landmark,
        route: "/heritage-tour",
        image: "https://images.unsplash.com/photo-1763912111586-aed87ee0c3aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhlcml0YWdlJTIwVG91ciUyMCUyNiUyMFdhbGtzfGVufDB8fDB8fHww",
    },
    {
        title: "Hills – Off Beat Destinations",
        icon: Mountain,
        route: "/offbeat-hills",
        image: "/hill.avif",
    },
    {
        title: "Jungle Safari",
        icon: Trees,
        route: "/jungle-safari",
        image: "https://images.unsplash.com/photo-1554380726-5bd6b17b42e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SnVuZ2xlJTIwU2FmYXJpfGVufDB8fDB8fHww",
    },
    {
        title: "Plains – Off Beat Destinations",
        icon: MapPinCheck,
        route: "/offbeat-plains",
        image: "https://images.unsplash.com/photo-1651678938586-affccc71c270?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Religious & Pilgrimage Tour",
        icon: Church,
        route: "/religious-pilgrimage",
        image: "/img/puri.jpeg",
    },
    {
        title: "River Rafting",
        icon: Waves,
        route: "/river-rafting",
        image: "https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Uml2ZXIlMjBSYWZ0aW5nfGVufDB8fDB8fHww",
    },
    {
        title: "Short Breaks from Kolkata",
        icon: Clock,
        route: "/short-breaks",
        image: "https://images.unsplash.com/photo-1761933810905-ccc35b14d937?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hvcnQlMjBCcmVha3N8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Trekking",
        icon: Footprints,
        route: "/trekking-trails",
        image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHJla2tpbmd8ZW58MHx8MHx8fDA%3D",
    },
];

// Bengal Beckons packages data
const bengalPackages = [
    {
        slug: "darjeeling-queen-hills",
        title: "Queen of the Hills",
        tag: "Himalayan Paradise",
        duration: "5N & 6D",
        desc: "A refreshing hill getaway with misty mountains, tea gardens, and colonial charm.",
        locations: "Darjeeling, Kalimpong, Kurseong, Mirik",
        image: "https://images.unsplash.com/photo-1698753864905-a447aa362ec9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D",
        icon: Mountain,
        iconColor: "text-yellow-500",
        route: "/darjeeling",
        showBookNow: true,
    },
    {
        slug: "digha-sea-sand",
        title: "Sea & Sand of the East",
        tag: "Beach Paradise",
        duration: "4N & 5D",
        desc: "A relaxing coastal retreat with serene beaches and scenic sunsets.",
        locations: "Digha, Mandarmoni, Shankarpur, Tajpur",
        image: "https://images.unsplash.com/photo-1657282928361-ec9de3f2bc74?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: Waves,
        iconColor: "text-blue-500",
        route: "/digha",
        showBookNow: true,
    },
    {
        slug: "sundarban-wildlife",
        title: "Largest Mangrove of the World",
        tag: "Wildlife Forest & Jungle Safari",
        duration: "3N & 4D",
        desc: "A thrilling mangrove adventure through rivers, creeks, and wildlife habitats.",
        locations: "Sundarban, Sajnekhali, Godkhali, Kakdwip",
        image: "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Um95YWwlMjBCZW5nYWwlMjBUaWdlcnxlbnwwfHwwfHx8MA%3D%3D",
        icon: Trees,
        iconColor: "text-emerald-500",
        route: "/sundarban",
        showBookNow: true,
    },
    {
        slug: "kolkata-city-joy",
        title: "City of Joy",
        tag: "Cultural Heritage",
        duration: "Custom",
        desc: "Discover art, culture, history, and flavors in India's cultural capital.",
        locations: "Kolkata",
        image: "https://images.unsplash.com/photo-1647102208648-5f3175091dda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D",
        icon: Building,
        iconColor: "text-purple-500",
        route: "/kolkata",
        showBookNow: true,
    },
    {
        slug: "dooars-lataguri-jaldapara",
        title: "Wildlife Forest & Jungle Safari",
        tag: "Forest Safari",
        duration: "3N & 4D",
        desc: "View Details the lush forests and wildlife sanctuaries of North Bengal.",
        locations: "Lataguri, Jaldapara, Gorumara",
        image: "https://images.unsplash.com/photo-1669514463894-0475a3e062ff?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: Trees,
        iconColor: "text-emerald-500",
        route: "/dooars",
        showBookNow: true,
    },
];

export default function BengalBeckonsPackagesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/img/Darjeeling.jpeg"
                        alt="Bengal Tourism"
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
                            <span className="text-white font-medium text-sm">View Details Beautiful Bengal</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Bengal
                            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Beckons
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Discover the diverse landscapes, rich culture, and warm hospitality of West Bengal
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

          

            {/* Packages Grid Section */ }
    <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Popular <span className="text-yellow-600">Bengal</span> Tour Packages
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    From the Himalayan foothills to the Bay of Bengal, experience the best of West Bengal
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bengalPackages.map((item, i) => (
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
                                <span className="text-xs font-medium text-gray-600">Bengal Backons</span>
                            </div>

                            {/* Title */}
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
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
            </div>
        </div>
    </section>

    {/* Experiences Section */ }
    <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Amazing <span className="text-yellow-600">Experiences</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover unique adventures and unforgettable moments across Bengal
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {experiences.map((experience, index) => (
                    <Link
                        key={index}
                        href={experience.route}
                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {/* Image Container */}
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={experience.image}
                                alt={experience.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                            {/* Icon Overlay */}
                            <div className="absolute top-4 right-4">
                                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                    <experience.icon className="w-5 h-5 text-yellow-600" />
                                </div>
                            </div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {experience.title}
                                </h3>
                                <div className="flex items-center gap-2 text-white/90 text-sm">
                                    <span>View Details</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
        </main >
    );
}
