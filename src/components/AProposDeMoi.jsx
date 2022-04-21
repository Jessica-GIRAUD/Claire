import React from "react";
import Claire from "../images/Claire.png";
import ChambreSyndicale from "../images/chambreSyndicale.png";
import Fade from "react-reveal/Fade";

const AProposDeMoi = () => {
  const Divider = () => {
    return (
      <div className="custom-shape-divider-top-1638013598">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    );
  };
  return (
    <section className="greenPage" id="aproposdemoi">
      <Divider />
      <div className="container-about">
        <Fade left delay={300}>
          <div className="claire-container">
            <img src={Claire} alt="Claire Deligné" className="claire" />
          </div>
        </Fade>

        <div className="about-txt-pic-container">
          <Fade top delay={600}>
            <h1>A propos de moi</h1>
          </Fade>
          <Fade bottom delay={900}>
            <p>
              Passionnée depuis plus de 20 ans par le{" "}
              <strong>développement personnel</strong> et le{" "}
              <strong>bien-être</strong> afin d’améliorer ma qualité de vie,
              j’ai décidé de faire de ma passion mon métier.
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
              Je souhaite aujourd’hui, au travers de la sophrologie, et de mon
              expérience en tant que femme et maman, vous apporter les
              techniques nécessaires afin de vous permettre de vous libérer de
              vos poids émotionnels, et de vous aider à trouver les clés pour
              reprendre le contrôle de votre vie, pleinement et sereinement.
            </p>
          </Fade>
          <div className="container-chambre">
            <p>Membre de la Chambre Syndicale de la Sophrologie :</p>
            <div>
              <a
                href="https://www.chambre-syndicale-sophrologie.fr/"
                target="_blank"
                rel="noReferrer"
              >
                <img
                  src={ChambreSyndicale}
                  alt="chambre syndicale sophrologie"
                  style={{ marginBottom: "20px", width: "50%" }}
                />
                <p style={{ fontSize: "small" }}>
                  Cliquez ici pour en savoir plus.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AProposDeMoi;
