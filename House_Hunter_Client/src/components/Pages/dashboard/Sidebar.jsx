import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";
const Sidebar = () => {
  const { user } = useContext(Authcontext);

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="bg-blue-500 text-gray-100 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold"></div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:border-gray-200"
        ></button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden w-64 space-y-6 p-4 absolute inset-y-0 bg-gray-100 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out m-4 rounded-xl shadow-2xl hover:shadow-xl`}
      >
        <div>
          <div>
            <div>
              <div className=" pb-4">
                <div className="relative h-28 flex justify-center w-full bg-[url('https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg')] bg-cover mb-12 rounded-t-xl rounded-b-md">
                  <img
                    className="absolute top-8 border-4 border-sky-500 mt-4 w-28 h-28 mx-2 rounded-full"
                    src="https://png.pngtree.com/element_our/png/20181214/real-estate-house-logo-graphic-design-template-vector-illustration-png_269519.jpg"
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4 className="mx-2 mt-2 cursor-default font-medium text-2xl">
                    {user?.name}
                  </h4>
                  <p className="mx-2 mt-1 cursor-default text-sm font-medium uppercase">
                    {user?.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                  isActive ? "bg-blue-800  text-white" : " "
                }`
              }
            >
              My Houses
            </NavLink>
            <NavLink
              to="/dashboard/ownerBookings"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                  isActive ? "bg-blue-800  text-white" : " "
                }`
              }
            >
              Bookings
            </NavLink>
            <NavLink
              to="/dashboard/addHouse"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800  rounded-lg ${
                  isActive ? "bg-blue-800  text-white" : " "
                }`
              }
            >
              Add New House
            </NavLink>
          </div>
        </div>
        <div>
          <Link
            to={"/"}
            className="flex w-full items-center px-4 py-2 mt-5  hover:bg-blue-800 hover:text-gray-50 rounded-lg transition-colors duration-300 transform"
          >
            <span className="mx-4 font-medium">Home</span>
          </Link>
          <button className="flex w-full items-center px-4 py-2 mt-5 hover:bg-blue-800 hover:text-gray-50 rounded-lg transition-colors duration-300 transform ">
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
