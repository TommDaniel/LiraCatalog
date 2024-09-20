module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['"Bodoni Moda SC"', 'serif'],
        marriweather: ['"Merriweather"', 'serif'],
      },
      colors: {
        bgAll: '#6F1D1B',
        bgHeader:'#432818',
        corTitulos: '#540B0E',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

