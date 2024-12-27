import React, { useState } from "react";

function SignIn() {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    setSigninData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    const { email, password } = signinData;

    // Basic validation
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    setError("");
    alert("Sign In Successful!");
    console.log("Sign In Data:", signinData);
    setSigninData({ email: "", password: "" });
  };

  const handleSocialSignin = (provider) => {
    alert(`Signing in with ${provider}`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center "
      style={{
        backgroundImage: "url('/signin.png')", // Replace with your image URL
      }}
    >
      {/* Form Container */}
      <div className="bg-[#7fb3d5] bg-opacity-90 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Sign In</h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSigninSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={signinData.email}
              onChange={handleSigninChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={signinData.password}
              onChange={handleSigninChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Sign-In Buttons */}
        <button
          onClick={() => handleSocialSignin("Google")}
          className="w-full bg-red-900 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 mb-3 flex items-center justify-center"
        >
          <img
            src="/google.png"
            alt="Google logo"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        <button
          onClick={() => handleSocialSignin("Facebook")}
          className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 mb-3 flex items-center justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook logo"
            className="w-5 h-5 mr-2"
          />
          Sign in with Facebook
        </button>

        <button
          onClick={() => handleSocialSignin("GitHub")}
          className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 flex items-center justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub logo"
            className="w-5 h-5 mr-5"
          />
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}

export default SignIn;
