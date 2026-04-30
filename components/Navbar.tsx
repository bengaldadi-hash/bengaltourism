"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Menu, X, Facebook, Instagram, MessageCircle, Phone, Mail, Globe } from "lucide-react"

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [tourSidebarOpen, setTourSidebarOpen] = useState(false)
    const [destinationsOpen, setDestinationsOpen] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setDestinationsOpen(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setDestinationsOpen(false)
        }, 200)
    }

    return (
        <header className="sticky top-0 z-50">
           

            {/* Tour Packages Sidebar */}
            {tourSidebarOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50"
                        onClick={() => setTourSidebarOpen(false)}
                    />

                    {/* Sidebar */}
                    <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Tour Packages</h2>
                                <button
                                    onClick={() => setTourSidebarOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Tour Categories */}
                            <div className="space-y-6">
                                {/* BENGAL BECKONS */}
                                <div>
                                    <h3 className="font-bold text-yellow-600 mb-3">BENGAL BECKONS</h3>
                                    <ul className="space-y-2">
                                        <li><a href="/darjeeling" className="text-gray-700 hover:text-yellow-600 block py-1">Queen of the Hills</a></li>
                                        <li><a href="/digha" className="text-gray-700 hover:text-yellow-600 block py-1">Sea & Sand of the East</a></li>
                                        <li><a href="/dooars" className="text-gray-700 hover:text-yellow-600 block py-1">Wildlife Forest & Jungle Safari</a></li>
                                        <li><a href="/kolkata" className="text-gray-700 hover:text-yellow-600 block py-1">Kolkata City Pkj</a></li>
                                        <li><a href="/sundarban" className="text-gray-700 hover:text-yellow-600 block py-1">Largest Mangrove of the World</a></li>
                                    </ul>
                                </div>

                                {/* HOT SPOTS */}
                                <div>
                                    <h3 className="font-bold text-yellow-600 mb-3">HOT SPOTS</h3>
                                    <ul className="space-y-2">
                                        <li><a href="/darjeeling" className="text-gray-700 hover:text-yellow-600 block py-1">Darjeeling & Kalimpong Pkj</a></li>
                                        <li><a href="/dooars" className="text-gray-700 hover:text-yellow-600 block py-1">Dooars - Lataguri & Jaldapara Pkj</a></li>
                                        <li><a href="/digha" className="text-gray-700 hover:text-yellow-600 block py-1">Digha & Mandarmoni Pkj</a></li>
                                        <li><a href="/bakkhali" className="text-gray-700 hover:text-yellow-600 block py-1">Bakkhali Pkj</a></li>
                                        <li><a href="/kolkata" className="text-gray-700 hover:text-yellow-600 block py-1">Kolkata Pkj</a></li>
                                        <li><a href="/eco-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Regional Bengal Pkj</a></li>
                                        <li><a href="/sundarban" className="text-gray-700 hover:text-yellow-600 block py-1">Sundarban Pkj</a></li>
                                    </ul>
                                </div>

                                {/* TAILOR MADE */}
                                <div>
                                    <h3 className="font-bold text-yellow-600 mb-3">TAILOR MADE</h3>
                                    <ul className="space-y-2">

                                        <li><a href="/boat-stay" className="text-gray-700 hover:text-yellow-600 block py-1">Boat Cruise & Stay</a></li>
                                        <li><a href="/camping-adventure" className="text-gray-700 hover:text-yellow-600 block py-1">Camping & Tenting</a></li>
                                        <li><a href="/event-management" className="text-gray-700 hover:text-yellow-600 block py-1">Event Management</a></li>
                                        <li><a href="/film-shooting" className="text-gray-700 hover:text-yellow-600 block py-1">Film Shooting</a></li>
                                        <li><a href="/heritage-tour" className="text-gray-700 hover:text-yellow-600 block py-1">Heritage Tour & Walks</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-yellow-600 block py-1">Hills - Off Beat Destinations</a></li>
                                        <li><a href="/jungle-safari" className="text-gray-700 hover:text-yellow-600 block py-1">Jungle Safari</a></li>
                                        <li><a href="/village-offbeat" className="text-gray-700 hover:text-yellow-600 block py-1">Plains - Off Beat Destinations</a></li>
                                        <li><a href="/religious-pilgrimage" className="text-gray-700 hover:text-yellow-600 block py-1">Religious & Pilgrimage Tour</a></li>
                                        <li><a href="/river-rafting" className="text-gray-700 hover:text-yellow-600 block py-1">River Rafting</a></li>
                                        <li><a href="/theme-tours" className="text-gray-700 hover:text-yellow-600 block py-1">Short Breaks from Kolkata</a></li>
                                        <li><a href="/trekking-trails" className="text-gray-700 hover:text-yellow-600 block py-1">Trekking</a></li>
                                    </ul>
                                </div>

                                {/* OTHERS */}
                                <div>
                                    <h3 className="font-bold text-yellow-600 mb-3">OTHERS</h3>
                                    <ul className="space-y-2">
                                        <li><a href="/odisha-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Puri & Odisha Pkj</a></li>
                                        <li><a href="/sikkim-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Sikkim & Gangtok</a></li>
                                        <li><a href="/silk-route-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Silk Route Pkj</a></li>
                                        <li><a href="/goa-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Goa Pkj</a></li>
                                        <li><a href="/himachal-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Himachal Pkj</a></li>
                                        <li><a href="/jammu-kashmir-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Jammu & Kashmir Pkj</a></li>
                                        <li><a href="/andaman-nicobar-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Andaman & Nicobar Pkj</a></li>
                                        <li><a href="/shillong-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Assam & Guwahati Pkj</a></li>
                                        <li><a href="/rajasthan-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Rajasthan & Jaipur Pkj</a></li>
                                        <li><a href="/kerala-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Kerala & Munnar Pkj</a></li>
                                    </ul>
                                </div>

                                {/* EXCLUSIVE */}
                                <div>
                                    <h3 className="font-bold text-yellow-600 mb-3">EXCLUSIVE</h3>
                                    <ul className="space-y-2">
                                        <li><a href="/medical-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Medical Tourism</a></li>
                                        <li><a href="/air-ambulance" className="text-gray-700 hover:text-yellow-600 block py-1">Air Ambulance Service</a></li>
                                        <li><a href="/spa-wellness" className="text-gray-700 hover:text-yellow-600 block py-1">Wellness Tourism -Spa-Massage-Yoga</a></li>
                                        <li><a href="/tea-tourism" className="text-gray-700 hover:text-yellow-600 block py-1">Tea Tourism</a></li>
                                        <li><a href="/hotel-booking" className="text-gray-700 hover:text-yellow-600 block py-1">Hotel-Resort-Guest House</a></li>
                                    </ul>       
                                </div>

                                {/* FOREIGN TOURS */}
                                <div>
                                    <h3 className="font-bold text-yellow-600 mb-3">FOREIGN TOURS</h3>  
                                    <ul className="space-y-2">
                                        <li><a href="/bhutan" className="text-gray-700 hover:text-yellow-600 block py-1">Bhutan - Thimpu & Paro</a></li>
                                        <li><a href="/dubai" className="text-gray-700 hover:text-yellow-600 block py-1">Dubai</a></li>
                                        <li><a href="/nepal" className="text-gray-700 hover:text-yellow-600 block py-1">Nepal & Kathmandu</a></li>
                                        <li><a href="/thailand" className="text-gray-700 hover:text-yellow-600 block py-1">Thailand & Bangkok</a></li>
                                        <li><a href="/lakshadweep" className="text-gray-700 hover:text-yellow-600 block py-1">Lakshadweep</a></li>
                                        <li><a href="/singapore" className="text-gray-700 hover:text-yellow-600 block py-1">Singapore</a></li>
                                        <li><a href="/malaysia" className="text-gray-700 hover:text-yellow-600 block py-1">Malaysia</a></li>
                                        <li><a href="/bali" className="text-gray-700 hover:text-yellow-600 block py-1">Bali</a></li>
                                        <li><a href="/maldives" className="text-gray-700 hover:text-yellow-600 block py-1">Maldives</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Navigation */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4"> 
                    <div className="flex h-20 items-center justify-between">

                        {/* Tour Packages Hamburger - Top Left */}
                        {/* <button
                            onClick={() => setTourSidebarOpen(true)}
                            className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition p-2 rounded-lg hover:bg-yellow-50"
                        >
                            <Menu size={24} />
                        </button> */}

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="Bengal Tourism Logo"
                                className="h-16 w-auto"
                            />
                            <div>

                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-6">
                            <Link href="/" className="text-amber-700 font-semibold hover:text-yellow-600 transition">
                                HOME
                            </Link>
                   
                            
                            <Link href="/about" className="text-gray-700 font-semibold hover:text-yellow-600 transition">
                                About Us
                            </Link>
                                     
                            {/* Destinations Dropdown */}
                            <div 
                                className="relative"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="text-gray-700 font-semibold hover:text-yellow-600 transition flex items-center gap-1"
                                >
                                    Destinations
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                                {destinationsOpen && (
                                    <div 
                                        className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href="/packages/bengal-beckons"
                                            className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                                        >
                                            Bengal Beckons
                                        </Link>
                                        <Link
                                            href="/packages/india"
                                            className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                                        >
                                            Incredible India
                                        </Link>
                                        <Link
                                            href="/packages/foreign-tours"
                                            className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                                        >
                                            Foreign Destinations
                                        </Link>
                                        <Link
                                            href="/packages/exclusive"
                                            className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                                        >
                                            Exclusive Offers
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link href="/earn" className="text-gray-700 font-semibold hover:text-yellow-600 transition">
                                Earn With Us
                            </Link>
                            {/* <Link href="/career" className="text-gray-700 font-semibold hover:text-yellow-600 transition">
                                Career
                            </Link> */}
                            {/* <Link href="/package-cost" className="text-gray-700 font-semibold hover:text-yellow-600 transition">
                                Package Cost
                            </Link> */}
                            <Link href="/brands" className="text-gray-700 font-semibold hover:text-yellow-600 transition">
                                Brands
                            </Link>
                          
                            <Link href="/contact" className="text-gray-700 font-semibold hover:text-yellow-600 transition">
                                Contact Us
                            </Link>
                              <Link
                                href="/hotel-booking"
                                className="bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-700 transition"
                            >
                               Hotal Booking
                            </Link>
                        </nav>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden text-gray-700"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
                        <Link
                            href="/"
                            className="block py-2 text-amber-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            HOME
                        </Link>
                        
                        {/* Mobile Destinations */}
                        <div>
                            <button
                                onClick={() => setDestinationsOpen(!destinationsOpen)}
                                className="w-full text-left py-2 text-gray-700 font-semibold flex items-center justify-between"
                            >
                                Destinations
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {destinationsOpen && (
                                <div className="pl-4 mt-2 space-y-2">
                                    <Link
                                        href="/packages/bengal-beckons"
                                        className="block py-2 text-gray-600 hover:text-yellow-600"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Bengal Beckons
                                    </Link>
                                    <Link
                                        href="/packages/india"
                                        className="block py-2 text-gray-600 hover:text-yellow-600"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Incredible India
                                    </Link>
                                    <Link
                                        href="/packages/foreign-tours"
                                        className="block py-2 text-gray-600 hover:text-yellow-600"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Foreign Destinations
                                    </Link>
                                    <Link
                                        href="/packages/exclusive"
                                        className="block py-2 text-gray-600 hover:text-yellow-600"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Exclusive Offers
                                    </Link>
                                </div>
                            )}
                        </div>
                        
                        <Link
                            href="/about"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/earn"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            Earn With Us
                        </Link>
                        {/* <Link
                            href="/career"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            Career
                        </Link> */}
                        {/* <Link
                            href="/package-cost"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            Package Cost
                        </Link> */}
                        <Link
                            href="/brands"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            Brands
                        </Link>
                   
                        <Link
                            href="/contact"
                            className="block py-2 text-gray-700 font-semibold"
                            onClick={() => setMobileOpen(false)}
                        >
                            Contact Us
                        </Link>
                             <Link
                            href="/hotel-booking"
                            className="block py-2 bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold text-center"
                            onClick={() => setMobileOpen(false)}
                        >
                            Hotal Booking
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
