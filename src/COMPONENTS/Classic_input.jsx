import React, { useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import { doc, setDoc, collection, getDocs, addDoc , getFirestore} from 'firebase/firestore';
import { db } from '../firebase';
const ClassicInput = () => {
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
    phone: '',
    linkedin: '',
    country: '',
    city: '',
  });

  // State for other sections
  const [educationFields, setEducationFields] = useState([]);
  const [skillsFields, setSkillsFields] = useState([]);
  const [coursesFields, setCoursesFields] = useState([]);
  const [languagesFields, setLanguagesFields] = useState([]);
  const [CertificationsFields, setCertificationsFields] = useState([]);
  const [experienceFields, setexperienceFields] = useState([]);
  const [achievementFields, setAchievementsFields] = useState([]);
  const [strengthFields, setStrengthsFields] = useState([]);

  // Add methods for each section
  const addEducation = () => {
    setEducationFields([...educationFields, { id: Date.now(), degree: '', institution: '', year: '',grade: '' }]);
  };

  const addSkill = () => {
    setSkillsFields([...skillsFields, { id: Date.now(), skill: '' }]);
  };
  const addAchievement = () => {
    setAchievementsFields([...achievementFields, { id: Date.now(), achievement: '' }]);
  };
  const addStrength = () => {
    setStrengthsFields([...strengthFields, { id: Date.now(), strength: '' }]);
  };

  const addCertifications = () => {
    setCertificationsFields([...CertificationsFields, { id: Date.now(), course: '', institution: '', year: '' }]);
  };

  const addLanguage = () => {
    setLanguagesFields([...languagesFields, { id: Date.now(), language: '', proficiency: '' }]);
  };

  const addexperience = () => {
    setexperienceFields([...experienceFields, { id: Date.now(), company: '', role: '', startDate: '', endDate: '', description: '' }]);
  };


  const deleteField = (fields, setFields, id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ personalDetails, educationFields, skillsFields, coursesFields, languagesFields, internshipsFields, projectsFields });
  };

  // const handleGenerateResume = () => {
  //   navigate(`/classic`, {
  //     state: {
  //       resumeData: {
  //         ...personalDetails,
  //         education: educationFields,
  //         skills: skillsFields,
  //         certifications:CertificationsFields,
  //         languages: languagesFields,
  //         experience:experienceFields,
  //         achievement:achievementFields,
  //         strength:strengthFields

  //       },
  //     },
  //   });
  // };
  const handleGenerateResume = () => {
    // Prepare the resume data
    const resumeData = {
              education: educationFields,
              skills: skillsFields,
              certifications:CertificationsFields,
              languages: languagesFields,
              experience:experienceFields,
              achievement:achievementFields,
              strength:strengthFields
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
  
    // Navigate to the 'tech-savvy' page, passing the resume data in state
    navigate("/classic", {
      state: {
        resumeData: {
                  ...personalDetails,
                  education: educationFields,
                  skills: skillsFields,
                  certifications:CertificationsFields,
                  languages: languagesFields,
                  experience:experienceFields,
                  achievement:achievementFields,
                  strength:strengthFields
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
          {/* <textarea
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder="Summary"
            value={personalDetails.summary}
            onChange={(e) => setPersonalDetails({ ...personalDetails, summary: e.target.value })}
          /> */}
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
                placeholder="Grade/CGPA"
                value={field.grade}
                onChange={(e) => {
                  const updatedFields = educationFields.map((f) =>
                    f.id === field.id ? { ...f, grade: e.target.value } : f
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
          <h3 className="text-xl font-semibold">Skills</h3>
          {skillsFields.map((field) => (
            <div key={field.id} className="space-y-2 mb-2">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Skill"
                value={field.skill}
                onChange={(e) => {
                  const updatedFields = skillsFields.map((f) =>
                    f.id === field.id ? { ...f, skill: e.target.value } : f
                  );
                  setSkillsFields(updatedFields);
                }}
              />
              <button type="button" onClick={() => deleteField(skillsFields, setSkillsFields, field.id)}>
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={addSkill} className="bg-blue-500 text-white p-2 rounded">
            Add Skill
          </button>
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

        {/* Languages Section */}
        <div>
          <h3 className="text-xl font-semibold">Languages</h3>
          {languagesFields.map((field) => (
            <div key={field.id} className="space-y-2 mb-2">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Language"
                value={field.language}
                onChange={(e) => {
                  const updatedFields = languagesFields.map((f) =>
                    f.id === field.id ? { ...f, language: e.target.value } : f
                  );
                  setLanguagesFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Proficiency"
                value={field.proficiency}
                onChange={(e) => {
                  const updatedFields = languagesFields.map((f) =>
                    f.id === field.id ? { ...f, proficiency: e.target.value } : f
                  );
                  setLanguagesFields(updatedFields);
                }}
              />
              <button type="button" onClick={() => deleteField(languagesFields, setLanguagesFields, field.id)}>
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={addLanguage} className="bg-blue-500 text-white p-2 rounded">
            Add Language
          </button>
        </div>
        {/* Achievements Section */}
        <div>
          <h3 className="text-xl font-semibold">Achievements</h3>
          {achievementFields.map((field) => (
            <div key={field.id} className="space-y-2 mb-2">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="achievement"
                value={field.achievement}
                onChange={(e) => {
                  const updatedFields = achievementFields.map((f) =>
                    f.id === field.id ? { ...f, achievement: e.target.value } : f
                  );
                  setAchievementsFields(updatedFields);
                }}
              />
    
              <button type="button" onClick={() => deleteField(languagesFields, setAchievementsFields, field.id)}>
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={addAchievement} className="bg-blue-500 text-white p-2 rounded">
            Add Achievement
          </button>
        </div>
       
        {/* Strengths Section */}
        <div>
          <h3 className="text-xl font-semibold">Strengths</h3>
          {strengthFields.map((field) => (
            <div key={field.id} className="space-y-2 mb-2">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Strengths"
                value={field.strength}
                onChange={(e) => {
                  const updatedFields = strengthFields.map((f) =>
                    f.id === field.id ? { ...f, strength: e.target.value } : f
                  );
                  setStrengthsFields(updatedFields);
                }}
              />
              <button type="button" onClick={() => deleteField(languagesFields, setStrengthsFields, field.id)}>
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={addStrength } className="bg-blue-500 text-white p-2 rounded">
            Add Strength
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
            onClick={() => deleteField(experienceFields, setexperienceFields, field.id)}
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

export default ClassicInput;