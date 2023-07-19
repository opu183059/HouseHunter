import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const OwnerBookingRow = ({ houseDataInfo, ownerBooking, setOwnerBooking }) => {
  const { name, renteremail, mobile } = houseDataInfo || {};
  const { address, city, photoURL, rent } = houseDataInfo.homeData || {};

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
        fetch(`http://localhost:5000/bookingDelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const restData = ownerBooking.filter(
              (hdata) => hdata._id !== houseDataInfo._id
            );
            setOwnerBooking(restData);
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
        Name: {houseDataInfo.homeData.name} <br />
        Address: {address} <br /> City: {city} <br /> Mobile: {mobile}
      </td>
      <td>{rent}</td>
      <td>{name}</td>
      <td>{renteremail}</td>
      <td>{mobile}</td>
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

export default OwnerBookingRow;
