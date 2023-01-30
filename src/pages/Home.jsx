import React from "react";
import { TokenAxios } from "../Api/Axios/TakeToken";

function Home() {
  const login = JSON.parse(localStorage.getItem("login"));
  const getToken = async (url) => {
    try {
      const response = await TokenAxios.post(url, {
        username: login && login.username,
        password: login && login.password,
      });
      localStorage.setItem("token", JSON.stringify(await response.data));
    } catch (error) {
      console.error(error);
    }
  };
  getToken("take_token/");
  return (
    <div className="w-[90%] mx-auto">
      <h3>Home</h3>
    </div>
  );
}

export default Home;
