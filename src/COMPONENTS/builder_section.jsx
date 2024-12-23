import React from "react";

const BuilderSection = () => {
  return (
    <div className="min-h-screen bg-[#1062a6] flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif">
            Start your journey with Resumecraft
          </h2>
          <p className="text-lg leading-relaxed font-roboto">
            Showcase your journey with a professionally designed resume and cover letter. Imagine a sleek resume that highlights your unique strengths and a cover letter that tells your story with confidence. Picture yourself taking the next step toward your career aspirations with polished, impactful documents. Our service empowers you to stand out, grab attention, and leave a lasting impression.
          </p>
          <p className="text-lg font-serif">Way To Opportunities.</p>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Resume Image */}
          <div className="relative z-0 mb-[70px]">
            <img
              src="resume.jpg"
              alt="Resume"
              className="w-60 md:w-72 h-[320px] object-cover rounded-lg"
            />
          </div>

          {/* Cover Letter Image */}
          <div className="absolute top-[0] z-10" style={{ right: "-25px" }}> {/* Move cover letter image 50px to the right */}
            <img
              src="coverletter.png"
              alt="Cover Letter"
              className="w-72 md:w-80 h-[400px] object-cover rounded-lg"
              style={{ top: "-100px" }} // Overlap with resume image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderSection;






