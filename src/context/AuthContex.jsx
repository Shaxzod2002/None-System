import React, { createContext, useState } from "react";

export const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    username,
    password,
    setUsername,
    setPassword,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
