import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, email, phone };

    axios
      .post("http://localhost:8000/users", payload)
      .then((res) => {
        toast.success("User created successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => navigate("/"), 3000);
      })
      .catch((err) => {
        toast.error("Error creating user!", {
          position: "top-right",
          autoClose: 3000,
        });
        console.error(err);
      });
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Create User</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          maxLength={10}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        >
          Create User
        </button>
      </form>
      <button
        onClick={handleBack}
        style={{
          marginTop: "10px",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
      <ToastContainer />
    </div>
  );
};

export default Create;
