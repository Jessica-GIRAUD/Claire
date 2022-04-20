import React from "react";
import { Fade, Slide } from "react-reveal";
import ecriture from "../images/ecriture.png";
import guillemet from "../images/guillemet.png";

const Accueil = () => {
  return (
    <section className="creamPage" id="accueil">
      <Fade delay={600}>
        <div className="accueil-img-text-container">
          <img src={ecriture} alt="ecriture" className="ecriture" />{" "}
          <div className="instruction-container">
            <h1 id="title">
              Je vous accompagne dans votre histoire de femme à travers les
              différentes étapes de votre vie.{" "}
            </h1>

            <p>
              En identifiant ensemble le chemin à entreprendre, je vous aide à
              travers les techniques de relaxation de Sophrologie,{" "}
              <strong>à devenir la personne que vous souhaitez être</strong> !
              J’exerce au sein du{" "}
              <strong> centre médical des Marots à Colomiers</strong>, près de
              Toulouse, et uniquement sur rendez-vous.
            </p>

            <p>
              Je serai là pour{" "}
              <strong>
                vous écouter et vous aider à retrouver un équilibre physique et
                émotionnel
              </strong>
              , afin de vous permettre de vivre comme vous le désirez.
            </p>

            <h2>Vivez le changement dès maintenant !</h2>
          </div>
        </div>
      </Fade>

      <div className="citation-container">
        <img src={guillemet} alt="guillemet" className="guillemet1" />
        <h1 className="citation-mobile">
          <img src={guillemet} alt="guillemet" className="guillemet3" /> Ce
          n'est pas le vent <br /> qui décide de notre destination, <br /> c'est
          l'orientation <br /> que vous donnez à votre voile. <br /> Le vent est
          pareil pour tous !{" "}
          <img src={guillemet} alt="guillemet" className="guillemet4" />
        </h1>
        <h1 className="auteur-mobile">Jim Rohn</h1>{" "}
        <h1 className="citation">
          <img src={guillemet} alt="guillemet" className="guillemet3" /> Ce
          n'est pas le vent qui décide de notre destination, <br /> c'est
          l'orientation que vous donnez à votre voile. <br /> Le vent est pareil
          pour tous !{" "}
          <img src={guillemet} alt="guillemet" className="guillemet4" />
        </h1>
        <img src={guillemet} alt="guillemet" className="guillemet2" />
      </div>

      <Slide left delay={800}>
        <h1 className="auteur">Jim Rohn</h1>{" "}
      </Slide>
    </section>
  );
};

export default Accueil;
