import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Create() {
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
    setFormData;
  };

  return (
    <div>
      <h1>Add a User</h1>
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
            {...register("inputEmail")}
          />
          {errors.inputPrenon && (
            <span style={{ color: "red" }}>{errors.inputEmail.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="inputPhone">Phone</label>
          <input
            type="telphone"
            name="inputEmail"
            placeholder="your phone number"
            {...register("inputPhone")}
          />
          {errors.inputPrenon && (
            <span style={{ color: "red" }}>{errors.inputPhone.message}</span>
          )}
        </div>
      </form>
      <button>Submit</button>{" "}
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}
