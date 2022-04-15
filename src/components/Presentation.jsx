import React from "react";
import { Slide } from "react-reveal";
import Fade from "react-reveal/Fade";
import boule from "../images/bouboule.png";

const Presentation = () => {
  return (
    <div className="container-sophro">
      <div className="presentation-txt-pic-container">
        <Slide top>
          <h1>La Sophrologie</h1>
        </Slide>
        <p>
          La <strong>sophrologie</strong> a été développée par le
          neuropsychiatre Alfonso Caycedo dans les années 1960.
        </p>
        <p>
          C’est une méthode vous permettant de{" "}
          <strong>reprendre conscience avec votre corps</strong> pour vous
          reconnecter à lui en <strong>lâchant prise sur le mental</strong>. Cet
          entraînement corporel contribue à retrouver la sérénité au travers de
          techniques de relaxation (respiration et visualisation positive) qui
          sont <strong>adaptables et accessibles à tous</strong>.
        </p>
        <p>
          Elle a pour but de vous aider à porter un nouveau regard sur vous,{" "}
          <strong>une meilleure connaissance de vous</strong> et à devenir la
          personne que vous souhaitez être.
        </p>
        <p>
          Elle favorise ainsi,{" "}
          <strong>
            le retour de l’équilibre entre votre corps, votre mental et vos
            émotions dans votre quotidien.
          </strong>{" "}
        </p>
        <p>
          Vous retrouvez ainsi <strong>votre potentiel de bien-être.</strong>
        </p>
      </div>

      <div className="presentation">
        <Fade delay={400}>
          <img src={boule} alt="boule zen" />
        </Fade>
      </div>
    </div>
  );
};

export default Presentation;
