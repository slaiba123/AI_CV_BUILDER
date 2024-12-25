import React from "react";
import { useInView } from "react-intersection-observer";
const TargetResume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger only once when the element comes into view
    threshold: 0.3,     // Trigger when 30% of the element is visible
  });

  return (
    <div className="bg-[#7fb3d5] py-16">
      {/* Container */}
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Image */}
        <div className="flex justify-center">
          <img
            ref={ref}
            src="/social4_01-Photoroom.png"
            alt="Resume targeting illustration"
            className={`w-[300px] md:w-[400px] transition-all duration-1000 ease-in-out ${inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
          />
        </div>

        {/* Heading with typing effect */}
        <h2 
          ref={ref}
          className={`text-2xl md:text-3xl font-bold text-gray-800 mt-8 overflow-hidden inline-block whitespace-nowrap animate-typewriter`}
        >
          Streamlined Recruitment with AI-Driven Tools
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed">
          The platform streamlines hiring with AI-powered screening, relevance scoring, and advanced search tools, enabling targeted candidate matching and job description optimization. It offers insights into the talent pipeline and simplifies team decision-making through integrated tools for shortlisting, collaboration, and feedback.
        </p>
        <p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed">
          With LinkedIn sync, ATS integration, automated communication, and analytics for metrics like time-to-hire. Features like customizable job boards, candidate notifications, and AI-assisted CV analysis ensure efficient talent engagement and onboarding.
        </p>

        {/* Button */}
        <button className="mt-8 bg-[#2e93db] text-white px-6 py-3 rounded-md text-lg hover:bg-[#1062a6]">
          Let’s Build Your Team
        </button>
      </div>
    </div>
  );
};

export default TargetResume;
