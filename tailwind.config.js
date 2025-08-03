export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // NOVA PALETA DE CORES
      colors: {
        'bege-claro': '#FBF8F3',
        'verde-suave': '#A3B18A',
        'dourado-calmo': '#DDA15E',
        'rosa-queimado': '#BC6C25',
        'cinza-texto': '#343a40',
        'rosa-nude': '#EACCAD',  
      },
      
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['"Raleway"', 'sans-serif'],        // Fonte limpa para o corpo do texto
      },
      backgroundImage: {
        'banner-image': "url('https://images.unsplash.com/photo-1518624962422-e8524a8a4373?q=80&w=2070&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}