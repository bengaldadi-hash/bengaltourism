"use client"

import Image from 'next/image'
import { useState } from "react";
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'
const cards = [
  {
    id: 1,
    title: "Srirodhara",
    video: "/wellness/Shirodara.mp4",
    desc: "Srirodhara is a traditional Ayurvedic treatment where warm medicated oil is poured in a continuous stream over the forehead. It helps in reducing stress, anxiety, and promoting relaxation.",
  },
  {
    id: 2,
    title: "oil massage",
    video: "/wellness/ASMR.mp4",
    desc: "Oil massage is a traditional Ayurvedic treatment that involves the application of warm medicated oil to the body. It helps in reducing stress, anxiety, and promoting relaxation.",
  },
  {
    id: 3,
    title: "Abhayanga",
    video: "/wellness/Abhayanga.mp4",
    desc: "Abhayanga is a traditional Ayurvedic treatment that involves the application of warm medicated oil to the body. It helps in reducing stress, anxiety, and promoting relaxation.",
  },
  {
    id: 4,
    title: "Top Ayurvedic Wellness Center",
    video: "",
    desc: "Advertise your Name here",
  },
  {
    id: 5,
    title: "Top Ayurvedic Wellness Center",
    video: "",
    desc: "Advertise your Name here",
  },
  {
    id: 6,
    title: "Top Ayurvedic Wellness Center",
    video: "",
    desc: "Advertise your Name here",
  },
];
export default function SpaWellnessPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ik.imgkit.net/3vlqs5axxjf/TW-Asia/ik-seo/uploadedImages/Industry/Travel_Trends/GettyImages-599463782/Wellness-tourism-takes-the-spotlight-for-2022-trav.jpg?tr=w-780%2Ch-440%2Cfo-auto"
            alt="Luxury spa resort with swimming pool and wellness facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-pink-800/60 to-purple-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Spa & Wellness</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Wellness & Rejuvenation
              <span className="block text-3xl md:text-5xl mt-2 text-purple-300">
                Ayurvedic Treatments • Yoga • Meditation • Spa Therapies
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience ultimate wellness and rejuvenation with ancient Ayurvedic wisdom,
              yoga, meditation, and spa therapies in the Himalayan foothills
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Discover Wellness
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-800 transition transform hover:scale-105">
                Book Wellness Retreat
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Find Inner Peace</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AYURVEDIC TREATMENTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ayurvedic Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authentic Ayurvedic treatments with ancient wisdom and modern wellness practices
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
               {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
                >
                  {/* Top */}
                  <div className="bg-green-600 text-white text-center py-4 text-xl font-bold">
                    {card.title}
                  </div>

                  {/* Middle */}
                  <div
                    className="h-64 bg-green-100 relative cursor-pointer overflow-hidden"
                    onClick={() => card.video && setSelectedVideo(card.video)}
                  >
                    {card.video ? (
                      <>
                        {/* Direct Video Preview */}
                        <video
                          src={card.video}
                          muted
                          autoPlay
                          loop
                          className="w-full h-full object-cover"
                        />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center text-3xl text-green-600 shadow-lg">
                            ▶
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-green-700 text-xl font-semibold text-center px-4">
                        Put Your Video Here
                      </div>
                    )}
                  </div>

                  {/* Bottom */}
                  <div className="py-4 text-center text-lg font-medium text-gray-700 border-t">
                    {card.desc}
                  </div>
                </div>
              ))}
              </div>
      {/* Popup Modal */}
{selectedVideo && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedVideo(null)} // outside click close
  >
    <div
      className="relative w-[90%] md:w-[750px] bg-black rounded-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()} // prevent close on inside click
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedVideo(null)}
        className="absolute top-3 right-3 bg-white text-black w-10 h-10 rounded-full text-xl font-bold z-10"
      >
        ✕
      </button>

      {/* Popup Video */}
      <video
        src={selectedVideo}
        controls
        autoPlay
        className="w-full h-auto"
      />
    </div>
  </div>
)}

            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Spa Wellness video
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
     
      {/* ================= YOGA & MEDITATION ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Yoga & Meditation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ancient practices for mind-body harmony and spiritual enlightenment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
            {/* Yoga */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hatha Yoga</h3>
              <p className="text-gray-700 mb-4">
                Traditional Hatha yoga practices for physical health and mental clarity.
                Morning and evening sessions with experienced instructors.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-orange-600 font-semibold">Physical Harmony</span>
                <a href="/book-tour" className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                  Book Now
                </a>
              </div>
            </div>

            {/* Meditation */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Meditation</h3>
              <p className="text-gray-700 mb-4">
                Guided meditation and mindfulness practices for inner peace and stress reduction.
                Experience deep relaxation and spiritual awareness in serene Himalayan settings.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-600 font-semibold">Inner Peace</span>
                <a href="/book-tour" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MASSAGE & SPA FACILITIES ================= */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Massage & Spa Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luxury spa facilities with experienced therapists and modern equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Luxury Spa */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Luxury Spa</h3>
              <p className="text-gray-700 mb-4">
                Premium massage therapies, steam rooms, sauna, and jacuzzi facilities.
                Experienced therapists trained in various international wellness techniques.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-pink-600 font-semibold">Premium Care</span>
                <a href="/book-tour" className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition">
                  Book Now
                </a>
              </div>
            </div>

            {/* Wellness Cuisine */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wellness Cuisine</h3>
              <p className="text-gray-700 mb-4">
                Nutritious Ayurvedic meals and herbal teas designed for optimal health.
                Fresh, organic ingredients sourced from local Himalayan gardens.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-teal-600 font-semibold">Healthy Dining</span>
                <a href="/book-tour" className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WELLNESS PACKAGES ================= */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Wellness Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Holistic wellness programs designed for complete rejuvenation and balance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 3-Day Rejuvenation */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Clock className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-gray-700 font-bold mb-3">3-Day Rejuvenation</h3>
                <p className="text-gray-700 mb-4">
                  Complete wellness program with Ayurvedic treatments, yoga, meditation,
                  and spa therapies. Perfect for stress relief and rejuvenation.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">Complete Balance</span>
                  <a href="/book-tour" className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/* 5-Day Detox */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-gray-700 font-bold mb-3">5-Day Detox</h3>
                <p className="text-gray-700 mb-4">
                  Intensive detoxification program with Panchakarma, herbal treatments,
                  and specialized diet. Experience complete body purification and renewal.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Deep Cleanse</span>
                  <a href="/book-tour" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            {/* Wellness Retreat */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Star className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-gray-700 font-bold mb-3">Wellness Retreat</h3>
                <p className="text-gray-700 mb-4">
                  Ultimate wellness experience combining all treatments, yoga, meditation,
                  spa therapies, and healthy cuisine. Perfect for complete transformation.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Ultimate Transformation</span>
                  <a href="/book-tour" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPA & WELLNESS TOUR PRICING ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Spa & Wellness Tour Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejuvenate Your Mind, Body & Soul - Per Person Basis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">1N/2D</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">₹ 19,000/-</p>
              <p className="text-gray-600 mb-4">Perfect weekend wellness escape</p>
              <a href="/book-tour" className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Book Now
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">2N/3D</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">₹ 28,000/-</p>
              <p className="text-gray-600 mb-4">Complete rejuvenation experience</p>
              <a href="/book-tour" className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Book Now
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">3N/4D</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">₹ 37,000/-</p>
              <p className="text-gray-600 mb-4">Deep wellness transformation</p>
              <a href="/book-tour" className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Book Now
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">4N/5D</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">₹ 46,000/-</p>
              <p className="text-gray-600 mb-4">Extended wellness journey</p>
              <a href="/book-tour" className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Book Now
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">5N/6D</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">₹ 64,000/-</p>
              <p className="text-gray-600 mb-4">Ultimate wellness retreat</p>
              <a href="/book-tour" className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Book Now
              </a>
            </div>
          </div>

          <div className="bg-purple-100 rounded-xl p-6 mt-8">
            <h4 className="font-bold text-purple-800 mb-3">Important Information</h4>
            <div className="space-y-2 text-gray-700">
              <p>• All rates are per person basis</p>
              <p>• Includes accommodation, meals, and all wellness treatments</p>
              <p>• Airport/railway station transfers included</p>
              <p>• Daily yoga and meditation sessions included</p>
              <p>• Personalized wellness consultation included</p>
            </div>
          </div>
        </div>
      </section>
      r

      <ContactCTA />

    </main>
  )
}
