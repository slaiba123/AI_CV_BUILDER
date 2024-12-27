import React, { useState } from "react";

const CL_templates = () => {
  const [zoomImage, setZoomImage] = useState(null);

  const handleZoom = (image) => {
    setZoomImage(image);
  };

  const closeZoom = () => {
    setZoomImage(null);
  };

  const templates = [
    { name: "Decent", src: "decent.png" },
    { name: "Regular", src: "regular.png" },
    { name: "Iconic", src: "iconic.png" },
    { name: "Crisp", src: "crisp.png" },
    { name: "Cubic", src: "cubic.png" },
    { name: "Diamond", src: "diamond.png" },
  ];

  return (
    <>
      <div className="bg-white">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold text-[#1062a6] mb-4">Create a Job-Winning <br />Cover Letter in Minutes</h1>
          <p className="text-xl text-gray-700 mb-8">Create a Job-Winning Cover Letter in Minutes
          Use our professional cover letter templates to create a message that wows employers!</p>

          <div className="flex flex-wrap justify-center gap-8 px-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-72 h-96 shadow-lg overflow-hidden group"
              >
                {/* Resume Image */}
                <img
                  className="h-80 w-full object-contain"
                  src={template.src}
                  alt={template.name}
                />

                {/* Template Name */}
                <div className="absolute bottom-4 text-gray-800 font-medium text-lg">
                  {template.name}
                </div>

                {/* Zoom Icon */}
                <button
                  className="absolute bottom-4 right-4 text-2xl text-gray-700 hover:scale-125 transition-transform"
                  onClick={() => handleZoom(template.src)}
                >
                  🔍
                </button>

                {/* Choose Template Button */}
                <button className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity h-12 w-48 rounded">
                  Choose Template
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Zoom Modal */}
      {zoomImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-4">
            <button
              className="absolute top-2 right-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
              onClick={closeZoom}
            >
              ✕
            </button>
            <img className="max-h-screen max-w-full" src={zoomImage} alt="Zoomed Resume" />
          </div>
        </div>
      )}
    </>
  );
};

export default CL_templates;






