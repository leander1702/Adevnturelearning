import React, { useState } from 'react';
import { ChevronDownIcon, CodeBracketIcon, CpuChipIcon, GlobeAltIcon, CloudIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import img1 from '../../../assets/Course/Coding.gif';
const AccordionList = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-md shadow-sm">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center space-x-2">
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </div>
            <ChevronDownIcon
              className={`h-5 w-5 transition-transform duration-200 ${openItem === index ? 'transform rotate-180' : ''}`}
            />
          </div>
          {openItem === index && (
            <div className="p-4 border-t text-gray-700">
              <ol className="list-decimal list-inside space-y-2">
                {item.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AccordionComponent = () => {
  const accordionItems = [
    {
      title: 'Introduction to Full Stack Development',
      steps: [
        'Understand the role of a Full Stack Developer.',
        'Learn about the layers of a web application: Front-end, Back-end, Database.',
        'Overview of technologies used in the course.',
        'Set up your development environment.',
        'Learn best practices for clean and maintainable code.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Core Java Fundamentals',
      steps: [
        'Learn data types, variables, and operators.',
        'Understand control flow statements.',
        'Explore Object-Oriented Programming (OOP) concepts.',
        'Learn about classes, objects, inheritance, and polymorphism.',
        'Handle exceptions in Java.',
      ],
      icon: <CpuChipIcon className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Advanced Java Concepts',
      steps: [
        'Explore multithreading and concurrency.',
        'Learn about the Collections Framework.',
        'Understand I/O operations.',
        'Learn network programming in Java.',
        'Explore design patterns and best practices.',
      ],
      icon: <CodeBracketIcon className="h-6 w-6 text-purple-500" />,
    },
    {
      title: 'Front-End Development',
      steps: [
        'Learn HTML for structuring web content.',
        'Style web pages with CSS.',
        'Add interactivity with JavaScript.',
        'Learn responsive web design.',
        'Explore modern JavaScript frameworks like React.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Back-End Development with Java',
      steps: [
        'Build back-end applications using Java and Spring Boot.',
        'Create RESTful APIs.',
        'Handle database interactions.',
        'Implement authentication and authorization.',
        'Deploy applications to production environments.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Full-Stack Integration',
      steps: [
        'Connect React front-end to Java back-end using RESTful APIs.',
        'Understand data flow and state management.',
        'Handle asynchronous operations.',
        'Build complete full stack web applications.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Version Control & DevOps Basics',
      steps: [
        'Master version control with Git.',
        'Learn Git workflows, branching, and merging.',
        'Understand DevOps practices.',
        'Automate build, test, and deployment with Jenkins and Docker.',
        'Prepare for professional development environments.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-gray-500" />,
    },
    {
      title: 'Final Capstone Project & Deployment',
      steps: [
        'Plan and design a real-world capstone project.',
        'Develop a complete web application.',
        'Apply best practices for production-ready applications.',
        'Deploy the application to cloud platforms like AWS or Heroku.',
        'Showcase your full stack capabilities.',
      ],
      icon: <CloudIcon className="h-6 w-6 text-teal-500" />,
    },
  ];

  return (
    <div className="container-fluid mx-auto my-10">
       <div className={`grid grid-cols-1 md:grid-cols-2 gap-4  p-10 rounded-md `}>
         <div className='bg-white rounded-md '>
                <AccordionList items={accordionItems} />
         </div>
         <div className=' bg-inherit   flex items-center justify-center'>
             <img src={img1} alt="" className='w-96 h-96' />
         </div>
     
       </div>
    </div>
  );
};

export default AccordionComponent;