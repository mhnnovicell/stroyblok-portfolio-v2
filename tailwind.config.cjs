/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './src/*.{js,ts,jsx,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#800080',
        },
        green: {
          100: '#2bf4a1',
        },
      },
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['Quattrocento', 'serif'],
    },
  },
  plugins: [require('flowbite/plugin')],
};
