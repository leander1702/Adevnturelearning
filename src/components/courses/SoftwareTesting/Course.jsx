import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../Navbar";
import Banner from "./Banner";
import CourseOverview from "./CourseOverview";
import AccordionComponent from "./AccordionComponent";
import TrainerProfile from "./TrainerProfile";
import CourseSyllabus from "./CourseSyllabus";
import Batch from "./Batch";
import Certificate from "../Certificate";
import Review from "../Review";

import WhyChoose from "./WhyChoose";

const Course = () => {
  const { courseId } = useParams();
  return (
    <>
      <Banner />
      <WhyChoose />
      <Navbar />
      <div
        id="course"
        className="container-fluid rounded-lg mx-auto  mt-3 bg-gray-100 shadow-lg "
      >
        <h1 className="text-3xl font-semibold  text-[#0057D3] p-6  text-center">
          Course Overview
        </h1>
        <hr className="border-t-2 border-[#0057D3] mx-auto w-1/2" />
        <CourseOverview />
      </div>
      <div id="trainer" className="container-fluid rounded mx-auto px-4">
        <h1 className="text-3xl font-semibold  text-center text-[#0057D3] p-6">
          Trainer Profile
        </h1>
        <hr className="border-t-2 border-[#0057D3] mx-auto w-1/2 " />
        <TrainerProfile />
      </div>

      <div
        id="syllabus"
        className="container-fluid rounded-lg mx-auto px-4 bg-white shadow-lg bg-img  "
      >
        <h1 className="text-3xl font-semibold  text-[#0057D3] p-6  text-center">
          Syllabus
        </h1>
        <hr className="border-t-2 border-[#0057D3] mx-auto w-1/2" />
        <AccordionComponent />
        {/* <CourseSyllabus /> */}
      </div>
     
      <div
        id="batches"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-3xl font-semibold  text-center text-[#0057D3] p-6">
          Upcoming Batches
        </h1>
        <hr className="border-t-2 border-[#0057D3] mx-auto w-1/2 " />
        <Batch />
      </div>
      <div
        id="certificate"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-3xl font-semibold  text-center text-[#0057D3] p-6">
          Certificate
        </h1>
        <hr className="border-t-2 border-[#0057D3] mx-auto w-1/2 " />
        <Certificate />
      </div>
      <div
        id="review"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-3xl font-semibold  text-center text-[#0057D3] p-6">
          Our learners Thought
        </h1>
        <hr className="border-t-2 border-[#0057D3] mx-auto w-1/2 " />
        <Review />
      </div>
    </>
  );
};

export default Course;
