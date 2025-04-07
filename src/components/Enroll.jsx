import hiring from '../assets/hiring.png';

function Enroll() {
return (
    <div className="bg-[#0057D3] text-white h-24 sm:py-4 px-4 sm:px-8 flex items-center justify-between">
      <div className="flex items-center ">
        <div className=" relative"> 
        <img src={hiring} alt="Bulb Icon" className="w-20 sm:w-28 ml-0 sm:ml-36" />
        </div>
        <span className="lg:text-3xl ml-3 font-semibold">Enroll with us to Enhance your  skills and your career</span>
      </div>
      <button className="border border-white py-1 sm:py-2 px-3 sm:px-4 rounded-md font-semibold text-sm hover:bg-white hover:text-[#0057D3] transition duration-300">
      ENROLL
      </button>
    </div>
  );
}


export default Enroll;