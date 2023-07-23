import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { data } = useContext(AuthContext);
  const { handleLogin } = useContext(AuthContext);
  const { handleChange } = useContext(AuthContext);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          placeholder="email..."
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="password..."
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginPage;
