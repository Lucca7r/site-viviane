// src/components/SobreMim.jsx
import React from "react";
import Certificados from './Certificados'; // Importa o novo componente

const SobreMim = () => {
  return (
    <section id="sobre" className="bg-cinza-gelo py-20 md:py-28 font-body">
      <div className="container mx-auto px-6 text-center">
        {/* Título Principal */}
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cinza-texto mb-12">
          Quem Sou Eu
        </h2>

        {/* Foto em destaque no centro */}
        <img
          src="https://placehold.co/400x400/A3B18A/FBF8F3?text=Viviane"
          alt="Terapeuta Viviane"
          className="rounded-full shadow-lg w-48 h-48 object-cover mx-auto mb-8"
        />

        {/* Grid com as duas colunas de texto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-left">
          {/* Coluna 1: Formação e Valores */}
          <div className="text-cinza-texto leading-relaxed">
            <h3 className="font-display text-2xl font-bold mb-4">Sobre Mim</h3>
            <p className="mb-4">
              Sou formada em Recursos Humanos e atuo nas áreas de
              Telecomunicações e Radiestesia Terapêutica.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Estudante de reiki</li>
              <li>Formada em cristaloterapia</li>
              <li>Formada em cromoterapia</li>
            </ul>
            <p>
              Sou casada e mãe de um filho de 14 anos. Minha vida é guiada por
              valores como empatia, dedicação e o desejo genuíno de ajudar as
              pessoas a encontrarem equilíbrio e bem-estar.
            </p>
          </div>

          {/* Coluna 2: A Jornada com a Radiestesia */}
          <div className="text-cinza-texto leading-relaxed">
            <h3 className="font-display text-2xl font-bold mb-4">
              Minha Jornada com a Radiestesia
            </h3>
            <p className="mb-4">
              A Radiestesia Terapêutica entrou na minha vida em um momento de
              busca por equilíbrio emocional e paz de espírito. No início, era
              apenas para meu próprio bem-estar, mas, com o tempo, percebi que
              essa prática poderia ir muito além.
            </p>
            <p>
              Me apaixonei profundamente por esse trabalho e descobri nele o meu
              propósito de vida: ajudar pessoas a harmonizarem suas energias e
              encontrarem mais leveza no dia a dia. Cada atendimento é feito com
              carinho, atenção e respeito, e ver os resultados positivos na vida
              de quem confia no meu trabalho é o que me motiva todos os dias.
            </p>
          </div>
        </div>
        
        {/* Seção de Certificados adicionada aqui */}
        <div className="max-w-5xl mx-auto">
          <Certificados />
        </div>

      </div>
    </section>
  );
};

export default SobreMim;
