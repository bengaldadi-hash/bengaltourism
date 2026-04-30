import React from 'react'

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund & Cancellation Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              At Bengal Tourism, we understand that travel plans may change. Our refund policy is designed to be fair 
              and transparent while maintaining the quality of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cancellation Timeline & Refund</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border text-gray-500 border-gray-300 px-4 py-2 text-left">Cancellation Time</th>
                    <th className="border text-gray-500 border-gray-300 px-4 py-2 text-left">Refund Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border text-gray-500 border-gray-300 px-4 py-2">30+ days before travel</td>
                    <td className="border text-gray-500 border-gray-300 px-4 py-2">90% of total amount</td>
                  </tr>
                  <tr>
                    <td className="border text-gray-500 border-gray-300 px-4 py-2">21-30 days before travel</td>
                    <td className="border text-gray-500 border-gray-300 px-4 py-2">75% of total amount</td>
                  </tr>
                  <tr>
                    <td className="border text-gray-500 border-gray-300 px-4 py-2">15-20 days before travel</td>
                    <td className="border text-gray-500 border-gray-300 px-4 py-2">50% of total amount</td>
                  </tr>
                  <tr>
                    <td className="border text-gray-500 border-gray-300 px-4 py-2">7-14 days before travel</td>
                    <td className="border text-gray-500 border-gray-300 px-4 py-2">25% of total amount</td>
                  </tr>
                  <tr>
                    <td className="border text-gray-500 border-gray-300 px-4 py-2">Less than 7 days  <br />No Show / Holidays / Peak Season / Black out Dates.</td>
                    <td className="border text-gray-500 border-gray-300 px-4 py-2">No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Process</h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">Processing Steps:</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Submit cancellation request via email or phone</li>
                <li>Provide booking reference number and reason for cancellation</li>
                <li>Refund processed within 7-10 working days</li>
                <li>Refund credited to original payment method</li>
                <li>Confirmation email sent with refund details</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Non-Refundable Items</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Flight tickets (as per airline policy)</li>
              <li>Train tickets (as per railway policy)</li>
              <li>Visa application fees</li>
              <li>Travel insurance premiums</li>
              <li>Customization charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Special Circumstances</h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">Medical Emergency:</h3>
              <p className="text-gray-600 leading-relaxed">
                In case of medical emergencies with valid documentation, we may offer:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Postponement of travel (valid for 6 months)</li>
                <li>Partial refund based on supplier policies</li>
                <li>Transfer to another traveler (additional charges may apply)</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-700 mt-4">Force Majeure:</h3>
              <p className="text-gray-600 leading-relaxed">
                No refunds will be provided for cancellations due to natural disasters, 
                political unrest, pandemics, or other force majeure events. However, 
                we will assist in rescheduling your trip.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Date Change Policy</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Date changes allowed up to 15 days before travel</li>
              <li>Processing fee of ₹2,000 per person applies</li>
              <li>Subject to availability of new dates</li>
              <li>Price difference (if any) must be paid</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">No-Show Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              If you fail to show up for your scheduled tour without prior notice, 
              no refund will be provided. We recommend contacting us at least 24 hours 
              in advance if you anticipate any issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Request a Refund</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Required Information:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Booking reference number</li>
                <li>Traveler name and contact details</li>
                <li>Reason for cancellation</li>
                <li>Bank account details for refund processing</li>
              </ul>
              <div className="mt-4 text-gray-600">
                <p><strong>Email:</strong> bengaltourism@gmail.com</p>
                <p><strong>Phone:</strong> 6289783779 (Tour Booking)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Notes</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>All refunds are subject to deduction of transaction charges</li>
              <li>Refund processing time may vary based on payment method</li>
              <li>Bengal Tourism reserves the right to modify this policy</li>
              <li>Changes will be communicated via email and website updates</li>
            </ul>
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
