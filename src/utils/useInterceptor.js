import { useContext } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import { AuthContext } from "../context/AuthContext";

const useInterceptor = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    headers: { Authorization: `Bearer ${authTokens?.access_token}` },
  });

  axiosInstance.interceptors.request.use(async (request) => {
    const user = jwtDecode(authTokens.access_token);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return request;

    const response = await axios.post("/refresh/", {
      refresh_token: authTokens.refresh_token,
    });

    localStorage.setItem("authTokens", JSON.stringify(response.data));

    setAuthTokens(response.data);
    setUser(jwtDecode(response.data.access));

    request.headers.Authorization = `Bearer ${response.data.access}`;
    return request;
  });

  return axiosInstance;
};

export default useInterceptor;
