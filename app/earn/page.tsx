"use client";

import { useState } from "react";
import Image from "next/image";
import { TrendingUp, Users, IndianRupee, Target, Award, Briefcase, ChevronRight, Star } from "lucide-react";
import CareerPage from "@/components/careers/careerspage";

const earningMethods = [
  {
    icon: Users,
    title: "Membership Program",
    description: "Join our membership program and earn through referrals",
    benefits: ["Rs.1500 registration", "Team building", "Cash back rewards", "Leadership bonuses"]
  },
  {
    icon: Briefcase,
    title: "Agency Partnership",
    description: "Become our agency partner and earn commission on bookings",
    benefits: ["Rs.6000 investment", "Higher commission rates", "Marketing support", "Brand recognition"]
  },
  {
    icon: Target,
    title: "Tour Guide",
    description: "Work as a tour guide and showcase Bengal's beauty",
    benefits: ["Flexible schedule", "Tips and earnings", "Meet new people", "Share knowledge"]
  },
  {
    icon: IndianRupee,
    title: "Network Marketing",
    description: "Build your network and earn through our MgM growth plan",
    benefits: ["Unlimited potential", "Team support", "Training provided", "Performance bonuses"]
  }
];

const successStories = [
  {
    name: "Rahul Sharma",
    role: "Tour Guide",
    earnings: "Rs.25,000/month",
    story: "Started as a part-time guide, now earning full-time income showing tourists the beauty of Bengal."
  },
  {
    name: "Priya Patel",
    role: "Agency Partner",
    earnings: "Rs.45,000/month",
    story: "Joined as agency partner, now managing team of 15 guides and earning consistent commissions."
  },
  {
    name: "Amit Kumar",
    role: "MgM Member",
    earnings: "Rs.35,000/month",
    story: "Built a team of 50+ members in 6 months, now earning through our growth structure."
  }
];

export default function EarnPage() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    earningMethod: "",
    paymentMode: "",
    ifscUpi: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('Membership application submitted successfully! You will receive a confirmation email shortly.');
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          earningMethod: "",
          paymentMode: "",
          ifscUpi: "",
        });
        setSelectedMethod("");
      } else {
        alert(data.error || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Earn With Bengal Tourism"
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
              <span className="text-white font-medium text-sm">Earn With Us</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build Your
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Income Stream
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
              Multiple earning opportunities • Flexible work options • Unlimited potential
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">1500</div>
                <div className="text-white/80 text-sm">Min Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">2.5L</div>
                <div className="text-white/80 text-sm">Max Earning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 text-sm">Active Earners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
              </div>
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

      {/* ================= EARNING METHODS ================= */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Choose Your Earning Method</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to earn with Bengal Tourism. Choose what suits you best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {earningMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                  selectedMethod === method.title ? "ring-4 ring-yellow-500" : ""
                }`}
                onClick={() => setSelectedMethod(method.title)}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* ================= SUCCESS STORIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real people, real earnings. See how others are succeeding with Bengal Tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                </div>
                <p className="text-gray-700 text-sm">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Why Earn With Bengal Tourism?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a trusted brand with proven success in the tourism industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Award className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Brand</h3>
              <p className="text-gray-700">15+ years of excellence in tourism with thousands of satisfied customers.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <TrendingUp className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Potential</h3>
              <p className="text-gray-700">Unlimited earning potential with our proven growth structure and support system.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Users className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Support</h3>
              <p className="text-gray-700">Complete training and ongoing support to help you succeed in your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEMBERSHIP FORM ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Start Your Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to join our membership program and start earning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form Side */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Earning Method <span className="text-yellow-500">*</span>
                  </label>
                  <select
                    value={formData.earningMethod}
                    onChange={(e) => handleInputChange("earningMethod", e.target.value)}
                    className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                    required
                  >
                    <option value="" className=" text-gray-500">--Select Method--</option>
                    <option value="membership" className=" text-gray-500">Membership Program</option>
                    <option value="agency" className=" text-gray-500">Agency Partnership</option>
                    <option value="guide" className=" text-gray-500">Tour Guide</option>
                    <option value="network" className=" text-gray-500">Network Marketing</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Payment Mode <span className="text-yellow-500">*</span>
                    </label>
                    <select
                      value={formData.paymentMode}
                      onChange={(e) => handleInputChange("paymentMode", e.target.value)}
                      className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      required
                    >
                      <option value="" className=" text-gray-500"> --Select Payment--</option>
                      <option value="bank_transfer" className=" text-gray-500">Bank Transfer</option>
                      <option value="upi" className=" text-gray-500">UPI Payment</option>
                      <option value="phonepe" className=" text-gray-500">PhonePe</option>
                      <option value="gpay" className=" text-gray-500">Google Pay</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      IFSC Code / UPI Name <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.ifscUpi}
                      onChange={(e) => handleInputChange("ifscUpi", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      placeholder="Enter IFSC code or UPI name"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-yellow-600 focus:ring-yellow-500 rounded"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed ml-3">
                    I agree to the terms and conditions of Bengal Tourism earning program and understand that submission without payment is not valid.
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold py-4 px-8 rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        earningMethod: "",
                        paymentMode: "",
                        ifscUpi: "",
                      });
                      setSelectedMethod("");
                    }}
                    className="flex-1 bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-xl hover:bg-gray-300 transition-all duration-300"
                  >
                    Clear Form
                  </button>
                </div>
              </form>
            </div>

                {/* Left Side - Video and Content */}
            <div className="relative h-64 md:h-auto">
              <video
                src="/earn.mp4"
                controls
                loop
                playsInline
                className="w-full h-full object-contain bg-white"
              />


            </div>

          </div>
        </div>
      </section>
 <CareerPage />
      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Join thousands of people who are already earning with Bengal Tourism
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/membership" className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Join Membership
            </a>
            <a href="mgm" className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transition">
              View MgM Plan
            </a>
            <a href="/career" className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Explore Careers
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
