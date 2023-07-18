import { Link } from "react-router-dom";

const HouseCard = () => {
  return (
    <div className="flex justify-center">
      <div className="card w-80 bg-base-100 shadow-xl overflow-hidden group">
        <figure>
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/491/103/desktop-wallpaper-beauty-design-happy-house-interior-living-mansion-interior.jpg"
            alt=""
            className="group-hover:scale-110 transition-all duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link
              to={"/booking"}
              className="px-3 py-1 bg-sky-500 text-gray-50 rounded"
            >
              Book now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
