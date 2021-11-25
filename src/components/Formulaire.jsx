import React from "react";
import { useForm } from "react-hook-form";
import "../style/formulaire.css";

const Formulaire = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    lastname: "",
    email: "",
    message: "",
  });
  console.log(errors);
  const onSubmit = (e) => {
    const data = JSON.stringify(watch());
    console.log("data", data);
  };

  return (
    <div className="form-container">
      <h1>Formulaire de contact</h1>
      <form className="formulaire" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Nom"
          {...register("lastname", {
            maxLength: 40,
            minLength: 2,
            required: true,
            pattern:
              /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/,
          })}
          style={errors.lastname ? { borderColor: "red" } : {}}
        />
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Prénom"
          {...register("firstname", {
            maxLength: 40,
            minLength: 2,
            required: true,
            pattern:
              /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/,
          })}
          style={errors.firstname ? { borderColor: "red" } : {}}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Adresse e-mail"
          {...register("email", {
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: true,
          })}
          style={errors.email ? { borderColor: "red" } : {}}
        />

        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Votre message..."
          {...register("message", { required: true })}
          style={errors.message ? { borderColor: "red" } : {}}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            id="conditions"
            name="conditions"
            {...register("conditions", { required: true })}
          />
          <label
            htmlFor="conditions"
            className="conditions"
            style={
              errors.conditions
                ? { color: "red", marginLeft: "10px" }
                : { marginLeft: "10px" }
            }
          >
            J'accepte que les données saisies soient utilisées à des fins de
            prise de contact.
          </label>
        </div>
        {Object.keys(errors).length > 0 && (
          <span
            style={{
              color: "red",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            Tous les champs sont obligatoires.
          </span>
        )}
        <button className="button">Envoyer</button>
      </form>
    </div>
  );
};

export default Formulaire;
