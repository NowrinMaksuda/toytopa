import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FiShoppingCart className="text-primary text-2xl" />
              <span className="font-fun text-2xl text-primary">ToyTopia</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your vibrant local marketplace for kids' toys. Discover amazing toys from local sellers and bring joy to your little ones!
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-fun text-lg text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/all-toys" className="hover:text-primary transition-colors">All Toys</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">Blogs</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-primary transition-colors">Register</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-fun text-lg text-secondary mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">Building Blocks</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Action Figures</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Educational Toys</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Outdoor Toys</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Arts & Crafts</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-fun text-lg text-secondary mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-primary transition-colors">Refund Policy</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="divider divider-neutral my-6"></div>
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ToyTopia. All rights reserved. Made with ❤️ for kids everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
