/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const RenterHouseRow = ({
  houseDataInfo,
  bookedHouseData,
  setBookedHouseData,
}) => {
  const {
    address,
    available,
    bathroom,
    bedroom,
    city,
    mobile,
    name,
    photoURL,
    rent,
    roomsize,
  } = houseDataInfo.homeData || {};

  const DeleteBookings = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://house-hunter-server-rust.vercel.app/bookingDelete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const restData = bookedHouseData.filter(
              (hdata) => hdata._id !== houseDataInfo._id
            );
            setBookedHouseData(restData);
          });
      }
    });
  };

  return (
    <tr className="hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
      <td>
        <img src={photoURL} alt="" className="w-20 rounded" />
      </td>
      <td>
        Name: {name} <br />
        Address: {address} <br /> City: {city} <br /> Mobile: {mobile}
      </td>
      <td>
        Bedroom: {bedroom} <br /> Bathroom: {bathroom} <br /> Room size:{" "}
        {roomsize}
      </td>
      <td>{rent}</td>
      <td>{available}</td>

      <td className="space-x-1">
        <button
          onClick={() => DeleteBookings(houseDataInfo._id)}
          className="btn bg-red-500 border-0 text-white btn-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default RenterHouseRow;
