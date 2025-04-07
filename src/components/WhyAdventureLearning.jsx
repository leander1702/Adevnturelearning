import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Assuming you have Heroicons installed
import avd2 from '../assets/avd2.gif';

function WhyAdventureLearning() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section - Text */}
        <div className="text-gray-800">
          <h2 className="text-2xl font-semibold mb-6 text-[#0057D3]">
            Why Top Companies Prefer "Adventure Learning"
          </h2>
          <ul className="space-y-4"> {/* Increased space between list items */}
            <li>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-[#0057D3] mr-3" /> {/* Increased space between icon and text */}
                <span>High engagement and outcome-centric learning</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-[#0057D3] mr-3" />
                <span>Customized curriculum built with industry leaders, for industry leaders</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-[#0057D3] mr-3" />
                <span>Hands-on exercises and industry use cases</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-[#0057D3] mr-3" />
                <span>Assignments and project work review and feedback from industry SMEs</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-[#0057D3] mr-3" />
                <span>Strong reporting to track learning and calculate training ROI for managers</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-[#0057D3] mr-3" />
                <span>Pre-configured Cloud Labs for practice</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-[#0057D3] mr-3" />
                <span>Day 1 production ready on the completion of the training</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Section - Image/Video */}
        <div className="relative overflow-hidden">
          {/* Replace this with your actual image or video component */}
          <img
            src={avd2} // Placeholder image URL
            alt="Adventure Learning in Action"
            className="w-full h-auto max-w-[80%] mx-auto" // Ensures the image is responsive and centers it
          />
          {/* Optional: Play button overlay if it's a video */}
          {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
            <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}

export default WhyAdventureLearning;
