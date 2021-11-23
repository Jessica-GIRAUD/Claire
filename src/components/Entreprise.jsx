import React from "react";
import reunion from "../images/reunion.png";

const Entreprise = () => {
  return (
    <div className="coffeePage">
      <div className="entreprise-title">
        <h1>Entreprise</h1>
      </div>
      <div className="entreprise-img-text-container">
        <div className="entreprise-txt-container">
          <p>
            Vous souhaitez améliorer{" "}
            <strong>
              les relations professionnelles et la cohésion d'équipe
            </strong>{" "}
            pour <strong>booster votre activité et votre production</strong>, la
            SOPHROLOGIE est l'outil idéal à apporter à vos équipes.
            <br />
            <br />
            Je vous propose d'animer des ateliers en groupes (de 5 à 10
            personnes) autour d'une <strong>thématique choisie</strong> ensemble
            :
          </p>

          <ul>
            <strong>
              {" "}
              <li> Gestion du stress et des émotions.</li>
              <li>
                Optimiser sa concentration, sa créativité, ses capacités...
              </li>
              <li>
                Stimuler sa motivation, son estime de soi, son efficacité...
              </li>{" "}
            </strong>
          </ul>
          <p>
            L'objectif des séances est de permettre à vos équipes de{" "}
            <strong>dissoudre le stress négatif</strong> (physique et
            émotionnel) et de développer un
            <strong> climat propice à la réussite</strong> de votre entreprise.
            <br />
            <br />
            <p
              style={{
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
              }}
            >
              N'hésitez pas à me contacter directement pour de plus amples
              informtions.
            </p>
          </p>
        </div>
        <img src={reunion} alt="reunion" className="reunion" />
      </div>
    </div>
  );
};

export default Entreprise;