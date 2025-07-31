// src/components/Depoimentos.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FaQuoteLeft } from "react-icons/fa";

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
    return <div className="text-center py-20">Carregando depoimentos...</div>;
  }

  return (
    <section
      id="depoimentos"
      className="bg-verde-suave py-20 md:py-28 font-body"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">
          O que dizem sobre a terapia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento) => (
            <div
              key={depoimento.id}
              className="bg-bege-claro p-8 rounded-lg shadow-lg text-left"
            >
              <FaQuoteLeft className="text-dourado-calmo text-3xl mb-4" />
              <p className="text-cinza-texto italic mb-6">
                "{depoimento.depoimento}"
              </p>
              <p className="font-bold text-cinza-texto text-right">
                - {depoimento.nome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
