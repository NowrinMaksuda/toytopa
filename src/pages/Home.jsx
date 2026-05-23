import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import ToyCard from "../components/ToyCard";
import toysData from "../data/toys.json";
import useTitle from "../hooks/useTitle";
import { FiTruck, FiShield, FiStar, FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaChild, FaRecycle, FaAward } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Discover Amazing Toys!",
    subtitle: "Shop from local sellers and find the perfect toy for your child",
    bg: "from-orange-400 to-pink-500",
    emoji: "🧸",
  },
  {
    id: 2,
    title: "Build, Create & Imagine",
    subtitle: "Explore our wide range of educational and creative toys",
    bg: "from-purple-400 to-blue-500",
    emoji: "🎨",
  },
  {
    id: 3,
    title: "Support Local Sellers",
    subtitle: "Every purchase supports a local toy seller in your community",
    bg: "from-green-400 to-teal-500",
    emoji: "🏪",
  },
];

const categories = [
  { name: "Building Blocks", icon: "🧱", color: "bg-orange-100 text-orange-600" },
  { name: "Action Figures", icon: "🦸", color: "bg-blue-100 text-blue-600" },
  { name: "Educational", icon: "📚", color: "bg-green-100 text-green-600" },
  { name: "Outdoor", icon: "⚽", color: "bg-yellow-100 text-yellow-600" },
  { name: "Arts & Crafts", icon: "🎨", color: "bg-pink-100 text-pink-600" },
  { name: "Pretend Play", icon: "👑", color: "bg-purple-100 text-purple-600" },
];

const Home = () => {
  useTitle("Home");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const popularToys = toysData.slice(0, 6);

  return (
    <div>
      {/* Hero Slider */}
      <section>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={`bg-gradient-to-r ${slide.bg} min-h-[500px] flex items-center justify-center`}>
                <div className="text-center text-white px-4 py-16">
                  <div className="text-8xl mb-6 animate-bounce">{slide.emoji}</div>
                  <h1 className="font-fun text-4xl md:text-6xl mb-4 drop-shadow-lg">{slide.title}</h1>
                  <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto opacity-90">{slide.subtitle}</p>
                  <button className="btn bg-white text-primary border-none hover:bg-gray-100 font-bold px-8 rounded-full text-lg">
                    Shop Now 🛒
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="font-fun text-4xl text-dark mb-2">Shop by Category</h2>
          <p className="text-gray-500">Find the perfect toy in your favorite category</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className={`${cat.color} rounded-2xl p-4 text-center cursor-pointer hover:scale-105 transition-transform duration-200 shadow-sm`}
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <p className="font-bold text-sm">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Toys */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="font-fun text-4xl text-dark mb-2">🌟 Popular Toys</h2>
            <p className="text-gray-500">Loved by kids, trusted by parents</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularToys.map((toy, i) => (
              <div key={toy.toyId} data-aos="fade-up" data-aos-delay={i * 100}>
                <ToyCard toy={toy} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="font-fun text-4xl text-dark mb-2">Why Choose ToyTopia?</h2>
          <p className="text-gray-500">We make toy shopping fun, safe, and community-driven</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FiTruck className="text-3xl" />, title: "Fast Delivery", desc: "Get toys delivered to your door quickly", color: "text-primary bg-orange-100" },
            { icon: <FiShield className="text-3xl" />, title: "Safe & Secure", desc: "All toys are safety-tested and certified", color: "text-blue-500 bg-blue-100" },
            { icon: <FiStar className="text-3xl" />, title: "Top Rated", desc: "Curated selection of highest-rated toys", color: "text-yellow-500 bg-yellow-100" },
            { icon: <FiHeart className="text-3xl" />, title: "Local Love", desc: "Support local sellers in your community", color: "text-pink-500 bg-pink-100" },
          ].map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 150} className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {item.icon}
              </div>
              <h3 className="font-fun text-xl text-dark mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts / Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-orange-400 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="font-fun text-4xl mb-2">ToyTopia by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: <FaChild className="text-4xl mx-auto mb-2" />, num: "10,000+", label: "Happy Kids" },
              { icon: <FiShoppingCart className="text-4xl mx-auto mb-2" />, num: "500+", label: "Local Sellers" },
              { icon: <FaRecycle className="text-4xl mx-auto mb-2" />, num: "2,000+", label: "Toys Available" },
              { icon: <FaAward className="text-4xl mx-auto mb-2" />, num: "4.8★", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={i * 100} className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                {stat.icon}
                <div className="font-fun text-3xl">{stat.num}</div>
                <div className="text-sm opacity-90 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
