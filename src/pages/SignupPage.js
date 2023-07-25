import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("/users", formData)
      .then((response) => {
        console.log("response: ", response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      .finally(
        setFormData({
          username: "",
          email: "",
          password: "",
        })
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="username..."
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email..."
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password..."
        />
        <button>Signup</button>
      </form>
    </>
  );
};

export default SignupPage;
