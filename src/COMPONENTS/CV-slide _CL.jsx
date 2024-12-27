
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CVslide() {
  const navigate = useNavigate();

  const images = [
    { name: "Decent", src: "decent.png" },
    { name: "Regular", src: "regular.png" },
    { name: "Iconic", src: "iconic.png" },
    { name: "Crisp", src: "crisp.png" },
    { name: "Cubic", src: "cubic.png" },
    { name: "Diamond", src: "diamond.png" },
    { src: "decent.png", alt: "Coverletter 1", label: "Jane Jackson" },
    { src: "regular.png", alt: "Coverletter 2", label: "Donna Vader" },
    { src: "iconic.png", alt: "Coverletter 3", label: "Larry Bear" },
    { src: "crisp.png" , alt: "Coverletter 4", label: "Jane Jackson" },
    { src: "cubic.png", alt: "Coverletter 5", label: "Donna Vader" },
    { src: "diamond.png", alt: "Coverletter 6", label: "Larry Bear" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Customizable Resume Templates
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Here’s a million design combinations. Do what you want.
        <br />
        Whether you’re a nurse or engineer, your resume will always stand out.
      </p>

      {/* Image Slider */}
      <div className="relative w-full max-w-5xl h-98 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`, // Ensure no extra space at the end
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full max-w-sm px-2 flex flex-col items-center ${
                index === currentIndex ? "scale-110 z-10" : "scale-100"
              } transition-transform duration-300`}
            >
              <div className="bg-white shadow-lg rounded-lg text-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-auto object-cover rounded-md"
                />
                <p className="text-gray-800 font-medium">{image.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
        >
          ❯
        </button>
      </div>

      <button
        className="mt-9 bg-[#2471a3] text-white px-6 py-3 rounded-sm text-lg font-medium hover:bg-[#2e86c1]"
        onClick={() => navigate("/templates")} // Redirect on button click
      >
        Show Resume Templates
      </button>
    </div>
  );
}

export default CVslide;
