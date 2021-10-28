module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      minHeight: {
        'half-screen': '50vh',
        '75-screen': '75vh'
      },
      maxHeight: {
        'half-screen': '50vh',
        '75-screen': '75vh'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
    scrollbar: ['rounded'],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar')
  ],
}
