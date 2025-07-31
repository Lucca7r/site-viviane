// src/components/SobreMim.jsx
import React from "react";

const SobreMim = () => {
  return (
    <section id="sobre" className="bg-bege-claro py-20 md:py-28 font-body">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src="https://placehold.co/400x400/A3B18A/FBF8F3?text=Viviane"
              alt="Terapeuta Viviane"
              className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover mx-auto"
            />
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cinza-texto mb-6">
              Conheça a Terapeuta
            </h2>
            <p className="text-lg text-cinza-texto leading-relaxed mb-4">
              Olá, eu sou a Viviane. Minha jornada no mundo das terapias
              energéticas começou com uma busca pessoal por equilíbrio e cura.
              Descobri na Radiestesia uma ferramenta poderosa não apenas para
              minha vida, mas para ajudar outras pessoas a encontrarem seu
              próprio caminho de bem-estar.
            </p>
            <p className="text-lg text-cinza-texto leading-relaxed">
              Minha missão é oferecer um espaço seguro e acolhedor, guiando você
              através de um processo de autoconhecimento e transformação
              energética, para que você possa viver com mais leveza, clareza e
              alegria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
