// src/components/Tratamentos.jsx
import React from 'react';
// Importando uma variedade de ícones que representam os tratamentos
import { GiGalaxy, GiReceiveMoney, GiBriefcase, GiLovers, GiFamilyHouse, GiHealthNormal, GiBrokenHeart, GiPsychicWaves, GiBrain, GiFemale } from 'react-icons/gi';

const tratamentos = [
  { icon: <GiGalaxy size={35} className="text-verde-suave" />, title: 'Alinhamento energético (pessoas e pets)' },
  { icon: <GiReceiveMoney size={35} className="text-verde-suave" />, title: 'Harmonização financeira' },
  { icon: <GiBriefcase size={35} className="text-verde-suave" />, title: 'Harmonização profissional' },
  { icon: <GiLovers size={35} className="text-verde-suave" />, title: 'Harmonização de relacionamentos' },
  { icon: <GiFamilyHouse size={35} className="text-verde-suave" />, title: 'Harmonização de ambientes' },
  { icon: <GiHealthNormal size={35} className="text-verde-suave" />, title: 'Harmonização de sistemas de saúde' },
  { icon: <GiBrokenHeart size={35} className="text-verde-suave" />, title: 'Divórcio energético' },
  // Ícone substituído para teste
  { icon: <GiFemale size={35} className="text-verde-suave" />, title: 'Limpeza uterina' },
  { icon: <GiPsychicWaves size={35} className="text-verde-suave" />, title: 'Limpeza de traumas e crenças limitantes' },
  { icon: <GiBrain size={35} className="text-verde-suave" />, title: 'Tratamentos para depressão e ansiedade' },
];

const Tratamentos = () => {
  return (
    <section id="tratamentos" className="bg-bege-claro py-20 md:py-28 font-body">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cinza-texto mb-16">
          Tratamentos Disponíveis
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {tratamentos.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-5 mb-4 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-cinza-texto">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <p className="text-2xl italic text-verde-suave">
            💫 Quando sua energia muda, sua vida também muda.
          </p>
          <p className="text-lg text-cinza-texto mt-4 max-w-3xl mx-auto">
            Esse é um convite para você se permitir sentir mais leveza, paz e harmonia em todos os aspectos da sua vida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tratamentos;
