import React from 'react';
import Contact from '../assets/Contact.gif';

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-6 lg:mt-10 px-4 lg:px-0">
      {/* Form Section - Full width on mobile, 1/2 on medium, 1/3 on large screens */}
      <div className="bg-white py-8 lg:py-10 px-4 sm:px-6 rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-sm lg:shadow-none">
        <div className="mb-6 w-full">
          <p data-aos="fade-down" className='text-base lg:text-lg text-gray-600 font-bold'>CONTACT</p>
          <h2 data-aos="fade-down" className="text-2xl sm:text-3xl font-semibold text-[#0057D3] mb-2">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-semibold">
            Have a question about your course? Reach out, and our team will be
            happy to assist you every step of the way!
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full outline-none px-4 py-2 border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none px-4 py-2 border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full outline-none px-4 py-2 border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full outline-none px-4 py-2 border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full outline-none px-4 py-2 border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#0057D3] hover:bg-white text-white hover:text-[#0057D3] border hover:border-[#0057D3] font-semibold py-2 px-6 rounded-md text-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

      {/* Image Section - Hidden on mobile, shown from medium screens */}
      <div className="hidden md:block w-full md:w-1/2 lg:w-1/3 mt-8 lg:mt-0 px-4">
        <img 
          className="w-full h-auto object-cover" 
          src={Contact} 
          alt="Contact Illustration" 
          data-aos="fade-left"
          data-aos-delay="50"
        />
      </div>
    </div>
  );
};

export default ContactForm;