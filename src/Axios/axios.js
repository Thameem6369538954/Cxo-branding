import axios from "axios";
import { logoutUser } from "../redux/userReducer";
import { store } from "../redux/store";
const axiosInterceptorInstance = axios.create({
  baseURL: "http://localhost:4000/api",
});

axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    const userAccessToken = localStorage.getItem("userAccessToken");
 console.log(userAccessToken, "lllllllllllllllllllllllll");
        if (userAccessToken) {
       
            config.headers.Authorization = `Bearer ${userAccessToken}`;

            
    }

    return config;
  },
  (error) => {
    console.log("Error in request");
    return Promise.reject(error);
  }
);

axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      error.response?.data?.message === "userTokenNotverify"
    ) {
      store.dispatch(logoutUser());

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
