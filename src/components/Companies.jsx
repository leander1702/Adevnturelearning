import React from 'react';
import company1 from '../assets/company1.webp';
import company2 from '../assets/company2.webp';
import company3 from '../assets/company3.webp';
import company4 from '../assets/company4.webp';
import company5 from '../assets/company5.webp';
import company6 from '../assets/company6.webp';
import company7 from '../assets/company7.webp';
import company8 from '../assets/company8.webp';


function Companies() {
  const companies = [
    { name: "Company 1", logo: company1 },
    { name: "Accenture", logo: company2 },
    { name: "Accenture", logo: company3 },
    { name: "Accenture", logo: company4 },
    { name: "Accenture", logo: company5 },
    { name: "Accenture", logo: company6 },
    { name: "Accenture", logo: company7 },
    { name: "Accenture", logo: company8 },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0057D3] mb-2">
            Top companies use Adventure Learning for their enterprises
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-center items-center w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 w-3/4">We’re Growing Strong with Thousands of Partners</h3>
            <p className="text-gray-600  w-3/4">
            Our rapidly expanding network connects more partners, creating greater opportunities for collaboration, innovation, and success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-2 items-center w-3/4">
            {/* Loop through companies array */}
            {companies.map((company, index) => (
              <div key={index} className=" justify-center items-center  w-full ">
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {/* Students */}
          <div className="flex flex-col items-center">
            <div className="rounded-full text-purple-600 p-3 ">
            <i class="bi bi-person-circle text-2xl"></i>
            </div>
            <strong className="text-2xl font-bold text-gray-800">67.1k</strong>
            <span className="text-gray-500 text-sm">Students</span>
          </div>

          {/* Certified Instructor */}
          <div className="flex flex-col items-center">
            <div className="rounded-full  text-blue-600 p-3 ">
            <i class="bi bi-book text-2xl"></i>
            </div>
            <strong className="text-2xl font-bold text-gray-800">26k</strong>
            <span className="text-gray-500 text-sm">Certified Instructor</span>
          </div>

          {/* Country Language */}
          <div className="flex flex-col items-center">
            <div className="rounded-full  text-red-600 p-3 ">
            <i class="bi bi-globe2 text-2xl"></i>
            </div>
            <strong className="text-2xl font-bold text-gray-800">72</strong>
            <span className="text-gray-500 text-sm">Country Language</span>
          </div>

          {/* Success Rate */}
          <div className="flex flex-col items-center">
            <div className="rounded-full  text-green-600 p-3 ">
            <i class="bi bi-check2-circle text-2xl"></i>
            </div>
            <strong className="text-2xl font-bold text-gray-800">99.9%</strong>
            <span className="text-gray-500 text-sm">Success Rate</span>
          </div>

          {/* Trusted Companies */}
          <div className="flex flex-col items-center">
            <div className="rounded-full  text-yellow-600 p-3 ">
            <i class="bi bi-building-gear text-2xl"></i>
            </div>
            <strong className="text-2xl font-bold text-gray-800">57</strong>
            <span className="text-gray-500 text-sm">Trusted Companies</span>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Companies;
