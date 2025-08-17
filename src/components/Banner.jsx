import React from "react";

const Banner = () => {
  const whatsappNumber = "5521988454667";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre a Radiestesia Terapêutica e agendar uma sessão.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="relative bg-banner-image bg-cover bg-center h-[600px] flex items-center justify-center font-body">
      <div className="absolute inset-0 bg-verde-suave"></div>

      

      <div className="relative text-center text-white px-4 flex flex-col items-center">
        <img 
          src="/logoviviane2.png" // NOME DO ARQUIVO ALTERADO
          alt="Logo Viviane Energia"
          className="h-28 md:h-30 mb-6" // Ajuste o tamanho e a margem conforme necessário
        />
        <h1 className="font-display text-5xl md:text-7xl font-bold">
          Radiestesia Terapêutica
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light">
          Equilíbrio e Bem-Estar Através da Energia
        </p>
        <p className="mt-4 text-xl md:text-1xl font-light">
          A Radiestesia é uma prática milenar utilizada para detectar e harmonizar vibrações energéticas presentes em pessoas, animais, ambientes e até situações específicas.
Por meio de instrumentos como pêndulos e gráficos radiônicos, é possível identificar desequilíbrios que afetam os chakras, a aura, os corpos sutis e a frequência vibracional, promovendo bem-estar integral.

        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-gradient-to-br from-dourado-calmo to-rosa-queimado text-white font-semibold 
                     py-3 px-10 rounded-full shadow-lg 
                     transition duration-300 ease-in-out transform hover:scale-105"
        >
          Agendar Sessão
        </a>
      </div>
    </section>
  );
};

export default Banner;
