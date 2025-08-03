import React from "react";
import Banner from "../components/Banner";
import IntroSobre from "../components/IntroSobre";
import Beneficios from "../components/Beneficios";
import "../components/SobreMim";
import SobreMim from "../components/SobreMim";
import Depoimentos from "../components/Depoimentos";
import Faq from "../components/Faq";
import Contato from "../components/Contato";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <IntroSobre />
      <Beneficios />
      <SobreMim />
      <Depoimentos />
      <Faq />
      <Contato />
    </div>
  );
};

export default HomePage;
