// src/pages/HomePage.jsx
import React from "react";
import Banner from "../components/Banner";
import IntroSobre from "../components/IntroSobre";
import Beneficios from "../components/Beneficios";
import "../components/SobreMim";
import SobreMim from "../components/SobreMim";
import Depoimentos from "../components/Depoimentos";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <IntroSobre />
      <Beneficios />
      <SobreMim />
      <Depoimentos/>
    </div>
  );
};

export default HomePage;
