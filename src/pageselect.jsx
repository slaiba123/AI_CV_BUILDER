import React from 'react';

const ResumePage = () => {
  const resGenerate = (template) => {
    // This function will handle the template selection logic
    console.log(`Generate ${template} template`);
  };

  return (
    <div className="bg-white">
      <section className="text-center py-16">
        <div className="intro">
          <h1 className="text-4xl font-bold text-[#1062a6] mb-4">Resume Builder</h1>
          <p className="text-xl text-gray-700 mb-8">Provide your information and generate an awesome resume!!</p>
        </div>
        <p id="text" className="text-lg text-gray-600 mb-8">
          Select any template of your choice
        </p>
        <div className="flex justify-center gap-16 flex-wrap shadow-xl pb-10 ml-20 mr-20">
          <div className="col flex gap-16">
            <div className="cv_box text-center cursor-pointer" onClick={() => resGenerate('classic')}>
              <img
                className="cv_img h-80 w-72 object-contain shadow-xl transition-transform duration-500 hover:scale-100"
                src="Classic_Elegance.jpg"
                alt="Classic Elegance"
              />
              <p>Classic Elegance</p>
            </div>

            <div className="cv_box text-center cursor-pointer" onClick={() => resGenerate('bold')}>
              <img
                className="cv_img h-80 w-72 object-contain shadow-xl transition-transform duration-500 hover:scale-100"
                src="Bold_Statement.jpg"
                alt="Bold Statement"
              />
              <p>Bold Statement</p>
            </div>

            <div className="cv_box text-center cursor-pointer" onClick={() => resGenerate('minimalist')}>
              <img
                className="cv_img h-80 w-72 object-contain shadow-xl transition-transform duration-500 hover:scale-100"
                src="Minamilist_focus.jpg"
                alt="Minimalist Focus"
              />
              <p>Minimalist Focus</p>
            </div>
          </div>

          <div className="col flex gap-16">
            <div className="cv_box text-center cursor-pointer" onClick={() => resGenerate('creative')}>
              <img
                className="cv_img h-80 w-72 object-contain shadow-xl transition-transform duration-500 hover:scale-100"
                src="creative_flair.jpg"
                alt="Creative Flair"
              />
              <p>Creative Flair</p>
            </div>

            <div className="cv_box text-center cursor-pointer" onClick={() => resGenerate('savvy')}>
              <img
                className="cv_img h-80 w-72 object-contain shadow-xl transition-transform duration-500 hover:scale-100"
                src="Tech_Savvy.jpg"
                alt="Tech Savvy"
              />
              <p>Tech Savvy</p>
            </div>

            <div className="cv_box text-center cursor-pointer" onClick={() => resGenerate('modern')}>
              <img
                className="cv_img h-80 w-72 object-contain shadow-xl transition-transform duration-500 hover:scale-100"
                src="Modern_Edge.jpg"
                alt="Modern Edge"
              />
              <p>Modern Edge</p>
            </div>
          </div>
        </div>

        <button className="button_clk bg-[#2471a3] py-3 px-8 rounded-full text-white  font-semibold hover:shadow-xl transition-all duration-500 mt-8 hover:bg-[#2e86c1]">
          More are Coming Soon 
        </button>
      </section>
    </div>
  );
};

export default ResumePage;
