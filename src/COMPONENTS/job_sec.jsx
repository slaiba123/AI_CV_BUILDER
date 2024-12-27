import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobSection = () => {
  const navigate = useNavigate(); // React Router for navigation

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      {/* Larger Inside Div */}
      <div className="flex flex-col md:flex-row items-center bg-blue-50 p-14 rounded-lg shadow-lg max-w-5xl mx-auto min-h-[450px]">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Discover Your Next Big Opportunity!
          </h1>
          <p className="text-gray-700 mb-6">
            Unlock a world of opportunities tailored to your skills and preferences. Let us help you
            navigate the path to success with jobs designed just for you.
          </p>
          <button
            onClick={() => navigate('/jobs')} // Redirect to the jobs page
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Let’s Explore the Jobs
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="rel_job.png" // Image source
            alt="Job Opportunities"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default JobSection;
