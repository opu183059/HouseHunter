const SearchBox = () => {
  return (
    <div className="my-10">
      <div className="join">
        <select className="select select-bordered join-item">
          <option>City</option>
          <option>Dhaka</option>
          <option>Chittagong</option>
          <option>Borisal</option>
          <option>Khulna</option>
          <option>Rajshahi</option>
          <option>Rangpur</option>
        </select>
        <select className="select select-bordered join-item">
          <option>Bedroom</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <select className="select select-bordered join-item">
          <option>Bathroom</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select className="select select-bordered join-item">
          <option>Roomsize</option>
          <option>200 sf</option>
          <option>300 scf</option>
          <option>400 scf</option>
        </select>
        <select className="select select-bordered join-item">
          <option>Available</option>

          <option>yes</option>
          <option>no</option>
        </select>
        {/* <select className="select select-bordered join-item">
          <option>
            Price
          </option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select> */}

        <button className="btn join-item bg-sky-500 hover:bg-sky-700 text-gray-50">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
