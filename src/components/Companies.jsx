import company1 from '../assets/company1.webp';
import company2 from '../assets/company2.webp'
import company3 from '../assets/company3.webp'
import company4 from '../assets/company4.webp'
import company5 from '../assets/company5.webp'
import company6 from '../assets/company6.webp'
import company7 from '../assets/company7.webp'
import company8 from '../assets/company8.webp'
import company9 from '../assets/company9.webp'
import company10 from '../assets/company10.webp'
import company11 from '../assets/company11.webp'
import company12 from '../assets/company12.webp'
import company13 from '../assets/company13.webp'
import company14 from '../assets/company14.webp'
function Companies(){
     const companies = [
            { name: "Company 1", logo: company1 },
            { name: "Accenture", logo: company2 },
            { name: "Accenture", logo: company3 },
            { name: "Accenture", logo: company4 },
            { name: "Accenture", logo: company5 },
            { name: "Accenture", logo: company6 },
            { name: "Accenture", logo: company7 },
            { name: "Accenture", logo: company8 },
            { name: "Accenture", logo: company9 },
            { name: "Accenture", logo: company10 },
            { name: "Accenture", logo: company11 },
            { name: "Accenture", logo: company12 },
            { name: "Accenture", logo: company13 },
            { name: "Accenture", logo: company14 },
    
        ];
    
    return(
        <>
        <div className="w-full text-center bg-white mb-5">
        <h2 className="text-3xl font-semibold text-[#0057D3] mb-6">
          Top Companies use Adventure Learning for their Enterprises
        </h2>
          <div className="w-full overflow-hidden  mt-4 sm:py-0 bg-[#F4F9FF]">
            <div className="flex w-max animate-marquee space-x-6 sm:space-x-20 mb-4">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="transition-transform hover:scale-110">
                  <img
                    src={company.logo}
                    className="w-16 sm:w-36 mt-3"
                    alt={`${company.name} logo`}
                  />
                </div>
              ))}
            </div>
            </div>
            </div>

        </>
    )
}
export default Companies;