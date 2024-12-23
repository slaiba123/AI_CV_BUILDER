import React, { useState } from "react";

const ResumeBuilder = () => {
  // State for dynamic sections
  const [educationFields, setEducationFields] = useState([]);
  const [skillsFields, setSkillsFields] = useState([]);
  const [coursesFields, setCoursesFields] = useState([]);
  const [languagesFields, setLanguagesFields] = useState([]);
  const [internshipsFields, setInternshipsFields] = useState([]);
  const [projectsFields, setProjectsFields] = useState([]);

  // Counters for each section
  const [educationCounter, setEducationCounter] = useState(0);
  const [skillsCounter, setSkillsCounter] = useState(0);
  const [coursesCounter, setCoursesCounter] = useState(0);
  const [languagesCounter, setLanguagesCounter] = useState(0);
  const [internshipsCounter, setInternshipsCounter] = useState(0);
  const [projectsCounter, setProjectsCounter] = useState(0);

  // Add functions for each section
  const addEducation = () => {
    setEducationCounter(educationCounter + 1);
    setEducationFields([
      ...educationFields,
      { id: educationCounter + 1, degree: "", institution: "", date: "", grade: "" },
    ]);
  };

  const deleteEducation = (id) => {
    setEducationFields(educationFields.filter((edu) => edu.id !== id));
  };

  const addSkill = () => {
    setSkillsCounter(skillsCounter + 1);
    setSkillsFields([...skillsFields, { id: skillsCounter + 1, skill: "", rating: "" }]);
  };

  const deleteSkill = (id) => {
    setSkillsFields(skillsFields.filter((skill) => skill.id !== id));
  };

  const addCourse = () => {
    setCoursesCounter(coursesCounter + 1);
    setCoursesFields([
      ...coursesFields,
      { id: coursesCounter + 1, courseName: "", institution: "", completionDate: "" },
    ]);
  };

  const deleteCourse = (id) => {
    setCoursesFields(coursesFields.filter((course) => course.id !== id));
  };

  const addLanguage = () => {
    setLanguagesCounter(languagesCounter + 1);
    setLanguagesFields([
      ...languagesFields,
      { id: languagesCounter + 1, language: "", proficiency: "" },
    ]);
  };

  const deleteLanguage = (id) => {
    setLanguagesFields(languagesFields.filter((lang) => lang.id !== id));
  };

  const addInternship = () => {
    setInternshipsCounter(internshipsCounter + 1);
    setInternshipsFields([
      ...internshipsFields,
      {
        id: internshipsCounter + 1,
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const deleteInternship = (id) => {
    setInternshipsFields(internshipsFields.filter((internship) => internship.id !== id));
  };

  const addProject = () => {
    setProjectsCounter(projectsCounter + 1);
    setProjectsFields([
      ...projectsFields,
      { id: projectsCounter + 1, projectName: "", projectYear: "", projectDesc: "" },
    ]);
  };

  const deleteProject = (id) => {
    setProjectsFields(projectsFields.filter((project) => project.id !== id));
  };

  return (
    <div className="bg-[#7fb3d5] pt-20 pb-20">
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-md ">
      <form method="POST" action="resume">
        {/* Personal Details */}
        <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
        <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" placeholder="Job Title" />
        <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" placeholder="First Name" />
        <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" placeholder="Last Name" />
        <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="email" placeholder="Email" />
        <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="tel" placeholder="Phone" />
        <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" placeholder="Country" />
        <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" placeholder="City" />
        <textarea className="w-full p-2 mb-4 border border-gray-300 rounded" rows="4" placeholder="Professional Summary"></textarea>

        {/* Education Section */}
        <div>
          <h3 className="text-xl font-semibold">Education</h3>
          <button
            type="button"
            onClick={addEducation}
            className="mb-4 px-4 py-2 bg-[#2471a3]  text-white rounded hover:bg-[#2e86c1]"
          >
            + Add Education
          </button>
          {educationFields.map((edu) => (
            <div key={edu.id} className="space-y-2 mb-4">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => {
                  const updatedFields = educationFields.map((field) =>
                    field.id === edu.id ? { ...field, degree: e.target.value } : field
                  );
                  setEducationFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) => {
                  const updatedFields = educationFields.map((field) =>
                    field.id === edu.id ? { ...field, institution: e.target.value } : field
                  );
                  setEducationFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Date"
                value={edu.date}
                onChange={(e) => {
                  const updatedFields = educationFields.map((field) =>
                    field.id === edu.id ? { ...field, date: e.target.value } : field
                  );
                  setEducationFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Grade"
                value={edu.grade}
                onChange={(e) => {
                  const updatedFields = educationFields.map((field) =>
                    field.id === edu.id ? { ...field, grade: e.target.value } : field
                  );
                  setEducationFields(updatedFields);
                }}
              />
              <button
                type="button"
                onClick={() => deleteEducation(edu.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-xl font-semibold">Skills</h3>
          <button
            type="button"
            onClick={addSkill}
            className="mb-4 px-4 py-2 bg-[#2471a3] text-white rounded hover:bg-[#2e86c1]"
          >
            + Add Skill
          </button>
          {skillsFields.map((skill) => (
            <div key={skill.id} className="space-y-2 mb-4">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Skill"
                value={skill.skill}
                onChange={(e) => {
                  const updatedFields = skillsFields.map((field) =>
                    field.id === skill.id ? { ...field, skill: e.target.value } : field
                  );
                  setSkillsFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="number"
                placeholder="Rating (0-10)"
                value={skill.rating}
                onChange={(e) => {
                  const updatedFields = skillsFields.map((field) =>
                    field.id === skill.id ? { ...field, rating: e.target.value } : field
                  );
                  setSkillsFields(updatedFields);
                }}
              />
              <button
                type="button"
                onClick={() => deleteSkill(skill.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="text-xl font-semibold">Courses</h3>
          <button
            type="button"
            onClick={addCourse}
            className="mb-4 px-4 py-2 bg-[#2471a3] text-white rounded hover:bg-[#2e86c1]"
          >
            + Add Course
          </button>
          {coursesFields.map((course) => (
            <div key={course.id} className="space-y-2 mb-4">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Course Name"
                value={course.courseName}
                onChange={(e) => {
                  const updatedFields = coursesFields.map((field) =>
                    field.id === course.id ? { ...field, courseName: e.target.value } : field
                  );
                  setCoursesFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Institution"
                value={course.institution}
                onChange={(e) => {
                  const updatedFields = coursesFields.map((field) =>
                    field.id === course.id ? { ...field, institution: e.target.value } : field
                  );
                  setCoursesFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Completion Date"
                value={course.completionDate}
                onChange={(e) => {
                  const updatedFields = coursesFields.map((field) =>
                    field.id === course.id ? { ...field, completionDate: e.target.value } : field
                  );
                  setCoursesFields(updatedFields);
                }}
              />
              <button
                type="button"
                onClick={() => deleteCourse(course.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div>
          <h3 className="text-xl font-semibold">Languages</h3>
          <button
            type="button"
            onClick={addLanguage}
            className="mb-4 px-4 py-2 bg-[#2471a3]  text-white rounded hover:bg-[#2e86c1]"
          >
            + Add Language
          </button>
          {languagesFields.map((language) => (
            <div key={language.id} className="space-y-2 mb-4">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Language"
                value={language.language}
                onChange={(e) => {
                  const updatedFields = languagesFields.map((field) =>
                    field.id === language.id ? { ...field, language: e.target.value } : field
                  );
                  setLanguagesFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Proficiency"
                value={language.proficiency}
                onChange={(e) => {
                  const updatedFields = languagesFields.map((field) =>
                    field.id === language.id ? { ...field, proficiency: e.target.value } : field
                  );
                  setLanguagesFields(updatedFields);
                }}
              />
              <button
                type="button"
                onClick={() => deleteLanguage(language.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Internships Section */}
        <div>
          <h3 className="text-xl font-semibold">Internships</h3>
          <button
            type="button"
            onClick={addInternship}
            className="mb-4 px-4 py-2 bg-[#2471a3] text-white rounded hover:bg-[#2e86c1]"
          >
            + Add Internship
          </button>
          {internshipsFields.map((internship) => (
            <div key={internship.id} className="space-y-2 mb-4">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Company"
                value={internship.company}
                onChange={(e) => {
                  const updatedFields = internshipsFields.map((field) =>
                    field.id === internship.id ? { ...field, company: e.target.value } : field
                  );
                  setInternshipsFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Role"
                value={internship.role}
                onChange={(e) => {
                  const updatedFields = internshipsFields.map((field) =>
                    field.id === internship.id ? { ...field, role: e.target.value } : field
                  );
                  setInternshipsFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Start Date"
                value={internship.startDate}
                onChange={(e) => {
                  const updatedFields = internshipsFields.map((field) =>
                    field.id === internship.id ? { ...field, startDate: e.target.value } : field
                  );
                  setInternshipsFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="End Date"
                value={internship.endDate}
                onChange={(e) => {
                  const updatedFields = internshipsFields.map((field) =>
                    field.id === internship.id ? { ...field, endDate: e.target.value } : field
                  );
                  setInternshipsFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Description"
                value={internship.description}
                onChange={(e) => {
                  const updatedFields = internshipsFields.map((field) =>
                    field.id === internship.id ? { ...field, description: e.target.value } : field
                  );
                  setInternshipsFields(updatedFields);
                }}
              />
              <button
                type="button"
                onClick={() => deleteInternship(internship.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-xl font-semibold">Projects</h3>
          <button
            type="button"
            onClick={addProject}
            className="mb-4 px-4 py-2 bg-[#2471a3]  text-white rounded hover:bg-[#2e86c1]"
          >
            + Add Project
          </button>
          {projectsFields.map((project) => (
            <div key={project.id} className="space-y-2 mb-4">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Project Name"
                value={project.projectName}
                onChange={(e) => {
                  const updatedFields = projectsFields.map((field) =>
                    field.id === project.id ? { ...field, projectName: e.target.value } : field
                  );
                  setProjectsFields(updatedFields);
                }}
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Project Year"
                value={project.projectYear}
                onChange={(e) => {
                  const updatedFields = projectsFields.map((field) =>
                    field.id === project.id ? { ...field, projectYear: e.target.value } : field
                  );
                  setProjectsFields(updatedFields);
                }}
              />
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Project Description"
                value={project.projectDesc}
                onChange={(e) => {
                  const updatedFields = projectsFields.map((field) =>
                    field.id === project.id ? { ...field, projectDesc: e.target.value } : field
                  );
                  setProjectsFields(updatedFields);
                }}
              />
              <button
                type="button"
                onClick={() => deleteProject(project.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Generate Resume
        </button>
      </form>
    </div>
    </div>
  );
};


export default ResumeBuilder;
