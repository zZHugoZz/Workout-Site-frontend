import React, { useEffect } from "react";
import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("username", data.username);
    bodyFormData.append("password", data.password);
    axios({
      method: "post",
      url: "/login/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log("on login: ", response.data);
        setAuthTokens(response.data);
        setUser(jwtDecode(response.data.access_token));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        navigate("/profile/");
      })
      .catch((error) => {
        console.log("error: ", error);
        alert("user does not exist");
      });
    setData({
      username: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };

  const contextData = {
    user: user,
    data: data,
    authTokens: authTokens,
    setAuthTokens: setAuthTokens,
    setUser: setUser,
    handleLogin: handleLogin,
    handleChange: handleChange,
    handleLogout: handleLogout,
  };

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}
