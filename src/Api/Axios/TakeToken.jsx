import axios from "axios";
export const TokenAxios = axios.create({
  baseURL: "https://teachingcentersystem.pythonanywhere.com/",
  headers: {
    withcredentials: true,
    "Content-Type": "application/json",
  },
});
