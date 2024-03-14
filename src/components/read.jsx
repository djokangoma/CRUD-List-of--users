import React from "react";
import { Link } from "react-router-dom";

export default function Read() {
  return (
    <div>
      <div>
        <h3>Detail of User</h3>
        <div>Name</div>
        <div>Fist name</div>
        <div>Email</div>
        <div>Phone</div>
      </div>
      <button>
        <Link to="/update/:id">Edit</Link>
      </button>
      <button>
        {" "}
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}
