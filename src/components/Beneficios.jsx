import React from "react";

import { FaHeartbeat, FaLeaf, FaBrain } from "react-icons/fa";

const beneficios = [
  {
    icon: <FaHeartbeat size={40} className="text-white" />,
    title: "Limpeza Energética",
    description:
      "Remove bloqueios e energias negativas que afetam seu bem-estar físico e emocional.",
  },
  {
    icon: <FaLeaf size={40} className="text-white" />,
    title: "Harmonização dos Chakras",
    description:
      "Equilibra seus centros de energia, promovendo mais vitalidade e clareza mental.",
  },
  {
    icon: <FaBrain size={40} className="text-white" />,
    title: "Clareza e Foco",
    description:
      "Ajuda a dissolver a confusão mental, trazendo mais foco para suas decisões e objetivos.",
  },
];

const Beneficios = () => {
  return (
    <section
      id="beneficios"
      className="bg-verde-suave py-20 md:py-28 font-body"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">
          Benefícios da Terapia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 rounded-full p-5 mb-4">
                {beneficio.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {beneficio.title}
              </h3>
              <p className="text-white text-opacity-90 leading-relaxed">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
