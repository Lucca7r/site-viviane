import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contato = () => {
  const whatsappNumber = "5521988454667";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre a Radiestesia Terapêutica e agendar uma sessão.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="contato" className="bg-dourado-calmo py-20 md:py-28 font-body">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Pronta para Transformar sua Energia?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Dê o primeiro passo na sua jornada de autoconhecimento e cura. Entre
          em contato para agendar sua sessão e descubra como a radiestesia pode
          iluminar seu caminho.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-dourado-calmo font-bold text-lg py-4 px-10 rounded-full shadow-lg 
                     transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FaWhatsapp size={24} />
          Agendar Sessão pelo WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contato;
