import React from "react";

const Rec_intro = () => {
  return (
    <div className="bg-[#3E5879] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-x-20">
        {/* Left Section */}
        <div className="mb-8 lg:mb-0 lg:max-w-md mr-20">
          <h1 className="text-4xl font-bold mb-4">Get started with ResumeCraft</h1>
          <p className="text-lg mb-6 text-justify">
            Our platform revolutionizes the hiring process by offering cutting-edge tools to make finding the perfect candidate faster and more efficient. With intelligent CV scoring, visual feedback on skills, actionable improvement recommendations, and AI-powered search and filter options, we empower recruiters to focus on what truly matters—connecting with the right talent. Compare candidates effortlessly, uncover key insights at a glance, and ensure every hiring decision is backed by data-driven precision. Ready to transform the way you recruit?
          </p>
          <a
            href="#features"
            className="text-white font-semibold hover:underline flex items-center"
          >
            Let's start Recruiting
            <span className="ml-2">→</span>
          </a>
        </div>
        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <img src="upload.png" alt="Upload" className="w-16 h-16" />
            <p className="text-left">Job Description & CV Upload</p>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <img src="Ranking.png" alt="Ranking" className="w-16 h-16" />
            <p className="text-left">Ranking based on Job Description Matching</p>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <img src="rejection.png" alt="Rejection" className="w-16 h-16" />
            <p className="text-left">
              Automated Resume Rejection Based on Job Description
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex items-center gap-4">
            <img src="comparison.png" alt="Comparison" className="w-16 h-16" />
            <p className="text-left">Candidate Comparison</p>
          </div>
          {/* Feature 5 */}
          <div className="flex items-center gap-4">
            <img src="search.png" alt="Search" className="w-16 h-16" />
            <p className="text-left">AI-Powered Search & Filter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rec_intro;
