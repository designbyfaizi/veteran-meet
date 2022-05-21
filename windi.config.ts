import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#79CED2',
          dark: '#61A6AD',
          darker: '#1E2944',
          light: '#ADDDE3',
          lighter:'#ADDDE3'
        },
        dark: '#393939'
      },
    },
  },
  plugins: [formsPlugin],
})