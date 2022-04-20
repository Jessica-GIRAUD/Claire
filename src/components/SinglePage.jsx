import React from "react";
import Accueil from "./Accueil";
import AProposDeMoi from "./AProposDeMoi";
import Sophrologie from "./Sophrologie";
import Seance from "./Seance";
import Prestations from "./Prestations";
import Contact from "./Contact";
import Accompagnement from "./Accompagnement";
import ScrollArrow from "./ScrollArrow";

const SinglePage = () => {
  return (
    <>
      <Accueil />
      <AProposDeMoi />
      <Sophrologie />
      <Accompagnement />
      <Seance />
      <Prestations />
      <Contact />
      <ScrollArrow />
    </>
  );
};

export default SinglePage;
