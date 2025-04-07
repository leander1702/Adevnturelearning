import React, { useState } from "react";
import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.jpeg';
import card3 from '../assets/card3.jpeg';
import card4 from '../assets/card4.jpeg';
import card5 from '../assets/card5.jpeg';
import card6 from '../assets/card6.jpeg';
import card7 from '../assets/card7.jpeg';
import card8 from '../assets/card8.jpeg';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function Coursecard() {
    const cards = [
        { title: "Figma-UI/UX Design Essential Training", image: card1, lesson: 6, students: 198, category: "Beginner" },
        { title: "Python for Beginners - Learn Programming from scratch", image: card2, lesson: 21, students: 99, category: "Advanced" },
        { title: "How to Market Yourself as a Consultant", image: card3, lesson: 33, students: 64, category: "Beginner" },
        { title: "Mobile App Development with Flutter & Dart (iOS and Android)", image: card4, lesson: 15, students: 215, category: "Beginner" },
        { title: "Learn Figma-UI/UX Design Essential Training", image: card5, lesson: 6, students: 198, category: "Beginner" },
        { title: "Mobile App Development with Flutter & Dart (iOS and Android)", image: card6, lesson: 15, students: 215, category: "Beginner" },
        { title: "Python for Beginners - Learn Programming from scratch", image: card7, lesson: 21, students: 99, category: "Advanced" },
        { title: "How to Market Yourself as a Consultant", image: card8, lesson: 6, students: 198, category: "beginner" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = window.innerWidth < 640 ? 1 : 4; // Adjust based on screen size

    const handleNext = () => {
        if (currentIndex + cardsPerView < cards.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <div  className="relative overflow-hidden px-2 sm:px-5">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${(currentIndex / cardsPerView) * 100}%)`,
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`w-full sm:w-1/4 flex-shrink-0 p-2 sm:p-4`} // Adjust width for mobile
                    >
                        <div className="bg-white w-3/4 ml-12 sm:ml-0 sm:w-full rounded-lg p-4 shadow-lg"  style={{ boxShadow: 'rgba(0, 0, 0, 0.30) 2.4px 2.4px 3.2px' }}>
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-64 mx-auto mb-3 transition-transform transform"
                            />
                            <h3 className="font-bold text-sm mt-3 mb-3 truncate">{card.title}</h3>
                            <div className="flex items-center justify-center text-gray-500 font-bold mb-3 space-x-2 text-xs">
                                <div className="flex items-center">
                                    <i className="bi bi-journal-bookmark-fill text-sm"></i>
                                    <span className="ml-1">Lesson: {card.lesson}</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="bi bi-person-fill text-sm"></i>
                                    <span className="ml-1">Students: {card.students}</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="bi bi-trophy-fill text-sm"></i>
                                    <span className="ml-1">{card.category}</span>
                                </div>
                            </div>
                            <button className="bg-blue-600 text-white hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent px-3 py-2 rounded-md font-medium hover:font-semibold flex items-center justify-center text-sm">
                            Start Course
                            <i className="bi bi-chevron-right ml-1 text-base"></i>
                        </button>
                        </div>
                       
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
                <button
                    onClick={handlePrev}
                    className={`text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-colors duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex === 0}
                >
                    <BsArrowLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className={`text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-colors duration-300 ${currentIndex + cardsPerView >= cards.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex + cardsPerView >= cards.length}
                >
                    <BsArrowRight size={24} />
                </button>
            </div>
        </div>
    );
}

export default Coursecard;
