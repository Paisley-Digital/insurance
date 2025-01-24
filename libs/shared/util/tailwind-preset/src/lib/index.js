const colors = require('tailwindcss/colors');

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ['class', 'body.color-scheme-dark'],
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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      foreground: 'rgb(var(--foreground-color), <alpha-value>)',
      background: 'rgb(var(--background-color), <alpha-value>)',
      card: 'rgb(var(--card-background-color), <alpha-value>)',
      insurance: '#7F56D9',
      primary: {
        50: 'rgb(var(--primary-color-50), <alpha-value>)',
        100: 'rgb(var(--primary-color-100), <alpha-value>)',
        200: 'rgb(var(--primary-color-200), <alpha-value>)',
        300: 'rgb(var(--primary-color-300), <alpha-value>)',
        400: 'rgb(var(--primary-color-400), <alpha-value>)',
        DEFAULT: 'rgb(var(--primary-color-500), <alpha-value>)',
        600: 'rgb(var(--primary-color-600), <alpha-value>)',
        700: 'rgb(var(--primary-color-700), <alpha-value>)',
        800: 'rgb(var(--primary-color-800), <alpha-value>)',
        900: 'rgb(var(--primary-color-900), <alpha-value>)',
      },
      accent: {
        50: 'rgb(var(--accent-color-50), <alpha-value>)',
        100: 'rgb(var(--accent-color-100), <alpha-value>)',
        200: 'rgb(var(--accent-color-200), <alpha-value>)',
        300: 'rgb(var(--accent-color-300), <alpha-value>)',
        400: 'rgb(var(--accent-color-400), <alpha-value>)',
        DEFAULT: 'rgb(var(--accent-color-500), <alpha-value>)',
        600: 'rgb(var(--accent-color-600), <alpha-value>)',
        700: 'rgb(var(--accent-color-700), <alpha-value>)',
        800: 'rgb(var(--accent-color-800), <alpha-value>)',
        900: 'rgb(var(--accent-color-900), <alpha-value>)',
      },
      warn: {
        50: 'rgb(var(--warn-color-50), <alpha-value>)',
        100: 'rgb(var(--warn-color-100), <alpha-value>)',
        200: 'rgb(var(--warn-color-200), <alpha-value>)',
        300: 'rgb(var(--warn-color-300), <alpha-value>)',
        400: 'rgb(var(--warn-color-400), <alpha-value>)',
        DEFAULT: 'rgb(var(--warn-color-500), <alpha-value>)',
        600: 'rgb(var(--warn-color-600), <alpha-value>)',
        700: 'rgb(var(--warn-color-700), <alpha-value>)',
        800: 'rgb(var(--warn-color-800), <alpha-value>)',
        900: 'rgb(var(--warn-color-900), <alpha-value>)',
      },
    },
  },
  plugins: [],
};
