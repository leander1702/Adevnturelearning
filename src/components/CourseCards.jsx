import React, { useState } from "react";
import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.jpeg';
import card3 from '../assets/card3.jpeg';
import card4 from '../assets/card4.jpeg';
import card5 from '../assets/card5.jpeg';
import card6 from '../assets/card6.jpeg';
import card7 from '../assets/card7.jpeg';
import card8 from '../assets/card8.jpeg';

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";



const CardCarousel = () => {
    const cards = [
        // card1
        <div className="w-80 flex-none p-4 ml-5 rounded-xl bg-white text-black  border-b-2 border-r-2 border-gray-400"
            style={{
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)" // Custom shadow only on right and bottom
            }}>
            <div
                className="relative -mt-2 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40"
                style={{
                    backgroundImage: `url(${card1})`, // Use the imported image
                }}
            ></div>
            <div className="p-2 w-80">
                <h5 className="mb-2 font-semibold text-blue-gray-900 text-base">Learn Figma-UI/UX Design Essential Training</h5>
                <div className="flex items-center text-gray-500 font-bold mb-3 w-80">
                    <i className="bi bi-journal-bookmark-fill text-sm  ml-1 "></i><span className="font-bold text-sm ml-1">Lesson:6</span>
                    <i className="bi bi-person-fill text-sm ml-3"></i> <span className="font-bold text-sm ml-1">Students:198</span>
                    <i className="bi bi-trophy-fill text-sm ml-3"></i> <span className="font-bold text-sm ml-1">Beginner</span>
                </div>

                <button className="bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-4 py-2 rounded-md font-semibold flex items-center">
                    Start Course
                    <i className="bi bi-chevron-right ml-2"></i> {/* Icon with margin-left */}
                </button>
            </div>
        </div>,



        // card2
        <div className="w-80 flex-none p-4 ml-5 rounded-xl bg-white text-gray-700 border-b-2 border-r-2 border-gray-400"
            style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)" // Custom shadow only on right and bottom
            }}>
            <div
                className="relative -mt-2 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40"
                style={{
                    backgroundImage: `url(${card2})`, // Use the imported image
                }}
            ></div>
            <div className="p-2 w-80">
                <h5 className="mb-2 text-base font-semibold text-black">Python for Beginners - Learn Programming from scratch</h5>
                <div className="flex items-center text-gray-500 font-bold mb-3 w-80">
                    <i className="bi bi-journal-bookmark-fill text-sm "></i><span className="font-bold text-sm ml-1">Lesson:6</span>
                    <i className="bi bi-person-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Students:198</span>
                    <i className="bi bi-trophy-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Beginner</span>
                </div>
                <button className="bg-gray-800 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-4 py-2 rounded-md font-semibold flex items-center">
                    Start Course
                    <i className="bi bi-chevron-right ml-2"></i> {/* Icon with margin-left */}
                </button>
            </div>
        </div>,



        // card3
        <div className="w-80 flex-none p-4 ml-5 rounded-xl bg-white text-gray-700 border-b-2 border-r-2 border-gray-400"
            style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)" // Custom shadow only on right and bottom
            }}>
            <div
                className="relative -mt-2 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40"
                style={{
                    backgroundImage: `url(${card3})`, // Use the imported image
                }}
            ></div>
            <div className="p-2">
                <h5 className="mb-2 text-base font-semibold text-black">How to Market Yourself as a Consultant</h5>
                <div className="flex items-center text-gray-500 font-bold mb-3 w-80">
                    <i className="bi bi-journal-bookmark-fill text-sm  ml-2 "></i><span className="font-bold text-sm ml-1">Lesson:6</span>
                    <i className="bi bi-person-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Students:198</span>
                    <i className="bi bi-trophy-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Beginner</span>
                </div>
                <button className="bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-4 py-2 rounded-md font-semibold flex items-center">
                    Start Course
                    <i className="bi bi-chevron-right ml-2"></i> {/* Icon with margin-left */}
                </button>
            </div>
        </div>,



        // card4
        <div className="w-80 flex-none p-4 ml-5 rounded-xl bg-white text-gray-700 border-b-2 border-r-2 border-gray-400"
            style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)" // Custom shadow only on right and bottom
            }}>
            <div
                className="relative -mt-2 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40"
                style={{
                    backgroundImage: `url(${card4})`, // Use the imported image
                }}
            ></div>
            <div className="p-2 w-80">
                <h5 className="mb-2 text-base font-semibold text-black">Mobile App Development with Flutter & Dart (iOS and Android)</h5>
                <div className="flex items-center text-gray-500 font-bold mb-3 w-80">
                    <i className="bi bi-journal-bookmark-fill text-sm  ml-2 "></i><span className="font-bold text-sm ml-1">Lesson:6</span>
                    <i className="bi bi-person-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Students:198</span>
                    <i className="bi bi-trophy-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Beginner</span>
                </div>
                <button className="bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-4 py-2 rounded-md font-semibold flex items-center">
                    Start Course
                    <i className="bi bi-chevron-right ml-2"></i> {/* Icon with margin-left */}
                </button>
            </div>
        </div>,



        // card5
        <div className="w-80 flex-none p-4 ml-5 rounded-xl bg-white text-gray-700 border-b-2 border-r-2 border-gray-400"
            style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)" // Custom shadow only on right and bottom
            }}>
            <div
                className="relative -mt-2 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40"
                style={{
                    backgroundImage: `url(${card5})`, // Use the imported image
                }}
            ></div>
            <div className="p-2 w-80">
                <h5 className="mb-2 text-base font-semibold text-black">Learn Figma-UI/UX Design Essential Training</h5>
                <div className="flex items-center text-gray-500 font-bold mb-3 w-80">
                    <i className="bi bi-journal-bookmark-fill text-sm  ml-2 "></i><span className="font-bold text-sm ml-1">Lesson:6</span>
                    <i className="bi bi-person-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Students:198</span>
                    <i className="bi bi-trophy-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Beginner</span>
                </div>
                <button className="bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-4 py-2 rounded-md font-semibold flex items-center">
                    Start Course
                    <i className="bi bi-chevron-right ml-2"></i> {/* Icon with margin-left */}
                </button>
            </div>
        </div>,



        // card6
        <div className="w-80 flex-none p-4 ml-5 rounded-xl bg-white text-gray-700 border-b-2 border-r-2 border-gray-400"
            style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)" // Custom shadow only on right and bottom
            }}>
            <div
                className="relative -mt-2 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40"
                style={{
                    backgroundImage: `url(${card6})`, // Use the imported image
                }}
            ></div>
            <div className="p-2 w-80">
                <h5 className="mb-2 text-base font-semibold text-black">Python for Beginners - Learn Programming from scratch</h5>
                <div className="flex items-center text-gray-500 font-bold mb-3 w-80">
                    <i className="bi bi-journal-bookmark-fill text-sm  ml-2"></i><span className="font-bold text-sm ml-1">Lesson:6</span>
                    <i className="bi bi-person-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Students:198</span>
                    <i className="bi bi-trophy-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Beginner</span>
                </div>
                <button className="bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-4 py-2 rounded-md font-semibold flex items-center">
                    Start Course
                    <i className="bi bi-chevron-right ml-2"></i> {/* Icon with margin-left */}
                </button>
            </div>
        </div>,



        // card7
        <div className="w-80 flex-none p-4 ml-5 rounded-xl bg-white text-gray-700 border-b-2 border-r-2 border-gray-400"
            style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)" // Custom shadow only on right and bottom
            }}>
            <div
                className="relative -mt-2 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40"
                style={{
                    backgroundImage: `url(${card7})`, // Use the imported image
                }}
            ></div>
            <div className="p-2 w-80">
                <h5 className="mb-2 text-base font-semibold text-black">Mobile App Development with Flutter & Dart </h5>
                <div className="flex items-center text-gray-500 font-bold mb-3 w-80">
                    <i className="bi bi-journal-bookmark-fill text-sm  ml-2"></i><span className="font-bold text-sm ml-1">Lesson:6</span>
                    <i className="bi bi-person-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Students:198</span>
                    <i className="bi bi-trophy-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Beginner</span>
                </div>
                <button className="bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-4 py-2 rounded-md font-semibold flex items-center">
                    Start Course
                    <i className="bi bi-chevron-right ml-2"></i> {/* Icon with margin-left */}
                </button>
            </div>
        </div>,



        // card8
        <div className="w-80 flex-none p-4 ml-5 rounded-xl bg-white text-gray-700 border-b-2 border-r-2 border-gray-400"
            style={{
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)" // Custom shadow only on right and bottom
            }}>
            <div
                className="relative -mt-2 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40"
                style={{
                    backgroundImage: `url(${card8})`, // Use the imported image
                }}
            ></div>
            <div className="p-2 w-80">
                <h5 className="mb-2 text-base font-semibold text-black">Mobile App Development with Flutter & Dart (iOS and Android)</h5>
                <div className="flex items-center text-gray-500 font-bold mb-3 w-80">
                    <i className="bi bi-journal-bookmark-fill text-sm  ml-2"></i><span className="font-bold text-sm ml-1">Lesson:6</span>
                    <i className="bi bi-person-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Students:198</span>
                    <i className="bi bi-trophy-fill text-sm ml-2"></i> <span className="font-bold text-sm ml-1">Beginner</span>
                </div>
                <button className="bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-4 py-2 rounded-md font-semibold flex items-center">
                    Start Course
                    <i className="bi bi-chevron-right ml-2"></i> {/* Icon with margin-left */}
                </button>
            </div>
        </div>
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 4;

    const handleNext = () => {
        if (currentIndex + cardsPerView < cards.length) {
            setCurrentIndex(currentIndex + 1); // Move right by one card
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1); // Move left by one card
        }
    };

    return (
        <div className="relative w-full overflow-hidden bg-[#F5F5F5]" >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${(currentIndex / cardsPerView) * 100}%)`,
                }}
            >
                {cards}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center mt-32 px-4">
                <button
                    onClick={handlePrev}
                    className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-colors duration-300"
                >
                    <BsArrowLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-colors duration-300"
                >
                    <BsArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default CardCarousel;
