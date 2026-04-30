import React from 'react'
import Link from 'next/link'
import { Church, MapPin, Calendar, Users, Star, ArrowRight, Heart, Sparkles } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function PilgrimageTour() {
  const pilgrimageSites = [
    {
      name: "Kalighat Temple",
      description: "Sacred Kali temple with ancient rituals",
      duration: "1 Day",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1761474440561-78a792962f3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGlsZ3JpbWFnZSUyMFRvdXJ8ZW58MHx8MHx8fDA%3D",
      rating: 4.8
    },
    {
      name: "Dakshineswar Kali Temple",
      description: "Divine abode on the banks of Ganges",
      duration: "1 Day",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1593695054016-3c1b9c3b3f3b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGVtcGxlJTIwSW5kaWF8ZW58MHx8MHx8fDA%3D",
      rating: 4.9
    },
    {
      name: "Belur Math",
      description: "Headquarters of Ramakrishna Mission",
      duration: "1 Day",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1589822909392-6b9aba4398a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9uYXN0ZXJ5JTIwSW5kaWF8ZW58MHx8MHx8fDA%3D",
      rating: 4.7
    },
    {
      name: "Tarapith Temple",
      description: "Powerful Shakti Peeth in Birbhum",
      duration: "2N & 3D",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1614682598586-2b6230118c1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGluZHUzJTIwVGVtcGxlfGVufDB8fDB8fHwxNzAwNDM5NjY5fA%3D%3D",
      rating: 4.8
    },
    {
      name: "Mayapur ISKCON Temple",
      description: "World headquarters of ISKCON movement",
      duration: "2N & 3D",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1596704017211-1cb8269c8746?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SklTQ09OJTIwVGVtcGxlfGVufDB8fDB8fHwxNzAwNDM5NjY5fA%3D%3D",
      rating: 4.9
    },
    {
      name: "Baidyanath Dham",
      description: "One of the 12 Jyotirlingas",
      duration: "3N & 4D",
      price: "₹6,999",
      image: "https://images.unsplash.com/photo-1614682598586-2b6230118c1f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGluZHUzJTIwVGVtcGxlfGVufDB8fDB8fHwxNzAwNDM5NjY5fA%3D%3D",
      rating: 4.9
    }
  ]

  const spiritualExperiences = [
    {
      icon: Heart,
      title: "Divine Darshan",
      description: "Sacred temple visits with special arrangements"
    },
    {
      icon: Sparkles,
      title: "Aarti Ceremonies",
      description: "Participate in ancient ritual ceremonies"
    },
    {
      icon: Church,
      title: "Spiritual Discourses",
      description: "Learn from learned scholars and saints"
    },
    {
      icon: MapPin,
      title: "Holy River Baths",
      description: "Purifying rituals at sacred rivers"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Religious & Pilgrimage Tour</h1>
            <p className="text-xl mb-6">Embark on a spiritual journey through Bengal's sacred destinations</p>
            <div className="flex gap-4">
              <Link href="/book-tour" className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition flex items-center gap-2">
                Book Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#destinations" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition">
                Explore Sacred Sites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Destinations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit the most revered temples and spiritual centers of Bengal and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilgrimageSites.map((site, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 relative">
                  <img 
                    src={site.image} 
                    alt={site.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{site.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{site.name}</h3>
                  <p className="text-gray-600 mb-4">{site.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{site.duration}</span>
                    </div>
                    <div className="text-xl font-bold text-purple-600">{site.price}</div>
                  </div>
                  <Link 
                    href="/book-tour" 
                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-center block"
                  >
                    Book Pilgrimage
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Experiences Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Spiritual Experiences</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in divine rituals and ancient traditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spiritualExperiences.map((experience, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <experience.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

         <PackagePricing 
            title="Pilgrimage Tour Packages"
            subtitle="Choose your perfect spiritual journey"
          />
    
           
        <ContactCTA />
    </div>
  )
}
