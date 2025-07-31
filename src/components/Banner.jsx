import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-banner-image bg-cover bg-center h-[600px] flex items-center justify-center font-body">
      <div className="absolute inset-0 bg-verde-suave"></div>

      <div className="relative text-center text-white px-4">
        <h1 className="font-display text-5xl md:text-7xl font-bold">
          Radiestesia Terapêutica
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light">
          Equilíbrio e Bem-Estar para sua Vida
        </p>

        <button
          className="mt-8 bg-gradient-to-br from-dourado-calmo to-rosa-queimado text-white font-semibold 
                     py-3 px-10 rounded-full shadow-lg 
                     transition duration-300 ease-in-out transform hover:scale-105"
        >
          Agendar Sessão
        </button>
      </div>
    </section>
  );
};

export default Banner;
