import React from 'react';
import train1 from '../assets/train1.png'
import train2 from '../assets/train2.png'
import train3 from '../assets/train3.png'
import train4 from '../assets/train4.png'
function CorporateTraining(){


    return(
        <>
 <div className="bg-gray-100 ">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Transform Your Workforce</h1>
          <p className="text-lg mb-8">
            "Adventure Learning empowers you to master emerging skills fast with a custom-tailored
            curriculum built around your unique needs."
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
            Request a Demo
          </button>
        </div>
      </div>

      {/* Program Delivery Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0057D3] mb-8 text-center">
          Programs delivered as per your training needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* On Premises */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center text-[#0057D3] text-3xl mb-4">
              {/* Replace with your On Premises Icon (e.g., using a library like Heroicons) */}
              <img src={train1} className="w-12 h-12" />                       
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">On Premises</h3>
            {/* You could add a brief description here if available */}
          </div>

          {/* Online Instructor Led */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center text-[#0057D3] text-3xl mb-4">
              {/* Replace with your Online Instructor Led Icon */}
              <img src={train2} className="w-14 h-14" />            
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Online Instructor Led</h3>
            {/* You could add a brief description here if available */}
          </div>

          {/* Self Paced */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center text-[#0057D3] text-3xl mb-4">
              {/* Replace with your Self Paced Icon */}
              <img src={train3} className="w-14 h-14" />            
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Self paced</h3>
            {/* You could add a brief description here if available */}
          </div>

          {/* Blended */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center text-[#0057D3] text-3xl mb-4">
              {/* Replace with your Blended Icon */}
              <img src={train4} className="w-14 h-14" />            
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Blended</h3>
            {/* You could add a brief description here if available */}
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default CorporateTraining;