import React from 'react';

function CallToAction() {
  return (
    <div className="bg-blue-600 py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-white text-lg mb-2">
          To Know More About Corporate Training Call Us On:
        </p>
        <a
          href="tel:+919884445571"
          className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
        >
          +91-9884445571
        </a>
      </div>
    </div>
  );
}

export default CallToAction;