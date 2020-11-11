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
        teal: {
          '100': '#aed1ca',
          '200': '#aed1ca',
          '400': '#176355',
          '800': '#031c17',
        },
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
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
