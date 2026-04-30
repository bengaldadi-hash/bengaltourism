import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              At Bengal Tourism, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy outlines how we collect, use, and protect your data when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">Personal Information:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Name and contact details (phone number, email)</li>
                <li>Address for booking purposes</li>
                <li>Payment information (processed securely)</li>
                <li>Travel preferences and requirements</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-700 mt-4">Technical Information:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>IP address and browsing behavior</li>
                <li>Device information and browser type</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To process your bookings and provide travel services</li>
              <li>To communicate with you about your bookings</li>
              <li>To improve our services and website functionality</li>
              <li>To send promotional offers (with your consent)</li>
              <li>To ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. Your payment information is processed through secure payment gateways 
              and is not stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We may share your information with trusted third parties only when necessary to provide our services, 
              such as hotels, transport providers, and payment processors. We ensure that these partners also comply 
              with data protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or need to exercise your rights, please contact us at:
            </p>
            <div className="mt-4 text-gray-600">
              <p><strong>Email:</strong> bengaltourism@gmail.com</p>
              <p><strong>Phone:</strong> 6289783779 (Tour Booking)</p>
              <p><strong>Address:</strong> AG-209, Flat No 402, Kestopur, Kolkata - 700101</p>
            </div>
          </section>

          <section>
            <p className="text-sm text-gray-500 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
