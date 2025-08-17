// src/layouts/Footer.jsx
import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const instagramUrl = 'https://www.instagram.com/terapeuta.olivve/';
  const whatsappNumber = '5511999999999'; // Use o número correto
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
  const email = 'contato@vivianeenergia.com'; // Use o e-mail correto

  return (
    <footer className="bg-bege-claro border-t border-gray-200 pt-16 pb-8 font-body">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Coluna 1: Logo e Contatos */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/">
              <img src="/logoviviane2.png" alt="Logo Viviane Energia" className="h-16 mb-4" />
            </a>
            <div className="space-y-3 mt-4 text-cinza-texto">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-dourado-calmo transition-colors">
                <FaInstagram size={20} />
                <span>@terapeuta.olivve</span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-3 hover:text-dourado-calmo transition-colors">
                <FiMail size={20} />
                <span>{email}</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-dourado-calmo transition-colors">
                <FaWhatsapp size={20} />
                <span>(21) 98845-4667</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="font-display text-2xl font-bold text-cinza-texto mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-cinza-texto">
              <li><a href="#sobre" className="hover:text-dourado-calmo transition-colors">Sobre Mim</a></li>
              <li><a href="#tratamentos" className="hover:text-dourado-calmo transition-colors">Tratamentos</a></li>
              <li><a href="#depoimentos" className="hover:text-dourado-calmo transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-dourado-calmo transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Coluna 3: Chamada para Ação */}
          <div>
            <h3 className="font-display text-2xl font-bold text-cinza-texto mb-4">Vamos Conversar?</h3>
            <p className="text-cinza-texto mb-6">
              Envie uma mensagem e dê o primeiro passo para uma vida mais equilibrada.
            </p>
            <a href="#contato" className="bg-verde-suave text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300">
              Agendar Sessão
            </a>
          </div>

        </div>

        {/* Linha Final de Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>Este site não oferece diagnóstico médico – é uma prática integrativa complementar.</p>
          <p className="mt-2">© {new Date().getFullYear()} Viviane Energia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
