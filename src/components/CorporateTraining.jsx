import React from 'react';
function CorporateTraining(){

    return(
        <>
 <div className="bg-gray-100 py-16">
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Programs delivered as per your training needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* On Premises */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center text-blue-500 text-3xl mb-4">
              {/* Replace with your On Premises Icon (e.g., using a library like Heroicons) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-4.036 12.858-8.964 12.858-4.928 0-8.964-5.716-8.964-12.858 0-7.142 4.036-12.858 8.964-12.858 4.928 0 8.964 5.716 8.964 12.858z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -ml-2 -mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .857.546 1.575 1.255 1.856l3.285 1.8c.341.2-.675.2-1.016 0l-3.285-1.8a2.25 2.25 0 01-1.255-1.856V9.75z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">On Premises</h3>
            {/* You could add a brief description here if available */}
          </div>

          {/* Online Instructor Led */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center text-blue-500 text-3xl mb-4">
              {/* Replace with your Online Instructor Led Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.125h15.002M4.501 20.125a2.25 2.25 0 01-2.25-2.25V6.75a2.25 2.25 0 012.25-2.25h15.002a2.25 2.25 0 012.25 2.25v11.125a2.25 2.25 0 01-2.25 2.25H4.501z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Online Instructor Led</h3>
            {/* You could add a brief description here if available */}
          </div>

          {/* Self Paced */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center text-blue-500 text-3xl mb-4">
              {/* Replace with your Self Paced Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.001 6.001 0 005-5.197m-5 5.197v-1.5a5.985 5.985 0 01-5-4.92m5 4.92v3.5m0 0a5.988 5.988 0 01-5-4.92m5 4.92c.903 0 1.753-.272 2.5-.75m-2.5.75l-.692-1.423m0 0a5.97 5.97 0 01-2.5-.75M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Self paced</h3>
            {/* You could add a brief description here if available */}
          </div>

          {/* Blended */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center text-blue-500 text-3xl mb-4">
              {/* Replace with your Blended Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -ml-2 -mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
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