import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  useTitle("Register");
  const { register, googleLogin, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", photoURL: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePassword = (pass) => {
    if (!/[A-Z]/.test(pass)) return "Password must have at least one uppercase letter";
    if (!/[a-z]/.test(pass)) return "Password must have at least one lowercase letter";
    if (pass.length < 6) return "Password must be at least 6 characters";
    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const passError = validatePassword(form.password);
    if (passError) return toast.error(passError);

    setLoading(true);
    try {
      const result = await register(form.email, form.password);
      await updateUserProfile(form.name, form.photoURL);
      toast.success("Account created successfully! 🎉");
      navigate("/");
    } catch (err) {
      if (err.message.includes("email-already-in-use")) {
        toast.error("Email already in use");
      } else {
        toast.error("Registration failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Registered with Google! 🎉");
      navigate("/");
    } catch {
      toast.error("Google registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🎉</div>
          <h1 className="font-fun text-3xl text-dark">Create Account</h1>
          <p className="text-gray-500 mt-1">Join ToyTopia today!</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Full Name</span></label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input input-bordered border-purple-200 focus:border-primary rounded-xl"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Email</span></label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input input-bordered border-purple-200 focus:border-primary rounded-xl"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Photo URL</span></label>
            <input
              type="url"
              value={form.photoURL}
              onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
              className="input input-bordered border-purple-200 focus:border-primary rounded-xl"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Password</span></label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="input input-bordered border-purple-200 focus:border-primary rounded-xl w-full pr-12"
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
            <label className="label">
              <span className="label-text-alt text-gray-400">Min 6 chars, uppercase & lowercase required</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-primary text-white border-none hover:bg-orange-600 rounded-xl font-bold text-lg"
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Create Account"}
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
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
