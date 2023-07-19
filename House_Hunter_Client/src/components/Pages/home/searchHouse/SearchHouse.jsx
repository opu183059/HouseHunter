import { useEffect, useState } from "react";
import HouseCard from "./HouseCard";
// import axios from "axios";
// import SearchBox from "./SearchBox";

const SearchHouse = () => {
  const [houses, setHouses] = useState([]);

  const [city, setCity] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [roomsize, setRoomsize] = useState("");
  const [available, setAvailable] = useState("");
  // console.log(city, bedroom, bathroom, roomsize, available);
  useEffect(() => {
    fetch("http://localhost:5000/houses")
      .then((res) => res.json())
      .then((result) => {
        setHouses(result);
        // console.log(result);
        if (result.length == 0) {
          alert("nodata");
        }
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:5000/houses?city=${city}&bedroom=${bedroom}&bathroom=${bathroom}&roomsize=${roomsize}&available=${available}`
  //     )
  //     .then((res) => {
  //       setHouses(res.data.result);
  //     });
  // }, [city, bedroom, bathroom, roomsize, available]);

  return (
    <div id="houses" className="max-w-6xl mx-auto">
      <h1 className="text-center mt-10 text-5xl text-sky-950">
        Search Your Desired House
      </h1>
      <div className="flex justify-center">
        {/* <SearchBox></SearchBox> */}
        <div className="my-10">
          <div className="join">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="select select-bordered join-item"
            >
              <option value="" disabled>
                City
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Borisal">Borisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangpur">Rangpur</option>
            </select>
            <select
              value={bedroom}
              onChange={(e) => setBedroom(e.target.value)}
              className="select select-bordered join-item"
            >
              <option value="" disabled>
                Bedroom
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select
              value={bathroom}
              onChange={(e) => setBathroom(e.target.value)}
              className="select select-bordered join-item"
            >
              <option value="" disabled>
                Bathroom
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select
              value={roomsize}
              onChange={(e) => setRoomsize(e.target.value)}
              className="select select-bordered join-item"
            >
              <option value="" disabled>
                Roomsize
              </option>
              <option value="200">200 sf</option>
              <option value="300">300 scf</option>
              <option value="400">400 scf</option>
            </select>
            <select
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
              className="select select-bordered join-item"
            >
              <option value="" disabled>
                Available
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>

            {/* <button className="btn join-item bg-sky-500 hover:bg-sky-700 text-gray-50">
              Search
            </button> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {houses?.map((house) => (
          <HouseCard house={house} key={house._id}></HouseCard>
        ))}
      </div>
    </div>
  );
};

export default SearchHouse;
