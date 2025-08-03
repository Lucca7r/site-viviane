// src/components/Faq.jsx
import React, { useState, useEffect } from "react";
import { client } from "../sanity/client";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-semibold text-cinza-texto">
          {item.pergunta}
        </h3>
        <span>
          {isOpen ? (
            <FaChevronUp className="text-dourado-calmo" />
          ) : (
            <FaChevronDown className="text-dourado-calmo" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-cinza-texto leading-relaxed">
          <p>{item.resposta}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "faq"]';
    client.fetch(query).then((data) => {
      setFaqData(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return <div className="text-center py-20">Carregando perguntas...</div>;

  return (
    <section id="faq" className="bg-bege-claro py-20 md:py-28 font-body">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cinza-texto mb-12 text-center">
          Perguntas Frequentes
        </h2>
        <div>
          {faqData.map((item) => (
            <FaqItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
