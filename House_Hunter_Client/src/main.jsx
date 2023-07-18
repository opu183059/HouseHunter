import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/home/home.jsx";
import Registration from "./components/Pages/login_registration/Registration.jsx";
import Login from "./components/Pages/login_registration/Login.jsx";
import MainDashboard from "./components/Pages/dashboard/MainDashboard.jsx";
import Authprovider from "./components/Provider/Authprovider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/dashboard",
        element: <MainDashboard></MainDashboard>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authprovider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Authprovider>
);
