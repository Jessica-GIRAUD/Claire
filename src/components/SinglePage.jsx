import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Accueil from "./Accueil";
import About from "./About";
import Sophrologie from "./Sophrologie";
import Seance from "./Seance";
import Entreprise from "./Entreprise";
import Prestations from "./Prestations";
import Contact from "./Contact";
import Footer from "./Footer";

const SinglePage = () => {
  return (
    <>
      <HeaderNavbar />
      <Accueil />
      <About />
      <Sophrologie />
      <Seance />
      <Entreprise />
      <Prestations />
      <Contact />
      <Footer />
    </>
  );
};

export default SinglePage;
