/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          fadeInUp: 'fadeInUp 0.7s ease-out forwards',
          fadeIn: 'fadeIn 1s ease-out forwards',
          scaleIn: 'scaleIn 0.6s ease-out forwards',
          tilt: 'tilt 8s infinite linear',
        },
      },
    },
    plugins: [],
  }