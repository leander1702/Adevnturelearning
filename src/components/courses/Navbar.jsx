import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"; // Correct imports for Heroicons v2

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMenu , setSelectedMenu] = useState('course');

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  

  return (
    <nav className="bg-[#0057D3] text-white shadow-lg font-sans flex justify-center sticky top-0 z-50">
      <div className="container mx-auto  py-4 flex justify-center items-center">
        {/* Left side - Logo or Links */}
        <div className="flex items-center space-x-1 sm:sca">
          <a
            href="#course"
            className={`text-md font-semibold hover:text-gray-300 transition-colors   py-2 px-4 rounded-full ${selectedMenu === "course" ? "border border-1 border-white bg-white text-blue-800 hover:text-blue-900" : ""}`}
            onClick={() => setSelectedMenu('course')}
          >
            Course Overview
          </a>
          <a
            href="#trainer"
            className={`text-md font-semibold hover:text-gray-300 transition-colors   py-2 px-4 rounded-full ${selectedMenu === "trainer" ? "border border-1 border-white bg-white text-blue-800 hover:text-blue-900" : ""}`}
            onClick={() => setSelectedMenu('trainer')}
          >
            Trainer Profile
          </a>
          <a
            href="#syllabus"
            className={`text-md font-semibold hover:text-gray-300 transition-colors   py-2 px-4 rounded-full ${selectedMenu === "syllabus" ? "border border-1 border-white bg-white text-blue-800 hover:text-blue-900" : ""}`}
            onClick={() => setSelectedMenu('syllabus')}
          >
            Syllabus
          </a>
          <a
            href="#batches"
            className={`text-md font-semibold hover:text-gray-300 transition-colors   py-2 px-4 rounded-full ${selectedMenu === "batches" ? "border border-1 border-white bg-white text-blue-800 hover:text-blue-900" : ""}`}
            onClick={() => setSelectedMenu('batches')}
          >
            Upcoming Batch
          </a>
          <a
            href="#certificate"
            className={`text-md font-semibold hover:text-gray-300 transition-colors   py-2 px-4 rounded-full ${selectedMenu === "certificate" ? "border border-1 border-white bg-white text-blue-800 hover:text-blue-900" : ""}`}
            onClick={() => setSelectedMenu('certificate')}
          >
            Certificate
          </a>
          <a
            href="#review"
             className={`text-md font-semibold hover:text-gray-300 transition-colors   py-2 px-4 rounded-full ${selectedMenu === "learners-thought" ? "border border-1 border-white bg-white text-blue-800 hover:text-blue-900" : ""}`}
            onClick={() => setSelectedMenu('learners-thought')}
          >
          
            Our Learners Thought
          </a>
        </div>

        {/* Right side - Enroll Button */}
        {/* <div className="hidden md:flex items-center">
          <button className="border border-white text-white py-2 px-6 rounded-full font-semibold transition-all ease-in-out duration-200 hover:scale-105 ">
            Enroll Now
          </button>
        </div> */}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" /> // Updated to XMarkIcon
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" /> // Updated to Bars3Icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white py-4 px-4">
          <a
            href="#course"
            className="block px-4 py-2 border-b border-white hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu} // Close menu on click
          >
            Course Overview
          </a>
          <a
            href="#trainer"
            className="block px-4 py-2 border-b border-white hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            Trainer Profile
          </a>
          <a
            href="#syllabus"
            className="block px-4 py-2 border-b border-white hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            Syllabus
          </a>
          <a
            href="#batches"
            className="block px-4 py-2 border-b border-white hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            Upcoming Batch
          </a>
          <a
            href="#why-us"
            className="block px-4 py-2 border-b border-white hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            Why Us ?
          </a>
          <a
            href="#learners-thought"
            className="block px-4 py-2 border-b border-white hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            Our Learners Thought
          </a>
          <div className="px-4 py-2">
            <button
              className="w-full  text-blue-800 py-2 px-4 rounded-full hover:bg-gray-100 font-semibold transition-all ease-in-out duration-200"
              onClick={toggleMobileMenu} // Close menu on button click
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
