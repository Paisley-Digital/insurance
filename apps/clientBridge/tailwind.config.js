const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../../libs/shared/util/tailwind-preset/src/lib/index');
const colors = require('tailwindcss/colors');

module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        blue: colors.blue,
        green: colors.green,
        yellow: colors.yellow,
      },
    },
  },
};
