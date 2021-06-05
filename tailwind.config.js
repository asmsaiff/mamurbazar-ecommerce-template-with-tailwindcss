module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // backgroundColor: theme => ({
    //   'primary': '#FBA028',
    //  }),

    //  borderColor: theme => ({
    //   'primary': '#FFA137',
    //  })
  },
  
  variants: {
    extend: {
      display: ["hover", "focus", "group-hover"],
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [],
}
