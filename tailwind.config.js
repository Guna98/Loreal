/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Path to your source files
    ],
    theme: {
      extend: {
        colors: {
          // Custom colors
          'purple': {
            50: '#f5f3f7',
            100: '#e6d9ff',
            200: '#d0b9ff',
            300: '#b89eff',
            400: '#a66fff',
            500: '#8e2fff',
            600: '#7318e3',
            700: '#5a13b3',
            800: '#3e0b85',
            900: '#2c0067',
          },
          'pink': {
            50: '#ffe4e6',
            100: '#ffb3c1',
            200: '#ff8fb2',
            300: '#ff5f94',
            400: '#ff3770',
            500: '#ff0074',
            600: '#e60063',
            700: '#c50052',
            800: '#a90041',
            900: '#8a0033',
          },
        },
        spacing: {
          // Custom spacing
          '128': '32rem',
          '144': '36rem',
        },
      },
    },
    plugins: [],
  };
  