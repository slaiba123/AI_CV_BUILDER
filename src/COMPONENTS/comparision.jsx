import React, { useState } from 'react';

const Comparison = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-[600px] h-[700px] overflow-hidden border-2 border-gray-300 rounded-lg bg-white">
        {/* Old Image (Left Side) */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover"
          style={{
            backgroundImage: `url('creative_flair.jpg')`,
            clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
          }}
        ></div>

        {/* New Image (Right Side) */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover"
          style={{
            backgroundImage: `url('Tech_Savvy.jpg')`,
            clipPath: `inset(0 0 0 ${sliderValue}%)`,
          }}
        ></div>

        {/* Slider for controlling the transition */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 z-10 appearance-none"
          style={{
            background: 'transparent',
          }}
        />

        {/* Vertical slider line */}
        <div
          className="absolute top-0 h-full w-1 bg-blue-500"
          style={{
            left: `${sliderValue}%`, // Directly tied to sliderValue
            transition: 'none', // Remove transition for real-time synchronization
          }}
        ></div>
      </div>
    </div>
  );
};

export default Comparison;
