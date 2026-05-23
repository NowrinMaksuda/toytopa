import { useState } from "react";
import ToyCard from "../components/ToyCard";
import toysData from "../data/toys.json";
import useTitle from "../hooks/useTitle";
import { FiSearch } from "react-icons/fi";

const AllToys = () => {
  useTitle("All Toys");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(toysData.map((t) => t.subCategory))];

  const filtered = toysData.filter((toy) => {
    const matchSearch = toy.toyName.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === "All" || toy.subCategory === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="font-fun text-4xl text-dark mb-2">🧸 All Toys</h1>
        <p className="text-gray-500">Browse our full collection of amazing toys</p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search toys..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full pl-10 rounded-full border-orange-200 focus:border-primary"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-bordered rounded-full border-orange-200 focus:border-primary"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-500 text-lg">No toys found. Try a different search!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllToys;
