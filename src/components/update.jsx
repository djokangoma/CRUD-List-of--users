import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import datajson from "../data/db.json";

export default function Update() {
  const [formData, setFormData] = useState({
    inputName: "",
    inputPrenon: "",
    inputEmail: "",
    inputPhone: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data, e) => {
    e.preventDefault();
    const copyData = [...datajson];
    const newData = {
      name: "",
      userName: "",
      email: "",
      phone: "",
    };
    const dataUpdate = copyData.push(newData);
    setFormData(dataUpdate);
  };
  return (
    <div>
      <h1>Update a User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="inputName">Name:</label>
          <input
            type="text"
            placeholder=" your name"
            name="inputName"
            {...register("inputName", {
              minLength: {
                value: 3,
                message: "le texte doit contenir au moins 3 caractere",
              },
            })}
          />
          {errors.tweetInput && (
            <span style={{ color: "red" }}>{errors.inputName.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="inputPrenom">Fist name:</label>
          <input
            type="text"
            placeholder="your fist name"
            name="inputPrenom"
            {...register("inputPrenom", {
              minLength: {
                value: 3,
                message: "le texte doit contenir au moins 3 caractere",
              },
            })}
          />
          {errors.inputPrenon && (
            <span style={{ color: "red" }}>{errors.inputPrenon.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="inputEmail">Email</label>
          <input
            type="mail"
            name="inputEmail"
            placeholder="your Email"
            {...register("inputEmail", {
              required: "veillez saisir votre mail",
              pattern: {
                value:
                  '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))/i',
                message: "ce champs n'est pas au bon format",
              },
            })}
          />
          {errors.inputPrenon && (
            <span style={{ color: "red" }}>{errors.inputEmail.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="inputPhone">Phone</label>
          <input
            type="tel"
            name="inputPhone"
            placeholder="your phone number"
            {...register("inputPhone", {
              required: " please, write your phone number",
              pattern: {
                value: /^[0-9]{10}$/i,
                message: "ce champ n'est pas au bon format",
              },
            })}
          />
          {errors.inputPhone && (
            <span style={{ color: "red" }}>{errors.inputPhone.message}</span>
          )}
        </div>
      </form>
      <button>
        <Link>Update</Link>
      </button>{" "}
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}
