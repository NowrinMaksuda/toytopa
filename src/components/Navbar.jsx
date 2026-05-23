import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch {
      toast.error("Failed to logout");
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-toys"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          All Toys
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/my-profile"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-white shadow-md sticky top-0 z-50 px-4 lg:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 font-body">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <FiShoppingCart className="text-primary text-2xl" />
          <span className="font-fun text-2xl text-primary">ToyTopia</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1 font-body font-semibold text-dark">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
              <div className="avatar cursor-pointer">
                <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                  <img
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || "User"}&background=FF6B35&color=fff`}
                    alt={user.displayName || "User"}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-primary text-white border-none hover:bg-orange-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm bg-primary text-white border-none hover:bg-orange-600">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
