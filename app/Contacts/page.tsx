import React from 'react'
import Header from "@/components/Header/Header"
import Navbar from '@/components/Navbar/Navbar'

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navbar />
      <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Our Contacts</h1>
        <ul className="text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Email:</span> hirashamimqureshi@gmail.com
          </li>
          <li>
            <span className="font-semibold">WhatsApp:</span> 0335-1234567
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactUs


