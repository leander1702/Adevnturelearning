// import React from "react";
// import robot from "../assets/robot.png";
// import bulb from "../assets/bulb.png";

// function SelectCourse() {
//     return (
//         <div className="w-full text-center font-sans ">
//             {/* Top section */}
//             <div className="bg-[#0057D3] text-white py-4 flex justify-between items-center px-8 h-auto sm:h-24">
//                 <h1 className="flex items-center justify-between w-full">
//                     <img src={bulb} alt="Bulb Icon" className="w-20 sm:w-36 ml-0 sm:ml-36" />
//                     <span className="flex-1 text-left text-2xl sm:text-2xl font-semibold">
//                         Start your Learning Journey Today!
//                     </span>
//                     <button className="bg-[#0057D3] border border-white text-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
//                         EXPLORE ALL COURSES
//                     </button>
//                 </h1>
//             </div>
//             </div>      
//     );
// }

// export default SelectCourse;

import React from 'react';
import bulb from '../assets/bulb.png'; // Make sure the path is correct

function LearningJourneyBanner() {
  return (
    <div className="bg-[#0057D3] text-white h-24 sm:py-4 px-4 sm:px-8 flex items-center justify-between">
      <div className="flex items-center ">
        <div className=" relative"> 
        <img src={bulb} alt="Bulb Icon" className="w-20 sm:w-36 ml-0 sm:ml-36" />
        </div>
        <span className="lg:text-3xl font-semibold">Start your Learning Journey Today!</span>
      </div>
      <button className="border border-white py-1 sm:py-2 px-3 sm:px-4 rounded-md font-semibold text-sm hover:bg-white hover:text-[#0057D3] transition duration-300">
        EXPLORE ALL COURSES
      </button>
    </div>
  );
}

export default LearningJourneyBanner;
