import React from "react";
import Fade from "react-reveal/Fade";
import tea from "../images/tea.png";

const Presentation = () => {
  return (
    <div className="container-sophro">
      <div className="who-txt-pic-container">
        <h1>Présentation</h1>
        <p>
          La Sophrologie est une thérapie psychocorporelle engageant le corps et
          l'esprit vers un objectif de mieux-être.
        </p>
        <p>
          Cette technique a été conçue par le neuropsychiatre Alfonso Caycedo et
          s'inspire à la fois de techniques occidentales et orientales. Elle
          allie des techniques respiratoires pour décontracter tout le corps, à
          des visualisations ou imageries mentale qui équilibrent la conscience
          vers un état plus positif.
        </p>
        <p>
          Ainsi, elle a pour but, de développer et d'activer tout votre
          potentiel, afin de mieux vous connaître et d'aborder la vie du bon
          côté et tout cela de façon autonome!
        </p>
      </div>

      <div className="presentation">
        <Fade delay={400}>
          <img src={tea} alt="tea zen" />
        </Fade>
      </div>
    </div>
  );
};

export default Presentation;
