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
        'verde-escuro': '#013220',
        'marrom': '#8B4513',
        'vermelho-escuro': '#8B0000',
      },
      backgroundImage: {
        'textura-madeira': "url('https://plus.unsplash.com/premium_photo-1675782999354-2f2711e437a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

