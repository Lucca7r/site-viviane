export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // NOVA PALETA DE CORES
      colors: {
        'bege-claro': '#FBF8F3',     // Um fundo principal mais quente e elegante
        'verde-suave': '#A3B18A',   // Um verde terroso e calmante
        'dourado-calmo': '#DDA15E',  // Para detalhes e botões
        'rosa-queimado': '#BC6C25', // Um tom mais forte para contraste
        'cinza-texto': '#343a40',   // Para textos, melhor que o preto puro
      },
      // NOVAS FONTES
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'], // Fonte elegante para títulos
        'body': ['"Raleway"', 'sans-serif'],        // Fonte limpa para o corpo do texto
      },
      backgroundImage: {
        'banner-image': "url('https://images.unsplash.com/photo-1518624962422-e8524a8a4373?q=80&w=2070&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}