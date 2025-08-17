import React from "react";
import Banner from "../components/Banner";
import IntroSobre from "../components/IntroSobre";
import Beneficios from "../components/Beneficios";
import "../components/SobreMim";
import SobreMim from "../components/SobreMim";
import Depoimentos from "../components/Depoimentos";
import Faq from "../components/Faq";
import Contato from "../components/Contato";
import Tratamentos from "../components/Tratamentos";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <IntroSobre />
      <Beneficios />
      <Tratamentos />
      <SobreMim />
      <Depoimentos />
      <Faq />
      <Contato />
    </div>
  );
};

export default HomePage;
