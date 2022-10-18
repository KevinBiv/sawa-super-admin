import axios from "axios";

//import { setUserInfo } from "../pages/Signin/store";
import store from "../store";
import { onUserLogout } from "../store/actions/userAuth.actions";
import useErrorMessage from "../utils/useErrorMessage";
const axiosInstance = axios;

axiosInstance.defaults.baseURL = process.env.REACT_APP_API_URL;
// Check for token and update application state if required
const userStr = localStorage.getItem("user");
const user = userStr && JSON.parse(userStr);
if (user)
  axiosInstance.defaults.headers.common["Authorization"] =
    "Bearer " + user.token;



axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log("Error HAPPENED FROM API ===>>>", err);

    if (err.message === "Network Error" && !err.response) {
      console.log("network error:", err);
    }

    if (err.response) {
      console.log("Error HAPPENED FROM API ===>>>", err);
      if (err.response.status === 401) store.dispatch(onUserLogout());
      var error = err.response.data;
      if (typeof error === "object") throw error;
      else throw JSON.parse(error);
    }
    throw err;
  }
);

export { axiosInstance };
