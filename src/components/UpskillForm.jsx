import React from 'react';

function UpskillForm() {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2 text-center">
            Transform Your Workforce
          </h2>
          <p className="text-gray-600 mb-6 text-center">Write to us for your upskilling needs</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Title"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-bold mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Contact Number"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Company Name"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="requestMessage" className="block text-gray-700 text-sm font-bold mb-2">
                Request Message
              </label>
              <textarea
                id="requestMessage"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Write your upskilling needs here..."
              ></textarea>
            </div>
            <div className="col-span-full">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpskillForm;