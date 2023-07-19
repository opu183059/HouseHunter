import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../Provider/Authprovider";
import axios from "axios";
import RenterHouseRow from "./RenterHouseRow";

const RenterBookings = () => {
  const { user } = useContext(Authcontext);
  const email = user?.email;
  const [bookedHouseData, setBookedHouseData] = useState([]);
  useEffect(() => {
    const renterHouseData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/mybookings/${email}`
        );
        setBookedHouseData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    renterHouseData();
  }, []);
  return (
    <div>
      <div>
        <table className="table md:ml-4 table-compact w-full shadow-lg">
          <thead>
            <tr className="bg-slate-50 shadow-sm">
              <th>Image</th>
              <th>Address</th>
              <th>Details</th>
              <th>Rent</th>
              <th>Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookedHouseData?.map((houseDataInfo) => (
              <RenterHouseRow
                key={houseDataInfo._id}
                houseDataInfo={houseDataInfo}
                bookedHouseData={bookedHouseData}
                setBookedHouseData={setBookedHouseData}
              ></RenterHouseRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RenterBookings;
