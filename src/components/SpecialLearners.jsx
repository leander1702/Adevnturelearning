import React from 'react';

function SpecialLearners() {
  const learnerCategories = [
    {
      name: 'Embedded System',
      image: 'https://via.placeholder.com/300x200/007bff/ffffff?Text=Embedded+System', // Replace with actual image URL
    },
    {
      name: 'Internet Of Things',
      image: 'https://via.placeholder.com/300x200/6610f2/ffffff?Text=Internet+Of+Things', // Replace with actual image URL
    },
    {
      name: 'Cloud Computing',
      image: 'https://via.placeholder.com/300x200/28a745/ffffff?Text=Cloud+Computing', // Replace with actual image URL
    },
    {
      name: 'Data Analytics',
      image: 'https://via.placeholder.com/300x200/dc3545/ffffff?Text=Data+Analytics', // Replace with actual image URL
    },
    {
      name: 'Java full Stack Developer',
      image: 'https://via.placeholder.com/300x200/fd7e14/ffffff?Text=Java+full+Stack+Developer', // Replace with actual image URL
    },
    {
      name: 'Python developer',
      image: 'https://via.placeholder.com/300x200/17a2b8/ffffff?Text=Python+developer', // Replace with actual image URL
    },
    {
      name: 'Software Testing',
      image: 'https://via.placeholder.com/300x200/6f42c1/ffffff?Text=Software+Testing', // Replace with actual image URL
    },
    {
      name: 'Web Development',
      image: 'https://via.placeholder.com/300x200/e83e8c/ffffff?Text=Web+Development', // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-[#0057D3] mb-2">
          Hire From Our Top level specialized learners
        </h2>
        <p className="text-gray-600 mb-8">Skilled Learners, Ready to Join Your Team.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {learnerCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-auto object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialLearners;