import React from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
const Intro = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative h-[100%]">
        {/* Arc (Background) */}
        <div className="absolute inset-0 bg-[#7fb3d5] rounded-b-full opacity-80 w-[100%] h-[150%] -top-[40%] left-[20%] transform -translate-x-1/2 z-[-10]"></div>

        {/* Text and Image Section */}
        <div className="relative z-10 flex h-full items-center  ">
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center items-start  px-10">
            <h1 className='text-3xl mb-2'>Unlock Your Dream Job with Our AI-Powered CV Builder!</h1>
            <p className="text-l font-serif text-gray-700">
              Looking to stand out in today’s job market? Our AI-Powered CV Builder streamlines resume and cover letter creation with advanced AI tools.
              Effortlessly input your details, choose professional templates, and let AI enhance your CV with impactful statements,
              grammar suggestions, and keyword optimization. Generate tailored cover letters, match your resume to job descriptions, 
              and receive personalized job recommendations—all in one place. Plus, seamlessly sync your LinkedIn profile for consistency.
            </p>
            <p className="text-lg font-roboto mt-4 overflow-hidden inline-block whitespace-nowrap animate-typewriter text-blue-800">
            Get started today and turn opportunities into offers!
            </p>

            <button className="mt-9 bg-[#2471a3] text-white px-6 py-3 rounded-sm text-lg font-medium hover:bg-[#2e86c1]" onClick={() => navigate("/Signup")}>
              Let's get started!
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center mt-20">
            <img src="/introimg.png" alt="" className="w-[70%] h-[600px] object-contain rounded-lg border-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
