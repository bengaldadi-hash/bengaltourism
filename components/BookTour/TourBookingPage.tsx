"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Users, MapPin, Phone, Mail, CreditCard, Percent, User, Home, Clock, IndianRupee, X, QrCode, MessageCircle } from "lucide-react";
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
        <p><b>Email:</b> booking.bengaltourism@gmail.com</p>
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
        <p><b>Email:</b> booking.bengaltourism@gmail.com</p>
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
        <p><b>Email:</b> booking.bengaltourism@gmail.com</p>
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
        <p><b>Email:</b> booking.bengaltourism@gmail.com</p>
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
export default function TourBookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    address: "",
    pinCode: "",
    destination: "",
    adults: "",
    children: "",
    specialInfo: "",
    promoCode: "",
    membershipNo: "",
    checkIn: "",
    checkOut: "",
    pickupPlace: "",
    dropPlace: "",
    costPerAdult: "",
    costPerChildren: "",
      below5Children: "",
    totalNights: "",
    estimatedCost: "",
    calculatedTotal: "0",
    bookingAmount: "",
    paymentType: "partial",
    currency: "INR"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [selectedPaymentType, setSelectedPaymentType] = useState<string>("");

  // Auto calculate nights when dates change
  useEffect(() => {
    if (formData.checkIn && formData.checkOut) {
      calculateNights();
    }
  }, [formData.checkIn, formData.checkOut]);

  // Auto calculate totals when adults, children, estimatedCost, paymentType, or currency change
  useEffect(() => {
    calculateTotals();
  }, [formData.adults, formData.children, formData.estimatedCost, formData.paymentType, formData.currency]);

  // Convert estimatedCost when currency changes
  useEffect(() => {
    if (formData.estimatedCost && formData.estimatedCost !== "") {
      const currentValue = parseFloat(formData.estimatedCost);
      if (!isNaN(currentValue)) {
        // Convert from current currency to new currency
        const convertedValue = formData.currency === "USD" ? currentValue / 100 : currentValue * 100;
        setFormData(prev => ({
          ...prev,
          estimatedCost: convertedValue.toString()
        }));
      }
    }
  }, [formData.currency]);

  // Helper function to format date to DD-MM-YYYY
  const formatDateToDDMMYYYY = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Helper function to parse DD-MM-YYYY to YYYY-MM-DD for date input
  const parseDDMMYYYYToISO = (dateString: string) => {
    if (!dateString) return '';
    // If already in ISO format, return as is
    if (dateString.includes('-') && dateString.split('-')[0].length === 4) {
      return dateString;
    }
    // Parse DD-MM-YYYY format
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    return dateString;
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
    if (fromCurrency === toCurrency) return amount;
    
    // Convert to INR first if needed
    let inrAmount = amount;
    if (fromCurrency === "USD") {
      inrAmount = amount * 100; // 1 USD = 100 INR
    }
    
    // Convert from INR to target currency
    if (toCurrency === "USD") {
      return inrAmount / 100;
    }
    
    return inrAmount; // Default to INR
  };

  const formatCurrency = (amount: number, currency: string): string => {
    if (currency === "USD") {
      return `$${amount.toFixed(2)}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const calculateTotals = () => {
    // Get the raw value and convert to INR first
    const rawValue = formData.estimatedCost;
    let totalCostPerNight = rawValue && rawValue !== "" ? Number(rawValue) : 0;
    
    // Convert to INR if current currency is USD
    if (formData.currency === "USD") {
      totalCostPerNight = totalCostPerNight * 100; // Convert USD to INR
    }
    
    
    // Prevent infinity calculations
    if (isNaN(totalCostPerNight) || !isFinite(totalCostPerNight) || totalCostPerNight < 0) {
      return;
    }
    
    const adultCost = totalCostPerNight * (Number(formData.adults) || 0);
    const childrenCost = (totalCostPerNight / 2) * (Number(formData.children) || 0); // Half of total cost per night for each child
    const total = adultCost + childrenCost;
    const bookingAmount = formData.paymentType === "full" ? total : total * 0.5;


    // Convert to selected currency
    const convertedAdultCost = convertCurrency(adultCost, "INR", formData.currency);
    const convertedChildrenCost = convertCurrency(childrenCost, "INR", formData.currency);
    const convertedTotal = convertCurrency(total, "INR", formData.currency);
    const convertedBookingAmount = convertCurrency(bookingAmount, "INR", formData.currency);

    setFormData(prev => ({
      ...prev,
      costPerAdult: convertedAdultCost.toString(),
      costPerChildren: convertedChildrenCost.toString(),
      // Set calculatedTotal as the sum of adult and children costs
      calculatedTotal: convertedTotal.toString(),
      bookingAmount: convertedBookingAmount.toString()
    }));
  };

  const calculatePerPersonRate = (nights: number): number => {
    const totalCost = Number(formData.estimatedCost) || 0;
    if (nights <= 0) return 0;
    return totalCost / nights;
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      // Convert DD-MM-YYYY to Date objects
      const checkInDate = new Date(parseDDMMYYYYToISO(formData.checkIn));
      const checkOutDate = new Date(parseDDMMYYYYToISO(formData.checkOut));

    

      if (!isNaN(checkInDate.getTime()) && !isNaN(checkOutDate.getTime())) {
        // Calculate difference in days (check-out date - check-in date)
        const diffTime = checkOutDate.getTime() - checkInDate.getTime();
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));


        // Ensure positive number of nights
        if (diffDays >= 0) {
          setFormData(prev => ({ ...prev, totalNights: diffDays.toString() }));
          // Calculate totals after updating nights
          setTimeout(calculateTotals, 100);
        } else {
          // If check-out is before check-in, reset nights
          setFormData(prev => ({ ...prev, totalNights: "" }));
        }
      }
    }
  };

  const handlePaymentClick = (paymentIndex: number, paymentTitle: string) => {
    setSelectedPayment(paymentIndex);
    setSelectedPaymentType(paymentTitle);
    
    // Calculate fresh amount based on current form data and payment type
    const rawValue = formData.estimatedCost;
    let totalCostPerNight = rawValue && rawValue !== "" ? Number(rawValue) : 0;
    
    // Convert to INR if current currency is USD
    if (formData.currency === "USD") {
      totalCostPerNight = totalCostPerNight * 100;
    }
    
    const adultCost = totalCostPerNight * (Number(formData.adults) || 0);
    const childrenCost = (totalCostPerNight / 2) * (Number(formData.children) || 0);
    const total = adultCost + childrenCost;
    
    // Calculate booking amount based on payment type
    const bookingAmount = formData.paymentType === "full" ? total : total * 0.5;
    
    // Convert to selected currency
    const convertedBookingAmount = convertCurrency(bookingAmount, "INR", formData.currency);
    
    const bookingType = formData.paymentType || 'partial';
    

    
    const qrUrl = `/qr-payment?type=${encodeURIComponent(paymentTitle)}&amount=${encodeURIComponent(convertedBookingAmount.toString())}&bookingType=${encodeURIComponent(bookingType)}&source=tour&currency=${encodeURIComponent(formData.currency)}`;
    window.open(qrUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Ensure all required data is properly formatted
      const submissionData = {
        ...formData,
        // Ensure destination is properly formatted (trim whitespace)
        destination: formData.destination.trim(),
        // Format dates consistently
        checkIn: formData.checkIn.trim(),
        checkOut: formData.checkOut.trim(),
      };

      const response = await fetch('/api/tour-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('Tour booking request submitted successfully! You will receive a confirmation email shortly.');
        // Reset form or redirect as needed
        // For now, just show success message
      } else {
        alert(data.error || 'Failed to submit booking request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to submit booking request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* ================= MODERN HERO SECTION ================= */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Travel Booking"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-yellow-900/40"></div>
        </div>

        {/* Floating Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-75"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-150"></div>
        </div>



        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}


            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Book Your
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Dream Journey
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

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience the magic of Bengal with our seamless booking process.
              Your perfect adventure starts here.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Secure Booking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">1300+</div>
                <div className="text-white/80 text-sm">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5★</div>
                <div className="text-white/80 text-sm">Rated Service</div>
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

      {/* ================= BOOKING FORM SECTION ================= */}
      <section id="booking-form" className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail ID <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile No. (With country code) <span className="text-yellow-500">*</span>
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={formData.countryCode}
                        onChange={(e) => handleInputChange("countryCode", e.target.value)}
                        className="flex px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                        placeholder="+91"
                      />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                        placeholder="Enter 10 digit mobile number"
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address with Pin/Zip Code <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter your complete address"
                      required
                    />
                    <input
                      type="text"
                      value={formData.pinCode}
                      onChange={(e) => handleInputChange("pinCode", e.target.value)}
                      className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter PIN/Zip Code"
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Tour Details Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin className="text-yellow-600" />
                  Tour Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tour Destination (Name of Place) <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => handleInputChange("destination", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter your destination"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Start of Journey Date <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={parseDDMMYYYYToISO(formData.checkIn)}
                      onChange={(e) => {
                        const formattedDate = formatDateToDDMMYYYY(e.target.value);
                        handleInputChange("checkIn", formattedDate);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      required
                    />
                    {formData.checkIn && (
                      <p className="text-xs text-gray-500 mt-1">
                        Selected: {formatDateToDDMMYYYY(parseDDMMYYYYToISO(formData.checkIn))}
                      </p>
                    )}
                  </div>

              
               
                    <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Place of Pick-up
                    </label>
                    <input
                      type="text"
                      value={formData.pickupPlace}
                      onChange={(e) => handleInputChange("pickupPlace", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter pickup location"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Information / Requirement
                    </label>
                    <textarea
                      value={formData.specialInfo}
                      onChange={(e) => handleInputChange("specialInfo", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      rows={1}
                      placeholder="Extra cost for non-sharing car, premium room, food habits, etc."
                    />
                  </div>
                  
                  
                     <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      End of Journey Date <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={parseDDMMYYYYToISO(formData.checkOut)}
                      onChange={(e) => {
                        const formattedDate = formatDateToDDMMYYYY(e.target.value);
                        handleInputChange("checkOut", formattedDate);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      required
                    />
                    {formData.checkOut && (
                      <p className="text-xs text-gray-500 mt-1">
                        Selected: {formatDateToDDMMYYYY(parseDDMMYYYYToISO(formData.checkOut))}
                      </p>
                    )}
                  </div>
                     <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Place of Drop
                    </label>
                    <input
                      type="text"
                      value={formData.dropPlace}
                      onChange={(e) => handleInputChange("dropPlace", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter drop location"
                    />
                  </div>
                    <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                     Cost for number of nights <span className="text-yellow-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select 
                        value={formData.currency}
                        onChange={(e) => handleInputChange("currency", e.target.value)}
                        className="px-4 text-gray-500 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                      >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                      </select>
                      <input
                        type="text"
                        value={formData.estimatedCost}
                        onChange={(e) => {
                          const value = e.target.value;
                          handleInputChange("estimatedCost", value);
                          setTimeout(calculateTotals, 100);
                        }}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                        placeholder="Enter total cost for nights"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Fill in the correct price as shown in Destination & Nights selected. 
                      <br />
                      Enter total cost for {formData.totalNights} night(s)
                    </p>
                  </div>
                
                      <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total No. of Nights <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={formData.totalNights}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600 bg-gray-50"
                      placeholder="Auto-calculated from dates"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Auto-calculated from check-in and check-out dates
                    </p>
                  </div>
                   <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Unit / Membership No. (For Members only)
                    </label>
                    <input
                      type="text"
                      value={formData.membershipNo}
                      onChange={(e) => handleInputChange("membershipNo", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter membership number"
                    />
                  </div>
                      <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      No. of Adult PAX <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={formData.adults}
                      onChange={(e) => handleInputChange("adults", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      min="1"
                      required
                    />
                  </div>
   <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      No. of Children (5-8 yrs) 50%
                    </label>
                    <input
                      type="number"
                      value={formData.children}
                      onChange={(e) => handleInputChange("children", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      min="0"
                    />
                  </div>
                  <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                  No. of Children (Below 5 Years) Free
                  </label>
                  <input
                    type="number"
                     value={formData.below5Children}
                    onChange={(e) => handleInputChange("below5Children", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                    min="0"
                  />
                </div>
                
               
                   
                
                 
                </div>
              </div>

              {/* Travel Dates Section */}
              <div>
        
                  
               
              </div>

              {/* Pricing Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <IndianRupee className="text-yellow-600" />
                  Pricing Details
                </h2>
  
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Cost for Adults  <span className="text-yellow-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select 
                        value={formData.currency}
                        onChange={(e) => handleInputChange("currency", e.target.value)}
                        className="px-4 text-gray-500 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                      >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                      </select>
                      <input
                        type="number"
                        value={formData.costPerAdult}
                        readOnly
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                        placeholder="Auto-calculated based on adults and nights"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Total cost for all adults ({formData.adults} adults)
                    </p>
                  </div>
                  <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Cost for Children  <span className="text-yellow-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select 
                        value={formData.currency}
                        onChange={(e) => handleInputChange("currency", e.target.value)}
                        className="px-4 text-gray-500 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                      >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                      </select>
                      <input
                        type="number"
                        value={formData.costPerChildren}
                        readOnly
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                        placeholder="50% of adult rate per child"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Total cost for all children ({formData.children} children at 50% rate)
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Estimated Cost <span className="text-yellow-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select 
                        value={formData.currency}
                        onChange={(e) => handleInputChange("currency", e.target.value)}
                        className="px-4 py-3 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                      >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                      </select>
                      <input
                        type="number"
                        value={formData.calculatedTotal}
                        readOnly
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                        placeholder="Auto-calculated"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Booking Confirmation (50% of Estimated Cost) <span className="text-yellow-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select 
                        value={formData.currency}
                        onChange={(e) => handleInputChange("currency", e.target.value)}
                        className="px-4 text-gray-500 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                      >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                      </select>
                      <input
                        type="number"
                        value={formData.bookingAmount}
                        readOnly
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                        placeholder="Auto-calculated"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Promotional Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Percent className="text-yellow-600" />
                  Promotional Offers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Promotional Code No. (Discount / Offer)
                    </label>
                    <input
                      type="text"
                      value={formData.promoCode}
                      onChange={(e) => handleInputChange("promoCode", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      placeholder="Enter promo code if any"
                    />
                  </div>
                
                </div>
              </div>

              {/* Payment Type */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard className="text-yellow-600" />
                  Payment Type <span className="text-yellow-500">*</span>
                </h2>
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="full"
                      checked={formData.paymentType === "full"}
                      onChange={(e) => {
                        handleInputChange("paymentType", e.target.value);
                        setTimeout(calculateTotals, 100);
                      }}
                      className="w-4 h-4 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="font-medium text-gray-700">Full Payment</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="partial"
                      checked={formData.paymentType === "partial"}
                      onChange={(e) => {
                        handleInputChange("paymentType", e.target.value);
                        setTimeout(calculateTotals, 100);
                      }}
                      className="w-4 h-4 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="font-medium text-gray-700">50% Payment</span>
                  </label>

                </div>
              </div>

              {/* Terms and Submit */}
              <div className="bg-gray-50 rounded-lg p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-yellow-600 focus:ring-yellow-500 rounded"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    I accept: Submission without successful payment is not valid. Please remember to save the acknowledgement after you hit Submit Button (&/or) payment confirmation from Bank. In case of manual submission of Booking Form via e-mail, we will send the confirmation of receipt & booking details via E-mail / WhatsApp after we acknowledge receipt of valid payment at our Bank. I also agree to accept any similar hotel rooms provided by you and be liable to pay for any extra cost as per your special instructions, extra provision required, extra person/bed (1 child under 4 yrs free & other person above 4 Yrs chargeable) to be provided (&) Service Charges/GST will be calculated & paid later on acceptance & as per final invoice/bill.
                  </span>
                </label>
              </div>

              {/* Top Note */}
              <div className="bg-yellow-700 text-white text-center py-2 text-sm font-semibold">
                Proceed to PAY using any mode given below. Earn Cash-Back upto Rs.10000/-
              </div>

              {/* Grid */}
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

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    'Pay Now'
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
