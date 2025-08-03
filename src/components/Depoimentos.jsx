import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepoimentos = async () => {
      try {
        const q = query(
          collection(db, "depoimentos"),
          where("aprovado", "==", true)
        );
        const querySnapshot = await getDocs(q);

        const depoimentosData = [];
        querySnapshot.forEach((doc) => {
          depoimentosData.push({ id: doc.id, ...doc.data() });
        });

        setDepoimentos(depoimentosData);
      } catch (error) {
        console.error("Erro ao buscar depoimentos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepoimentos();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 bg-verde-suave text-white">
        Carregando depoimentos...
      </div>
    );
  }

  if (depoimentos.length === 0) {
    return null;
  }

  return (
    <section id="depoimentos" className="bg-verde-suave py-20 md:py-28 font-body">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-16">
          O que dizem sobre a terapia
        </h2>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            
            className="pb-12" 
          >
            {depoimentos.map((depoimento) => (
              <SwiperSlide key={depoimento.id}>
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