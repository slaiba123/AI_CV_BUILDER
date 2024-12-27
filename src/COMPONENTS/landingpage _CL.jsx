import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArchShape = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Background Arc */}
      <div className="relative h-[60%] overflow-hidden">
        <div className="absolute inset-0 bg-[#7fb3d5] rounded-b-full opacity-80 w-[90%] h-[110%] -top-[50%] left-[50%] transform -translate-x-1/2 z-0"></div>

        {/* Text Section Above the Arc */}
        <div className="relative text-center py-20 z-10 mt-[50px]">
          <h1 className="text-4xl font-serif text-gray-800">
            You’ve never seen
            <br />
            a cover letter builder this effective.
          </h1>
          <p className="text-lg font-roboto text-gray-600 mt-4">
            Build a personalized, professional cover letter that sets you apart.
          </p>
          <button
            className="mt-9 bg-[#2471a3] text-white px-6 py-3 rounded-sm text-lg font-medium hover:bg-[#2e86c1]"
            onClick={() => navigate("/coverletter_input")}
          >
            Create My Cover Letter
          </button>
        </div>

        {/* Features Section */}
        <div className="relative flex flex-wrap justify-center gap-8 mt-10 text-center z-10">
          <div className="flex-1 max-w-xs">
            <img src="custom.png" alt="Customization Options" className="w-20 h-20 ml-20" />
            <h3 className="text-lg font-semibold mt-4 mr-12">Tailored Customization</h3>
            <p className="text-gray-600 mr-12">Edit and personalize with ease.</p>
          </div>
          <div className="flex-1 max-w-xs">
            <img src="communication-skills.png" alt="AI-Generated" className="w-20 h-20 ml-20" />
            <h3 className="text-lg font-semibold mt-4 mr-12">AI-Powered Generation</h3>
            <p className="text-gray-600 mr-12">Let AI craft your perfect letter.</p>
          </div>
          <div className="flex-1 max-w-xs">
            <img src="proofreading.png" alt="Proofreading" className="w-20 h-20 ml-20" />
            <h3 className="text-lg font-semibold mt-4 mr-12">Error-Free Content</h3>
            <p className="text-gray-600 mr-12">Flawless grammar and style.</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-[100%] h-[50%] flex justify-center items-center mt-20 z-10">
          <img src="CL_2.png" alt="Cover Letter Visuals" className="w-[30%] h-[50%]" />
        </div>
      </div>
    </div>
  );
};

export default ArchShape;
