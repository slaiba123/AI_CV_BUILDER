// import React, { useState } from "react";

// function SignupForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmPassword } = formData;

//     // Basic validation
//     if (!name || !email || !password || !confirmPassword) {
//       setError("All fields are required");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setError(""); // Clear any previous errors
//     console.log("Signup Successful!", formData);
//     alert("Signup Successful!");
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center bg-[#7fb3d5] ">
//       {/* Form Section */}
//       <div className="w-full md:w-1/2 p-8 h-full">
//         <form
//           className="bg-white p-6 rounded-lg shadow-md"
//           onSubmit={handleSubmit}
//         >
//           <h1 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h1>

//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//           {/* Name Field */}
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Confirm Password Field */}
//           <div className="mb-4">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="Confirm your password"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#2471a3] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 hover:bg-[#2e86c1] focus:ring-offset-2"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>

//       {/* Image Section */}
//       <div className="hidden md:block w-1/2">
//         <img
//           src="/signup.png"
//           alt="Signup Illustration"
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// }

// export default SignupForm;


import React, { useState } from "react";

function SignupForm() {
  const [role, setRole] = useState("Job Seeker"); // Role: Job Seeker or Recruiter
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError(""); // Clear errors
    console.log(`Signup as ${role} successful!`, formData);
    alert(`Signup as ${role} successful!`);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center bg-[#7fb3d5]">
      <div className="w-full md:w-1/2 p-8 h-full">
        <form
          className="bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-5 text-gray-800 text-center ">Register & Shine ✨</h1>

          {/* Role Selection Buttons */}
          <div className="flex justify-center mb-6">
            <button
              type="button"
              className={`px-4 py-2 font-medium ${
                role === "Job Seeker" ? "bg-blue-500 text-white" : "bg-gray-200"
              } rounded-l-lg`}
              onClick={() => handleRoleChange("Job Seeker")}
            >
              Job Seeker
            </button>
            <button
              type="button"
              className={`px-4 py-2 font-medium ${
                role === "Recruiter" ? "bg-blue-500 text-white" : "bg-gray-200"
              } rounded-r-lg`}
              onClick={() => handleRoleChange("Recruiter")}
            >
              Recruiter
            </button>
          </div>
          <h2 className="text-2xl text-gray-600 mb-4 font-bold">{`${role}`}</h2>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2471a3] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 hover:bg-[#2e86c1] focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
      </div>

      <div className="hidden md:block w-1/2">
        <img
          src="/signup.png"
          alt="Signup Illustration"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default SignupForm;
