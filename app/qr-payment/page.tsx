'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, QrCode, MessageCircle, IndianRupee, DollarSign } from 'lucide-react'
import { Suspense } from 'react'

type PaymentDetails = {
  name?: string;
  bank?: string;
  branch?: string;
  accountNo?: string;
  ifscCode?: string;
  upi?: string;
  upi1?: string;
  upi2?: string;
  phone?: string;
  email?: string;
  mobile?: string;
}

type PaymentMethod = {
  type: string;
  qrImage?: string;
  details: PaymentDetails;
}

const paymentMethods: Record<string, PaymentMethod> = {
  'BANK TRANSFER / CASH DEPOSIT': {
    type: 'bank',
    details: {
      name: 'Bengal Tourism. In',
      bank: 'State Bank of India (SBI)',
      branch: 'Kestopur',
      accountNo: '33530363411',
      ifscCode: 'SBIN 0014534',
      upi: 'bengaltourism@upi'
    }
  },
  'PAY THROUGH BHARAT - UPI': {
    type: 'gpay',
    qrImage: '/Qr/gpay.jpeg',
    details: {
    }
  },
  'PHONEPE WALLET / UPI': {
    type: 'phonepe',
    qrImage: '/Qr/phonpau.jpeg',
    details: {
    }
  },
  'AXIS PAY - UPI': {
    type: 'axis',
    qrImage: '/Qr/axix.jpeg',
    details: {
    }
  },
  'PAYMENT GATEWAY': {
    type: 'gpay',
    qrImage: '/Qr/gpay.jpeg',
    details: {
    }
  },
  'INTERNATIONAL FUND TRANSFER': {
    type: 'international',
    details: {
      email: 'bengaltourism@gmail.com',
      mobile: '9804333779'
    }
  }
}

function QRPaymentContent() {
  const searchParams = useSearchParams()
  const paymentType = searchParams.get('type') || ''
  const amount = searchParams.get('amount') || '0'
  const bookingType = searchParams.get('bookingType') || 'partial'
  const source = searchParams.get('source') || ''
  const currency = searchParams.get('currency') || 'INR'

  const paymentMethod = paymentMethods[paymentType as keyof typeof paymentMethods]

  const getWhatsappNumber = () => {
  switch (source) {
    case 'tour':
      return '916289783779'
    case 'hotel':
    default:
      return '7890727339'
  }
}
const getEmailBySource = () => {
  switch (source) {
    case 'tour':
      return 'booking.bangaltourism@gmail.com'
    case 'membership':
      return 'members.bengaltourism@gmail.com'
    case 'hotel':
    default:
      return 'hotel.bengaltourism@gmail.com'
  }
}
  if (!paymentMethod) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Method Not Found</h1>
          <Link href="/book-hotel" className="text-blue-600 hover:text-blue-700 underline">
            Back to Hotel Booking
          </Link>
        </div>
      </div>
    )
  }

  const getPaymentTypeLabel = () => {
    return bookingType === 'full' ? 'Full Payment' : '50% Payment'
  }

  const renderPaymentContent = () => {
    switch (paymentMethod.type) {
      case 'bank':
        return (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Bank Transfer Details</h4>
            <div className="text-left text-gray-700 space-y-3">
              <p><span className="font-medium">Name:</span> {paymentMethod.details.name}</p>
              <p><span className="font-medium">Bank:</span> {paymentMethod.details.bank}</p>
              <p><span className="font-medium">Branch:</span> {paymentMethod.details.branch}</p>
              <p><span className="font-medium">Account No.:</span> {paymentMethod.details.accountNo}</p>
              <p><span className="font-medium">IFSC Code:</span> {paymentMethod.details.ifscCode}</p>
              <p><span className="font-medium">UPI:</span> {paymentMethod.details.upi}</p>
            </div>
          </div>
        )
      
      case 'international':
        return (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">International Payment Details</h4>
            <div className="text-left text-gray-700 space-y-3">
              <p><span className="font-medium">Email:</span> {paymentMethod.details.email}</p>
              <p><span className="font-medium">Mobile:</span> {paymentMethod.details.mobile}</p>
            </div>
          </div>
        )
      
      default:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-4 text-lg">Scan QR Code</h4>
              <div className="flex justify-center mb-4">
                {paymentMethod.qrImage && (
                  <Image
                    src={paymentMethod.qrImage}
                    alt="Payment QR Code"
                    width={256}
                    height={256}
                    className="object-contain"
                  />
                )}
              </div>
             
            </div>
          </div>
        )
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/book-hotel" className="text-gray-600 hover:text-gray-800 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <QrCode className="w-6 h-6 text-yellow-600" />
              Payment Details
            </h1>
          </div>
          
          {/* Payment Amount Display */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-6 rounded-lg text-center">
            <h2 className="text-lg font-semibold mb-2">{paymentType}</h2>
            <div className="flex items-center justify-center gap-2">
              {currency === 'USD' ? (
                <DollarSign className="w-6 h-6" />
              ) : (
                <IndianRupee className="w-6 h-6" />
              )}
              <span className="text-3xl font-bold">{parseInt(amount).toLocaleString('en-IN')}</span>
            </div>
            <p className="text-sm mt-2 opacity-90">{getPaymentTypeLabel()}</p>
          </div>
        </div>

        {/* Payment Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          {renderPaymentContent()}
        </div>

        {/* Payment Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3 text-lg">Payment Instructions:</h4>
          <ol className="text-sm text-blue-700 space-y-2 list-decimal list-inside">
            <li>Complete the payment using the details above</li>
            <li>Take a screenshot of the payment confirmation</li>
            <li>Share the screenshot on WhatsApp for booking confirmation</li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex gap-4">
            <button
         onClick={() => {
  const phoneNumber = getWhatsappNumber();
  const message = encodeURIComponent(
    `Hello, I have made a ${source} booking payment of ${currency === 'USD' ? '$' : '₹'}${parseInt(amount).toLocaleString('en-IN')} (${getPaymentTypeLabel()}). Please find the payment confirmation attached.`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Share on WhatsApp
            </button>
            <Link
              href="/book-hotel"
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all text-center"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Booking
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>  WhatsApp Number: <span className="font-semibold">{getWhatsappNumber()}</span></p>
            <p className="text-xs mt-1">Please share payment screenshot on this number for confirmation</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function QRPaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment details...</p>
        </div>
      </div>
    }>
      <QRPaymentContent />
    </Suspense>
  )
}
