module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lh-jungle-green': '#012D26',
        'lh-green-gray': '#5B6866',
        'lh-sky-blue': '#3948FF',
        'lh-md-blu': '#EBEDFF',
        'lh-primary': '#3ECFAF'
      },
      fontFamily: {
        silka: ['Silka']
      },
      width: {
        '5/9': '55.55555%'
      },
      inset: {
        '1/6': '17%',
        '1/8': '13%',
        '1/5': '20%',
        '2/5': '40%',
        '2/7': '28%',
        '2/3': '66.66666%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}