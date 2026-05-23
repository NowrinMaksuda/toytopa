import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  useTitle("Login");
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Welcome back! 🎉");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message.includes("invalid-credential") ? "Invalid email or password" : "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google! 🎉");
      navigate(from, { replace: true });
    } catch {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🧸</div>
          <h1 className="font-fun text-3xl text-dark">Welcome Back!</h1>
          <p className="text-gray-500 mt-1">Login to explore amazing toys</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Email</span></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered border-orange-200 focus:border-primary rounded-xl"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
              <Link
                to="/forgot-password"
                state={{ email }}
                className="label-text-alt text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered border-orange-200 focus:border-primary rounded-xl w-full pr-12"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
              >
                {showPass ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-primary text-white border-none hover:bg-orange-600 rounded-xl font-bold text-lg"
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Login"}
          </button>
        </form>

        <div className="divider text-gray-400 text-sm">OR</div>

        <button
          onClick={handleGoogle}
          className="btn w-full bg-white border-2 border-gray-200 hover:border-primary rounded-xl font-semibold gap-2"
        >
          <FcGoogle className="text-xl" /> Continue with Google
        </button>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-bold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
