import React from "react";
import Accueil from "./Accueil";
import About from "./About";
import Sophrologie from "./Sophrologie";
import Seance from "./Seance";
import Prestations from "./Prestations";
import Contact from "./Contact";

const SinglePage = () => {
  return (
    <>
      <Accueil />
      <About />
      <Sophrologie />
      <Seance />
      <Prestations />
      <Contact />
    </>
  );
};

export default SinglePage;
