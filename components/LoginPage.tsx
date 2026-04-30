"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add login logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className=" bg-white py-10">
      <div className="flex items-center justify-center px-4">
        <div className="max-w-7xl w-full  overflow-hidden">
          <div className=" mb-12">
            <div className="flex  gap-2 mb-3 ">
              <span className="text-yellow-600 font-semibold">
                Membership
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Sign In for <span className="text-yellow-600"> Membership</span>
            </h2>
            <p className="text-gray-600">Enter your credentials to access your account</p>

          </div>
          <div className="grid md:grid-cols-2">
 {/* Right Side - Login Form */}
            <div className="">
              <div className="max-w-sm ">


                <form onSubmit={handleSubmit} className="space-y-6 border border-gray-300 p-6 rounded-lg">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your username"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 shadow-lg"
                  >
                    Sign In
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Left Side - Video and Content */}
            <div className="relative h-64 md:h-auto">
              <video
                src="/home.mp4"
                controls
                loop
                playsInline
                className="w-full h-full object-contain bg-white"
              />


            </div>

           

          </div>
        </div>
      </div>
    </div>
  )
}
