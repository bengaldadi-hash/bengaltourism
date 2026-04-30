"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MapPin, Users, Award, Target, Globe, TreePine, HandHeart, Briefcase, Calendar, Star, ChevronRight } from "lucide-react";

const stats = [
  { number: "1300+", label: "Happy Members", icon: Users },
  { number: "50+", label: "Tour Packages", icon: MapPin },
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "24/7", label: "Customer Support", icon: Heart }
];

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We prioritize our customers' needs and ensure their satisfaction in every journey."
  },
  {
    icon: Globe,
    title: "Authentic Experiences",
    description: "Showcasing the real beauty and culture of Bengal through genuine tourism experiences."
  },
  {
    icon: TreePine,
    title: "Sustainable Tourism",
    description: "Promoting eco-friendly tourism that preserves Bengal's natural beauty for future generations."
  },
  {
    icon: HandHeart,
    title: "Local Community Support",
    description: "Empowering local communities by creating employment opportunities and supporting local businesses."
  }
];

const teamMembers = [
  {
    name: "Bengal Tourism Team",
    role: "Tourism Experts",
    description: "Dedicated professionals with deep knowledge of Bengal's culture, heritage, and tourist destinations.",
    image: "/Team.avif"
  }
];

const milestones = [
  { year: "2008", title: "Founded", description: "Started with a vision to showcase Bengal's beauty" },
  { year: "2012", title: "Expansion", description: "Expanded to cover all major tourist destinations in Bengal" },
  { year: "2018", title: "Digital Transformation", description: "Launched online booking and membership platform" },
  { year: "2024", title: "Growth Plan", description: "Introduced MgM growth structure for member empowerment" }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about.avif"
            alt="About Bengal Tourism"
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
              <span className="text-white font-medium text-sm">About Us</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Discover the
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Beauty of Bengal
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
              Your trusted partner in exploring the rich heritage and vibrant culture of Bengal
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Bengal Tourism was founded with a simple yet powerful vision: to showcase the magnificent beauty, 
                  rich culture, and warm hospitality of Bengal to the world. What started as a small team of passionate 
                  tourism enthusiasts has grown into a comprehensive travel platform serving thousands of satisfied customers.
                </p>
                <p>
                  Our journey began in 2008, when we recognized the immense potential of Bengal as a premier 
                  tourist destination. From the snow-capped peaks of Darjeeling to the pristine beaches of Digha, 
                  from the cultural hub of Kolkata to the serene mangroves of Sundarbans - we've made it our mission 
                  to help travelers discover every facet of this incredible region.
                </p>
                <p>
                  Today, Bengal Tourism stands as a trusted name in the travel industry, known for our commitment 
                  to authentic experiences, sustainable tourism practices, and exceptional customer service. 
                  We believe that travel is not just about visiting places, but about creating memories that last a lifetime.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Bengal Tourism Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our guiding principles that shape everything we do
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "mission" 
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "vision" 
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Vision
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === "mission" && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide exceptional travel experiences that showcase the authentic beauty, rich culture, 
                  and warm hospitality of Bengal while promoting sustainable tourism practices that benefit 
                  local communities and preserve our natural heritage for future generations.
                </p>
              </div>
            )}
            {activeTab === "vision" && (
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the most trusted and preferred tourism partner for exploring Bengal, 
                  known for our commitment to excellence, authenticity, and sustainable growth 
                  that benefits both travelers and local communities alike.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our every action and decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MILESTONES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our growth and success
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-600 to-orange-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="w-1/2 pr-8">
                    <div className={`text-right ${index % 2 === 0 ? "" : "text-left"}`}>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full font-bold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-white border-4 border-yellow-600 rounded-full flex items-center justify-center z-10">
                    <Calendar className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Bengal Tourism's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-white/80">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CSR ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Our Commitment to Society</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Giving back to the community and protecting our environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <TreePine className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tree Plantation</h3>
              <p className="text-gray-600">We plant 3 trees for every member who joins us, contributing to a greener Bengal.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Employment</h3>
              <p className="text-gray-600">Creating job opportunities for local youth and supporting their professional growth.</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <Heart className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600">Supporting local communities through various social and economic initiatives.</p>
            </div>
          </div>
        </div>
      </section>

 
    </>
  );
}
