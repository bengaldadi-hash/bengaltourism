"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, IndianRupee, Briefcase, Users, Building, GraduationCap, Award, TrendingUp, Heart, Mail, Phone, Send } from "lucide-react";

const jobCategories = [
  { id: "all", name: "All Opportunities", icon: "💼" },
  { id: "tours", name: "Tours & Travels", icon: "✈️" },
  { id: "networking", name: "Networking", icon: "🌐" },
  { id: "marketing", name: "Marketing & Sales", icon: "📢" },
  { id: "telecalling", name: "Tele-Calling", icon: "☎️" },
  { id: "backoffice", name: "Back-Office", icon: "🏢" },
  { id: "entrepreneur", name: "Entrepreneur", icon: "�" }
];

const jobOpenings = [
  {
    id: 1,
    title: "Tour Manager & Organizer",
    department: "tours",
    location: "Work from Home/Office",
    type: "Full-time/Part-time",
    experience: "No bar",
    salary: "Great Earnings Potential",
    featured: true,
    description: "Organize and manage tours for Bengal Tourism destinations",
    requirements: ["Passion for tourism", "Good communication skills", "Leadership qualities"]
  },
  {
    id: 2,
    title: "Networking Professional",
    department: "networking",
    location: "Work from Home",
    type: "Part-time & Full-time",
    experience: "No experience required",
    salary: "Performance-based Earnings",
    featured: true,
    description: "Build network and promote Bengal Tourism services",
    requirements: ["Networking skills", "Self-motivated", "People person"]
  },
  {
    id: 3,
    title: "Marketing & Sales Executive",
    department: "marketing",
    location: "Flexible",
    type: "Full-time",
    experience: "Age & Qualification no bar",
    salary: "Commission-based",
    featured: true,
    description: "Marketing and sales of tourism packages and services",
    requirements: ["Sales skills", "Marketing knowledge", "Target driven"]
  },
  {
    id: 4,
    title: "Tele-Caller (Ladies)",
    department: "telecalling",
    location: "Work from Home",
    type: "Part-time",
    experience: "No experience required",
    salary: "Fixed + Incentives",
    featured: false,
    description: "Handle customer calls and provide tour information",
    requirements: ["Good communication", "Pleasant voice", "Basic computer skills"]
  },
  {
    id: 5,
    title: "Merchandiser & Back-Office (Ladies)",
    department: "backoffice",
    location: "Home/Office",
    type: "Flexible",
    experience: "No bar",
    salary: "Performance-based",
    featured: false,
    description: "Handle merchandise and back-office operations",
    requirements: ["Organizational skills", "Computer knowledge", "Attention to detail"]
  },
  {
    id: 6,
    title: "Hostess & Customer Relations",
    department: "backoffice",
    location: "Various Locations",
    type: "Part-time",
    experience: "No bar",
    salary: "Fixed + Tips",
    featured: false,
    description: "Customer service and hostess responsibilities",
    requirements: ["Good personality", "Communication skills", "Customer service orientation"]
  }
];

const benefits = [
  { icon: TrendingUp, title: "Sustainable Income", description: "Great earnings potential with flexible work options" },
  { icon: Users, title: "No Experience Required", description: "Join us regardless of age or qualification" },
  { icon: Heart, title: "Work from Home", description: "Flexible work from home or office options" },
  { icon: Award, title: "Zero Investment", description: "Start your business with no investment required" },
  { icon: Clock, title: "Part-time & Full-time", description: "Choose your working hours and schedule" },
  { icon: GraduationCap, title: "Training & Support", description: "Complete training and ongoing support provided" }
];

export default function CareerPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });

  const filteredJobs = selectedCategory === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedCategory);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
   

      {/* ================= WHY JOIN US ================= */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Why Join Bengal Tourism?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a team that's showcasing the beauty of Bengal to the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOB OPENINGS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect role in our growing team
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {jobCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map(job => (
              <div key={job.id} className={`bg-white rounded-2xl border-2 p-8 hover:shadow-2xl transition-all duration-300 ${
                job.featured ? "border-yellow-500 shadow-xl" : "border-gray-200"
              }`}>
                {job.featured && (
                  <div className="inline-block mb-4">
                    <span className="bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Featured Position
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-black text-gray-900 mb-3">{job.title}</h3>
                <p className="text-gray-600 mb-6">{job.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-600" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Briefcase className="w-4 h-4 mr-2 text-yellow-600" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-yellow-600" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <IndianRupee className="w-4 h-4 mr-2 text-yellow-600" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* ================= ENTREPRENEUR OPPORTUNITIES ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Entrepreneur Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join as budding Entrepreneurs or Self-Employed with zero investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Area Agency</h3>
              <p className="text-gray-600 mb-4">Become our Area Partner and manage tour bookings in your region</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Zero investment</li>
                <li>• Small office/home setup</li>
                <li>• Internet connection required</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Franchisee</h3>
              <p className="text-gray-600 mb-4">Complete franchise support with training and brand backing</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Only Rs. 6000/- investment</li>
                <li>• Complete training provided</li>
                <li>• Up to 2.5 Lakh earning potential</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Team Leader</h3>
              <p className="text-gray-600 mb-4">Lead and manage your own team of tourism professionals</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Build your network</li>
                <li>• Leadership role</li>
                <li>• Unlimited earning potential</li>
              </ul>
            </div>
          </div>

          {/* Financial Partners Section */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-black mb-6">Financial Partners & Stake Holders</h3>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Partner with us in various tourism ventures and be part of Bengal's growing tourism industry
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-2">Tour Operation</h4>
                <p className="text-sm opacity-90">Invest in tour packages and operations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-2">Medical Tourism</h4>
                <p className="text-sm opacity-90">Healthcare tourism partnerships</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-2">Water Sports</h4>
                <p className="text-sm opacity-90">Adventure sports activities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold mb-2">Transport Services</h4>
                <p className="text-sm opacity-90">Car, bus & helicopter rentals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CSR INITIATIVES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Our CSR Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Corporate Social Responsibility programs for sustainable tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌳</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Tree Plantation</h3>
              <p className="text-gray-600">Plant 3 Trees for each member who joins us to support environmental conservation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚫</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">No Plastic Zone</h3>
              <p className="text-gray-600">Ban plastic carry bags and promote digital communication to save forests</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Local Commitment</h3>
              <p className="text-gray-600">Support local economy by generating income for unemployed youths</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Local Employment</h3>
              <p className="text-gray-600">Hire local unemployed youths and support their professional development</p>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}
