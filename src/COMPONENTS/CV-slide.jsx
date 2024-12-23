import React, { useState } from "react";


function CVslide() {
  const images = [
    { src: "/Bold_Statement.jpg", alt: "Resume 1", label: "Jane Jackson" },
    { src: "/Classic_Elegance.jpg", alt: "Resume 2", label: "Donna Vader" },
    { src: "/Modern_Edge.jpg", alt: "Resume 3", label: "Larry Bear" },
    { src: "/Bold_Statement.jpg", alt: "Resume 1", label: "Jane Jackson" },
    { src: "/Classic_Elegance.jpg", alt: "Resume 2", label: "Donna Vader" },
    { src: "/Modern_Edge.jpg", alt: "Resume 3", label: "Larry Bear" },
    { src: "/Bold_Statement.jpg", alt: "Resume 1", label: "Jane Jackson" },
    { src: "/Classic_Elegance.jpg", alt: "Resume 2", label: "Donna Vader" },
    { src: "/Modern_Edge.jpg", alt: "Resume 3", label: "Larry Bear" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to calculate styles for each image
  const calculateStyles = (index) => {
    const isCenter = index === currentIndex; // Center image
    const leftIndex = (currentIndex - 1 + images.length) % images.length; // Previous image
    const rightIndex = (currentIndex + 1) % images.length; // Next image

    if (isCenter) {
      return "transform scale-150 z-20 opacity-100"; // Enlarge the center image
    } else if (index === leftIndex || index === rightIndex) {
      return "transform scale-125 z-10 opacity-90"; // Slightly enlarged for adjacent images
    } else {
      return "transform scale-100 z-0 opacity-70"; // Standard size for distant images
    }
  };

  // Update index for next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Update index for previous image
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Customizable Resume Templates</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Here’s a million design combinations. Do what you want.<br />
        Whether you’re a nurse or engineer, your resume will always stand out.
      </p>

      {/* Image Slider */}
      <div className="relative flex items-center justify-center w-full max-w-6xl h-96 overflow-hidden">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-500 ease-in-out ${calculateStyles(
              index
            )}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <div className="bg-white shadow-lg rounded-lg text-center">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-md mb-2 h-72 w-full"
              />
              <p className="text-gray-800 font-medium">{image.label}</p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
        >
          ❯
        </button>
      </div>

      {/* Button */}
      {/* <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-md text-lg mt-8">
        Show 40+ Resume Templates
      </button> */}
    </div>
  );
}

export default CVslide;

// import React, { useState } from "react";
// import "./App.css"; // Tailwind should be configured properly

// function Home() {
//   const images = [
//     { src: "/Bold_Statement.jpg", alt: "Resume 1", label: "Jane Jackson" },
//     { src: "/Classic_Elegance.jpg", alt: "Resume 2", label: "Donna Vader" },
//     { src: "/Modern_Edge.jpg", alt: "Resume 3", label: "Larry Bear" },
//     { src: "/Bold_Statement.jpg", alt: "Resume 1", label: "Jane Jackson" },
//     { src: "/Classic_Elegance.jpg", alt: "Resume 2", label: "Donna Vader" },
//     { src: "/Modern_Edge.jpg", alt: "Resume 3", label: "Larry Bear" },
//     { src: "/Bold_Statement.jpg", alt: "Resume 1", label: "Jane Jackson" },
//     { src: "/Classic_Elegance.jpg", alt: "Resume 2", label: "Donna Vader" },
//     { src: "/Modern_Edge.jpg", alt: "Resume 3", label: "Larry Bear" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to calculate styles for each image
//   const calculateStyles = (index) => {
//     const isCenter = index === currentIndex; // Center image
//     const leftIndex = (currentIndex - 1 + images.length) % images.length; // Previous image
//     const rightIndex = (currentIndex + 1) % images.length; // Next image

//     if (isCenter) {
//       return "transform scale-150 z-20 opacity-100"; // Enlarge the center image
//     } else if (index === leftIndex || index === rightIndex) {
//       return "transform scale-125 z-10 opacity-90"; // Slightly enlarged for adjacent images
//     } else {
//       return "transform scale-100 z-0 opacity-70"; // Standard size for distant images
//     }
//   };

//   // Update index for next image
//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Update index for previous image
//   const goToPrevious = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="bg-amber-50 min-h-screen flex flex-col items-center p-8">
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">Customizable Resume Templates</h1>
//       <p className="text-lg text-gray-600 text-center mb-8">
//         Here’s a million design combinations. Do what you want.<br />
//         Whether you’re a nurse or engineer, your resume will always stand out.
//       </p>

//       {/* Image Slider */}
//       <div className="relative flex items-center justify-center w-full max-w-6xl h-96 overflow-hidden">
//         {/* Images */}
//         <div className="absolute flex transition-transform duration-500 ease-in-out w-full">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`transition-transform duration-500 ease-in-out ${calculateStyles(
//                 index
//               )}`}
//               style={{
//                 transform: `translateX(${(index - currentIndex) * 100}%)`,
//                 width: "100%",
//               }}
//             >
//               <div className="bg-white shadow-lg rounded-lg p-4 text-center">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="rounded-md mb-2 h-72 w-auto mx-auto object-cover"
//                 />
//                 <p className="text-gray-800 font-medium">{image.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={goToPrevious}
//           className="absolute left-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
//         >
//           ❮
//         </button>
//         <button
//           onClick={goToNext}
//           className="absolute right-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
//         >
//           ❯
//         </button>
//       </div>

//       {/* Button */}
//       <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-md text-lg mt-8">
//         Show 40+ Resume Templates
//       </button>
//     </div>
//   );
// }

// export default Home;

