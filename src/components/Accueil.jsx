import React from "react";
import ecriture from "../images/ecriture.png";
import guillemet from "../images/guillemet.png";

const Accueil = () => {
  return (
    <div className="creamPage">
      <div className="accueil-img-text-container">
        <img src={ecriture} alt="ecriture" className="ecriture" />
        <div className="instruction-container">
          <h4>
            Stress au quotidien, angoisses, émotions fluctuantes, sommeil
            irrégulier, manque de confiance ou de motivation ?
          </h4>
          <p>
            Je vous propose de vous accompagner vers votre{" "}
            <strong>mieux-être</strong> au travers d'un{" "}
            <strong>bilan complet et personnalisé</strong> pour vous permettre
            de
            <strong>
              retrouver votre équilibre et votre bien-être en toute autonomie.
            </strong>
          </p>
        </div>
      </div>
      <div className="citation-container">
        <img src={guillemet} alt="guillemet" className="guillemet1" />
        <h1 className="citation">
          Ce n'est pas le vent qui décide de notre destination, c'est
          l'orientation que vous donnez à votre voile. <br /> Le vent est pareil
          pour tous !<h1 className="auteur">Jim Rohn</h1>
        </h1>
        <img src={guillemet} alt="guillemet" className="guillemet2" />
      </div>
    </div>
  );
};

export default Accueil;
