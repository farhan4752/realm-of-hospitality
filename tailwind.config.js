/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        // custom_name: "copy paste from google font-family",
        cursive: '"Edu AU VIC WA NT Guides", cursive',
        roboto: '"Roboto",sans-serif',
        Times_New_Roman: '"Times New Roman", serif',
        courier: '"Courier New", monospace',
      },
    },
  },
  plugins: [require("daisyui")],
};
