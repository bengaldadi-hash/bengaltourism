"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Users, MapPin, Phone, Mail, CreditCard, Percent, User, Home, Clock, IndianRupee, Bed, X, QrCode, MessageCircle, DollarSign } from "lucide-react";

const destinations = [
  { value: "17", label: "BAKKHALI" },
  { value: "28", label: "BOLPUR" },
  { value: "7", label: "DARJEELING" },
  { value: "22", label: "DEOLO - Kalimpong" },
  { value: "14", label: "DIGHA" },

  { value: "21", label: "GADIARA" },
  { value: "4", label: "GANGTOK - Sikkim" },
  { value: "24", label: "GOPALPUR - Odisha" },
  { value: "23", label: "HOME STAY - North Bengal" },
  { value: "26", label: "HOME STAY - Sikkim" },

  { value: "9", label: "JALDAPARA - Dooars" },
  { value: "11", label: "KALIMPONG" },
  { value: "27", label: "KOLAGHAT" },
  { value: "29", label: "KOLKATA / CALCUTTA" },
  { value: "12", label: "KURSEONG" },
  { value: "15", label: "LACHEN & LACHUNG - Sikkim" },
  { value: "8", label: "LATAGURI - Dooars" },
  { value: "13", label: "MANDARMONI" },
  { value: "10", label: "MURTI - Dooars" },
  { value: "6", label: "NEORA VALLEY - Rishyap" },
  { value: "19", label: "PELLING - Sikkim" },
  { value: "3", label: "PURI - Odisha" },
  { value: "20", label: "RAVANGLA - Sikkim" },
  { value: "5", label: "RISHYAP" },
  { value: "25", label: "ROURKELA - Odisha" },
  { value: "18", label: "SANTINIKETAN" },
  { value: "16", label: "SUNDARBAN" },
];

const roomTypes: { [key: string]: Array<{ value: string; label: string; price: number; meal?: string }> } = {
  "17": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "28": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "7": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "22": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "14": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "21": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "4": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "24": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "23": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "26": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],

  "9": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "11": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "27": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "29": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "12": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "13": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "15": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "8": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "6": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "19": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "10": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "3": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "20": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "5": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "16": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "25": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
  "18": [
    { value: "2000", label: "Basic", price: 2000 },
    { value: "2800", label: "Standard", price: 2800 },
    { value: "3700", label: "Deluxe", price: 3700 },
    { value: "4600", label: "Super Deluxe", price: 4600 },
    { value: "5500", label: "Executive", price: 5500 },
    { value: "6400", label: "Royal", price: 6400 },
    { value: "7300", label: "Premium", price: 7300 },
    { value: "8200", label: "Super Premium", price: 8200 },
    { value: "9100", label: "Luxury", price: 9100 },
    { value: "21000", label: "Star Luxury", price: 21000 },
  ],
};

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
        <p><b>Email:</b> hotel.bengaltourism@gmail.com</p>
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
        <p><b>Email:</b> hotel.bengaltourism@gmail.com</p>
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
        <p><b>Email:</b> hotel.bengaltourism@gmail.com</p>
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
        <p><b>Email:</b> hotel.bengaltourism@gmail.com</p>
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

