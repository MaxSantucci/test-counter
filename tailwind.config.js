/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
     extend: {
        width: {
           '252': '252px',
        },
        height: {
           '180': '180px',
        },
        margin: {
           "7": '7px',
           "17": '17px',
           "10": '10px',
           "34": '34px',
        }
     },
  },
  plugins: [],
}
