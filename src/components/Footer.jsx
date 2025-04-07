import React from 'react';
import logo from "../assets/logo-dark.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#0057D3] text-white py-4 mt-10 sm:mt-10">
            <div className="container mx-auto px-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-2">
                {/* Explore Section */}
                <div>
                    <h3 className="font-bold text-base sm:text-lg text-black mb-2 sm:mb-4">Explore</h3>
                    <ul className="space-y-1 sm:space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">Courses</a></li>
                        <li><a href="#" className="hover:text-gray-300">Online Training</a></li>
                        <li><a href="#" className="hover:text-gray-300">Hire From us</a></li>
                        <li><a href="#" className="hover:text-gray-300">Become an Instructor</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>

                {/* Trending Courses Section */}
                <div>
                    <h3 className="font-bold text-base sm:text-lg text-black mb-2 sm:mb-4">Trending Courses</h3>
                    <ul className="space-y-1 sm:space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-300">Full Stack</a></li>
                        <li><a href="#" className="hover:text-gray-300">Embedded System</a></li>
                        <li><a href="#" className="hover:text-gray-300">Data Science</a></li>
                        <li><a href="#" className="hover:text-gray-300">Cloud Computing</a></li>
                        <li><a href="#" className="hover:text-gray-300">Software Testing</a></li>
                        <li><a href="#" className="hover:text-gray-300">Data Analytics</a></li>
                    </ul>
                </div>

                {/* All Categories Section */}
                <div>
                    <h3 className="font-bold text-base sm:text-lg text-black mb-2 sm:mb-4">All Categories</h3>
                    <ul className="space-y-1 sm:space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-300">Our Technology</a></li>
                        <li><a href="#" className="hover:text-gray-300">Our Top Class Courses</a></li>
                        <li><a href="#" className="hover:text-gray-300">Why Adventure</a></li>
                        <li><a href="#" className="hover:text-gray-300">Our Hiring Companies</a></li>
                        <li><a href="#" className="hover:text-gray-300">Our Webinar & Events</a></li>
                        <li><a href="#" className="hover:text-gray-300">News & Blogs</a></li>
                        <li><a href="#" className="hover:text-gray-300">Our Testimonials</a></li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h3 className="font-bold text-base sm:text-lg text-black mb-2 sm:mb-4">Contact Us</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <i className="bi bi-telephone text-xl sm:text-2xl"></i>
                            <div className="ml-3 sm:ml-5 text-sm">
                                <p className='pt-1'>Chennai: +91-8111005300</p>
                                <p className='pt-1'>Coimbatore: +91-988445571</p>
                                <p className='pt-1'>Hire from us: +91-9884220600</p>
                            </div>
                        </div>
                        <div className="flex items-start text-sm">
                            <i className="bi bi-geo-alt text-xl sm:text-2xl"></i>
                            <p className="ml-3 sm:ml-5">
                                No:121/4, 7th Street, <span className='block'>Tatabad, Gandhipuram,</span> Coimbatore, Tamil Nadu-641012.
                            </p>
                        </div>
                        <div className="flex items-center text-sm">
                            <i className="bi bi-envelope text-xl sm:text-2xl"></i>
                            <a href="mailto:info@adventurelearning.in" className="ml-3 sm:ml-5 hover:text-gray-300">info@adventurelearning.in</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-48 sm:w-32 lg:w-48 h-auto object-contain logo-footer"
                        />
                        <p className="text-xs sm:text-sm mt-2">As we are a leader in the Technology Development, Training and R&D Services. Our <span className='sm:block '> responsibility is to empower Education through the knowledge transformation for better Wisdom society.</span></p>
                    </div>
                    <div>
                        <h3 className="font-bold text-base sm:text-lg text-black mb-2">Follow us</h3>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="bg-[#3275fc] text-white rounded-full p-2">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="bg-gradient-to-r from-purple-500 to-yellow-700 text-white rounded-full p-2">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="bg-[#0077B5] text-white rounded-full p-2">
                                <FaLinkedinIn size={20} />
                            </a>
                            {/* <a href="#" className="bg-black text-white rounded-full p-2">
                                <FaXTwitter size={20} />
                            </a> */}
                            <a href="#" className="bg-[#0088CC] text-white rounded-full p-2">
                                <FaTelegramPlane size={20} />
                            </a>
                            <a href="#" className="bg-[#FF0000] text-white rounded-full p-2">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-4 border-t mt-6 sm:mt-10 border-white"></div>

            <div className="flex flex-col sm:flex-row mt-3 sm:mt-4 text-xs sm:text-sm justify-between w-full px-4">
                <p className="mb-2 sm:mb-0">©2025 Adventure Technology Solutions Pvt Ltd.</p>
                <div className='flex space-x-3 sm:space-x-4'>
                    <a href="#" className="hover:text-gray-300 underline">Terms & Conditions</a>
                    <span>|</span>
                    <a href="#" className="hover:text-gray-300 underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;