const HouseCard = () => {
  return (
    <div className="flex justify-center">
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/491/103/desktop-wallpaper-beauty-design-happy-house-interior-living-mansion-interior.jpg"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
