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
      },
      colors: {
        oxfordBlue: "#14213D",
        coyoteBrown: "#886227",
        orangeWeb: "#FCA311",
        goldCrayola: "#F1C47B",
        wheat: "#EBD5B0",
        floralWhite: "#FBF6EF",
        platinum: "#E5E5E5",
        cultured: "#F2F2F2",
        orangeYellow: "#F3B61F",
        blueMunsell: "#5296A5",
        cgBlue: "#1282A2",
        indigoDye: "#034078",
        spanishVirdian: "#0C7C59",
        teaGreen: "#DBEBC0",
        safetyOrange: "#F56200",
        darkRed: "#921511",
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
