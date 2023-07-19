/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

export const Authcontext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userData")));
  }, []);

  // useEffect(() => {
  //   axios.get(`https://house-hunter-server-eight.vercel.app/mybooking/${user?.email}`).then(
  //     (res) => {
  //       setBooking(res.data);
  //     },
  //     [user]
  //   );
  // });

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser({});
  };
  const autherinfo = {
    user,
    setUser,
    handleLogout,
  };
  return (
    <Authcontext.Provider value={autherinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
