module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        'custom': '708px',
        'custom-to-lg': {'min': '708x', 'max': '1023px'},
      },
    },
  },
  variants: {},
  plugins: [],
}
