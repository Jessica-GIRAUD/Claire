import React from "react";
import Accueil from "./Accueil";
import About from "./About";
import Sophrologie from "./Sophrologie";
import Seance from "./Seance";
import Entreprise from "./Entreprise";
import Prestations from "./Prestations";
import Contact from "./Contact";

const SinglePage = () => {
  return (
    <>
      <Accueil />
      <About />
      <Sophrologie />
      <Seance />
      <Entreprise />
      <Prestations />
      <Contact />
    </>
  );
};

export default SinglePage;
