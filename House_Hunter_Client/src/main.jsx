/* eslint-disable no-unused-vars */
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
import AddHouse from "./components/Pages/dashboard/houseOwner/AddHouse.jsx";
import MyHouse from "./components/Pages/dashboard/houseOwner/MyHouse.jsx";
import UpdateHouse from "./components/Pages/dashboard/houseOwner/UpdateHouse.jsx";
import Booking from "./components/Pages/Booking/Booking.jsx";
import RenterBookings from "./components/Pages/dashboard/houseRenter/RenterBookings.jsx";
import OwnerBookings from "./components/Pages/dashboard/houseOwner/OwnerBookings.jsx";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/booking/:id",
        element: <Booking></Booking>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/houseInformation/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <MainDashboard></MainDashboard>,
    children: [
      {
        path: "/dashboard",
        element: <MyHouse></MyHouse>,
      },
      {
        path: "/dashboard/ownerBookings",
        element: <OwnerBookings></OwnerBookings>,
      },
      {
        path: "/dashboard/renterBookings",
        element: <RenterBookings></RenterBookings>,
      },
      {
        path: "/dashboard/addHouse",
        element: <AddHouse></AddHouse>,
      },
      {
        path: "/dashboard/updateHouse/:id",
        element: <UpdateHouse></UpdateHouse>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/houseInformation/${params.id}`),
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
