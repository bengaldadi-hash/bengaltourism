import React from 'react'

export default function TermsPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms & Conditions</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Bengal Tourism! These Terms of Service govern your use of our website and booking services.
              By using our services, you agree to these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Booking Terms</h2>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700">Reservation Requirements:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Valid ID proof is required for all bookings</li>
                <li>Advance payment of 50% is required to confirm booking</li>
                <li>Remaining payment must be completed 7 days before travel</li>
                <li>Booking confirmation is subject to availability</li>
              </ul>
            </div>
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Terms</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>All payments are processed through secure payment gateways</li>
              <li>We accept credit/debit cards, UPI, and bank transfers</li>
              <li>Prices are excluding any applicable taxes</li>
              <li>Additional charges may apply for customization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Package Inclusions & Exclusions</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-blue-900 mb-3">Upgrade Options:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Upgrade to AC accommodation where available (₹ 500/Night/head)</li>
                  <li>AC train/bus tickets as per actual</li>
                  <li>AC vehicle on demand (@ ₹1500 / day for a group of less than 6-7 Persons & during Peak Season is compulsory & will be charged extra.) AC will not work in hilly locations.</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-red-900 mb-3">Excluding:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Any Rides, Entry Permits</li>
                  <li>Food not mentioned</li>
                  <li>Porter charges, tips, camera entry</li>
                  <li>Room heater, beverages / soft drinks / liquor</li>
                  <li>Anything not mentioned in the itinerary</li>
                  <li>Any extra days due to natural calamities or incidents beyond our control will be borne by the clients</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-green-900 mb-3">Including:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Accommodations & transport as mentioned</li>
                  <li>Meals (bed tea, breakfast & dinner)</li>
                  <li>Excluding lunch (your cost) but included in group tour of 20+ heads & in Homestays.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traveler Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Ensure all travel documents are valid and in order</li>
              <li>Follow safety guidelines provided by tour guides</li>
              <li>Respect local customs and traditions</li>
              <li>Report any issues immediately to our support team</li>
              <li>Be punctual for scheduled activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide safe and comfortable travel arrangements</li>
              <li>Ensure quality accommodation and transportation</li>
              <li>Offer professional tour guides and support</li>
              <li>Maintain transparency in all dealings</li>
              <li>Provide emergency assistance when needed</li>
              <li>We take special care for senior citizens & only ladies group</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Bengal Tourism shall not be liable for any loss, damage, or injury caused by factors beyond our control,
              including natural disasters, political unrest, or force majeure events. We recommend purchasing travel insurance
              for comprehensive coverage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dispute Resolution</h2>
            <p className="text-gray-600 leading-relaxed">
              Any disputes arising from our services shall be resolved through mutual discussion.
              If unresolved, the matter shall be subject to the jurisdiction of courts in Kolkata, West Bengal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <div className="text-gray-600">
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
