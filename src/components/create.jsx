import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Create() {
  const [formData, setFormData] = useState({
    inputName: "",
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
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="name"
          name="inputName"
          {...register("tweetInput", {
            minLength: {
              value: 1,
              message: "le texte doit contenir au moins un caractere",
            },
          })}
        />
        {errors.tweetInput && (
          <span style={{ color: "red" }}>{errors.tweetInput.message}</span>
        )}
      </form>
      <button>Submit</button>{" "}
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}
