/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import showAnimation from "../login_registration/animation/animation_lk7w5h5n.json";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Authcontext } from "../../Provider/Authprovider";
const Registration = () => {
  const { user } = useContext(Authcontext);
  console.log(user);
  const handleRegistration = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = form.role.value;
    const mobile = form.mobile.value;
    const password = form.password.value;
    try {
      await axios.post(`http://localhost:5000/users/${email}`, {
        name: name,
        email: email,
        role: role,
        mobile: mobile,
        password: password,
      });
      alert("Registration successful!");
    } catch (error) {
      alert("Registration failed.");
    }
    form.reset();
  };
  return (
    <div className="flex max-w-6xl mx-auto pt-24  items-center">
      <div className="w-6/12">
        <Lottie animationData={showAnimation} loop={true} className="w-10/12" />
      </div>
      <form
        onSubmit={handleRegistration}
        action=""
        noValidate=""
        className="w-6/12 flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid bg-sky-950 rounded-md text-gray-50"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
          <div className="grid grid-cols-6 gap-4 col-span-full">
            <h1 className="text-2xl text-sky-300 font-semibold">
              Registration
            </h1>
            <div className="col-span-full">
              <label htmlFor="firstname" className="text-sm text-gray-50">
                Name
              </label>
              <input
                required
                id="name"
                name="name"
                type="text"
                placeholder="Akther uz zaman"
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
                Role
              </label>
              <select
                name="role"
                id="role"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              >
                <option value="houseRenter">House Renter</option>
                <option value="houseOwner">House Owner</option>
              </select>
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerEmail" className="text-sm text-gray-50">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="asif@gmail.com"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerEmail" className="text-sm text-gray-50">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full w-full text-left mt-3">
              <p>
                Have an account? goto{" "}
                <Link
                  to={"/login"}
                  className=" hover:underline hover:text-sky-500"
                >
                  Login
                </Link>
              </p>
            </div>
            <div className="col-span-full w-full text-left mt-3">
              <input
                //   onClick={save}
                type="submit"
                value="Register"
                className="px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded uppercase text-gray-50"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Registration;
