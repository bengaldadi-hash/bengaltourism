"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Lock, TrendingUp, Users2, Award, IndianRupee, ArrowRight } from "lucide-react";

const growthStages = [
  {
    stage: "Registration",
    fee: "Rs.1500/- (or US$ 50/-)",
    requirement: "Join with registration fee",
    benefit: "Become a member",
    color: "bg-blue-500"
  },
  {
    stage: "Stage-1",
    fee: "",
    requirement: "Introduce 3 members",
    benefit: "Team grows to 3 members",
    color: "bg-green-500"
  },
  {
    stage: "Stage-2",
    fee: "",
    requirement: "Team grows to 9 members",
    benefit: "Each stage x 3 Team grows",
    color: "bg-yellow-500"
  },
  {
    stage: "Stage-3",
    fee: "",
    requirement: "Team grows to 27 members",
    benefit: "Each stage x 3 Team grows",
    color: "bg-orange-500"
  },
  {
    stage: "Stage-4",
    fee: "",
    requirement: "Team grows to 81 members",
    benefit: "Each stage x 3 Team grows",
    color: "bg-yellow-500"
  },
  {
    stage: "Stage-5",
    fee: "",
    requirement: "Team grows to 243 members",
    benefit: "Each stage x 3 Team grows",
    color: "bg-purple-500"
  },
  {
    stage: "Stage-6",
    fee: "",
    requirement: "Team grows to 729 members",
    benefit: "Each stage x 3 Team grows",
    color: "bg-indigo-500"
  },
  {
    stage: "Stage-7",
    fee: "",
    requirement: "Team grows to 2187 members",
    benefit: "MgM Stage ends & Member becomes a Franchisee in His/Her location",
    color: "bg-pink-500"
  }
];

export default function DPPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const handleLoginChange = (field: string, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Growth Structure"
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
              <span className="text-white font-medium text-sm">Growth Structure</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Membership
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Growth Plan
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
              Build your team • Grow your earnings • Achieve financial freedom
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">1500</div>
                <div className="text-white/80 text-sm">Registration Fee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">6</div>
                <div className="text-white/80 text-sm">Growth Stages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">363+</div>
                <div className="text-white/80 text-sm">Team Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
                <div className="text-white/80 text-sm">Earning Potential</div>
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

      {/* ================= GROWTH STRUCTURE ================= */}
      <section id="growth-structure" className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-b-xl shadow-lg p-6 md:p-10">
            
            {/* Main Growth Structure */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">GROWTH STRUCTURE</h2>
              <p className="text-lg text-gray-600">Your pathway to financial success with Bengal Tourism</p>
            </div>

            {/* Growth Stages */}
            <div className="space-y-6 mb-16">
              {growthStages.map((stage, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all min-h-[120px]">
                  <div className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                    {index === 0 ? "👤" : index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{stage.stage}</h3>
                    {stage.fee && (
                      <p className="text-lg font-semibold text-yellow-600 mb-1">{stage.fee}</p>
                    )}
                    <p className="text-gray-700 mb-1">{stage.requirement}</p>
                    <p className="text-green-600 font-medium">{stage.benefit}</p>
                  </div>
                  {index < growthStages.length - 1 && (
                    <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Cash Back Information */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">Cash Back Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <IndianRupee className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Instant Cash Back</h4>
                  <p className="text-sm text-gray-600">Get cash back on every successful referral</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Growth Bonus</h4>
                  <p className="text-sm text-gray-600">Earn more as your team grows</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Leadership Rewards</h4>
                  <p className="text-sm text-gray-600">Special bonuses for team leaders</p>
                </div>
              </div>
            </div>

            {/* Team Building Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">Team Building Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Users2 className="w-5 h-5 text-blue-600" />
                    Direct Referrals
                  </h4>
                  <p className="text-gray-700 mb-4">Introduce new members directly and earn immediate cash back on their registration.</p>
                  
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Team Growth
                  </h4>
                  <p className="text-gray-700">Help your team members build their own teams and earn from their success.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Level Achievement
                  </h4>
                  <p className="text-gray-700 mb-4">Reach different stages by building your team to specific targets.</p>
                  
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-blue-600" />
                    Unlimited Potential
                  </h4>
                  <p className="text-gray-700">No limits on earnings - the more you grow, the more you earn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEMBER LOGIN ================= */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Member Login</h2>
              <p className="text-gray-600">Access your account and track your growth</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  User Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={loginData.username}
                    onChange={(e) => handleLoginChange("username", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => handleLoginChange("password", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-yellow-600 hover:text-yellow-700">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold py-3 rounded-lg transition"
              >
                Login
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Not a member?{" "}
                  <a href="/membership" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                    Join Now
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-8">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Join Bengal Tourism today and start building your team for unlimited earning potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/membership" className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-xl hover:from-yellow-700 hover:to-orange-700 transition">
              Register Now
            </a>
            <a href="/career" className="px-8 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
