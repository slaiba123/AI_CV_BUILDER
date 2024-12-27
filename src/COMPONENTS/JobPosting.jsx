import React, { useState } from "react";

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    jobStatus: "",
    department: "",
    minimumExperience: "",
    location: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    compensation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (

    <div className="bg-[#7fb3d5] py-4">
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-[rgb(176,210,232)] p-8 rounded shadow-md space-y-6"
    >
      <h1 className="text-2xl font-semibold">Basic Information</h1>

      {/* Title or Position */}
      <div className="flex flex-col">
        <label htmlFor="title" className="font-medium">
          Title or Position
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter a title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2"
        />
      </div>

      {/* Job Status */}
      <div className="flex flex-col">
        <label htmlFor="jobStatus" className="font-medium">
          Job Status
        </label>
        <select
          id="jobStatus"
          name="jobStatus"
          value={formData.jobStatus}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2"
        >
          <option value="">Select a status</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      {/* Department */}
      <div className="flex flex-col">
        <label htmlFor="department" className="font-medium">
          Department
        </label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Enter a department"
          value={formData.department}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2"
        />
      </div>

      {/* Location */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="location" className="font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="country" className="font-medium">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter country"
            value={formData.country}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
      </div>

      {/* State & City */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="state" className="font-medium">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter state"
            value={formData.state}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="font-medium">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
      </div>

      {/* Zipcode & Compensation */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="zipcode" className="font-medium">
            Zipcode
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            placeholder="Enter zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="compensation" className="font-medium">
            Compensation
          </label>
          <input
            type="text"
            id="compensation"
            name="compensation"
            placeholder="Enter compensation"
            value={formData.compensation}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="compensation" className="font-medium">
            Minimum Experience Required
          </label>
          <input
            type="text"
            id="compensation"
            name="compensation"
            placeholder="Enter Experience"
            value={formData.compensation}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        
        
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#698598] text-white py-2 rounded hover:bg-[#99bed6]"
      >
        POST
      </button>
    </form>
    </div>
  );
};

export default JobPostingForm;
