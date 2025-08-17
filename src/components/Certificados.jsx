// src/components/Certificados.jsx
import React, { useState, useEffect } from 'react';
// Importe a nova função urlFor
import { client, urlFor } from '../sanity/client'; 
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Certificados = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [certificados, setCertificados] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certificado"]';
    client.fetch(query).then((data) => {
      setCertificados(data);
    });
  }, []);

  if (certificados.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 border-t border-gray-300 pt-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="font-display text-2xl font-bold text-cinza-texto">Minhas Certificações</h3>
        <span>
          {isOpen ? <FaChevronUp className="text-dourado-calmo" /> : <FaChevronDown className="text-dourado-calmo" />}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-6 relative">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-12 py-4"
          >
            {certificados.map((cert) => (
              <SwiperSlide key={cert._id}>
                <div className="flex flex-col items-center">
                  {/* AQUI ESTÁ A CORREÇÃO: Usamos urlFor para construir o link */}
                  <img 
                    src={urlFor(cert.imagem).width(400).url()} 
                    alt={cert.titulo}
                    className="rounded-lg shadow-lg w-full h-auto object-contain"
                  />
                  <p className="mt-2 font-semibold text-cinza-texto">{cert.titulo}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Certificados;
