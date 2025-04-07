import enquiry1 from '../assets/enquiry1.png';
import career4 from '../assets/career4.png';
import career2 from '../assets/career2.png';

function LookingFor() {
  return (
    <>
      <div className="text-center pt-12 pb-10 bg-blue-100">
        <div>
          <h1 data-aos="fade-down" className="font-semibold text-2xl sm:text-3xl mt-5 text-[#0057D3]">
            Hey Learners, Welcome to Adventure Learning!
          </h1>
        </div>

        <div className="p-4">
          <h4 className="font-normal text-base sm:text-lg text-gray-600 text-center">
            What Are You Looking For?
          </h4>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4">
          {/* Container for all cards */}
          <div data-aos="zoom-in" className="flex items-center bg-white text-[#0057D3] hover:bg-blue-500 hover:text-white border rounded-lg p-4 w-full sm:w-64 shadow hover:scale-105 transition duration-300 ease-in-out">
            <img src={career2} alt="Upskill Illustration" className="w-12 mr-4" />
            <div className="flex items-center justify-between w-full">
              <p className="text-base sm:text-base font-semibold">
                I want to upskill in my current career
              </p>
              <span className="text-2xl text-blue-500">&rarr;</span>
            </div>
          </div>

          <div data-aos="zoom-in" className="flex items-center bg-white text-[#0057D3] hover:bg-blue-500 hover:text-white border rounded-lg p-4 w-full sm:w-64 shadow hover:scale-105 transition duration-300 ease-in-out">
            <img src={enquiry1} alt="Enquiry Illustration" className="w-12 mr-4" />
            <div className="flex items-center justify-between w-full">
              <p className="text-base sm:text-base font-semibold">Make an Enquiry</p>
              <span className="text-2xl text-blue-500">&rarr;</span>
            </div>
          </div>

          <div data-aos="zoom-in" className="flex items-center bg-white text-[#0057D3] hover:bg-blue-500 hover:text-white border rounded-lg p-4 w-full sm:w-64 shadow hover:scale-105 transition duration-300 ease-in-out">
            <img src={career4} alt="New Career Illustration" className="w-12 mr-4" />
            <div className="flex items-center justify-between w-full">
              <p className="text-base sm:text-base font-semibold">
                I want to find a new career
              </p>
              <span className="text-2xl text-blue-500">&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LookingFor;