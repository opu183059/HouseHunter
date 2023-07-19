/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import showAnimation from "../login_registration/animation/animation_lk7w5ouy.json";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Authcontext } from "../../Provider/Authprovider";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Authcontext);
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      const response = await axios.post(
        "https://house-hunter-server-rust.vercel.app/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful");
      localStorage.setItem("userData", JSON.stringify(response.data));
      setUser(JSON.parse(localStorage.getItem("userData")));
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error.response.data.message);
    }
  };
  return (
    <div>
      <div className="flex max-w-6xl mx-auto pt-24  items-center">
        <div className="w-1/2 flex items-center justify-center">
          <Lottie
            animationData={showAnimation}
            loop={true}
            className="w-8/12"
          />
        </div>
        <form
          onSubmit={handleLogin}
          action=""
          noValidate=""
          className="w-1/2 flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid bg-sky-950 rounded-md text-gray-50"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full">
              <h1 className="text-2xl text-sky-300 font-semibold">Login</h1>

              <div className="col-span-full">
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
              <div className="col-span-full">
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
                  Don't have an account? goto{" "}
                  <Link
                    to={"/registration"}
                    className=" hover:underline hover:text-sky-500"
                  >
                    Registration
                  </Link>
                </p>
              </div>
              <div className="col-span-full w-full text-left mt-3">
                <input
                  //   onClick={save}
                  type="submit"
                  value="Login"
                  className="px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded uppercase text-gray-50"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
