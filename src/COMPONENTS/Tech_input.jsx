import React, { useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import { doc, setDoc, collection, getDocs, addDoc , getFirestore} from 'firebase/firestore';
import { db } from '../firebase';
const TechInput = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access location
  const { template } = location.state || {};

  // State for Personal Details
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    jobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    linkedin:'',
    phone: '',
    country: '',
    city: '',
    summary: '',
  });

  // State for other sections
  const [educationFields, setEducationFields] = useState([]);
  const [skillsFields, setSkillsFields] = useState([]);
//   const [coursesFields, setCoursesFields] = useState([]);
//   const [languagesFields, setLanguagesFields] = useState([]);
//   const [internshipsFields, setInternshipsFields] = useState([]);
  const [CertificationsFields, setCertificationsFields] = useState([]);
  const [projectsFields, setProjectsFields] = useState([]);
  const [experienceFields, setexperienceFields] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Add methods for each section
  const addEducation = () => {
    setEducationFields([...educationFields, { id: Date.now(), degree: '', institution: '', year: '' }]);
  };


  const addSkill = () => {
    setSkillsFields((prevFields) => [
      ...prevFields,
      { id: Date.now(), skill: "", category: selectedCategory },
    ]);
  };

  const updateSkill = (id, value) => {
    setSkillsFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, skill: value } : field
      )
    );
  };
  const updateLevel = (id, value) => {
    setSkillsFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, level: value } : field
      )
    );
  };
  const deleteSkill = (id) => {
    setSkillsFields((prevFields) => prevFields.filter((field) => field.id !== id));
  };

  const addCertifications = () => {
    setCertificationsFields([...CertificationsFields, { id: Date.now(), course: '', institution: '', year: '' }]);
  };

  const addLanguage = () => {
    setLanguagesFields([...languagesFields, { id: Date.now(), language: '', proficiency: '' }]);
  };

