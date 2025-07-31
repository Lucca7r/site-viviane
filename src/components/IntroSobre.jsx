// src/components/IntroSobre.jsx
import React from "react";

const IntroSobre = () => {
  return (
    <section className="bg-bege-claro py-20 md:py-28 font-body">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cinza-texto mb-8">
          O que é a Radiestesia Terapêutica?
        </h2>

        <p className="text-lg text-cinza-texto max-w-3xl mx-auto leading-relaxed">
          A Radiestesia Terapêutica é uma prática ancestral que nos permite
          identificar e tratar desequilíbrios energéticos no corpo, na mente e
          nos ambientes. Utilizando instrumentos como o pêndulo, é possível
          acessar informações do seu campo energético para promover cura,
          clareza e um profundo bem-estar.
        </p>
        <p className="text-lg text-cinza-texto max-w-3xl mx-auto mt-4 leading-relaxed">
          É uma jornada de autoconhecimento e transformação que restaura sua
          harmonia e vitalidade.
        </p>
      </div>
    </section>
  );
};

export default IntroSobre;
