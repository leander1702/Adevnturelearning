import React from 'react';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import course4 from '../assets/course4.png';
import course5 from '../assets/course5.png';
import course6 from '../assets/course6.png';

function SpecialLearners() {
  const learnerCategories = [
    {
      name: 'Embedded System',
      image: course2,
    },
    {
      name: 'Full Stack',
      image: course4,
    },
    {
      name: 'Cloud Computing',
      image: course6,
    },
    {
      name: 'Data Analytics',
      image: course5,
    },
    {
      name: 'Java Full Stack Developer',
      image: 'https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp',
    },
    {
      name: 'Python Developer',
      image: 'https://img.freepik.com/premium-photo/python-programming-language-programing-workflow-abstract-algorithm-concept-virtual-screen_161452-10951.jpg?w=1380',
    },
    {
      name: 'Software Testing',
      image: 'https://www.keenesystems.com/hs-fs/hubfs/software-testing.jpg?width=900&name=software-testing.jpg',
    },
    {
      name: 'Web Development',
      image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1744005662~exp=1744009262~hmac=3930b5adb150e5330917d0df67926a3129a58511e4c1d7b1f0f4fb1f62a7e5e7&w=996',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="sm:text-3xl font-semibold text-[#0057D3] mb-2">
          Hire From Our Top-Level Specialized Learners
        </h1>
        <p className="text-lg text-gray-700 mb-8">Skilled Learners, Ready to Join Your Team.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {learnerCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-44 object-cover rounded-t-md"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm mt-2">
                  Explore industry-level projects and courses in {category.name}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialLearners;
