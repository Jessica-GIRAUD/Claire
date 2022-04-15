import React from "react";
import canap from "../images/canap.png";
import Slide from "react-reveal/Slide";

const Prestations = () => {
  return (
    <section className="coffeePage" id="prestations">
      <div className="container-presta">
        <Slide top>
          <h1>Prestations</h1>
        </Slide>

        <div className="presta-img-container">
          <div>
            <img src={canap} alt="cabinet" className="cabinet-img" />
          </div>

          <div className="presta-adultes">
            <div className="prices-container">
              <h4>Première séance - 1h15 / 1h30</h4>
              <p> 55€</p>
            </div>
            <div className="prices-container">
              <h4>Consultation de suivi - 45min / 1h</h4>
              <p> 50€</p>
            </div>
          </div>
        </div>

        <div className="paiement">
          <p>
            <strong>Paiement :</strong> par chèques ou espèces
          </p>

          <p>
            <strong>Remboursement : </strong>
            Prise en charge sous condition (voir mutuelle).
          </p>
        </div>
        <Slide delay={500} bottom>
          <div>
            <h3 className="deontologie">
              Je suis soumise au code de déontologie de la sophrologie et au
              secret professionnel.
            </h3>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Prestations;
