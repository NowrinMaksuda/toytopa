import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";
import { FiUser, FiMail, FiImage, FiEdit2 } from "react-icons/fi";

const MyProfile = () => {
  useTitle("My Profile");
  const { user, updateUserProfile } = useAuth();

  const [form, setForm] = useState({
    name: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUserProfile(form.name, form.photoURL);
      toast.success("Profile updated successfully! ✅");
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-fun text-4xl text-dark mb-2">My Profile</h1>
          <p className="text-gray-500">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-primary to-orange-400 h-32 relative">
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              <div className="avatar">
                <div className="w-24 rounded-full ring-4 ring-white shadow-lg">
                  <img
                    src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName || "User"}&background=FF6B35&color=fff&size=200`}
                    alt="Profile"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName || "User"}&background=FF6B35&color=fff&size=200`;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 pb-8 px-8 text-center">
            <h2 className="font-fun text-2xl text-dark">{user?.displayName || "User"}</h2>
            <p className="text-gray-500 mt-1">{user?.email}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-orange-50 rounded-xl p-4 flex items-center gap-3">
                <FiUser className="text-primary text-xl flex-shrink-0" />
                <div className="text-left min-w-0">
                  <p className="text-xs text-gray-500">Name</p>
                  <p className="font-semibold text-dark text-sm truncate">{user?.displayName || "Not set"}</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
                <FiMail className="text-blue-500 text-xl flex-shrink-0" />
                <div className="text-left min-w-0">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold text-dark text-sm truncate">{user?.email}</p>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
                <FiImage className="text-green-500 text-xl flex-shrink-0" />
                <div className="text-left min-w-0">
                  <p className="text-xs text-gray-500">Photo</p>
                  <p className="font-semibold text-dark text-sm truncate">{user?.photoURL ? "Set" : "Not set"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <FiEdit2 className="text-primary text-xl" />
            <h3 className="font-fun text-2xl text-dark">Edit Profile</h3>
          </div>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Display Name</span></label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input input-bordered border-orange-200 focus:border-primary rounded-xl"
                placeholder="Your display name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Photo URL</span></label>
              <input
                type="url"
                value={form.photoURL}
                onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
                className="input input-bordered border-orange-200 focus:border-primary rounded-xl"
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            {form.photoURL && (
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <img
                  src={form.photoURL}
                  alt="Preview"
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <span className="text-sm text-gray-500">Photo preview</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn w-full bg-primary text-white border-none hover:bg-orange-600 rounded-xl font-bold text-lg"
            >
              {loading ? <span className="loading loading-spinner loading-sm"></span> : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
