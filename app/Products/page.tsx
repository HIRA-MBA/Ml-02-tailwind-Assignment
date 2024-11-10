import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'

const ProductPage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
    <div className="flex flex-wrap justify-center gap-6 p-4">
      <div className="bg-white shadow-lg rounded-lg p-4 w-48 transform transition hover:scale-105">
        <Image src="/images/bridal.svg" alt="Bridal set" width={100} height={100} className="mx-auto" />
        <h3 className="text-center text-lg font-semibold mt-4">Bridal Set</h3>
        <p className="text-center text-gray-600 mt-2">Rs.3000</p>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-4 w-48 transform transition hover:scale-105">
        <Image src="/images/stoneset.svg" alt="Stone Set" width={100} height={100} className="mx-auto" />
        <h3 className="text-center text-lg font-semibold mt-4">Stone Set</h3>
        <p className="text-center text-gray-600 mt-2">RS.1500</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 w-48 transform transition hover:scale-105">
        <Image src="/images/nailpaints.svg" alt="Nail Paints" width={100} height={100} className="mx-auto" />
        <h3 className="text-center text-lg font-semibold mt-4">Nail Paints</h3>
        <p className="text-center text-gray-600 mt-2">Rs.100 Each</p>
      </div>
    </div>
    </div>
  )
}

export default ProductPage

