/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      width: {
        85: '22rem',
        94: '26rem',
        128: '32rem'
      },
      gridTemplateRows: {
        layout: '12rem, 5rem, auto'
      }
    }
  },
  plugins: []
}
