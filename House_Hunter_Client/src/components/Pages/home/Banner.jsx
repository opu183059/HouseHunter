/* eslint-disable react/no-unescaped-entities */
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
const Banner = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <div className="pt-5">
      <div className="hero h-screen bg-[url('https://homeid-elementor-demo9.g5plus.net/wp-content/uploads/2022/12/bg-homepage.jpg')] bg-auto bg-fixed md:bg-cover">
        <div className="bg-black/10 w-full hero h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse w-10/12 mx-auto">
            <div className="lg:w-1/2 w-0"></div>
            <div
              className="text-center md:text-left lg:w-1/2 w-full"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h1 className="text-7xl text-sky-950">
                Find a home <br /> you'll love
              </h1>

              <p className="py-6 text-sky-900 font-medium">
                Discover a place you will love to live
              </p>
              <a
                href="#houses"
                className="px-4 py-2 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase font-medium text-gray-50 text-lg"
              >
                Explore Houses
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