//   const addInternship = () => {
//     setInternshipsFields([...internshipsFields, { id: Date.now(), company: '', role: '', startDate: '', endDate: '', description: '' }]);
//   };
  const addexperience = () => {
    setexperienceFields([...experienceFields, { id: Date.now(), company: '', role: '', startDate: '', endDate: '', description: '' }]);
  };

  const addProject = () => {
    setProjectsFields([...projectsFields, { id: Date.now(), projectName: '', projectYear: '', projectDesc: '' }]);
  };

  const deleteField = (fields, setFields, id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ personalDetails, educationFields, skillsFields, coursesFields, languagesFields, internshipsFields, projectsFields });
   
};
  

  // const handleGenerateResume = () => {
  //   const resumeData = {
  //     personalDetails,
  //     education: educationFields,
  //     skills: skillsFields,
  //     certifications: CertificationsFields,
  //     // languages: languagesFields, // You can add this if needed
  //     projects: projectsFields,
  //     experience: experienceFields
  //   };
  //   db.collection("resumes").add(resumeData)
  //   .then(() => {
  //     console.log("Resume data saved!");
  //   })
  //   .catch((error) => {
  //     console.error("Error saving data: ", error);
  //   });
  //   navigate("/tech-savvy", {
  //     state: {
  //       resumeData: {
  //         ...personalDetails,
  //         education: educationFields,
  //         skills: skillsFields,
  //         certifications:CertificationsFields,
  //         // languages: languagesFields,
  //         projects: projectsFields,
  //         experience:experienceFields
  //       },
  //     },
  //   });
  // };
  
  
  // Initialize Firestore (assuming you've already initialized Firebase with initializeApp)
  
  const handleGenerateResume = () => {
    // Prepare the resume data
    const resumeData = {
      education: educationFields,
      skills: skillsFields,
      certifications: CertificationsFields,
      projects: projectsFields,
      experience: experienceFields
    };
  
    // Get Firestore instance
  
  
    // Add data to Firestore
    addDoc(collection(db, "resumes"), resumeData)
      .then(() => {
        console.log("Resume data saved!");
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
  

    navigate("/tech-savvy", {
      state: {
        resumeData: {
          ...personalDetails,
          education: educationFields,
          skills: skillsFields,
          certifications: CertificationsFields,
          projects: projectsFields,
          experience: experienceFields
        },
      },
    });
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Resume Input Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Personal Details */}
        <div>
          <h3 className="text-xl font-semibold">Personal Details</h3>
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            placeholder="Full Name"
            value={personalDetails.name}
            onChange={(e) => setPersonalDetails({ ...personalDetails, name: e.target.value })}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            placeholder="Job Title"
            value={personalDetails.jobTitle}
            onChange={(e) => setPersonalDetails({ ...personalDetails, jobTitle: e.target.value })}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            placeholder="First Name"
            value={personalDetails.firstName}
            onChange={(e) => setPersonalDetails({ ...personalDetails, firstName: e.target.value })}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            placeholder="Last Name"
            value={personalDetails.lastName}
            onChange={(e) => setPersonalDetails({ ...personalDetails, lastName: e.target.value })}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="email"
            placeholder="Email"
            value={personalDetails.email}
            onChange={(e) => setPersonalDetails({ ...personalDetails, email: e.target.value })}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            placeholder="Phone"
            value={personalDetails.phone}
            onChange={(e) => setPersonalDetails({ ...personalDetails, phone: e.target.value })}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            placeholder="Linkedin URL"
            value={personalDetails.linkedin}
            onChange={(e) => setPersonalDetails({ ...personalDetails, linkedin: e.target.value })}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            placeholder="Country"
            value={personalDetails.country}
            onChange={(e) => setPersonalDetails({ ...personalDetails, country: e.target.value })}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            placeholder="City"
            value={personalDetails.city}
            onChange={(e) => setPersonalDetails({ ...personalDetails, city: e.target.value })}
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder="Summary"
            value={personalDetails.summary}
            onChange={(e) => setPersonalDetails({ ...personalDetails, summary: e.target.value })}
          />
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-xl font-semibold">Education</h3>
          {educationFields.map((field) => (
            <div key={field.id} className="space-y-2 mb-2">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Degree"
                value={field.degree}
                onChange={(e) => {
                  const updatedFields = educationFields.map((f) =>
                    f.id === field.id ? { ...f, degree: e.target.value } : f
                  );
                  setEducationFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Institution"
                value={field.institution}
                onChange={(e) => {
                  const updatedFields = educationFields.map((f) =>
                    f.id === field.id ? { ...f, institution: e.target.value } : f
                  );
                  setEducationFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Year"
                value={field.year}
                onChange={(e) => {
                  const updatedFields = educationFields.map((f) =>
                    f.id === field.id ? { ...f, year: e.target.value } : f
                  );
                  setEducationFields(updatedFields);
                }}
              />
              <button type="button" onClick={() => deleteField(educationFields, setEducationFields, field.id)}>
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={addEducation} className="bg-blue-500 text-white p-2 rounded">
            Add Education
          </button>
        </div>

       {/* Skills Section */}


       <div>
      <h3 className="text-xl font-semibold">Technical Skills</h3>

      {/* Dropdown for Categories */}
      <div className="mb-4">
        <label htmlFor="skillCategory" className="block text-gray-700 mb-2">
          Select Category:
        </label>
        <select
          id="skillCategory"
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="Languages">Languages</option>
          <option value="Tools and Frameworks">Tools and Frameworks</option>
          <option value="Databases">Databases</option>
          <option value="Cloud Platforms">Cloud Platforms</option>
          <option value="Version Control">Version Control</option>
        </select>
      </div>

      {/* Display Skills for the Selected Category */}
      {skillsFields
        .filter((field) => field.category === selectedCategory)
        .map((field) => (
          <div key={field.id} className="space-y-2 mb-2">
            {/* Skill Name Input */}
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              placeholder={`Enter ${field.category}`}
              value={field.skill}
              onChange={(e) => updateSkill(field.id, e.target.value)}
            />

            {/* Level Dropdown */}
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={field.level}
              onChange={(e) => updateLevel(field.id, e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Delete Button */}
            <button
              type="button"
              onClick={() => deleteSkill(field.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}

      {/* Add Skill Button */}
      {selectedCategory && (
        <button
          type="button"
          onClick={addSkill}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add {selectedCategory}
        </button>
      )}

      {/* Optional: Display All Saved Skills */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold">All Added Skills:</h4>
        <ul className="list-disc pl-5">
          {skillsFields.map((field) => (
            <li key={field.id}>
              {field.category}: {field.skill || "(empty)"} - {field.level}
            </li>
          ))}
        </ul>
      </div>
    </div>

        {/* Courses Section */}
        <div>
          <h3 className="text-xl font-semibold">Certifications</h3>
          {CertificationsFields.map((field) => (
            <div key={field.id} className="space-y-2 mb-2">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Certification"
                value={field.Certification}
                onChange={(e) => {
                  const updatedFields = CertificationsFields.map((f) =>
                    f.id === field.id ? { ...f, course: e.target.value } : f
                  );
                  setCertificationsFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Institution"
                value={field.institution}
                onChange={(e) => {
                  const updatedFields = CertificationsFields.map((f) =>
                    f.id === field.id ? { ...f, institution: e.target.value } : f
                  );
                  setCertificationsFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Year"
                value={field.year}
                onChange={(e) => {
                  const updatedFields = CertificationsFields.map((f) =>
                    f.id === field.id ? { ...f, year: e.target.value } : f
                  );
                  setCertificationsFields(updatedFields);
                }}
              />
              <button type="button" onClick={() => deleteField(CertificationsFields, setCertificationsFields, field.id)}>
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={addCertifications} className="bg-blue-500 text-white p-2 rounded">
            Add Certification
          </button>
        </div>

    
        <div>
      <h3 className="text-xl font-semibold">Experience</h3>
      {experienceFields.map((field) => (
        <div key={field.id} className="space-y-2 mb-2">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Company"
            value={field.company}
            onChange={(e) => {
              const updatedFields = experienceFields.map((f) =>
                f.id === field.id ? { ...f, company: e.target.value } : f
              );
              setexperienceFields(updatedFields);
            }}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Role"
            value={field.role}
            onChange={(e) => {
              const updatedFields = experienceFields.map((f) =>
                f.id === field.id ? { ...f, role: e.target.value } : f
              );
              setexperienceFields(updatedFields);
            }}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Start Date"
            value={field.startDate}
            onChange={(e) => {
              const updatedFields = experienceFields.map((f) =>
                f.id === field.id ? { ...f, startDate: e.target.value } : f
              );
              setexperienceFields(updatedFields);
            }}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="End Date"
            value={field.endDate}
            onChange={(e) => {
              const updatedFields = experienceFields.map((f) =>
                f.id === field.id ? { ...f, endDate: e.target.value } : f
              );
              setexperienceFields(updatedFields);
            }}
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Description"
            value={field.description}
            onChange={(e) => {
              const updatedFields = experienceFields.map((f) =>
                f.id === field.id ? { ...f, description: e.target.value } : f
              );
              setexperienceFields(updatedFields);
            }}
          />
          <button
            type="button"
            onClick={() => deleteField(experienceFields, setExperienceFields, field.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addexperience}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Experience
      </button>
    </div>
        {/* Projects Section */}
        <div>
          <h3 className="text-xl font-semibold">Projects</h3>
          {projectsFields.map((field) => (
            <div key={field.id} className="space-y-2 mb-2">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Project Name"
                value={field.projectName}
                onChange={(e) => {
                  const updatedFields = projectsFields.map((f) =>
                    f.id === field.id ? { ...f, projectName: e.target.value } : f
                  );
                  setProjectsFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Year"
                value={field.projectYear}
                onChange={(e) => {
                  const updatedFields = projectsFields.map((f) =>
                    f.id === field.id ? { ...f, projectYear: e.target.value } : f
                  );
                  setProjectsFields(updatedFields);
                }}
              />
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Project Description"
                value={field.projectDesc}
                onChange={(e) => {
                  const updatedFields = projectsFields.map((f) =>
                    f.id === field.id ? { ...f, projectDesc: e.target.value } : f
                  );
                  setProjectsFields(updatedFields);
                }}
              />
              <button type="button" onClick={() => deleteField(projectsFields, setProjectsFields, field.id)}>
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={addProject} className="bg-blue-500 text-white p-2 rounded">
            Add Project
          </button>
        </div>

        {/* Final Submit Button */}
        <div className="text-center">
          <button type="button" onClick={handleGenerateResume} className="bg-green-500 text-white p-4 rounded">
            Generate Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default TechInput;
