import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ToyCard = ({ toy }) => {
  const { toyId, toyName, pictureURL, rating, availableQuantity, price, subCategory } = toy;

  return (
    <div className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-orange-100 rounded-2xl overflow-hidden">
      <figure className="relative h-52 overflow-hidden bg-orange-50">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = `https://placehold.co/400x300/FF6B35/white?text=${encodeURIComponent(toyName)}`;
          }}
        />
        <span className="absolute top-3 left-3 badge bg-secondary text-dark font-bold text-xs border-none">
          {subCategory}
        </span>
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title font-fun text-dark text-lg">{toyName}</h2>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span className="text-dark font-semibold text-sm">{rating}</span>
          </div>
          <span className="text-sm text-gray-500">Qty: {availableQuantity}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-primary font-bold text-xl">${price}</span>
          <Link
            to={`/toy/${toyId}`}
            className="btn btn-sm bg-primary text-white border-none hover:bg-orange-600 rounded-full px-4"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
