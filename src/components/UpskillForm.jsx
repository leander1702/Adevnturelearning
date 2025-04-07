import React from 'react';
import form2 from '../assets/form2.gif';

function UpskillForm() {
  return (
    <div className="bg-blue-50 py-12 min-h-screen flex items-center justify-center">
      <div className="w-full  max-w-4xl px-4">
        <div className="bg-white w-full lg:w-3/4 md:w-full rounded-lg shadow-md p-8 mx-auto">
          <h1 className="sm:text-3xl font-semibold text-[#0057D3] mb-2 text-center">
            Transform Your Workforce
          </h1>
          <p className="text-lg text-gray-700 mb-6 text-center">Write to us for your upskilling needs</p>

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
                className="bg-[#0057D3] border hover:border-[#0057D3] hover:bg-white hover:text-[#0057D3] text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline"
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