export default function HotelBookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    address: "",
    pinCode: "",
    destination: "",
    roomType: "",
    noOfRooms: 1,
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    below5Children: 0,
    specialInfo: "",
    preferredHotel: "",
    costPerRoom: "",
    totalNights: "",
    estimatedCost: "",
    bookingAmount: "",
    paymentType: "partial",
    promoCode: "",
    membershipNo: "",
    currency: "INR"
  });

  const [availableRooms, setAvailableRooms] = useState<Array<{ value: string; label: string; price: number; meal?: string }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [selectedPaymentType, setSelectedPaymentType] = useState<string>("");


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
    // Convert noOfRooms to integer if it's the field being updated
    if (field === "noOfRooms") {
      value = parseInt(value.toString()) || 1;
    }

    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);

    // Update available rooms when destination changes
    if (field === "destination") {
      const rooms = roomTypes[value as string] || [];
      setAvailableRooms(rooms);
      // Reset room type and cost when destination changes
      setFormData(prev => ({ ...prev, ...newFormData, roomType: "", costPerRoom: "" }));
    }

    // Update cost per room when room type changes
    if (field === "roomType") {
      const selectedRoom = availableRooms.find(room => room.value === value);
      if (selectedRoom) {
        let roomPrice = selectedRoom.price;
        
        // Convert room price to selected currency
        if (formData.currency === "USD") {
          roomPrice = roomPrice / 100; // Convert INR to USD
        }
        
        setFormData(prev => ({ ...prev, ...newFormData, costPerRoom: roomPrice.toString() }));
        // Trigger calculation after state update
        setTimeout(() => calculateTotalsWithNewData(roomPrice.toString(), newFormData.totalNights, newFormData.noOfRooms, newFormData.paymentType), 50);
      }
    }

    // Trigger calculation for relevant fields
    if (field === "noOfRooms" || field === "paymentType" || field === "currency") {
      setTimeout(() => calculateTotalsWithNewData(newFormData.costPerRoom, newFormData.totalNights, newFormData.noOfRooms, newFormData.paymentType), 50);
    }
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

  // Convert estimatedCost and bookingAmount when currency changes
  useEffect(() => {
    if (formData.estimatedCost && formData.estimatedCost !== "") {
      const currentValue = parseFloat(formData.estimatedCost);
      if (!isNaN(currentValue)) {
        // Convert from current currency to new currency
        const convertedValue = formData.currency === "USD" ? currentValue / 100 : currentValue * 100;
        setFormData(prev => ({
          ...prev,
          estimatedCost: convertedValue.toString(),
          bookingAmount: (parseFloat(prev.bookingAmount || "0") * (formData.currency === "USD" ? 0.01 : 100)).toString()
        }));
      }
    }
  }, [formData.currency]);

  // Convert costPerRoom when currency changes
  useEffect(() => {
    if (formData.costPerRoom && formData.costPerRoom !== "") {
      const currentValue = parseFloat(formData.costPerRoom);
      if (!isNaN(currentValue)) {
        // Convert from current currency to new currency
        const convertedValue = formData.currency === "USD" ? currentValue / 100 : currentValue * 100;
        setFormData(prev => ({
          ...prev,
          costPerRoom: convertedValue.toString()
        }));
        // Recalculate totals with converted cost
        setTimeout(() => calculateTotalsWithNewData(convertedValue.toString(), formData.totalNights, formData.noOfRooms, formData.paymentType), 50);
      }
    }
  }, [formData.currency]);

  const calculateTotalsWithNewData = (cost: string, nights: string, rooms: string | number, paymentType: string) => {
    let costPerRoom = parseFloat(cost || "0");
    
    // Convert costPerRoom to INR if it's in USD
    if (formData.currency === "USD") {
      costPerRoom = costPerRoom * 100; // Convert USD to INR for calculation
    }
    
    const totalNights = parseInt(nights || "0");
    const noOfRooms = parseInt(rooms?.toString() || "1");
    const total = costPerRoom * totalNights * noOfRooms;
    const bookingAmount = paymentType === "full" ? total : total * 0.5;

  

    // Convert to selected currency for display
    const convertedTotal = convertCurrency(total, "INR", formData.currency);
    const convertedBookingAmount = convertCurrency(bookingAmount, "INR", formData.currency);


    setFormData(prev => ({
      ...prev,
      estimatedCost: convertedTotal.toString(),
      bookingAmount: convertedBookingAmount.toString(),
    }));
  };

  const calculateNights = (checkIn: string, checkOut: string) => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(parseDDMMYYYYToISO(checkIn));
      const checkOutDate = new Date(parseDDMMYYYYToISO(checkOut));

      if (!isNaN(checkInDate.getTime()) && !isNaN(checkOutDate.getTime())) {
        const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 0) {
          setFormData(prev => {
            const updated = { ...prev, totalNights: diffDays.toString() };
            // Trigger calculation with updated data
            setTimeout(() => calculateTotalsWithNewData(updated.costPerRoom, diffDays.toString(), updated.noOfRooms, updated.paymentType), 50);
            return updated;
          });
        }
      }
    }
  };


  const handlePaymentClick = (paymentIndex: number, paymentTitle: string) => {
    setSelectedPayment(paymentIndex);
    setSelectedPaymentType(paymentTitle);
    
    // Redirect to QR payment page with payment details
    const paymentAmount = formData.bookingAmount || '0';
    const bookingType = formData.paymentType || 'partial';
    
    const qrUrl = `/qr-payment?type=${encodeURIComponent(paymentTitle)}&amount=${encodeURIComponent(paymentAmount)}&bookingType=${encodeURIComponent(bookingType)}&source=hotel&currency=${encodeURIComponent(formData.currency)}`;
    window.open(qrUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Find destination label from the destinations array
      const destinationLabel = destinations.find(d => d.value === formData.destination)?.label || formData.destination;

      // Create submission data with destination label instead of value
      const submissionData = {
        ...formData,
        destination: destinationLabel // Send the label instead of value
      };

      const response = await fetch('/api/hotel-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('Hotel booking request submitted successfully! You will receive a confirmation email shortly.');
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Hotel Booking
            </h1>

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
                      className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-600"
                      placeholder="+91"
                    />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-600"
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

            {/* Hotel Details Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Bed className="text-yellow-600" />
                Hotel Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Destination <span className="text-yellow-500">*</span>
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => handleInputChange("destination", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                    required
                  >
                    <option value="">-- Select --</option>
                    {destinations.map((dest) => (
                      <option key={dest.value} value={dest.value}>
                        {dest.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Check-in Date <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={parseDDMMYYYYToISO(formData.checkIn)}
                    onChange={(e) => {
                      const formattedDate = formatDateToDDMMYYYY(e.target.value);
                      const newFormData = { ...formData, checkIn: formattedDate };
                      setFormData(newFormData);
                      // Auto calculate nights if check-out is already selected
                      if (newFormData.checkOut) {
                        calculateNights(formattedDate, newFormData.checkOut);
                      }
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
                    Preferred Hotel Name / Similar
                  </label>
                  <input
                    type="text"
                    value={formData.preferredHotel}
                    onChange={(e) => handleInputChange("preferredHotel", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                    placeholder="Enter preferred hotel name or similar requirements"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Room Type <span className="text-yellow-500">*</span>
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => {
                      handleInputChange("roomType", e.target.value);
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                    required
                    disabled={!formData.destination}
                  >
                    <option value="">-- Select Room Type --</option>
                    {availableRooms.map((room) => (
                      <option key={room.value} value={room.value}>
                        {room.label} : ₹{room.price}/-{" "}
                        {room.price === 2000
                          ? "(Without Breakfast)"
                          : room.price === 21000
                            ? "(With Breakfast & Dinner)"
                            : "(With Breakfast)"}
                      </option>
                    ))}

                  </select>
                  {formData.costPerRoom && !formData.destination && (
                    <p className="text-xs text-gray-500 mt-1">
                      Room Type: {availableRooms.find(r => r.value === formData.costPerRoom)?.label || 'Selected'} (Auto-set from cost)
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Check-out Date <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={parseDDMMYYYYToISO(formData.checkOut)}
                    onChange={(e) => {
                      const formattedDate = formatDateToDDMMYYYY(e.target.value);
                      const newFormData = { ...formData, checkOut: formattedDate };
                      setFormData(newFormData);
                      // Auto calculate nights whenever check-out changes
                      if (newFormData.checkIn) {
                        calculateNights(newFormData.checkIn, formattedDate);
                      }
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
                    Total Cost <span className="text-yellow-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-500">
                      <option>INR</option>
                    </select>
                    <input
                      type="number"
                      value={formData.estimatedCost}
                      readOnly
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                      placeholder="Auto-calculated"
                    />
                  </div>
                </div>



                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    No. of Rooms <span className="text-yellow-500">*</span>
                  </label>
                  <select
                    value={formData.noOfRooms}
                    onChange={(e) => {
                      handleInputChange("noOfRooms", e.target.value);
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                    required
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Room' : 'Rooms'}
                      </option>
                    ))}
                  </select>
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
                    Special Information / Requirement
                  </label>
                  <textarea
                    value={formData.specialInfo}
                    onChange={(e) => handleInputChange("specialInfo", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                    rows={1}
                    placeholder="Extra requirements, special requests, etc."
                  />
                </div>
              </div>
            </div>

            {/* Travel Dates Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="text-yellow-600" />
                Stay No of person
              </h2>
              <div className="grid grid-cols-1  md:grid-cols-3 gap-6">


                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    No. of Adults <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.adults}
                    onChange={(e) => handleInputChange("adults", parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                    min="2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    No. of Children (5–10 yrs)
                  </label>
                  <input
                    type="number"
                    value={formData.children}
                    onChange={(e) => handleInputChange("children", parseInt(e.target.value) || 0)}
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
                    onChange={(e) => handleInputChange("below5Children", parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-yellow-600">₹</span>
                Pricing Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cost per Room (per night) <span className="text-yellow-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select 
                      value={formData.currency}
                      onChange={(e) => handleInputChange("currency", e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-500"
                    >
                      <option value="INR">INR</option>
                      <option value="USD">USD</option>
                    </select>
                    <select
                      value={formData.costPerRoom}
                      onChange={(e) => {
                        const newCost = e.target.value;
                        const newFormData = { ...formData, costPerRoom: newCost };
                        setFormData(newFormData);

                        // Find the original room that matches this converted price
                        const matchedRoom = availableRooms.find(room => {
                          const convertedPrice = formData.currency === "USD" ? room.price / 100 : room.price;
                          return convertedPrice.toString() === newCost;
                        });
                        
                        if (matchedRoom) {
                          setFormData(prev => ({ ...prev, costPerRoom: newCost, roomType: matchedRoom.value }));
                        }

                        // Calculate totals if we have nights
                        if (formData.totalNights && parseInt(formData.totalNights) > 0) {
                          calculateTotalsWithNewData(newCost, formData.totalNights, formData.noOfRooms, formData.paymentType);
                        } else {
                          alert("Please select check-in and check-out dates first to calculate the total price.");
                        }
                      }}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition text-gray-600"
                      required
                    >
                      <option value="">Select Cost</option>
                      {availableRooms.map((room) => {
                        const convertedPrice = formData.currency === "USD" ? room.price / 100 : room.price;
                        return (
                          <option key={room.value} value={convertedPrice.toString()}>
                            {convertedPrice} - {room.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Estimated Cost <span className="text-yellow-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <span className="px-4 py-3 text-gray-500 border border-gray-300 rounded-lg bg-gray-50">
                      {formData.currency}
                    </span>
                    <input
                      type="number"
                      value={formData.estimatedCost}
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
                    <span className="px-4 py-3 text-gray-500 border border-gray-300 rounded-lg bg-gray-50">
                      {formData.currency}
                    </span>
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

            {/* Payment Type */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CreditCard className="text-blue-600" />
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
                    }}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
                    }}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-medium text-blue-600">50% Payment</span>
                </label>
              </div>
            </div>

            {/* Policy Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Policy & Terms</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Upgrade Options:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Upgrade to AC accommodation where available (₹ 500/Night/head)</li>
                    <li>• AC train/bus tickets as per actual fare</li>
                    <li>• Non sharing exclusive AC vehicle on demand (@ ₹1500 / day for a group of less than 6-7 Persons & during Peak Season is compulsory & will be charged extra.) AC will not work in hilly locations.)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Excluding:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Any rides, Entry permits, Food not mentioned</li>
                    <li>• Porter charges, tips, camera entry fees</li>
                    <li>• Room heater, beverages/soft drinks/liquor</li>
                    <li>• Anything not mentioned in the itinerary</li>
                    <li>• Extra days due to natural calamities or incidents beyond our control (borne by clients)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Including:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Accommodations & transport as mentioned</li>
                    <li>• Meals (bed tea, breakfast & dinner)</li>
                    <li>• Excluding lunch (your cost) but included in group tour of 20+ heads & in Homestays.</li>
                  </ul>
                </div>
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
                  I accept: Submission without successful payment is not valid. Please remember to save of acknowledgement after you hit Submit Button (&/or) payment confirmation from Bank. In case of manual submission of Booking Form via e-mail, we will send the confirmation of receipt & booking details via E-mail / WhatsApp after we acknowledge receipt of valid payment at our Bank. I also agree to accept any similar hotel rooms provided by you and be liable to pay for any extra cost as per your special instructions, extra provision required, extra person/bed (1 child under 4 yrs free & other person above 4 Yrs chargeable) to be provided (&) Service Charges/GST will be calculated & paid later on acceptance & as per final invoice/bill. Accommodation / Rooms  will be provided at Hotel / Resort as per your choice / budget [or] as available at  any of the Hotel Rooms & Guest House by  Bengal Tourism
                </span>
              </label>
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

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
    </main>
  );
} 
