/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../Provider/Authprovider";
import axios from "axios";

const HouseCard = ({ house }) => {
  const { user } = useContext(Authcontext);
  const [bookings, setBookings] = useState([]);
  const {
    name,
    email,
    address,
    bathroom,
    bedroom,
    city,
    roomsize,
    rent,
    photoURL,
    _id,
  } = house || {};

  useEffect(() => {
    const getbookingsData = async () => {
      try {
        const response = await axios.get(
          `https://house-hunter-server-rust.vercel.app/mybookings/${user?.email}`
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getbookingsData();
  }, [user]);

  // console.log(bookings?.length);
  // console.log(user?.role);
  // houseOwner

  return (
    <div className="flex justify-center">
      <div className="card w-80 bg-base-100 shadow-xl overflow-hidden group">
        <figure>
          <img
            src={photoURL}
            alt=""
            className="group-hover:scale-110 transition-all duration-300 w-full h-44"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Owner email: {email}</p>
          <p>
            {address}, {city}
          </p>

          <div className="flex justify-between">
            <p>Bedroom: {bedroom}</p>
            <p>Bathroom: {bathroom}</p>
          </div>

          <p>Room Size: {roomsize} sq feet</p>
          <p>Rent: {rent} tk BDT</p>

          <div className="card-actions justify-end">
            <Link to={`/booking/${_id}`}>
              <button
                disabled={user?.role === "houseOwner" || bookings?.length >= 2}
                className="px-3 py-1 bg-sky-500 text-gray-50 rounded"
              >
                Book now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
