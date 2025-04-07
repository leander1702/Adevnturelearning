import React, { useState } from 'react';
import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import course4 from '../assets/course4.png';
import course5 from '../assets/course5.png';
import course6 from '../assets/course6.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const TrendingtechCards = () => {
  const cards = [
    { title: "INTERNET OF THINGS", image: course1, desc: "Connect, Innovate & Transform" },
    { title: "EMBEDDED SYSTEM", image: course2, desc: " From Sensors to Smart Solutions" },
    { title: "DATA SCIENCE", image: course3, desc: "Unlock the Power of Big Data" },
    { title: "FULL STACK", image: course4, desc: " Full Stack Mastery Starts Here" },
    { title: "DATA ANALYTICS", image: course5, desc: "From Data to Actionable Insights" },
    { title: "CLOUD COMPUTING", image: course6, desc: "Elevate Your Tech with the Cloud" },
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
    <div   className="relative overflow-hidden px-2 sm:px-5">
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
            <div className="bg-white border border-1 border-gray-300 rounded-lg items-center overflow-hidden text-left shadow-md p-3">
              <img src={card.image} alt={card.title} className="w-full object-cover rounded-lg" />
              <div className="p-4">
                <h3 className="text-base font-semibold mb-2">{card.title}</h3>
                <p className="font-medium text-sm text-[#0057D3]">{card.desc}</p>
                <div className="flex flex-col-2 sm:flex-row gap-2 sm:gap-4 mt-3 items-center">
                  <button className="bg-blue-600 border border-white text-white px-3 py-2 rounded-md font-normal hover:border-[#0057D3] hover:bg-white hover:text-blue-600 transition duration-300">
                    Demo Class
                  </button>
                  <button className="bg-gray-500 border border-white text-white px-3 py-2 rounded-md font-normal hover:border-[#0057D3] hover:bg-white hover:text-blue-600 transition duration-300">
                    Know More
                  </button>
                </div>
              </div>
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
};

export default TrendingtechCards;