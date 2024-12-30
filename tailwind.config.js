// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         roboto: ['Roboto', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",  // Corrected content path
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        typewriter: "typewriter 2s steps(30) 1s forwards infinite", // Updated steps
      },
      keyframes: {
        typewriter: {
          "0%": {
            width: "0",  // Starts with no width
            opacity: "0",  // Optionally, make it invisible at start
          },
          "100%": {
            width: "100%", // Expands to full width
            opacity: "1",  // Optionally, make it visible at the end
          },
        },
      },
      listStyleType: {
        disc: 'disc',
      },
      spacing: {
        5: '1.25rem', // Matches pl-5 and ml-5
      },
    },
  },
  plugins: [],
}
