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
          C'est est une thérapie psychocorporelle engageant le corps et l'esprit
          vers <strong>un objectif de mieux-être</strong>.
        </p>
        <p>
          Cette technique a été conçue par le neuropsychiatre{" "}
          <strong>Alfonso Caycedo</strong> et s'inspire à la fois de techniques
          occidentales et orientales. Elle allie des techniques respiratoires
          pour décontracter tout le corps, à{" "}
          <strong>des visualisations ou des imageries mentales</strong> qui
          équilibrent la conscience vers <strong>un état plus positif</strong>.
        </p>
        <p>
          Ainsi, elle a pour but,{" "}
          <strong>de développer et d'activer tout votre potentiel</strong>, afin
          de mieux vous connaître et d'aborder la vie du bon côté et tout cela
          de <strong>façon autonome</strong>!
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
