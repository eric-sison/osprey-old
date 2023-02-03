const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, '{src,pages,components,examples}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    'libs/**/*!(*.stories|*.spec).{ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        midnight: {
          50: '#e6e6e6',
          100: '#cccdce',
          200: '#b3b4b5',
          300: '#999b9d',
          400: '#808284',
          500: '#67686b',
          600: '#4d4f53',
          700: '#34363a',
          800: '#1a1d22',
          900: '#010409',
        },
      },
    },
  },
  plugins: [],
};
