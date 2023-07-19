import axios from "axios";

import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";
import { useContext } from "react";

const Booking = () => {
  const { user } = useContext(Authcontext);
  const HomeData = useLoaderData();
  const { name, address, bathroom, bedroom, city, roomsize, rent, photoURL } =
    HomeData || {};

  const HandleBookings = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const renteremail = form.renteremail.value;
    const mobile = form.mobile.value;
    // console.log(name, renteremail, mobile);
    try {
      await axios.post(`http://localhost:5000/bookHouse`, {
        name: name,
        renteremail: renteremail,
        mobile: mobile,
        owneremail: HomeData?.email,
        houseID: HomeData?._id,
        homeData: HomeData,
      });
      alert("Booking successful!");
    } catch (error) {
      alert("Booking failed.");
      console.log(error);
    }
    form.reset();
  };
  return (
    <div className="pt-10 min-h-screen">
      <div className="p-2 md:p-8 flex items-center justify-center">
        <div className="left w-1/2 ">
          <img src={photoURL} alt="" className="rounded-xl w-96" />
          <div className="details mt-2 text-lg font-semibold">
            <h1 className="font-semibold text-4xl text-blue-700 mb-2">
              {name}
            </h1>
            <p>
              Address: {address}, {city}
            </p>
            <p>Bedroom: {bedroom}</p>
            <p>Bathroom: {bathroom}</p>
            <p>Room Size{roomsize} sq feet</p>
            <p>Rent:{rent} tk/month</p>
          </div>
        </div>
        <div className="Right w-1/2">
          <h1 className="text-2xl text-sky-950 font-semibold">Book-House</h1>
          <form
            onSubmit={HandleBookings}
            action=""
            noValidate=""
            className="flex flex-col mx-auto space-y-12 bg-sky-950 rounded-md text-gray-50"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
              <div className="grid grid-cols-6 gap-4 col-span-full">
                <div className="col-span-full">
                  <label htmlFor="firstname" className="text-sm text-gray-50">
                    Name
                  </label>
                  <input
                    readOnly
                    defaultValue={user?.name}
                    id="name"
                    name="name"
                    type="text"
                    className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="sellerEmail" className="text-sm text-gray-50">
                    Mobile
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="text"
                    placeholder="+880 154 5454 454"
                    className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="sellerEmail" className="text-sm text-gray-50">
                    Email
                  </label>
                  <input
                    readOnly
                    defaultValue={user?.email}
                    id="email"
                    name="renteremail"
                    type="email"
                    className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full w-full text-left mt-3">
                  <input
                    type="submit"
                    value="Book house"
                    className="px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded uppercase text-gray-50"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
