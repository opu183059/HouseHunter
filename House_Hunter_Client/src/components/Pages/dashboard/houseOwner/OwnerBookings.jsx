import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../Provider/Authprovider";
import axios from "axios";
import OwnerBookingRow from "./OwnerBookingRow";

const OwnerBookings = () => {
  const { user } = useContext(Authcontext);
  // console.log(user);
  const email = user?.email;
  const [ownerBooking, setOwnerBooking] = useState([]);
  useEffect(() => {
    // Make the Axios call inside the useEffect hook to fetch data when the component mounts
    const fetchOwnerHouseData = async () => {
      try {
        const response = await axios.get(
          `https://house-hunter-server-rust.vercel.app/ownerBookings/${email}`
        );
        setOwnerBooking(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchOwnerHouseData();
  }, []);
  return (
    <div>
      <div>
        <table className="table md:ml-4 table-compact w-full shadow-lg">
          <thead>
            <tr className="bg-slate-50 shadow-sm">
              <th>Image</th>
              <th>Address</th>
              <th>Rent</th>
              <th>Renter Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ownerBooking?.map((houseDataInfo) => (
              <OwnerBookingRow
                key={houseDataInfo._id}
                houseDataInfo={houseDataInfo}
                ownerBooking={ownerBooking}
                setOwnerBooking={setOwnerBooking}
              ></OwnerBookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerBookings;
