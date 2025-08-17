// src/components/Depoimentos.jsx
import React, { useState, useEffect } from 'react';
// AGORA VAMOS USAR O CLIENTE DO SANITY
import { client } from '../sanity/client'; 
import { FaQuoteLeft } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepoimentos = async () => {
      try {
        // Query GROQ para buscar depoimentos que estão marcados como 'aprovado'
        const query = '*[_type == "depoimento" && aprovado == true]';
        const data = await client.fetch(query);
        setDepoimentos(data);
      } catch (error) {
        console.error("Erro ao buscar depoimentos do Sanity: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepoimentos();
  }, []);

  if (loading) {
    return <div className="text-center py-20 bg-verde-suave text-white">Carregando depoimentos...</div>;
  }
  
  if (depoimentos.length === 0) {
    return null;
  }

  return (
    <section id="depoimentos" className="bg-verde-suave py-20 md:py-28 font-body">
      <div className="container mx-auto px-6 text-center relative">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16">
          O que dizem sobre a terapia
        </h2>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 40 } }}
            className="pb-12" 
          >
            {depoimentos.map((depoimento) => (
              <SwiperSlide key={depoimento._id}>
                <div className="bg-bege-claro p-8 rounded-lg shadow-lg text-left h-full flex flex-col">
                  <FaQuoteLeft className="text-dourado-calmo text-3xl mb-4" />
                  <p className="text-cinza-texto italic mb-6 flex-grow">"{depoimento.depoimento}"</p>
                  <p className="font-bold text-cinza-texto text-right">- {depoimento.nome}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
