import React from "react";

const CLSteps = () => {
  const steps = [
    {
      title: "Personalize Your Letter",
      description:
        "Answer a few questions about the job, your unique skills, and your background.",
    },
    {
      title: "Make It Stand Out",
      description:
        "We craft a professional cover letter and offer customization options to fit your needs.",
    },
    {
      title: "Apply to the Job",
      description:
        "Download your cover letter and ensure it's tailored for every job application.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 flex gap-5 flex-col md:flex-row">
      {/* Left side: Space for Image Upload */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        {/* Image with adjusted height and rounded corners */}
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="CL_Steps.png"
            alt="cover letter"
            className="w-full h-auto md:h-[600px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right side: Cover Letter Steps (Vertical) */}
      <div className="md:w-1/2">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Create a Cover Letter</h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow these steps to craft a professional cover letter effortlessly.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-lg shadow-sm transition-all hover:bg-blue-500 hover:text-white"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CLSteps;
