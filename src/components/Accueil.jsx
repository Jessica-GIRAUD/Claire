import React from "react";
import { Fade, Slide } from "react-reveal";
import ecriture from "../images/ecriture.png";
import guillemet from "../images/guillemet.png";

const Accueil = () => {
  return (
    <section className="creamPage" id="accueil">
      <Fade>
        <div className="accueil-img-text-container">
          <img src={ecriture} alt="ecriture" className="ecriture" />{" "}
          <div className="instruction-container">
            <h1 id="title">Sophrologue certifiée à Colomiers</h1>
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
                {" "}
                retrouver votre équilibre et votre bien-être en toute autonomie.
              </strong>
            </p>
          </div>
        </div>
        <Slide left delay={400}>
          <div className="citation-container">
            <img src={guillemet} alt="guillemet" className="guillemet1" />
            <h1 className="citation-mobile">
              <img src={guillemet} alt="guillemet" className="guillemet3" /> Ce
              n'est pas le vent <br /> qui décide de notre destination, <br />{" "}
              c'est l'orientation <br /> que vous donnez à votre voile. <br />{" "}
              Le vent est pareil pour tous !{" "}
              <img src={guillemet} alt="guillemet" className="guillemet4" />
            </h1>
            <h1 className="auteur-mobile">Jim Rohn</h1>{" "}
            <h1 className="citation">
              <img src={guillemet} alt="guillemet" className="guillemet3" /> Ce
              n'est pas le vent qui décide de notre destination, <br /> c'est
              l'orientation que vous donnez à votre voile. <br /> Le vent est
              pareil pour tous !{" "}
              <img src={guillemet} alt="guillemet" className="guillemet4" />
            </h1>
            <img src={guillemet} alt="guillemet" className="guillemet2" />
          </div>
          <h1 className="auteur">Jim Rohn</h1>{" "}
        </Slide>
      </Fade>
    </section>
  );
};

export default Accueil;
