import React from 'react';

const ArchShape = () => {
  return (
  <div>
    {/* <div className="relative min-h-screen overflow-hidden"> */}
    <div className="relative h-[60%] overflow-hidden">
      {/* Arc (Background) */}
      {/* <div className="absolute inset-0 bg-[#7fb3d5] rounded-b-full opacity-80 w-[70%] h-[130%] -top-[50%] -right-[50%] z-0"></div> */}
      <div className="absolute inset-0 bg-[#7fb3d5] rounded-b-full opacity-80 w-[80%] h-[130%] -top-[50%] left-[50%] transform -translate-x-1/2 z-0"></div>




      {/* Text Section Above the Arc */}
      <div className="relative text-center py-20 z-10 mt-[50px]">
        <h1 className="text-4xl font-serif text-gray-800">
          You’ve never seen
          <br />
           a resume builder this good.
        </h1>
        <p className="text-lg font-roboto text-gray-600 mt-4">
          Every single part of your resume built to impress employers.
        </p>
        <button className="mt-9 bg-[#2471a3] text-white px-6 py-3 rounded-sm text-lg font-medium hover:bg-[#2e86c1]">
          Create My Resume
        </button>
      </div>

      {/* Features Section */}
      <div className="relative flex flex-wrap justify-center gap-8 mt-10 text-center z-10">
        <div className="flex-1 max-w-xs ">
         
          <img src="resume.png" alt="ATS Friendly" class="w-20 h-20 ml-20 " />
          
          <h3 className="text-lg font-semibold mt-4 mr-12">ATS Friendly</h3>
          <p className="text-gray-600 mr-12">No bots will stand in your way.</p>
        </div>
        <div className="flex-1 max-w-xs">
          <img src="satisfied.png" alt="Stunning Visuals" class="w-20 h-20 ml-20 " />
          <h3 className="text-lg font-semibold mt-4 mr-12">Stunning Visuals</h3>
          <p className="text-gray-600 mr-12">Guaranteed to catch the eye.</p>
        </div>
        <div className="flex-1 max-w-xs">
          <img src="type.png" alt="Professional Typography" class="w-20 h-20 ml-20 "/>
          <h3 className="text-lg font-semibold mt-4 mr-12">Professional Typography</h3>
          <p className="text-gray-600 mr-12">Polished look, optimal readability.</p>
        </div>
      </div>
      
    </div>
    <div className='w-[100%] h-[50%] flex justify-center items-center mt-10'>
  <img src="Tech_Savvy.jpg" alt="" class="w-[30%] h-[50%]" />
</div>
    </div>
  );
};

export default ArchShape;


