import HouseCard from "./HouseCard";
import SearchBox from "./SearchBox";

const SearchHouse = () => {
  const rooms = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div id="houses" className="max-w-6xl mx-auto">
      <h1 className="text-center mt-10 text-5xl text-sky-950">
        Search Your Desired House
      </h1>
      <div className="flex justify-center">
        <SearchBox></SearchBox>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {rooms?.map((room, index) => (
          <HouseCard room={room} key={index}></HouseCard>
        ))}
      </div>
    </div>
  );
};

export default SearchHouse;
