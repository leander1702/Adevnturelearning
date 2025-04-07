import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

const features = [
    { title: "Expert Trainers", desc: "Gain insights from experienced IT professionals.", logo: logo1 },
    { title: "Hands-On Training", desc: "Focused on practical real-world application.", logo: logo2 },
    { title: "Affordable Fees", desc: "Quality education at competitive rates.", logo: logo3 },
    { title: "Relevant Syllabus", desc: "Practical interview questions and real-world scenarios.", logo: logo4 },
    { title: "Placement Support", desc: "Comprehensive interview preparation and assistance.", logo: logo5 },
    { title: "Flexible Schedules", desc: "Online & offline classes to fit your life.", logo: logo1 },
];

function WhyAdventure() {
    return (
        <div className="text-center lg:py-8 bg-gray-100 ">
            {/* Title */}
            <h3 data-aos="fade-up"
                className="font-bold inline-flex items-center justify-center rounded-full   p-2 px-4  lg:text-base "
                style={{ backgroundColor: '#CDD9FF', color: "#0057D3" }}
            >
                WHY ADVENTURE ?
            </h3>
            <h1 data-aos="fade-up" className="pt-4 font-semibold lg:text-3xl   text-black">
                Shape Your Future Through Learning
            </h1>
            <h4 className=" pt-4  font-normal lg:text-lg text-gray-600 text-center ">
                Adventure Learning equips you with tools to shape your future
            </h4>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-6 sm:mt-8 px-6 sm:px-6 md:px-8">
                {features.map((feature, index) => (
                    <div data-aos="zoom-in" 
                        key={index}
                        className="group bg-white rounded-lg p-3  sm:p-6 shadow-md text-center transition-transform transform hover:scale-105 hover:bg-blue-500 flex flex-col justify-between h-full"
                    >
                        {/* Logo Image */}
                        <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center rounded-full mx-auto mb-2 sm:mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-blue-500 bg-[#CDD9FF]">
                            <img
                                src={feature.logo}
                                alt={feature.title}
                                className="w-6 h-8 sm:w-9 sm:h-12 object-contain"
                            />
                        </div>
                        {/* Title */}
                        <h3 className="text-sm sm:text-lg font-semibold text-blue-800 group-hover:text-white transition-all duration-300">
                            {feature.title}
                        </h3>
                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white transition-all duration-300">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyAdventure;