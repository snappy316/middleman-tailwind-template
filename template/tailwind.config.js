const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
};
