import React from "react";

const Banner = () => {
  const whatsappNumber = "5521988454667";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre a Radiestesia Terapêutica e agendar uma sessão.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    // CORREÇÃO: Removida a altura fixa e adicionado padding vertical (py-20)
    // para que a altura se ajuste ao conteúdo.
    <section className="relative bg-banner-image bg-cover bg-center py-20 font-body">
      {/* CORREÇÃO: Adicionado um filtro de gradiente para um visual mais suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-verde-suave via-verde-suave/80 to-verde-suave/60"></div>

      <div className="relative text-center text-white px-4 flex flex-col items-center">
        <img
          src="/logoviviane2.png"
          alt="Logo Viviane Energia"
          // CORREÇÃO: Tamanho do logo ajustado para ser menor em telemóveis
          className="h-24 md:h-28 mb-6"
        />
        {/* CORREÇÃO: Tamanhos de fonte responsivos para o título principal */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold">
          Radiestesia Terapêutica
        </h1>
        {/* CORREÇÃO: Tamanhos de fonte responsivos para o subtítulo */}
        <p className="mt-4 text-lg md:text-2xl font-light">
          Equilíbrio e Bem-Estar Através da Energia
        </p>
        {/* CORREÇÃO: Tamanho de fonte e largura máxima para o parágrafo longo */}
        <p className="mt-6 text-base md:text-lg font-light max-w-3xl">
          A Radiestesia é uma prática milenar utilizada para detectar e
          harmonizar vibrações energéticas presentes em pessoas, animais,
          ambientes e até situações específicas. Por meio de instrumentos como
          pêndulos e gráficos radiônicos, é possível identificar desequilíbrios
          que afetam os chakras, a aura, os corpos sutis e a frequência
          vibracional, promovendo bem-estar integral.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          // CORREÇÃO: Padding simplificado que funciona bem em todos os ecrãs
          className="inline-block mt-8 bg-gradient-to-br from-dourado-calmo to-rosa-queimado text-white font-semibold 
                     py-3 px-8 rounded-full shadow-lg
                     transition duration-300 ease-in-out transform hover:scale-105"
        >
          Agendar Sessão
        </a>
      </div>
    </section>
  );
};

export default Banner;
