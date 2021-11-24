import React from "react";
import Claire from "../images/Claire.png";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="greenPage">
      <div className="container-about">
        <Fade left delay={300}>
          <div className="claire-container">
            <img src={Claire} alt="Claire Deligné" className="claire" />
          </div>
        </Fade>

        <div className="about-txt-pic-container">
          <Fade right delay={600}>
            <h1>A propos de moi</h1>
          </Fade>
          <Fade bottom delay={900}>
            <p>
              Passionnée depuis plus de 20 ans par le développement personnel et
              le bien-être afin d’améliorer ma qualité de vie, j’ai décidé de
              faire de ma passion mon métier.
              <br />
              <br />
              En effet, après avoir travaillé 10 ans dans les soins de bien-être
              et 5 ans dans une grande entreprise, j’ai saisi l’opportunité de
              me reconvertir vers un domaine plus en adéquation avec mes envies
              et mes besoins. J'ai donc passé un diplôme de Sophrologie reconnu
              par l'état (RNCP - Ecole Sup de Sophrologie) que j'ai validé à
              l'issue d'un mémoire.
              <br />
              <br />
              Je souhaite aujourd’hui, au travers de la sophrologie, vous
              apporter les techniques nécessaires afin de vous permettre de vous
              libérer de vos poids émotionnels, et de vous aider à trouver les
              clés pour reprendre le contrôle de votre vie, pleinement et
              sereinement.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
