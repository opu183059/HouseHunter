import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Authcontext } from "../../../Provider/Authprovider";
import MyHouseRow from "./MyHouseRow";

const MyHouse = () => {
  const { user } = useContext(Authcontext);
  // console.log(user);
  const email = user?.email;
  const [houseData, setHouseData] = useState([]);
  useEffect(() => {
    // Make the Axios call inside the useEffect hook to fetch data when the component mounts
    const fetchOwnerHouseData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/myHouses/${email}`
        );
        setHouseData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchOwnerHouseData();
  }, []);
  return (
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
          {houseData?.map((houseDataInfo) => (
            <MyHouseRow
              key={houseDataInfo._id}
              houseDataInfo={houseDataInfo}
              houseData={houseData}
              setHouseData={setHouseData}
            ></MyHouseRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyHouse;
