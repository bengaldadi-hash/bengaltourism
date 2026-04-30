"use client";

import { useState } from "react";
import Image from "next/image";
import { User, MapPin, Phone, Mail, Calendar, CreditCard, Building, IndianRupee, FileText, ArrowRight, Check, X, QrCode, MessageCircle } from "lucide-react";
const payments = [
  {
    title: "BANK TRANSFER / CASH DEPOSIT",
    img: "/payments/sbi.png",
    details: (
      <>
     <p><b>Name:</b> Bengal Tourism. In</p>
  <p><b>Bank:</b> State Bank of India (SBI)</p>
  <p><b>Branch:</b> Kestopur</p>
  <p><b>CA No.:</b> 33530363411</p>
  <p><b>IFS Code:</b> SBIN 0014534</p>
  <p><b>UPI:</b> bengaltourism@upi</p>
      </>
    ),
  },
  {
    title: "PAY THROUGH BHARAT - UPI",
    img: "/payments/bhim.jpg",
    details: (
      <>
    <p><b>UPI:</b>bengaltourism@upi</p>
        <p><b> UPI:</b> 9804333779@okaxis</p>
        <p><b>Phone:</b> 9804333779</p>
        <p><b>Email:</b> members.bengaltourism@gmail.com</p>
      </>
    ),
  },
  {
    title: "PHONEPE WALLET / UPI",
    img: "/payments/phonepe.jpg",
    details: (
      <>
         <p><b>UPI:</b>bengaltourism@ybl</p>
        <p><b>UPI:</b> 9804333779@ybl</p>
        <p><b>Phone:</b> 9804333779</p>
        <p><b>Email:</b> members.bengaltourism@gmail.com</p>
      </>
    ),
  },
  {
    title: "AXIS PAY - UPI",
    img: "/payments/axispay.png",
    details: (
      <>
            <p><b>UPI:</b>bengaltourism@axisbank</p>
        <p><b>UPI:</b> 9804333779@axisbank</p>
        <p><b>Phone:</b> 9804333779</p>
        <p><b>Email:</b> members.bengaltourism@gmail.com</p>
      </>
    ),
  },
  {
    title: "PAYMENT GATEWAY",
    img: "/payments/gpay.png",
    details: (
      <>
    <p><b>UPI:</b>bengaltourism@okaxis</p>
        <p><b>UPI:</b> 9804333779@okaxis</p>
        <p><b>Phone:</b> 9804333779</p>
        <p><b>Email:</b> members.bengaltourism@gmail.com</p>
      </>
    ),
  },
  {
    title: "INTERNATIONAL FUND TRANSFER",
    img: "/payments/paypal.png",
    details: (
      <>
         <p><b>Email:</b> bengaltourism@gmail.com</p>
        <p><b>Mobile:</b> 9804333779</p>
      </>
    ),
  },
];
const membershipTypes = [
  { value: "1500", label: "Membership Fee - ₹1500", description: "Basic membership with all benefits" },
  { value: "6000", label: "Agency Fee - ₹6000", description: "Agency partnership with higher earning potential" }
];

const paymentModes = [
  { value: "bank_transfer", label: "Bank Transfer / Cash Deposit" },
  { value: "upi", label: "UPI Payment" },
  { value: "phonepe", label: "PhonePe Wallet" },
  { value: "gpay", label: "Google Pay" },
  { value: "paytm", label: "Paytm" },
  { value: "cash", label: "Cash Payment" }
];

