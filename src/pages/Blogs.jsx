import useTitle from "../hooks/useTitle";
import { useEffect } from "react";
import AOS from "aos";

const posts = [
  {
    id: 1,
    title: "Top 10 Educational Toys for 2024",
    excerpt: "Discover the best educational toys that make learning fun and engaging for kids of all ages.",
    date: "May 10, 2024",
    category: "Educational",
    emoji: "📚",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: 2,
    title: "How to Choose Safe Toys for Toddlers",
    excerpt: "A comprehensive guide to selecting age-appropriate and safe toys for your little ones.",
    date: "April 22, 2024",
    category: "Safety",
    emoji: "🛡️",
    color: "bg-green-50 border-green-200",
  },
  {
    id: 3,
    title: "The Benefits of Building Block Toys",
    excerpt: "Building blocks aren't just fun — they develop critical thinking, creativity, and motor skills.",
    date: "March 15, 2024",
    category: "Development",
    emoji: "🧱",
    color: "bg-orange-50 border-orange-200",
  },
  {
    id: 4,
    title: "Supporting Local Toy Sellers",
    excerpt: "Why buying from local toy sellers matters for your community and the environment.",
    date: "February 28, 2024",
    category: "Community",
    emoji: "🏪",
    color: "bg-purple-50 border-purple-200",
  },
];

const Blogs = () => {
  useTitle("Blogs");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="font-fun text-4xl text-dark mb-2">📝 ToyTopia Blog</h1>
        <p className="text-gray-500">Tips, guides, and stories for toy-loving families</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <div
            key={post.id}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className={`${post.color} border-2 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer`}
          >
            <div className="text-4xl mb-3">{post.emoji}</div>
            <span className="badge badge-outline text-xs mb-2">{post.category}</span>
            <h2 className="font-fun text-xl text-dark mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{post.date}</span>
              <button className="btn btn-xs bg-primary text-white border-none hover:bg-orange-600 rounded-full">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
