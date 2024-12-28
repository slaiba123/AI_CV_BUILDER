import React, { useState } from "react";
import Minamilist_focus from './Minimalist_focus'; // Import the minimalist template
import ResumeInput from '../PAGES/input_form' // Form for input

const TemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [resumeData, setResumeData] = useState(null);

  const handleTemplateSelection = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTemplateSelection("minimalist")}>
          Select Minimalist Template
        </button>
      </div>

      {/* Show ResumeForm if template is selected */}
      {selectedTemplate === "minimalist" && (
        <ResumeInput setResumeData={setResumeData} />
      )}

      {/* Show the selected template with the user data */}
      {resumeData && selectedTemplate === "minimalist" && (
        <Minamilist_focus resumeData={resumeData} />
      )}
    </div>
  );
};

export default TemplateSelector;
