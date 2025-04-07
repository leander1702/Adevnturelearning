import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.course) newErrors.course = "Course selection is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div  className="bg-gray-50 flex items-center justify-center py-6 px-4 md:px-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-blue-100 to-blue-50">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0057D3] mb-4 md:mb-6">
            Don't Worry, Just Simple<span className="block">Step To Enroll</span>
          </h2>
          <p className="text-sm md:text-base text-gray-700 font-medium mb-4 md:mb-6">
            Getting started is easier than ever! Follow these simple steps and begin your learning journey today.
          </p>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start space-x-3 md:space-x-4">
              <i className="bi bi-file-earmark-text text-white text-lg md:text-xl flex items-center justify-center rounded-full bg-blue-600 w-9 h-8 md:w-10 md:h-10"></i>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#0057D3]">Fill in your details</h3>
                <p className="text-xs md:text-sm text-gray-600">Provide your basic information to get started. It’s quick and easy!</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4">
              <i className="bi bi-check-lg text-white text-lg md:text-xl flex items-center justify-center rounded-full bg-blue-600 w-8 h-8 md:w-10 md:h-10"></i>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#0057D3]">Complete the enrollment process</h3>
                <p className="text-xs md:text-sm text-gray-600">Confirm your registration in just a few clicks. No hassle!</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4 pt-2 md:pt-4">
              <i className="bi bi-hand-thumbs-up text-white text-lg md:text-xl flex items-center justify-center rounded-full bg-blue-600 w-10 h-8 md:w-10 md:h-10"></i>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#0057D3]">Start learning & upskill yourself</h3>
                <p className="text-xs md:text-sm text-gray-600">Access courses, gain new skills, and advance your career effortlessly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-4 md:p-6 mt-2 bg-white">
          <h2 className="text-base md:text-lg font-bold text-[#0057D3] mb-4 md:mb-6">
            Enter Your Details to Learn more
          </h2>
          <form className="space-y-2 mt-2 md:mt-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-gray-700 font-medium text-xs md:text-sm mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="outline-none border-2 border-gray-300 rounded-lg p-2 w-full text-xs md:text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-gray-50 shadow-sm transition duration-300"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-xs md:text-sm mb-1" htmlFor="phone">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="outline-none border-2 border-gray-300 rounded-lg p-2 w-full text-xs md:text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-gray-50 shadow-sm transition duration-300"
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-gray-700 font-medium text-xs md:text-sm mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="outline-none border-2 border-gray-300 rounded-lg p-2 w-full text-xs md:text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-gray-50 shadow-sm transition duration-300"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-xs md:text-sm mb-1" htmlFor="course">
                  Select Your Course
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="outline-none border-2 border-gray-300 rounded-lg p-2 w-full text-xs md:text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 shadow-sm transition duration-300"
                >
                  <option value="">Choose a course</option>
                  <option value="InternetofThings">Internet of Things</option>
                  <option value="EmbeddedSystem">Embedded System</option>
                  <option value="FullStack">Full Stack</option>
                  <option value="DataScience">Data Science</option>
                  <option value="CloudComputing">Cloud Computing</option>
                  <option value="DataAnalytics">Data Analytics</option>
                </select>
                {errors.course && <p className="text-red-500 text-xs">{errors.course}</p>}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium text-xs md:text-sm mb-1" htmlFor="comments">
                Your Questions or Expectations
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Share your thoughts with us!"
                className="outline-none border-2 border-gray-300 rounded-lg p-2 w-full h-24 text-xs md:text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-gray-50 shadow-sm transition duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#0057D3] border border-white text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-white hover:text-blue-600 hover:border-[#0057D3] transition duration-300"
            >
              Enroll
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Form;
