// import React, { useState } from "react";

// const ResumePage = () => {
//   const [zoomImage, setZoomImage] = useState(null);

//   const handleZoom = (image) => {
//     setZoomImage(image);
//   };

//   const closeZoom = () => {
//     setZoomImage(null);
//   };

//   const templates = [
//     { name: "Classic Elegance", src: "Classic_Elegance.jpg" },
//     { name: "Bold Statement", src: "Bold_Statement.jpg" },
//     { name: "Minimalist Focus", src: "Minamilist_focus.jpg" },
//     { name: "Creative Flair", src: "creative_flair.jpg" },
//     { name: "Tech Savvy", src: "Tech_Savvy.jpg" },
//     { name: "Modern Edge", src: "Modern_Edge.jpg" },
//   ];

//   return (
//     <>
//       <div className="bg-white">
//         <section className="text-center py-16">
//           <h1 className="text-4xl font-bold text-[#1062a6] mb-4">Resume Builder</h1>
//           <p className="text-xl text-gray-700 mb-8">Select your favorite template to begin!</p>

//           <div className="flex flex-wrap justify-center gap-8 px-8">
//             {templates.map((template, index) => (
//               <div
//                 key={index}
//                 className="relative flex flex-col items-center w-72 h-96 shadow-lg overflow-hidden group"
//               >
//                 {/* Resume Image */}
//                 <img
//                   className="h-80 w-full object-contain"
//                   src={template.src}
//                   alt={template.name}
//                 />

//                 {/* Template Name */}
//                 <div className="absolute bottom-4 text-gray-800 font-medium text-lg">
//                   {template.name}
//                 </div>

//                 {/* Zoom Icon */}
//                 <button
//                   className="absolute bottom-4 right-4 text-2xl text-gray-700 hover:scale-125 transition-transform"
//                   onClick={() => handleZoom(template.src)}
//                 >
//                   🔍
//                 </button>

//                 {/* Choose Template Button */}
//                 <button className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity h-12 w-48 rounded">
//                   Choose Template
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* Zoom Modal */}
//       {zoomImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="relative bg-white rounded-lg p-4">
//             <button
//               className="absolute top-2 right-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
//               onClick={closeZoom}
//             >
//               ✕
//             </button>
//             <img className="max-h-screen max-w-full" src={zoomImage} alt="Zoomed Resume" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ResumePage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const ResumePage = () => {
  const [zoomImage, setZoomImage] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null); // Track selected template
  const navigate = useNavigate(); // Initialize navigate function

  const handleZoom = (image) => {
    setZoomImage(image);
  };

  const closeZoom = () => {
    setZoomImage(null);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template); // Update selected template state
    console.log(template);
    navigate(`/${template}_input`, { state: { selectedTemplate} }); // Redirect to the input form page with the selected template
  };

  const templates = [
    { name: "Classic", src: "Classic_Elegance.jpg" },
    { name: "Bold", src: "Bold_Statement.jpg" },
    { name: "Minimalist", src: "Minamilist_focus.jpg" },
    { name: "Creative", src: "creative_flair.jpg" },
    { name: "Tech", src: "Tech_Savvy.jpg" },
    { name: "Modern", src: "Modern_Edge.jpg" },
  ];

  return (
    <>
      <div className="bg-white">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold text-[#1062a6] mb-4">Resume Builder</h1>
          <p className="text-xl text-gray-700 mb-8">Select your favorite template to begin!</p>

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
                <button
                  className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity h-12 w-48 rounded"
                  onClick={() => handleTemplateSelect(template.name)} // Call handleTemplateSelect on click
                >
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

export default ResumePage;






