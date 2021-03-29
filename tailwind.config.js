module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#22292f',
        white: '#fff',
        gray: {
          900: '#3d4852',
          500: '#b8c2cc',
        },
        blue: {
          500: '#00a8e9',
          800: '#1c3d5a',
          900: '#12283a',
        },
        base: {
          500: '#f4e9d5',
        }
      },
      fontFamily: {
        sans: ['walsheim', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  }
}
