import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        space: '#5c6ac6',
      }
    }
  }
}
