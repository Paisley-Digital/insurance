const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1536px',
      },
      padding: {
        sm: '1rem',
      },
    },
  },
  plugins: [],
};
