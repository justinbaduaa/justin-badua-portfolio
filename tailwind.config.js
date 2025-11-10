/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Apple-style dark mode colors
        'apple-dark': {
          primary: '#000000',      // Pure black for base
          secondary: '#1c1c1e',    // Elevated dark
          tertiary: '#2c2c2e',     // More elevated
          quaternary: '#3a3a3c',   // Highest elevation
          elevated: '#1c1c1e',     // Cards and elevated surfaces
          grouped: '#000000',      // Grouped backgrounds
        },
      },
    },
  },
  plugins: [],
};

