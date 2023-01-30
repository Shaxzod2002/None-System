import axios from "axios";
const token = JSON.parse(localStorage.getItem("token"));
export const Axios = axios.create({
  baseURL: "https://teachingcentersystem.pythonanywhere.com/",
  headers: {
    Authorization: `Bearer ${token && token.access}`,
  },
});
