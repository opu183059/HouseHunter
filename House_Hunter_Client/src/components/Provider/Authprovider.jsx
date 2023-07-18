/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const Authcontext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userData")));
  }, []);
  const autherinfo = {
    user,
    setUser,
  };
  return (
    <Authcontext.Provider value={autherinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
