const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
      },
      borderRadius: {
        'xl': '1.5rem',
        'xxl': '5rem',
      },
      fontFamily: {
        'sans': [
          'DM Sans',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  variants: {},
  plugins: [
    plugin(function({addBase, config}) {
      addBase({
        'h1': {
          fontFamily: `Montserrat Alternates`
        },
      })
    })
  ],
}
