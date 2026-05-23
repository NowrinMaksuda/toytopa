import { useParams } from "react-router-dom";
import { useState } from "react";
import toysData from "../data/toys.json";
import useTitle from "../hooks/useTitle";
import { useAuth } from "../context/AuthContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FiPackage, FiUser, FiMail } from "react-icons/fi";
import Swal from "sweetalert2";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (i - 0.5 <= rating) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
  }
  return <div className="flex gap-1">{stars}</div>;
};

const ToyDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const toy = toysData.find((t) => t.toyId === parseInt(id));
  useTitle(toy ? toy.toyName : "Toy Details");

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

  if (!toy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <p className="text-xl text-gray-500">Toy not found!</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "🎉 Request Sent!",
      text: `Thanks ${formData.name}! We'll contact you at ${formData.email} about "${toy.toyName}".`,
      icon: "success",
      confirmButtonColor: "#FF6B35",
      confirmButtonText: "Awesome!",
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl bg-orange-50 flex items-center justify-center p-6">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="w-full max-h-96 object-contain hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = `https://placehold.co/500x400/FF6B35/white?text=${encodeURIComponent(toy.toyName)}`;
            }}
          />
        </div>

        {/* Details */}
        <div>
          <span className="badge bg-secondary text-dark font-bold border-none mb-3">{toy.subCategory}</span>
          <h1 className="font-fun text-4xl text-dark mb-3">{toy.toyName}</h1>

          <div className="flex items-center gap-3 mb-4">
            <StarRating rating={toy.rating} />
            <span className="font-bold text-dark">{toy.rating}</span>
            <span className="text-gray-400 text-sm">(verified rating)</span>
          </div>

          <div className="text-4xl font-bold text-primary mb-4">${toy.price}</div>

          <p className="text-gray-600 leading-relaxed mb-6">{toy.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-50 rounded-xl p-4 flex items-center gap-3">
              <FiPackage className="text-primary text-xl" />
              <div>
                <p className="text-xs text-gray-500">Available</p>
                <p className="font-bold text-dark">{toy.availableQuantity} units</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
              <FiUser className="text-blue-500 text-xl" />
              <div>
                <p className="text-xs text-gray-500">Seller</p>
                <p className="font-bold text-dark text-sm">{toy.sellerName}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 mb-6 flex items-center gap-2 text-sm text-gray-500">
            <FiMail />
            <span>{toy.sellerEmail}</span>
          </div>

          {/* Try Now Form */}
          <div className="bg-white border-2 border-orange-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-fun text-2xl text-dark mb-4">🎮 Try Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Your Name</span></label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input input-bordered border-orange-200 focus:border-primary rounded-xl"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Your Email</span></label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input input-bordered border-orange-200 focus:border-primary rounded-xl"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" className="btn w-full bg-primary text-white border-none hover:bg-orange-600 rounded-xl font-bold text-lg">
                Try Now 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