const titles = ["Mr.", "Mrs.", "Miss"];

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    introducedByMember: "",
    introducedByUnit: "",
    initial: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "", // Changed from mobile to phone
    address: "",
    city: "",
    pinCode: "",
    nomineeName: "",
    bankName: "",
    accountNumber: "",
    branchName: "",
    ifscUpi: "", // Changed from ifscCode to ifscUpi
    regdFee: "",
    paymentMode: "",
    paymentDate: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [selectedPaymentType, setSelectedPaymentType] = useState<string>("");
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        setShowSuccess(true);
      } else {
        alert(data.error || 'Failed to submit membership application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting membership application:', error);
      alert('Failed to submit membership application. Please try again.');
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4">Membership Registration Successful!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for joining Bengal Tourism. Your membership application has been received.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <ul className="text-left text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                You will receive a confirmation email shortly
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Our team will verify your details within 24-48 hours
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Your membership kit will be dispatched after verification
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                You can start booking tours immediately after activation
              </li>
            </ul>
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-xl hover:from-yellow-700 hover:to-orange-700 transition">
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  function handlePaymentClick(i: number, title: string): void {
    setSelectedPayment(i);
    setSelectedPaymentType(title);
    
    // Redirect to QR payment page with payment details
    const paymentAmount = formData.regdFee || '0';
    const bookingType = 'full'; // Membership is always full payment
    
    const qrUrl = `/qr-payment?type=${encodeURIComponent(title)}&amount=${encodeURIComponent(paymentAmount)}&bookingType=${encodeURIComponent(bookingType)}&source=membership`;
    window.open(qrUrl, '_blank');
  }

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Bengal Tourism Membership"
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
              <span className="text-white font-medium text-sm">Join Our Network</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Become a
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Member Today
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
              Join Bengal Tourism network • Start earning • Build your career in tourism
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">1500</div>
                <div className="text-white/80 text-sm">Membership Fee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">6000</div>
                <div className="text-white/80 text-sm">Agency Fee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">2.5L</div>
                <div className="text-white/80 text-sm">Max Earning</div>
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

      {/* ================= MEMBERSHIP FORM ================= */}
      <section id="membership-form" className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-b-xl shadow-lg p-6 md:p-10">

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="text-yellow-600" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Introduced By Member / Unit No.
                    </label>
                    <input
                      type="text"
                      value={formData.introducedByMember}
                      onChange={(e) => handleInputChange("introducedByMember", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      placeholder="Enter member/unit do t"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Initial
                    </label>
                    <select
                      value={formData.initial}
                      onChange={(e) => handleInputChange("initial", e.target.value)}
                      className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                    >
                      <option value="text-gray-500">Select</option>
                      {titles.map(title => (
                        <option key={title} value={title}>{title}</option>
                      ))}
                    </select>
                  </div>
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
                  <div>
                    <label className="block text-gray-500 text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      required
                    />
                  </div>
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
                </div>
                <div>
                  <label className="block text-sm text-gray-500 font-semibold text-gray-700 mt-4 mb-2">
                    Mobile (Write ISD/STD code before number) <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    placeholder="Ex: +91 98765 43210"
                    required
                  />
                </div>
              </div>

              {/* Address & Nominee Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin className="text-yellow-600" />
                  Address & Nominee Details
                </h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address <span className="text-yellow-500">*</span>
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    rows={3}
                    className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    placeholder="Enter your complete address"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      placeholder="Enter city"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pin Code <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.pinCode}
                      onChange={(e) => handleInputChange("pinCode", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      placeholder="Enter pin code"
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mt-4 mb-2">
                    Name of Nominee
                  </label>
                  <input
                    type="text"
                    value={formData.nomineeName}
                    onChange={(e) => handleInputChange("nomineeName", e.target.value)}
                    className="w-full text-gray-500  px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    placeholder="Enter nominee name"
                  />
                </div>
              </div>

              {/* Payment & Bank Details Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard className="text-yellow-600" />
                  Payment & Bank Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Regd. / Unit Fee <span className="text-yellow-500">*</span>
                    </label>
                    <select
                      value={formData.regdFee}
                      onChange={(e) => handleInputChange("regdFee", e.target.value)}
                      className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      required
                    >
                      <option value="" className="text-gray-500">--Select--</option>
                      {membershipTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {formData.regdFee && (
                      <p className="text-sm text-gray-600 mt-2">
                        {membershipTypes.find(t => t.value === formData.regdFee)?.description}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mode of Payment <span className="text-yellow-500">*</span>
                    </label>
                    <select
                      value={formData.paymentMode}
                      onChange={(e) => handleInputChange("paymentMode", e.target.value)}
                      className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      required
                    >
                      <option value="">--Select--</option>
                      {paymentModes.map(mode => (
                        <option key={mode.value} value={mode.value}>
                          {mode.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mt-4 mb-2">
                    Write your bank name (Where you need cash back)
                  </label>
                  <input
                    type="text"
                    value={formData.bankName}
                    onChange={(e) => handleInputChange("bankName", e.target.value)}
                    className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    placeholder="Enter your bank name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mt-4 mb-2">
                    Your bank account no
                  </label>
                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                    className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                    placeholder="Enter account number"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 mt-4">
                      Branch Name/Branch Code
                    </label>
                    <input
                      type="text"
                      value={formData.branchName}
                      onChange={(e) => handleInputChange("branchName", e.target.value)}
                      className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      placeholder="Enter branch name/code"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mt-4 mb-2">
                      {formData.paymentMode === "bank_transfer" ? "IFSC Code" : "UPI Name / Phone No"} <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.ifscUpi}
                      onChange={(e) => handleInputChange("ifscUpi", e.target.value)}
                      className="w-full px-4 py-3 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder-gray-500"
                      placeholder={formData.paymentMode === "bank_transfer" ? "Enter IFSC code" : "Enter UPI name or phone number"}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 mt-4">
                    Payment Date
                  </label>
                  <input
                    type="date"
                    value={formData.paymentDate}
                    onChange={(e) => handleInputChange("paymentDate", e.target.value)}
                    className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-yellow-600 focus:ring-yellow-500 rounded"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed ml-3">
                    I accept: Submission without successful payment is not valid. Please remember to save the acknowledgement after you hit Submit Button (&/or) payment confirmation from Bank. In case of manual submission of Membership Form via e-mail, we will send the confirmation of receipt & membership details via E-mail / WhatsApp after we acknowledge receipt of valid payment at our Bank. I also agree to the terms and conditions of Bengal Tourism membership program.
                  </span>
                </div>

                {/* Top Note */}
                <div className="bg-yellow-700 text-white text-center py-2 text-sm font-semibold">
                  Proceed to PAY using any mode given below. Earn Cash-Back upto Rs.10000/-
                </div>

                {/* Payment Grid */}
                {/* Grid */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border-t">
              {payments.map((item, i) => (
                <div
                  key={i}
                  className={`border-r border-b last:border-r-0 p-4 text-center cursor-pointer relative transition-all ${selectedPayment === i ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                    }`}
                  onClick={() => handlePaymentClick(i, item.title)}
                >
                  {/* Checkbox in top-right corner */}
                  <div className="absolute top-2 right-2">
                    <div
                      className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${selectedPayment === i
                          ? 'bg-blue-600 border-blue-600'
                          : 'border-gray-300 bg-white'
                        }`}
                    >
                      {selectedPayment === i && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center mb-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-20 object-contain"
                    />
                  </div>

                  <h3 className="text-sm font-bold text-pink-700 mb-3">
                    {item.title}
                  </h3>

                  <div className="text-xs text-gray-800 space-y-1">
                    {item.details}
                  </div>
                </div>
              ))}
            </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="px-12 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-xl hover:from-yellow-700 hover:to-orange-700 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ================= MEMBERSHIP BENEFITS ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Membership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our network and enjoy exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <IndianRupee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Great Earnings</h3>
              <p className="text-gray-600">Earn sustainable income through tourism bookings and network building</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Support</h3>
              <p className="text-gray-600">Complete training and ongoing support to help you succeed</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Network Building</h3>
              <p className="text-gray-600">Build your own network and team for unlimited growth potential</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
