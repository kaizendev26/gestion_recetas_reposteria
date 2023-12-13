const { addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
export const content = [
  "./public/index.html",
  './public/insumos.html',
  './public/sidebar.html',
  "./src/**/*.{html,js}"];
export const theme = {
  extend: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'principal': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    }),
    textColor: {
      'principal': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    }
  },
  variant: {
    width: ["responsive", "hover", "focus"],
    extend: {}
  }
};

export const plugins = [addDynamicIconSelectors()];

