import { useContext } from "react";
import { Authcontext } from "../../../Provider/Authprovider";

const AddHouse = () => {
  const { user } = useContext(Authcontext);

  const addToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const mobile = form.mobile.value;
    const bathroom = form.bathroom.value;
    const bedroom = form.bedroom.value;
    const city = form.city.value;
    const roomsize = form.roomsize.value;
    const available = form.available.value;
    const rent = form.rent.value;
    const photoURL = form.photoURL.value;
    const description = form.description.value;
    if (mobile.length != 11) {
      alert("Please enter a valid Bangladeshi Number");
      return;
    }
    const roomData = {
      name,
      email,
      address,
      mobile,
      bathroom,
      bedroom,
      city,
      roomsize,
      available,
      rent,
      photoURL,
      description,
    };
    // console.log(roomData);
    fetch("http://localhost:5000/addRoom", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roomData),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.insertedId) {
          alert("Data inserted");
          form.reset();
        }
      });
  };

  return (
    <div className="px-4">
      <form
        onSubmit={addToy}
        action=""
        noValidate=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid bg-gray-100 rounded-xl shadow-lg"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
          <div className="grid grid-cols-6 gap-4 col-span-full">
            <h2 className="text-xl text-blue-800 font-semibold col-span-full">
              Add House
            </h2>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Name
              </label>
              <input
                required
                id="name"
                name="name"
                type="text"
                placeholder="Villa Name"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerEmail" className="text-sm">
                Email
              </label>
              <input
                readOnly
                id="email"
                name="email"
                type="email"
                defaultValue={user?.email}
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                required
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="mobile" className="text-sm">
                Phone Number
              </label>
              <input
                required
                id="mobile"
                name="mobile"
                type="number"
                placeholder="mobile"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm ">
                City
              </label>
              <select
                name="city"
                id="city"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Borisal">Borisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="bedroom" className="text-sm ">
                Bedroom
              </label>
              <select
                name="bedroom"
                id="bedroom"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="bathroom" className="text-sm ">
                Bathroom
              </label>
              <select
                name="bathroom"
                id="bathroom"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="bathroom" className="text-sm ">
                Room size
              </label>
              <select
                name="roomsize"
                id="roomsize"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              >
                <option value="100">100 Square feet</option>
                <option value="200">200 Square feet</option>
                <option value="300">300 Square feet</option>
                <option value="300">400 Square feet</option>
                <option value="300">500 Square feet</option>
                <option value="300">600 Square feet</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="available" className="text-sm ">
                Available
              </label>
              <select
                name="available"
                id="available"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="rent" className="text-sm">
                Rent per month
              </label>
              <input
                id="rent"
                name="rent"
                type="number"
                placeholder="Rent per Month"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="photoURL" className="text-sm">
                Picture
              </label>
              <input
                required
                id="photoURL"
                name="photoURL"
                type="text"
                placeholder="Photo URL"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <input
                required
                id="description"
                type="text"
                name="description"
                placeholder="House Description"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full w-full text-right mt-3">
              <input
                type="submit"
                value="Add House"
                className="py-2 cursor-pointer px-3 bg-blue-500 text-white rounded transition duration-300"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddHouse;
