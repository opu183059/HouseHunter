import HouseCard from "./HouseCard";

const SearchHouse = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1>Search your house</h1>

      <div className="grid grid-cols-3 gap-5">
        <HouseCard></HouseCard>
        <HouseCard></HouseCard>
        <HouseCard></HouseCard>
        <HouseCard></HouseCard>
        <HouseCard></HouseCard>
        <HouseCard></HouseCard>
        <HouseCard></HouseCard>
      </div>
    </div>
  );
};

export default SearchHouse;
