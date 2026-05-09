"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Stethoscope, 
  Award, 
  HeartPulse, 
  Brain, 
  Bone, 
  Building, 
  User, 
  Ship, 
  MapPin, 
  Star, 
  X,
  IndianRupee,
  Calendar,
  Users,
  Shield,
  Phone,
  Globe,
  Mail,
  CheckCircle,
  AlertCircle,
  Activity,
  Eye,
  Leaf,
  TreePine,
  Coffee,
  Heart,
  Sprout,
  PartyPopper,
  Flame,
  Tent,
  Bird,
  Fish,
  Waves,
  Mountain,
  Book,
  ShoppingBag,
  Train,
  Sparkles,
  Trees,
  Utensils,
  Compass,
  Camera,
  Clock,
  Sun,
  Home,
  Baby
} from "lucide-react";
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function MedicalTourismPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<any>(null);

  const handleHospitalClick = (hospital: any) => {
    setSelectedHospital(hospital);
    setShowModal(true);
  };

const hospitals = [
  {
    id: 1,
    name: "Top Cardiac Hospital",
    hospitalName: "R N Tagore Hospital",
    location: "KOLKATA",
    description:
      "Advanced cardiac care with expert heart specialists, bypass surgery, angioplasty, emergency cardiac services, and modern heart treatment facilities.",
    image: "",
    rating: 4.9,
    reviews: 1450,
    price: "Premium Cardiac Care",
    category: "Cardiac Care",
    color: "from-red-500 to-pink-500",
    icon: HeartPulse,
  },
  {
    id: 2,
    name: "Top Orthopedic Hospital",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Specialized orthopedic treatments including joint replacement, spine surgery, sports injury care, and advanced bone care solutions.",
    image: "",
    rating: 4.8,
    reviews: 980,
    price: "Advanced Orthopedic Care",
    category: "Orthopedic Care",
    color: "from-blue-500 to-cyan-500",
    icon: Bone,
  },
  {
    id: 3,
    name: "Ayurvedic Wellness Center",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Traditional Ayurvedic healing therapies, detox treatments, wellness programs, yoga, meditation, and holistic healthcare services.",
    image: "",
    rating: 4.7,
    reviews: 870,
    price: "Holistic Wellness Packages",
    category: "Ayurvedic Wellness",
    color: "from-green-500 to-emerald-500",
    icon: Leaf,
  },

  {
    id: 4,
    name: "Top Cancer Hospital",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Comprehensive oncology care with chemotherapy, radiation therapy, cancer surgery, and world-class cancer treatment specialists.",
    image: "",
    rating: 4.9,
    reviews: 1650,
    price: "Comprehensive Cancer Care",
    category: "Oncology",
    color: "from-yellow-500 to-orange-500",
    icon: Shield,
  },

  {
    id: 5,
    name: "Top Neuro Science Hospital",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Advanced neurological treatments for brain, spine, stroke, epilepsy, and neurosurgery using cutting-edge medical technology.",
    image: "",
    rating: 4.8,
    reviews: 1200,
    price: "Expert Neuro Care",
    category: "Neuro Science",
    color: "from-purple-500 to-indigo-500",
    icon: Brain,
  },

  {
    id: 6,
    name: "Top Fertility Clinic",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Complete fertility treatments including IVF, IUI, reproductive care, pregnancy support, and family planning solutions.",
    image: "",
    rating: 4.7,
    reviews: 760,
    price: "Fertility & IVF Care",
    category: "Fertility Clinic",
    color: "from-pink-500 to-rose-500",
    icon: Baby,
  },

  {
    id: 7,
    name: "Top Eye Hospital",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Specialized eye treatments including cataract surgery, LASIK, retina care, glaucoma treatment, and pediatric ophthalmology.",
    image: "",
    rating: 4.8,
    reviews: 910,
    price: "Advanced Eye Care",
    category: "Eye Hospital",
    color: "from-sky-500 to-blue-500",
    icon: Eye,
  },

  {
    id: 8,
    name: "Top Liver | Gastronomy Hospital",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Expert liver care, gastroenterology treatments, digestive disease management, endoscopy, and advanced GI procedures.",
    image: "",
    rating: 4.7,
    reviews: 830,
    price: "Liver & Gastro Care",
    category: "Gastronomy",
    color: "from-orange-500 to-amber-500",
    icon: Stethoscope,
  },

  {
    id: 9,
    name: "Top Skin | Dermatology Clinic",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Professional skin, hair, laser, cosmetic dermatology, acne treatment, anti-aging, and aesthetic care services.",
    image: "",
    rating: 4.6,
    reviews: 690,
    price: "Premium Skin Care",
    category: "Dermatology",
    color: "from-fuchsia-500 to-pink-500",
    icon: Sparkles,
  },

  {
    id: 10,
    name: "Top Child | Neo Natal Hospital",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Comprehensive pediatric and neonatal healthcare with ICU support, child specialists, vaccination, and emergency care.",
    image: "",
    rating: 4.9,
    reviews: 1120,
    price: "Child & Neonatal Care",
    category: "Child Care",
    color: "from-cyan-500 to-teal-500",
    icon: Baby,
  },

  {
    id: 11,
    name: "Top Multi-speciality Hospital",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Complete multi-specialty healthcare services with modern infrastructure, emergency care, diagnostics, and expert doctors.",
    image: "",
    rating: 4.8,
    reviews: 2100,
    price: "Multi-specialty Healthcare",
    category: "Multi-speciality",
    color: "from-indigo-500 to-blue-500",
    icon: Building,
  },

  {
    id: 12,
    name: "Top Nephrology Hospital",
    hospitalName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Advanced kidney care, dialysis, nephrology treatments, kidney transplant support, and renal disease management.",
    image: "",
    rating: 4.7,
    reviews: 870,
    price: "Kidney & Renal Care",
    category: "Nephrology",
    color: "from-emerald-500 to-green-500",
    icon: Activity,
  },
];

  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1745420052490-285dbfa1cf4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D"
            alt="Modern hospital facility with medical professionals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Stethoscope className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">MEDICAL TOURISM</span>
            </div>

            <h1 className="text-5xl md:text-7xl text-center font-bold mb-6 leading-tight">
              Get Well Soon in Bengal
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                World-Class Healthcare • Expert Doctors • Affordable Treatment
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience world-class medical treatment with expert practitioners
              and international standard facilities in West Bengal
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Find Hospitals
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Quality Healthcare</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEDICAL TOURISM OVERVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Medical Tourism in Bengal?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast emerging as a Medical Tourism hotspot with world-class facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cost Advantage */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reduced Cost</h3>
              <p className="text-gray-700">
                Treatment costs start at around a tenth of the price of comparable treatment in America or Britain
              </p>
            </div>

            {/* International Standards */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">International Standards</h3>
              <p className="text-gray-700">
                Latest international standard medical technologies and treatment facilities
              </p>
            </div>

            {/* Expert Doctors */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Practitioners</h3>
              <p className="text-gray-700">
                Highly experienced medical practitioners with great credibility in their respective fields
              </p>
            </div>

            {/* Linguistic Advantage */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Linguistic Advantage</h3>
              <p className="text-gray-700">
                Unparalleled linguistic advantage making patients from European, Balkan and African countries comfortable
              </p>
            </div>

            {/* Hospitality */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Famed Hospitality</h3>
              <p className="text-gray-700">
                World-renowned Bengali hospitality combined with moderate budget options
              </p>
            </div>

            {/* Recuperation */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Natural Recuperation</h3>
              <p className="text-gray-700">
                Option to recuperate at acclaimed natural health resorts unique to Bengal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPULAR TREATMENTS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most sought-after medical treatments by international patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Alternative Medicine */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Alternative Medicine</h3>
              <p className="text-sm text-gray-600">Traditional & holistic healing approaches</p>
            </div>

            {/* Bone Marrow Transplant */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Bone className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold mb-2">Bone Marrow Transplant</h3>
              <p className="text-sm text-gray-600">Advanced transplant procedures</p>
            </div>

            {/* Cardiac Surgery */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <HeartPulse className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold mb-2">Cardiac Surgery</h3>
              <p className="text-sm text-gray-600">Coronary Heart Bypass & cardiac care</p>
            </div>

            {/* Oncology */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Oncology</h3>
              <p className="text-sm text-gray-600">Comprehensive cancer treatment</p>
            </div>

            {/* Eye Surgery */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Eye Surgery</h3>
              <p className="text-sm text-gray-600">Advanced ophthalmic procedures</p>
            </div>

            {/* Nephrology */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <HeartPulse className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-bold mb-2">Nephrology</h3>
              <p className="text-sm text-gray-600">Kidney care & dialysis services</p>
            </div>

            {/* Joint Replacement */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Bone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Joint Replacement</h3>
              <p className="text-sm text-gray-600">Hip & Joint Replacement & Resurfacing</p>
            </div>

            {/* Neurology */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold mb-2">Neurology</h3>
              <p className="text-sm text-gray-600">Advanced neurological treatments</p>
            </div>

            {/* Cosmetic Surgery */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold mb-2">Cosmetic Surgery</h3>
              <p className="text-sm text-gray-600">Aesthetic enhancement procedures</p>
            </div>

            {/* Dental */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Dental Care</h3>
              <p className="text-sm text-gray-600">Oral & Facial Restructuring clinics</p>
            </div>
          </div>
        </div>
      </section>
   
      {/* ================= TOP HOSPITALS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Top Hospitals in Kolkata</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class medical facilities with international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital, index) => (
              <div key={hospital.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Image */}
                   <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{hospital.name}</h3>
                  </div>
                <div className="relative h-56 flex items-center justify-center bg-gray-50">
                  {hospital.image ? (
                    <Image
                      src={hospital.image}
                      alt={hospital.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 p-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-sm font-bold text-yellow-800 mb-1">Advertise Your Hospital Here</h4>
                        <p className="text-xs text-yellow-600">Showcase your medical facility to thousands</p>
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  {hospital.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  )}

                  {/* Location */}
                  <div className="absolute bottom-3 left-3">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 mr-1 text-yellow-600" />
                      <span className="text-xs font-semibold text-gray-800">
                        {hospital.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <hospital.icon className={`w-4 h-4 text-white`} />
                    <span className="text-xs font-medium text-gray-600">{hospital.category}</span>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{hospital.hospitalName}</h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{hospital.rating}</span>
                    <span className="text-xs text-gray-500">({hospital.reviews} reviews)</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {hospital.description}
                  </p>

            

                  {/* Button */}
                  <button
                    onClick={() => handleHospitalClick(hospital)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPECIALIZED SERVICES ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Specialized Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert care across various medical specialties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Nephrology */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <HeartPulse className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">BEST NEPHROLOGY HOSPITAL</h3>
              <p className="text-gray-700 mb-3">NH Rabindranath Tagore Hospital</p>
              <p className="text-sm text-gray-600">Kolkata</p>
            </div>

            {/* Dental Clinic */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <User className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">BEST DENTAL CLINIC</h3>
              <p className="text-gray-700 mb-3">Advertise Your Brand Here</p>
              <p className="text-sm text-gray-600">Kolkata</p>
            </div>

            {/* Air Ambulance */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <Ship className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">TOP AIR AMBULANCE SERVICE</h3>
              <p className="text-gray-700 mb-3">BENGAL AIR AMBULANCE [24x7]</p>
              <p className="text-sm text-gray-600">Kolkata-North East-Odisha</p>
            </div>

            {/* Free Heart Treatment */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
              <HeartPulse className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">FREE HEART TREATMENT</h3>
              <p className="text-gray-700 mb-3">Sathya Sai Institute</p>
              <p className="text-sm text-gray-600">Higher Medical Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS & ASSISTANCE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Medical Tourism Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Find Optimal Doctor-Hospital Combination</h3>
                    <p className="text-gray-600">Get assistance from facilitators like Bengal Tourism & Surgery Assistance India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Receive Treatment</h3>
                    <p className="text-gray-600">Undergo medical treatment with expert practitioners</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Choose Recuperation Option</h3>
                    <p className="text-gray-600">Recover in hospital, nearby accommodation, or natural health resorts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telemedicine Follow-up</h3>
                    <p className="text-gray-600">Continue care through telemedicine services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Medical Tourism Assistance</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Doctor-Hospital matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Treatment coordination</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Accommodation arrangement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Travel assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Language support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Important Disclaimer</h3>
              <p className="text-gray-700 leading-relaxed">
                Bengal Tourism does not endorse the services of the Establishments featured here but limited to general information & advertisement purpose only.
                Services are matter of solicitation by the service provider only.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= LANGUAGE SUPPORT ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Multi-Language Support</h3>
            <p className="text-gray-600">We assist patients in multiple languages for better communication</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Spanish Español', 'French Français', 'German Deutsch', 'Italian Italiano', 'Portuguese Portugues', 'Russian Russian', 'Japanese Japanese', 'Korean Korean', 'Chinese Chinese', 'Swedish', 'Hungarian', 'Arab'].map((lang) => (
              <span key={lang} className="bg-white px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* ================= PRICING INFORMATION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pricing Information</h2>
              <p className="text-lg text-gray-600">
                Treatment costs based on medical requirements and hospital pricing
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Price Factors</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Price will depend upon the illness & medical treatment prescribed by health service provider,
                which can be only said by the said hospital. Medical costs vary significantly based on:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Type of illness</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <HeartPulse className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Treatment complexity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Hospital choice</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Treatment duration</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-amber-800">Important Advisory</h3>
              </div>
              <p className="text-amber-700 leading-relaxed">
                It is advised to consult with your health care provider & the hospital regarding everything to your satisfaction.
                Please discuss all aspects of treatment, costs, and expected outcomes directly with the medical facility.
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <Home className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-green-800">Accommodation Support</h3>
              </div>
              <p className="text-green-700 leading-relaxed">
                We will take care in providing the stay of the patient parties nearby the hospital / nursing home.
                Comfortable accommodation options close to your chosen medical facility will be arranged.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Get Treatment Information</h3>
                <p className="text-gray-700 mb-4">
                  Contact hospitals directly for detailed pricing and treatment information
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                    Find Hospitals
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOSPITAL MODAL ================= */}
      {showModal && selectedHospital && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            {/* Image */}
            <div className="relative h-64 w-full">
              {selectedHospital.image ? (
                <Image
                  src={selectedHospital.image}
                  alt={selectedHospital.name}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-800 mb-2">Advertise Your Hospital Here</h3>
                    <p className="text-yellow-600">Showcase your medical facility to thousands of patients</p>
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
              >
                <X size={20} className="text-black" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              {/* Title */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedHospital.name}
                </h3>

                <p className="text-gray-600 flex items-center mt-1 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-yellow-600" />
                  {selectedHospital.location}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <span className="font-semibold text-gray-800">
                  {selectedHospital.rating}
                </span>

                <span className="text-gray-500 text-sm">
                  ({selectedHospital.reviews} reviews)
                </span>
              </div>

              {/* Category */}
              <div className="flex items-center gap-2 mb-4">
                <selectedHospital.icon className={`w-5 h-5 text-blue-600`} />
                <span className="text-sm font-medium text-gray-700">{selectedHospital.category}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-5">
                {selectedHospital.description}
              </p>

              {/* Price */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <p className="text-green-700 font-bold text-lg">
                  {selectedHospital.price}
                </p>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
                  Contact Hospital
                </button>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactCTA />
    </main>
  )
}
