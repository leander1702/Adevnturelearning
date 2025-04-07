import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-dark.svg"; // Import the logo image
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // State to track which dropdown is active
  const dropdownRefs = useRef([]); // To track dropdowns

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRefs.current && !dropdownRefs.current.some(ref => ref && ref.contains(event.target))) {
        setActiveDropdown(null); // Close all dropdowns when clicking outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle dropdown state
  const toggleDropdown = (index) => {
    setActiveDropdown(prevState => (prevState === index ? null : index)); // Toggle between opening and closing
  };

  return (
    <nav className="bg-white text-black   px-6 py-2 font-sans flex items-center justify-between sticky top-0 left-0 w-full z-10 shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]">
      {/* Logo */}
      <div className="text-4xl font-semibold flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-28 md:w-32 md:h-16 lg:w-48 lg:h-14 object-contain logo-img"
          />
        </Link>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6 justify-center">
        <ul className="flex space-x-6 ">
          <li>
            <Link
              to="/"
              className="hover:text-[#0057D3] transition-transform duration-300 transform hover:-translate-y-1"
            >
              Home
            </Link>
          </li>

          {/* Courses Dropdown */}
          <li className="relative" ref={(el) => (dropdownRefs.current[0] = el)}>
            <button
              className="hover:text-[#0057D3] flex items-center"
              onClick={() => toggleDropdown(0)}
            >
              Courses
              {activeDropdown === 0 ? (
                <FaChevronUp className="ml-2 text-sm" />
              ) : (
                <FaChevronDown className="ml-2 text-sm" />
              )}
            </button>
            {activeDropdown === 0 && (
              <ul className="absolute z-50 text-sm bg-white mt-2 py-2 w-40 rounded shadow-lg">
                <li>
                  <Link
                    to="/course/full-stack"
                    className="block px-4 py-2 hover:bg-[#0057D3] hover:text-white"
                  >
                    Full Stack
                  </Link>
                </li>                
                <li>
                  <Link
                    to="/course/embedded-system"
                    className="block px-4 py-2 hover:bg-[#0057D3] hover:text-white"
                  >
                    Embedded System
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/data-science"
                    className="block px-4 py-2 hover:bg-[#0057D3] hover:text-white"
                  >
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/data-analytics"
                    className="block px-4 py-2 hover:bg-[#0057D3] hover:text-white"
                  >
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/cloud-computing"
                    className="block px-4 py-2 hover:bg-[#0057D3] hover:text-white"
                  >
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/software-testing"
                    className="block px-4 py-2 hover:bg-[#0057D3] hover:text-white"
                  >
                   Software Testing
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Online Training Link */}
          <li>
            <Link to="/onlinetraining" className="hover:text-[#0057D3]">
              Online Training
            </Link>
          </li>

          {/* Corporate Dropdown */}
          <li className="relative" ref={(el) => (dropdownRefs.current[1] = el)}>
            <button
              className="hover:text-[#0057D3] flex items-center"
              onClick={() => toggleDropdown(1)}
            >
              Corporate
              {activeDropdown === 1 ? (
                <FaChevronUp className="ml-2 text-sm" />
              ) : (
                <FaChevronDown className="ml-2 text-sm" />
              )}
            </button>
            {activeDropdown === 1 && (
              <ul className="absolute z-50 text-sm bg-white mt-2 py-2 w-40 rounded shadow-lg">
                <li>
                  <Link
                    to="/Corporate"
                    className="block px-4 py-2 hover:bg-[#0057D3] hover:text-white"
                  >
                    Corporate Training
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Resources Dropdown */}
          <li className="relative" ref={(el) => (dropdownRefs.current[2] = el)}>
            <button
              className="hover:text-[#0057D3] flex items-center"
              onClick={() => toggleDropdown(2)}
            >
              Resources
              {activeDropdown === 2 ? (
                <FaChevronUp className="ml-2 text-sm" />
              ) : (
                <FaChevronDown className="ml-2 text-sm" />
              )}
            </button>
            {activeDropdown === 2 && (
              <ul className="absolute z-50 text-sm bg-white mt-2 py-2 w-40 rounded shadow-lg">
                <li>
                  <Link
                    to="/blogs"
                    className="block px-4 py-2 hover:bg-[#0057D3] hover:text-white"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Contacts Link */}
          <li>
            <Link to="/contact" className="hover:text-[#0057D3]">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* login & signup */}
      <div className="hidden sm:block md:block">
        <ul className="flex space-x-6">
          <li>
            <a className="text-white cursor-pointer text-[14px] bg-[#0057D3] hover:bg-white hover:text-[#0057D3] hover:border hover:border-blue-700 px-6 py-3 rounded-3xl font-semibold shadow-md w-[150px] text-center">
              Login
            </a>
          </li>
          <li>
            <a className="border border-blue-700 text-[14px] ml-[-20px] bg-white text-[#0057D3] px-5 py-3 hover:bg-[#0057D3] hover:text-white hover:border hover:border-blue-700 rounded-3xl font-semibold cursor-pointer w-[150px] text-center">
              Signup
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </div>

      {/* Mobile Nav Links */}
      <div
        className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-[#0057D3] text-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50 shadow-lg`}
      >
        <div className="flex justify-end p-6">
          <FaTimes className="text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
        <ul className="space-y-2 text-lg font-semibold px-6">
          <li>
            <Link to="/" className="block py-2">Home</Link>
          </li>
          <li>
            <Link to="/onlinetraining" className="block py-2 hover:text-[#0057D3]">Courses</Link>
          </li>
          <li>
            <Link to="/hirefromus" className="block py-2 hover:text-[#0057D3]">Online Training</Link>
          </li>
          <li>
            <Link to="/becomeaninstructor" className="block py-2 hover:text-[#0057D3]">Corporate</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 hover:text-[#0057D3]">Resources</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 hover:text-[#0057D3]">Contacts</Link>
          </li>
          {/* Add mobile login/signup buttons */}
          <li>
            <Link to="/login" className="block py-2 hover:text-[#0057D3]">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="block py-2 hover:text-[#0057D3]">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
