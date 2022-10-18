import axios from "axios";
import { axiosInstance } from "./config";
//Aunthentication
export const registerRequest = (data) =>
  axiosInstance.post("/account/group/create", data);
export const loginRequest = (data) =>
  axiosInstance.put("/account/group/create", data);
export const getUserRequest = () => axiosInstance.get("/account/group/create");
export const updateUserRequest = (data) =>
  axiosInstance.post("/account/group/create", data);

// export const loginRequestClone = async (dataClone) => {
//   const response = await axios("https://jsonplaceholder.typicode.com/posts/");
//   const data = response.dataClone;
//   console.log(data);
// }
//People

//Services

//Finances