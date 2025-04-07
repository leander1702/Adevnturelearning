import React from 'react';

function LearnerToExpert() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6">
          From Learner to Industry Expert
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          At Adventure Learning, we don't just teach - we mentor, shape, and launch careers. Our
          expert-level training and placement support ensures every learner becomes job-ready for top
          MNCs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Industry-Level Training Card */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Industry-Level Training
            </h3>
            <p className="text-gray-600 text-sm">
              Our hands-on curriculum includes real-world projects, industry use-cases, and tools used
              by professionals in companies like Google, Infosys, and TCS.
            </p>
          </div>

          {/* Mentorship & Mock Interviews Card */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Mentorship & Mock Interviews
            </h3>
            <p className="text-gray-600 text-sm">
              1:1 mentorship from seasoned experts, mock interviews with hiring managers, and feedback
              sessions to sharpen your communication and problem-solving skills.
            </p>
          </div>

          {/* Placement & Career Launch Card */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Placement & Career Launch
            </h3>
            <p className="text-gray-600 text-sm">
              We partner with leading MNCs for placement drives and guarantee interview
              opportunities. Resume building, LinkedIn branding, and continuous career support
              included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnerToExpert;