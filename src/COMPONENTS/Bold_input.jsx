import React, { useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import { doc, setDoc, collection, getDocs, addDoc , getFirestore} from 'firebase/firestore';
import { db } from '../firebase';
const BoldInput = () => {
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
    summary: '',
  });

  // State for other sections
  const [educationFields, setEducationFields] = useState([]);
  const [skillsFields, setSkillsFields] = useState([]);
//   const [coursesFields, setCoursesFields] = useState([]);
//   const [languagesFields, setLanguagesFields] = useState([]);
//   const [internshipsFields, setInternshipsFields] = useState([]);
//   const [CertificationsFields, setCertificationsFields] = useState([]);
//   const [projectsFields, setProjectsFields] = useState([]);
  const [experienceFields, setexperienceFields] = useState([]);
  const [references, setReferences] = useState([]);


  // Add methods for each section
  const addEducation = () => {
    setEducationFields([...educationFields, { id: Date.now(), degree: '', institution: '', year: '' }]);
  };

  const addSkill = () => {
    setSkillsFields([...skillsFields, { id: Date.now(), skill: '',level:'' }]);
  };

//   const addCertifications = () => {
//     setCertificationsFields([...CertificationsFields, { id: Date.now(), course: '', institution: '', year: '' }]);
//   };

//   const addLanguage = () => {
//     setLanguagesFields([...languagesFields, { id: Date.now(), language: '', proficiency: '' }]);
//   };

//   const addInternship = () => {
//     setInternshipsFields([...internshipsFields, { id: Date.now(), company: '', role: '', startDate: '', endDate: '', description: '' }]);
//   };
  const addexperience = () => {
    setexperienceFields([...experienceFields, { id: Date.now(), company: '', role: '', startDate: '', endDate: '', description: '' }]);
  };

//   const addProject = () => {
//     setProjectsFields([...projectsFields, { id: Date.now(), projectName: '', projectYear: '', projectDesc: '' }]);
//   };

  const deleteField = (fields, setFields, id) => {
    setFields(fields.filter((field) => field.id !== id));
  };


    const addReference = () => {
      setReferences([...references, { id: Date.now(), name: "", contact: "" }]);
    };
  
    const updateReference = (id, field, value) => {
      const updatedReferences = references.map((ref) =>
        ref.id === id ? { ...ref, [field]: value } : ref
      );
      setReferences(updatedReferences);
    };
  
    const deleteReference = (id) => {
      const filteredReferences = references.filter((ref) => ref.id !== id);
      setReferences(filteredReferences);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ personalDetails, educationFields, skillsFields, coursesFields, languagesFields, internshipsFields, projectsFields });
  };

  // const handleGenerateResume = () => {
  //   navigate(`/bold_statement`, {
  //     state: {
  //       resumeData: {
  //         ...personalDetails,
  //         education: educationFields,
  //         skills: skillsFields,
  //       //   certifications:CertificationsFields,
  //       //   languages: languagesFields,
  //       //   internships: internshipsFields,
  //       //   projects: projectsFields,
  //         experience:experienceFields,
  //         reference:references
  //       },
  //     },
  //   });
  // };
  const handleGenerateResume = () => {
    // Prepare the resume data
    const resumeData = {
        
          education: educationFields,
          skills: skillsFields,
        //   certifications:CertificationsFields,
        //   languages: languagesFields,
        //   internships: internshipsFields,
        //   projects: projectsFields,
          experience:experienceFields,
          reference:references
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
  
    navigate("/bold_statement", {
      state: {
        resumeData: {
         ...personalDetails,
          education: educationFields,
          skills: skillsFields,
        //   certifications:CertificationsFields,
        //   languages: languagesFields,
        //   internships: internshipsFields,
        //   projects: projectsFields,
          experience:experienceFields,
          reference:references
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
          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder="Summary"
            value={personalDetails.summary}
            onChange={(e) => setPersonalDetails({ ...personalDetails, summary: e.target.value })}
          />
        </div>
        <div>
      <h3 className="text-xl font-semibold">References</h3>
      {references.map((ref) => (
        <div key={ref.id} className="space-y-2 mb-2">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Name"
            value={ref.name}
            onChange={(e) =>
              updateReference(ref.id, "name", e.target.value)
            }
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Contact Number"
            value={ref.contact}
            onChange={(e) =>
              updateReference(ref.id, "contact", e.target.value)
            }
          />
          <button
            type="button"
            onClick={() => deleteReference(ref.id)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addReference}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Reference
      </button>
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
<div>
  <h3 className="text-xl font-semibold">Skills</h3>
  {skillsFields.map((field) => (
    <div key={field.id} className="space-y-2 mb-2">
      {/* Input for Skill */}
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
      {/* Dropdown for Level */}
      <select
        className="w-full p-2 border border-gray-300 rounded"
        value={field.level}
        onChange={(e) => {
          const updatedFields = skillsFields.map((f) =>
            f.id === field.id ? { ...f, level: e.target.value } : f
          );
          setSkillsFields(updatedFields);
        }}
      >
        <option value="" disabled>
          Select Level
        </option>
        <option value="30">Beginner</option>
        <option value="50">Intermediate</option>
        <option value="100">Advanced</option>
      </select>
      {/* Delete Button */}
      <button
        type="button"
        onClick={() => deleteField(skillsFields, setSkillsFields, field.id)}
        className="bg-red-500 text-white p-2 rounded"
      >
        Delete
      </button>
    </div>
  ))}
  {/* Add Skill Button */}
  <button
    type="button"
    onClick={addSkill}
    className="bg-blue-500 text-white p-2 rounded"
  >
    Add Skill
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
        <div className="text-center">
          <button type="button" onClick={handleGenerateResume} className="bg-green-500 text-white p-4 rounded">
            Generate Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoldInput;
