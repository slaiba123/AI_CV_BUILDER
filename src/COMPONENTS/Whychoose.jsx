import React, { useEffect } from "react";
import "./whychoose.css"; // Import your CSS file here

const WhyChoose = () => {
  const cardData = [
    {
      title: "AI-Powered CV Builder",
      description:
        "Streamline the process of creating professional CVs and cover letters using state-of-the-art AI technologies. Input career details, select from various CV formats, and let AI enhance your resume and cover letters.",
      highlight: "Professional and Intelligent CV Building",
      media: "ehance.jpeg",
      isVideo: false,
      reverse: false,
    },
    {
      title: "User-Friendly CV Creation",
      description:
        "Easily input your personal and professional information, select customizable CV templates, and generate resumes tailored to your needs.",
      highlight: "User-Centric Design",
      media: "User_friendly.jpeg",
      isVideo: false,
      reverse: true,
    },
    {
      title: "AI-Based Cover Letters",
      description:
        "Generate cover letters aligned with your job applications. AI tools help draft personalized letters, which can be customized further to reflect your unique voice.",
      highlight: "Tailored Cover Letter Generation",
      media: "AI_cv.jpeg",
      isVideo: false,
      reverse: false,
    },
    {
      title: "Resume Enhancement",
      description:
        "Optimize your CV content with AI tools that analyze job descriptions to recommend relevant keywords, improve grammar, and enhance style. Generate impactful statements effortlessly.",
      highlight: "Keyword Optimization and Style Suggestions",
      media: "AIenhancer.jpeg",
      isVideo: false,
      reverse: true,
    },
    {
      title: "Job Description Matching",
      description:
        "Use AI to match your CV with job descriptions, providing a relevance score and actionable recommendations for improvement.",
      highlight: "CV Alignment with Job Requirements",
      media: "desc_matching.jpeg",
      isVideo: false,
      reverse: false,
    },
    {
      title: "Personalized Job Recommendations",
      description:
        "Discover relevant job opportunities based on your skills, preferences, and career goals. AI-powered suggestions ensure you never miss the perfect fit.",
      highlight: "Tailored Job Matching",
      media: "personalizedjob.jpeg",
      isVideo: false,
      reverse: true,
    },
    {
      title: "LinkedIn Integration",
      description:
        "Seamlessly import your LinkedIn profile to pre-fill CV details and ensure consistency. Keep your profile updated across platforms effortlessly.",
      highlight: "Integrated and Consistent CV Creation",
      media: "linkedinintegrate.jpeg",
      isVideo: false,
      reverse: false,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".card"); // Select all card elements
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Check if the card is in the viewport
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          card.classList.add("visible"); // Add the 'visible' class to trigger the animation
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Trigger the scroll handler once on mount to handle any already visible cards
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="why-choose">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`card flex ${
            card.reverse ? "flex-row-reverse" : "flex-row"
          } justify-between items-center bg-white shadow-lg rounded-lg p-6 mx-4 my-6 md:mx-10`}
        >
          {/* Media Section (Video or Image) */}
          <div className="w-1/3">
            {card.isVideo ? (
              <video
                src={card.media}
                controls
                className="w-full h-auto rounded-lg"
              ></video>
            ) : (
              <img
                src={card.media}
                alt="Illustration"
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>

          {/* Content Section */}
          <div className="w-2/3 pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {card.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {card.description}{" "}
              <span className="text-blue-500 underline">{card.highlight}</span>.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
