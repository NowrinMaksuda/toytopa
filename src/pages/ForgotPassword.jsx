import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";

const ForgotPassword = () => {
  useTitle("Forgot Password");
  const { resetPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Check your inbox.");
      // Redirect to Gmail
      window.open("https://mail.google.com", "_blank");
      navigate("/login");
    } catch (err) {
      toast.error("Failed to send reset email. Check the address.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🔑</div>
          <h1 className="font-fun text-3xl text-dark">Forgot Password?</h1>
          <p className="text-gray-500 mt-1">Enter your email to reset your password</p>
        </div>

        <form onSubmit={handleReset} className="space-y-4">
          <div className="form-control">
            <label className="label"><span className="label-text font-semibold">Email Address</span></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered border-blue-200 focus:border-primary rounded-xl"
              placeholder="your@email.com"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-primary text-white border-none hover:bg-orange-600 rounded-xl font-bold text-lg"
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Reset Password"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Remember your password?{" "}
          <button onClick={() => navigate("/login")} className="text-primary font-bold hover:underline">
            Back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
